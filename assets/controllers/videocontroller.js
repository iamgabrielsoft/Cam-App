var data = [];

class DisplayVideo{
    constructor(vidName, vidLimit) {
        this.vidName = vidName, 
        this.vidLimit = vidLimit
    }

    get() {
        this.vidName; 
    }

    set()  {
        this.vidLimit
    }

    wait() {
        return new Promise(resolve => setTimeout(() => {resolve}, this.vidLimit))
    }

    startRecord(stream) {

        var options = {
            audioBitsPerSecond : 128000,
            videoBitsPerSecond : 2500000,
            mimeType : 'video/mp4', 
            // x: () => {
            //     return console.log(stream.captureStream(), this.vidLimit)
            // }
        }

        const recorder = new MediaStreamRecorder(constraint, options)
        recorder.ondataavailable = event => data.push(event.data)

        let stopped = new Promise((resolve, reject) => {
            recorder.onstop = resolve; 
            recorder.onerror = event => reject(event.name)
        })

        let recorded = this.wait().then(() => {
            recorder.state == "Recording" && recorder.stop()
        })

        Promise.all([stopped, recorded]).then(() => data)
    }

    stop(stream) {
        stream.getTracks().forEach(track => { track.stop() });
    }

    runing() {
        navigator.mediaDevices.getUserMedia('click', constraint).then(stream => {
            video.srcObject = stream; 
            video.captureStream = video.captureStream || video.mozCaptureStream;
            return new Promise(resolve => video.onplaying() = resolve); 

        }).then(() => {
            this.startRecord(video)
        }).then(chunks => {
            let recordedBlob = new Blob(chunks, { type: 'video/webm'})
            // recording.src = URL.createObjectURL(recordedBlob);
            // downloadButton.href = recording.src;
            // downloadButton.download = "RecordedVideo.webm";
        }).catch(e => {
            this.stop(video.srcObject); 

        }, false)
    }
}