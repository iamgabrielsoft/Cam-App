

var vddb = []; 
var snapdb = []; 
const video = document.querySelector('.video'); 
const ulPic = document.querySelector('.savedpic');
const ulVid = document.querySelector('.savedvideo')
const numberofpic = document.querySelector('.numberofpic');
const totalsnap = document.querySelector('.totalSnap')
const totalvideo = document.querySelector('.totalVideo')
const displayFile = document.querySelector('.display'); 
const sec = document.getElementById("sec"); 
const record = document.querySelector('.xy')


const constraint = {
    video: true, 
    audio: true, 
} 


function RecordFunc() {
     navigator.mediaDevices.getUserMedia(constraint)
        .then((stream) => {
            video.srcObject = stream;

        }).catch((err) => {
            console.log(`Error Occured ${err}`)
            //location.reload(); 
            location.href = './404.html'; 
        }) 

    
}

RecordFunc(); 

const startVideo =  async (videoLimit) => {
    var counter = 0; 
    sec.innerHTML = counter++; 
    console.log('STARTNG VIDEO')
    if(counter == videoLimit)  return console.log('Video is too long'); 
    //var countInterval = setInterval(startRecording, 1000)
    let r = new DisplayVideo('gabriel', 20).startRecord(video)
}



const endVideo = async () => {
    videoSchema(video, 'data.mp3') //save to database
    setTimeout(() => {
        record.classList.remove('spin');   //spinning CSS and to signify the video has ended
        record.disabled = false;

    }, 400);

    let r = new DisplayVideo('gabriel', 20)
    await r.runing()

    console.log('ENDING VIDEO')
    getTotal.recordCounter()
    //clearInterval(countInterval);  //stop counter 
    duplicateVideo.staticVideo();  
}


const schema  = (video, NameofPic) => {
    const appSchema = {
        id: Date.now(),
        video,
        NameofPic
    }

    snapdb.push(appSchema);
}


const videoSchema = (video, vidName) => {
    const vddbSchema = {
        id:  Date.now(), 
        video,
        vidName
    }

    console.log(vddb.push(vddbSchema)); 
}



const videoFunc = RecordFunc.prototype.videoFunc = () => {
    $('.xx').click(() => { //snap Pictures
        ConvertTheCanva(snapdb); 
        getTotal.snapCounter()
    })

    $('.xy').click(() => { //start recording 
        startVideo(500)
    })

    $('.xz').click(() => { //ending recording
        endVideo()
    })

}

videoFunc(); 




const duplicate = () => {
   ConvertTheCanva(snapdb);
}



const duplicateVideo = {
    staticVideo: async () => {
        
        const liVid = document.createElement('liVid'); 
        const videoForm = document.createElement('canvas'); 
        var source = document.createElement('source')
        ulVid.appendChild(liVid.innerHTML = videoForm); 
        ctx = videoForm.getContext('2d'); 
        ctx.drawImage(video, 0, 0, 100, 110); 

        source.setAttribute('class', 'show'); 
        source.setAttribute('type', 'video/mp4')

    }, 

    videoSlides: (slideNo) => {
         
    }
}