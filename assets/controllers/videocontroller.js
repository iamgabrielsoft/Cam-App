 
class DisplayVideo{
    constructor(vidName, vidLimit) {
        this.vidName = vidName, 
        this.vidLimit = vidLimit
        
    }

    wait(limit) {
        return new Promise(resolve => setTimeout(resolve, limit));
        //return new Promise(resolve => setTimeout(() => {resolve}, this.vidLimit))
    }

    startRecord(video, length) {

        var canvas = document.createElement("canvas");
        var stream = canvas.captureStream(25);
        var vidChunks = [];

        var equal  = length /1000 

        var options = {
            mimeType: 'video/webm;  codecs=vp9', 
        }

        var mediaRecorder;

        mediaRecorder = new MediaRecorder(stream, options);
        console.log(mediaRecorder)

        mediaRecorder.ondataavailable = event => vidChunks.push(console.log(event.data))
        mediaRecorder.start(); 

        const stopped = new Promise((resolve, reject) => {
            mediaRecorder.onstop = resolve; 
            mediaRecorder.onerror = event => reject(console.log(event.name))
        })

        const recorded = this.wait(500).then(() => {
            console.log(mediaRecorder.state == "Recording" && mediaRecorder.stop()) 
        })

        return Promise.all([stopped, recorded]).then(() => console.log(vidChunks))
    }

    stop(stream) {
        stream.captureStream().getTracks().forEach(tracks => {
            console.log(tracks)
        });
    }
}