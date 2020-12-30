const audio = { audio: true }
const audiocontext = new AudioContext()
const mic_record = document.querySelector('.js-record')
const mic_play = document.querySelector('.js-play')
const download_record = document.querySelector('.record-download')
const visualizerCanvas = document.querySelector('.visualizer')
const visualizerCanvasCtx = visualizerCanvas.getContext('2d')
const toolbar = document.querySelector('.toolbar')



// class MiController {
//   constructor(limit, recordName) {
//     this.limit = limit; 
//     this.recordName = recordName; 
//   }


//   init() {
//     navigator.mediaDevices.getUserMedia({audio: true})
//       .then((stream) => {
//         console.log(stream)
//       })
//       .catch((err) => {
//         location.href = './404.html'; 
//         throw new Error(err)
//       })
//   }


//   media(stream) {
//     const mediaRecorder = new MediaRecorder(stream);
//     let chunksData = []; 
//     mediaRecorder.start()

//     const clipName = prompt('Enter a name for your sound clip?','My unnamed clip');
//     const container = document.createElement('article')
//     const audio = document.createElement('audio')
//     const deletebtn = document.createElement('button')
//     const label = document.createElement('article')

//     container.classList.add('clip')
//     audio.setAttribute('controls', '');
//     deletebtn.textContent = 'Delete';
//     deletebtn.className = 'delete';

//     if(clipName === null) {
//       clipLabel.textContent = 'My unnamed clip';
//     } else {
//       clipLabel.textContent = clipName;
//     }


//     audio.controls = true; 
//     const blob = new Blob(chunksData, {'type' : 'audio/ogg; codecs=opus'})
//     console.log(blob)

//     const audioURL = window.URL.createObjectURL(blob)
//     console.log(audio.src = audioURL)

//     deletebtn.addEventListener('click', (event) => {
//       let evtTgt = event.target; 
//       evtTgt.parentNode.parentNode.removeChild(evtTgt.parentNode);
//     })

//     label.onclick = function() {
//       const existingName = clipLabel.textContent;
//       const newClipName = prompt('Enter a new name for your sound clip?');
//       if(newClipName === null) {
//         clipLabel.textContent = existingName;
//       } else {
//         clipLabel.textContent = newClipName;
//       }
//     }

//     mediaRecorder.ondataavailable = function(e) {
//       chunks.push(e.data);
//     }
//   }
  

//   visualize(stream) {
//     const source = audiocontext.createMediaStreamSource(stream); 
//     const analyzer = audiocontext.createAnalyser(); 
//     audiocontext.fftSize = 2048; 
//     const bufferLength = analyzer.frequencyBinCount
//     const dataArray = new Uint8Array(bufferLength)

//     source.connect(analyzer); 
  
//     const width = visualizerCanvas.width; 
//     const height = visualizerCanvas.height; 

//     requestAnimationFrame(this.draw)
//     analyzer.getByteTimeDomainData(dataArray)

//     visualizerCanvasCtx.fillStyle = 'rgb(200, 200, 200)';
//     visualizerCanvasCtx.fillRect(0, 0, WIDTH, HEIGHT);

//     visualizerCanvasCtx.lineWidth = 2;
//     visualizerCanvasCtx.strokeStyle = 'rgb(0, 0, 0)';

//     visualizerCanvasCtx.beginPath(); 
//     sliceWidth = width *  1.0 / bufferLength; 
//     let x = 0; 

//     for(let i = 0; i<bufferLength; i++) {
//       v = dataArray[i] / 128.0; 
//       y = v * height/2; 

//       if(i === 0) visualizerCanvasCtx.moveTo(x, y); 
//       else visualizerCanvasCtx.lineTo(x,y); 


//       x += sliceWidth; 
//     }

//     visualizerCanvasCtx.lineTo(visualizerCanvas.width, visualizerCanvas.height)
//     visualizerCanvasCtx.stroke(); 
//   }

//   resize() {
//     window.onratechange(() => {
//       visualizerCanvas.width = toolbar.offsetWidth
//     })
//   }
// }


class Mic {
  constructor(limit, Name) {
      this.limit = limit; 
      this.Name = Name; 
  }

  init() {
      navigator.mediaDevices.getUserMedia({audio: true})
      .then((stream) => {
          console.log('GetMedia is supported ')
          console.log(stream)
      })

      .catch((err) => {
        console.log('Error has occured!', err)
      })
  }

