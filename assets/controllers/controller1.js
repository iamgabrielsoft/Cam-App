
var counter = 0; 
var vddb = []; 
var snapdb = []; 
var micArr = []; 
const video = document.querySelector('.video'); 
const ulPic = document.querySelector('.savedpic');
const ulVid = document.querySelector('.savedvideo')
const numberofpic = document.querySelector('.numberofpic');
const totalsnap = document.querySelector('.totalSnap')
const totalvideo = document.querySelector('.totalVideo')
const totalMic = document.querySelector('.totalMic')
const displayFile = document.querySelector('.display'); 
const startrecordElement = document.querySelector('.xy')
const playButton = document.querySelector('.xz')
const sec = document.getElementById("sec"); 
const hr = document.createElement('hr')
const min = document.createElement('min')
const fiveM = document.querySelector('.five-minutes'); 
const tenM = document.querySelector('.ten-minutes'); 
const fifteenM = document.querySelector('.fifteen-minutes'); 
var timer = document.querySelector('.countdown')
const record = document.querySelector('.js-record');
const stopmic = document.querySelector('.js-stop');
const soundClips = document.querySelector('.savedrecord');
const canvasV = document.querySelector('.visualizer');
const recorderSection = document.querySelector('.recorder');
stopmic.disabled = true;

const constraint = {
  video: true, 
  audio: true, 
} 

var canvasCtx = canvasV.getContext("2d");
var audioCtx = new AudioContext(); 
const videoController = new VideoController('hh', 8000)


function RecordFunc () {
  navigator.mediaDevices.getUserMedia(constraint)
  .then((stream) => {
    videoController.successCallback(stream)
  
  })
  .catch((err) => {
    videoController.errorCallback(err)
    location.href ='./404.html'
  })
}




class Controller1 {
  constructor(){}

  videoSchema(video, vidName) {
      const vddbSchema = {
          id:  Date.now(), 
          video,
          vidName
      }
  
      vddb.push(vddbSchema); 
  }

  Snapschema (video, NameofPic) {
      const appSchema = {
          id: Date.now(),
          video,
          NameofPic
      }
  
      snapdb.push(appSchema);
  }

  micSchema(voice) {
      const micFunc = {
          id: Date.now(), 
          voice 
      }

      micArr.push(micFunc)
  }

  async startVideo(vidLimit) {
     this.videoSchema(video, 'data.webm') //pushing to array'
     startRecording()
     videoController.toggleRecording()
     getTotal.recordCounter(); 
     this.staticVideo(vddb) 
     console.log(vddb)
     if(vidLimit <= 500) console.log('Video too Long')
  }


  staticVideo(arr = []) {
    const liVid = document.createElement('liVid');  
    var downloadbtn = document.createElement('button')
    var storedvid = document.createElement('video')
    
    ulVid.appendChild(liVid)
    ulVid.appendChild(storedvid);


    downloadbtn.setAttribute('class', 'vidbtn')
    downloadbtn.innerHTML = `<a class="download" title="Download" data-toggle="tooltip"><i class="fas fa-download" style="color: green"></i></a>`
    storedvid.setAttribute('class', 'storedvid')


    arr.forEach((vid) => {
        liVid.innerHTML = `
            <a id ="${console.log('Video with the Id of ', vid.id)}" class="deletevid" title="Delete" data-re="tooltip" ><i class="fas fa-trash deleteachpic">&#xE872;</i></a>
        `
        liVid.appendChild(downloadbtn);
        
    })


    var playFunc = RecordFunc.prototype.play = () => {
      var type = (recordedState[0] || {}).type;
        var superBuffer = new Blob(recordedState, {type});
        storedvid.src = window.URL.createObjectURL(superBuffer);
        video.src = window.URL.createObjectURL(superBuffer)
    }



    $('.storedvid').click(() => {
      playFunc() 
    })


    $('.download').click(() => {
      videoController.download()
    })

  } 

}

RecordFunc()





var canvasCtx = canvasV.getContext("2d");
if (navigator.mediaDevices.getUserMedia) {
  var chunks = [];
  const audioMic = { audio: true };
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


    stopmic.onclick = () => {
      mediaRecorder.stop();
      new Controller1().micSchema(mediaRecorder)
      getTotal.miCounter()
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
  navigator.mediaDevices.getUserMedia({audio: true}).then(onSuccess, onError);

} else console.log('getUserMedia not supported on your browser!');


const visualize = (stream) => {
  
  const source = audioCtx.createMediaStreamSource(stream);
  const analyser = audioCtx.createAnalyser();
  analyser.fftSize = 2048;
  const bufferLength = analyser.frequencyBinCount;
  const dataArray = new Uint8Array(bufferLength);
  source.connect(analyser);
  requestAnimationFrame(draw)

  function draw() {
    const WIDTH = canvasV.width
    const HEIGHT = canvasV.height;
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

    canvasCtx.lineTo(canvasV.width, canvasV.height/2);
    canvasCtx.stroke();
  }
}
