
const shutterinit = new ShutterApp()
var mediaSource = new MediaSource();
mediaSource.addEventListener('sourceopen', handleSourceOpen, false);

var options = {
    mimeType: 'video/webm;codecs=vp9', 
    bitsPerSecond: 100000
};


var recordedState = []

class VideoController{
    constructor(vidName, vidLimit) {
        this.vidName = vidName, 
        this.vidLimit = vidLimit,
        this.arr = []; 
    }

    async shutter() {
        shutterinit.shutter.onAnimate() ; 
        await shutterinit.startAnimation()
    }


    timer(TimeLimit) {
        setInterval(() => {
            timer.innerHTML = TimeLimit--;
            console.log(TimeLimit); 
            if(TimeLimit == 0){
                ConvertTheCanva(snapdb); 

            }
        }, 1000);
    }

    successCallback(stream) {  
        console.log('getUserMedia() got stream: ', stream);
        window.stream = stream;
        video.srcObject = stream;
      }

    errorCallback(error) {
        console.log('navigator.getUserMedia error: ', error);
    }


    handleDataActivitie(event) {
        if(event.data && event.data.size > 0 ) 
        var wholedata = recordedBlobs.push(event.data)
        return wholedata; 
    }

    handleSourceOpen(event) {
        console.log('MediaSource opened');
        var sourceBuffer = mediaSource.addSourceBuffer('video/webm; codecs="vp8"');
        console.log('Source buffer: ', sourceBuffer);
      }


    handleStop(event) {
        console.log('Recorder stopped: ', event);
        console.log('Recorded Blobs: ', recordedBlobs);
    }
      

    toggleRecording() {
        const promise = new Promise((resolve, reject) => {
            if(startrecordElement.innerHTML === '<i class="fas fa-video-slash "></i>')  resolve(this.startRecording())

            else {
                startrecordElement.innerHTML === '<i class="fas fa-video "></i>';
                reject(this.stopRecording()); 
                
            }
        })
    }


    startRecording() {
        try {
          var mediaRecorder = new MediaRecorder(window.stream, options);
        } catch (e0) {
          console.log('Unable to create MediaRecorder with options Object: ', options, e0);
          try {
            options
            var mediaRecorder = new MediaRecorder(window.stream, options);
          } catch (e1) {
            console.log('Unable to create MediaRecorder with options Object: ', options, e1);
            try {
                
              options = 'video/mp4';
              var mediaRecorder = new MediaRecorder(window.stream, options);
            } catch (e2) {
              alert('MediaRecorder is not supported by this browser.');
              console.error('Exception while creating MediaRecorder:', e2);
              return;
            }
          }
        }

        startrecordElement.innerHTML === '<i class="fas fa-video "></i>'
        mediaRecorder.start(10) //collect data
        this.handleDataActivitie(options); 
        console.log('Created MediaRecorder', mediaRecorder, 'with options', options);
        if(startrecordElement.innerHTML === '<i class="fas fa-video-slash "></i>' ) {
            mediaRecorder.stop(10)
        }

       

    }



    play() {
        var type = (recordedBlobs[0] || {}).type
        var superBuffer = new Blob(recordedBlobs, {type});
        video.src = window.URL.createObjectURL(superBuffer)
    }


    stopRecording() {
        //mediaRecorder.stop();
        this.handleStop(options)
        console.log('lash')
        video.controls = true;
    }


    download() {
        var blob = new Blob(recordedBlobs, {type: 'video/webm'});
        var url = window.URL.createObjectURL(blob);
        var a = document.createElement('a');
        a.style.display = 'none';
        a.href = url;
        a.download = 'test.webm';
        document.body.appendChild(a);
        a.click();
        setTimeout(() => {
            document.body.removeChild(a); 
            window.URL.revokeObjectURL(url)
        })
    }
    
}



var mediaRecorder;


function successCallback(stream) {
  console.log('Acessing Streams : ', stream);
  window.stream = stream;
  video.srcObject = stream;
}

function errorCallback(error) {
  console.log('navigator.getUserMedia error: ', error);
}


function handleSourceOpen(event) {
  console.log('MediaSource opened');
  var sourceBuffer = mediaSource.addSourceBuffer('video/webm; codecs="vp8"');
  console.log('Source buffer: ', sourceBuffer);
}



function handleDataAvailable(event) {
  if (event.data && event.data.size > 0) {
    recordedState.push(event.data);
  }
}

function handleStop(event) {
  console.log('Recorder stopped: ', event);
  console.log('Recorded Blobs: ', recordedState);
}


function toggleRecording() {
  if (startrecordElement.innerHTML === '<i class="fas fa-video "></i>') startRecording();
  else {
    stopRecording();
    startrecordElement.innerHTML =  '<i class="fas fa-video "></i>';
  }
}




// The nested try blocks will be simplified when Chrome 47 moves to Stable
function startRecording() {
  var options = {mimeType: 'video/webm;codecs=vp9', bitsPerSecond: 100000};
  recordedBlobs = [];
  try {
    mediaRecorder = new MediaRecorder(window.stream, options);
  } catch (e0) {
    console.log('Unable to create MediaRecorder with options Object: ', options, e0);
    try {
      options = {mimeType: 'video/webm;codecs=vp8', bitsPerSecond: 100000};
      mediaRecorder = new MediaRecorder(window.stream, options);
    } catch (e1) {
      console.log('Unable to create MediaRecorder with options Object: ', options, e1);
      try {
        options = 'video/mp4';
        mediaRecorder = new MediaRecorder(window.stream, options);
      } catch (e2) {
        alert('MediaRecorder is not supported by this browser.');
        console.error('Exception while creating MediaRecorder:', e2);
        return;
      }
    }
  }


  

  console.log('Created MediaRecorder', mediaRecorder, 'with options', options);
  startrecordElement.innerHTML = '<i class="fas fa-video-slash ">'; 
  mediaRecorder.onstop = handleStop
  mediaRecorder.ondataavailable = handleDataAvailable
  mediaRecorder.start(10); // collect 10ms of data
  console.log('MediaRecorder started', mediaRecorder);
}



function stopRecording() {
  //mediaRecorder.stop();
  video.controls = true;
}

function play() {
  var type = (recordedBlobs[0] || {}).type;
  var superBuffer = new Blob(recordedBlobs, {type});
  //recordedVideo.src = window.URL.createObjectURL(superBuffer);
  video.src = window.URL.createObjectURL(superBuffer)
}

function download() {
  var blob = new Blob(recordedBlobs, {type: 'video/webm'});
  var url = window.URL.createObjectURL(blob);
  var a = document.createElement('a');
  a.style.display = 'none';
  a.href = url;
  a.download = 'test.webm';
  document.body.appendChild(a);
  a.click();
  setTimeout(function() {
    document.body.removeChild(a);
    window.URL.revokeObjectURL(url);
  }, 100);
}