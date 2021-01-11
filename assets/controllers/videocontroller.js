
const shutterinit = new ShutterApp()
var mediaSource = new MediaSource();


var options = {
    mimeType: 'video/webm;codecs=vp9', 
    bitsPerSecond: 100000
};


const recordedBlobs = [];

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
        if(event.data && event.data.size > 0 )  return recordedBlobs.push(event.data);
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
        if (startrecordElement.innerHTML === '<i class="fas fa-video-slash"></i>') this.startRecording(); 

        else {

          startrecordElement.innerHTML = '<i class="fas fa-video-slash"></i>';
          this.stopRecording()
          playButton.disabled = false;
          //downloadButton.disabled = false;
        }
    }

    startRecording() {
        try {
          var mediaRecorder = new MediaRecorder(window.stream, options);
        } catch (e0) {
          console.log('Unable to create MediaRecorder with options Object: ', options, e0);
          try {
            options = {
              mimeType: 'video/webm;codecs=vp8', 
              bitsPerSecond: 100000
            };
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

        
        console.log('Created MediaRecorder', mediaRecorder, 'with options', options);
        startrecordElement.innerHTML = '<i class="fas fa-video "></i>'
        playButton.disabled = true;
        this.handleStop(options)
        this.handleDataActivitie(options); 
        mediaRecorder.start(10); // collect 10ms of data
        console.log('MediaRecorder started', mediaRecorder);
    }



    play() {
        var type = (recordedBlobs[0] || {}).type
        var superBuffer = new Blob(recordedBlobs, {type});
        //recordedVideo.src = window.URL.createObjectURL(superBuffer);
        video.src = window.URL.createObjectURL(superBuffer)
    }


    stopRecording() {
        //mediaRecorder.stop();
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