
const shutterinit = new ShutterApp()
const vidLength  = 2; 

class VideoController{
    constructor(vidName, vidLimit) {
        this.vidName = vidName, 
        this.vidLimit = vidLimit
    }

    async shutter() {
        shutterinit.shutter.onAnimate() ; 
        await shutterinit.startAnimation()
    }


    timer(TimeLimit) {
        const setTimer = setInterval(() => {
            console.log(TimeLimit--);
            if(TimeLimit == 0) {
                ConvertTheCanva(snapdb)
                //represent this on the Interface
                console.log('Hit Jackpot')
            }
        }, 1000);

        const  promise = new Promise((resolve,  reject) => {
            resolve(setTimer);
        })
    }

    stopTimer() {
        this.timer.prototype = () => {
            //stop the timer function
            clearInterval(this.timer)
        }
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

        
        var mediaRecorder = new MediaRecorder(video, options);
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
                    this.startRecord(stream, vidLength); 
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


// module.export = VideoController