  visualize(stream) {
    const source = audiocontext.createMediaStreamSource(stream);
    console.log(source)
    const analyser = audiocontext.createAnalyser();
    analyser.fftSize = 2048;
    const bufferLength = analyser.frequencyBinCount;
    const dataArray = new Uint8Array(bufferLength);
    console.log(dataArray)
    source.connect(analyser);

    const draw = () => {
        const WIDTH = visualizerCanvas.width
        const HEIGHT = visualizerCanvas.height;

        requestAnimationFrame(draw);

        analyser.getByteTimeDomainData(dataArray);

        visualizerCanvasCtx.fillStyle = 'rgb(200, 200, 200)';
        visualizerCanvasCtx.fillRect(0, 0, WIDTH, HEIGHT);
        visualizerCanvasCtx.lineWidth = 2;
        visualizerCanvasCtx.strokeStyle = 'rgb(0, 0, 0)';
        visualizerCanvasCtx.beginPath();
        let sliceWidth = WIDTH * 1.0 / bufferLength;
        let x = 0;

        for(let i = 0; i < bufferLength; i++) {

          let v = dataArray[i] / 128.0;
          let y = v * HEIGHT/2;

          if(i === 0) {
            visualizerCanvasCtx.moveTo(x, y);
          } else {
            visualizerCanvasCtx.lineTo(x, y);
          }

          x += sliceWidth;
        }

        visualizerCanvasCtx.lineTo(visualizerCanvas.width, visualizerCanvas.height/2);
        visualizerCanvasCtx.stroke();

    }
  }

  media() {
    const mediastream = new MediaRecorder()
    mediastream.start()
  }

  stop() {
    let chunks = []; 
    //mediastream.stop()
    const mediastream = new MediaRecorder()
    mediastream.onstop(() => {
      console.log("data available after MediaRecorder.stop() called.");
      const clipName = prompt('Enter a name for your sound clip?','My unnamed clip');

      const clipContainer = document.createElement('article');
      const clipLabel = document.createElement('p');
      const audio = document.createElement('audio');
      const deleteButton = document.createElement('button');

      clipContainer.classList.add('clip');
      audio.setAttribute('controls', '');
      deleteButton.textContent = 'Delete';
      deleteButton.className = 'delete';

      if(clipName === null) {
        clipLabel.textContent = 'My unnamed clip';
      } else {
        clipLabel.textContent = clipName;
      }

      clipContainer.appendChild(audio);
      clipContainer.appendChild(clipLabel);
      clipContainer.appendChild(deleteButton);
      soundClips.appendChild(clipContainer);

      const blob = new Blob(chunks, { 'type' : 'audio/ogg; codecs=opus' });
      const audioURL = window.URL.createObjectURL(blob);
      audio.src = audioURL;
      console.log("recorder stopped");

      deleteButton.onclick = function(e) {
        let evtTgt = e.target;
        evtTgt.parentNode.parentNode.removeChild(evtTgt.parentNode);
      }

      clipLabel.onclick = function() {
        const existingName = clipLabel.textContent;
        const newClipName = prompt('Enter a new name for your sound clip?');
        if(newClipName === null) {
          clipLabel.textContent = existingName;
        } else {
          clipLabel.textContent = newClipName;
        }
      }

      mediaRecorder.ondataavailable = function(e) {
        chunks.push(e.data);
      }

    })
  }

  resize() {
    window.onresize = function() {
      visualizerCanvas.width = toolbar.offsetWidth;
    }    
  }
}

const x = new Mic()
x.init()
x.visualize()



$('.js-record').click(() => {
  console.log('Recording is starting')
})


$('.js-stop').click(() => {
  console.log('stop recording')
})

$('.record-download').click(() => {
  console.log('Hello  Downloading')
})







// const record = document.querySelector('.js-record');
// const stop = document.querySelector('.js-stop');
// const soundClips = document.querySelector('.waveform__canvas');
// const canvas = document.querySelector('.visualizer');
// const mainSection = document.querySelector('.toolbar');

// // disable stop button while not recording

// stop.disabled = true;

// // visualiser setup - create web audio api context and canvas

// let audioCtx;
// const canvasCtx = canvas.getContext("2d");

// //main block for doing the audio recording

// if (navigator.mediaDevices.getUserMedia) {
//   console.log('getUserMedia supported.');

//   const constraints = { audio: true };
//   let chunks = [];

