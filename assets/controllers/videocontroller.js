
const vidLength  = 2; 

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
        var vidChunks = []; 
        let x = length = 500/ vidLength

        var options = {
            mimeType: 'video/webm;  codecs=vp9', 
            audioBitsPerSecond: 50000, 
            state: 'active', 
            videoBitsPerSecond: 250000
        }

        var mediaRecorder;

        mediaRecorder = new MediaRecorder(video, options);
        console.log(mediaRecorder)
        const b = mediaRecorder.ondataavailable = event => vidChunks.push(event)

        console.log(b)
        console.log(mediaRecorder.stream) 
        

        // const stopped = new Promise((resolve, reject) => {
        //     mediaRecorder.onstop = resolve; 
        //     mediaRecorder.onerror = event => reject(console.log(event.name))
        // })

        // const recorded = this.wait(1000).then(() => {
        //     mediaRecorder.state == "Recording" && mediaRecorder.stop()
        // })

        // console.log(stopped,  recorded)
    }

    stop(stream) {
        console.log(stream)
    }

    runing() {
        $('.xy').click((event) => {
            navigator.mediaDevices.getUserMedia(constraint)
                .then((stream) => {
                    video.srcObject = stream; 
                    let x = video.captureStream = video.captureStream || video.mozCaptureStream
                    return new Promise((resolve, reject) => {
                        console.log(resolve(video.play()))
                    })
                })
                .then(() => {
                    var x = this.startRecord(stream, vidLength); 
                })
                .then((chunks) => {
                    const blob = new Blob([chunks], { type: 'video/webm'})
                    console.log(blob)
                    video.src = URL.createObjectURL(blob)
                    //download video
                })

                .catch((err) => {
                    console.log(err.name,  err)
                })
        })

        $('.xz').click(() => {
            console.log(this.stop(video.srcObject))
        })
    }


}

