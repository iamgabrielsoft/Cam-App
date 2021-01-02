
const record = document.querySelector('.js-record');
const stop = document.querySelector('.js-stop');
const soundClips = document.querySelector('.sidebar');
const canvas = document.querySelector('.visualizer');
const mainSection = document.querySelector('.recorder');
stop.disabled = true;

var audioCtx;
var canvasCtx = canvas.getContext("2d");

if (navigator.mediaDevices.getUserMedia) {

  const constraints = { audio: true };
  var chunks = [];
  
  const onSuccess = (stream) => {
    const mediaRecorder = new MediaRecorder(stream);
    visualize(stream);

    record.onclick = () => {
      mediaRecorder.start();
      mediaRecorder.state
      record.style.background = "red";

      stop.disabled = false;
      record.disabled = true;
    }


    stop.onclick = () => {
      mediaRecorder.stop();
      //mediaRecorder.state
      //push into array
      new Controller1().micSchema(mediaRecorder)
      record.style.background = "";
      record.style.color = "";
      stop.disabled = true;
      record.disabled = false;
    }


    mediaRecorder.onstop = (e) => {
      const clipName = prompt('Name Your Clip');
      const ul = document.createElement('article');
      const Label = document.createElement('p');
      const audio = document.createElement('audio');
      const deleteButton = document.createElement('button');


      ul.classList.add('clip');
      Label.setAttribute('class', 'labelTag')
      audio.setAttribute('controls', '');
      deleteButton.setAttribute('class', 'delete-Audio')
      deleteButton.innerHTML =  `<a id ="delete" class="delete-Audio" title="Delete" data-toggle="tooltip" ><i class="fas fa-trash deleteachpic" style="color: red"></i></a>`;

      if(clipName === null) Label.textContent = 'My unnamed clip';
      else Label.textContent = clipName;
    
      ul.appendChild(audio);
      ul.appendChild(Label);
      ul.appendChild(deleteButton);
      soundClips.appendChild(ul);
      audio.controls = true;
      const blob = new Blob(chunks, { 'type' : 'audio/ogg; codecs=opus' });
      const audioURL = window.URL.createObjectURL(blob);
      audio.src = audioURL;


      deleteButton.onclick = (e) => {
        let Tt = e.target;
        Tt.parentNode.parentNode.removeChild(Tt.parentNode);
      }


      Label.addEventListener = () => {
        existingName = Label.textContent;
        newClipName = prompt('Name Your Clip?');
        if(newClipName === null) Label.textContent = existingName;
        else Label.textContent = newClipName;
      }
    }

    mediaRecorder.ondataavailable = (e) => { chunks.push(e.data) }
  }

  const onError = (err) => {console.log('Error Has Occured ' + err) }
  navigator.mediaDevices.getUserMedia(constraints).then(onSuccess, onError);

} else console.log('getUserMedia not supported on your browser!');




const visualize = (stream) => {
  if(!audioCtx) audioCtx = new AudioContext();
  
  const source = audioCtx.createMediaStreamSource(stream);
  const analyser = audioCtx.createAnalyser();
  analyser.fftSize = 2048;
  const bufferLength = analyser.frequencyBinCount;
  const dataArray = new Uint8Array(bufferLength);
  source.connect(analyser);
  requestAnimationFrame(draw)

  function draw() {
    const WIDTH = canvas.width
    const HEIGHT = canvas.height;
    requestAnimationFrame(draw);

    analyser.getByteTimeDomainData(dataArray);
    canvasCtx.fillStyle = 'rgb(200, 200, 200)';
    canvasCtx.fillRect(0, 0, WIDTH, HEIGHT);
    canvasCtx.lineWidth = 2;
    canvasCtx.strokeStyle = 'rgb(0, 0, 0)';
    canvasCtx.beginPath();
    let sliceWidth = WIDTH * 1.0 / bufferLength;
    let x = 0;


    for(let i = 0; i < bufferLength; i++) {
      let v = dataArray[i] / 130.0;
      let y = v * HEIGHT/2;
      if(i === 0) canvasCtx.moveTo(x, y);
      else canvasCtx.lineTo(x, y)
      x += sliceWidth;
    }

    canvasCtx.lineTo(canvas.width, canvas.height/2);
    canvasCtx.stroke();
  }
}

window.onresize = () => {
  canvas.width = mainSection.offsetWidth;
}


// module.export = visualize