//   let onSuccess = function(stream) {
//     const mediaRecorder = new MediaRecorder(stream);

//     visualize(stream);

//     record.onclick = function() {
//       mediaRecorder.start();
//       console.log(mediaRecorder.state);
//       console.log("recorder started");
//       record.style.background = "red";

//       stop.disabled = false;
//       record.disabled = true;
//     }
//     //07031059703

//     stop.onclick = function() {
//       mediaRecorder.stop();
//       console.log(mediaRecorder.state);
//       console.log("recorder stopped");
//       record.style.background = "";
//       record.style.color = "";
//       // mediaRecorder.requestData();

//       stop.disabled = true;
//       record.disabled = false;
//     }

//     mediaRecorder.onstop = function(e) {
//       console.log("data available after MediaRecorder.stop() called.");
//       const clipName = prompt('Enter a name for your sound clip?','My unnamed clip');

//       const clipContainer = document.createElement('article');
//       const clipLabel = document.createElement('p');
//       const audio = document.createElement('audio');
//       const deleteButton = document.createElement('button');

//       clipContainer.classList.add('clip');
//       audio.setAttribute('controls', '');
//       deleteButton.textContent = 'Delete';
//       deleteButton.className = 'delete';

//       if(clipName === null) {
//         clipLabel.textContent = 'My unnamed clip';
//       } else {
//         clipLabel.textContent = clipName;
//       }

//       clipContainer.appendChild(audio);
//       clipContainer.appendChild(clipLabel);
//       clipContainer.appendChild(deleteButton);
//       soundClips.appendChild(clipContainer);

//       audio.controls = true;
//       const blob = new Blob(chunks, { 'type' : 'audio/ogg; codecs=opus' });
//       chunks = [];
//       const audioURL = window.URL.createObjectURL(blob);
//       audio.src = audioURL;
//       console.log("recorder stopped");

//       deleteButton.onclick = function(e) {
//         let evtTgt = e.target;
//         evtTgt.parentNode.parentNode.removeChild(evtTgt.parentNode);
//       }


//       clipLabel.onclick = function() {
//         const existingName = clipLabel.textContent;
//         const newClipName = prompt('Enter a new name for your sound clip?');
//         if(newClipName === null) {
//           clipLabel.textContent = existingName;
//         } else {
//           clipLabel.textContent = newClipName;
//         }
//       }
//     }

//     mediaRecorder.ondataavailable = function(e) {
//       chunks.push(e.data);
//     }
//   }

//   let onError = function(err) {
//     console.log('The following error occured: ' + err);
//   }

//   navigator.mediaDevices.getUserMedia(constraints).then(onSuccess, onError);

// } else {
//    console.log('getUserMedia not supported on your browser!');
// }

// function visualize(stream) {
//   if(!audioCtx) {
//     audioCtx = new AudioContext();
//   }

//   const source = audioCtx.createMediaStreamSource(stream);

//   const analyser = audioCtx.createAnalyser();
//   analyser.fftSize = 2048;
//   const bufferLength = analyser.frequencyBinCount;
//   const dataArray = new Uint8Array(bufferLength);

//   source.connect(analyser);
//   //analyser.connect(audioCtx.destination);

//   draw()

//   function draw() {
//     const WIDTH = canvas.width
//     const HEIGHT = canvas.height;

//     requestAnimationFrame(draw);

//     analyser.getByteTimeDomainData(dataArray);

//     canvasCtx.fillStyle = 'rgb(200, 200, 200)';
//     canvasCtx.fillRect(0, 0, WIDTH, HEIGHT);

//     canvasCtx.lineWidth = 2;
//     canvasCtx.strokeStyle = 'rgb(0, 0, 0)';

//     canvasCtx.beginPath();

//     let sliceWidth = WIDTH * 1.0 / bufferLength;
//     let x = 0;


//     for(let i = 0; i < bufferLength; i++) {

//       let v = dataArray[i] / 128.0;
//       let y = v * HEIGHT/2;

//       if(i === 0) {
//         canvasCtx.moveTo(x, y);
//       } else {
//         canvasCtx.lineTo(x, y);
//       }

//       x += sliceWidth;
//     }

//     canvasCtx.lineTo(canvas.width, canvas.height/2);
//     canvasCtx.stroke();

//   }
// }

// window.onresize = function() {
//   canvas.width = mainSection.offsetWidth;
// }




















// const micontroller = new MiController()
// micontroller.init()