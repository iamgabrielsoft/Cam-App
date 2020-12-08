

var vddb = []; 
var snapdb = []; 
const video = document.querySelector('.video'); 
const capture = document.querySelector('.xx');  
const endRecord = document.querySelector('.xz')
var ulPic = document.querySelector('.savedpic');
var ulVid = document.querySelector('.savedvideo')
const deleteAll = document.querySelector('.deleteAll') 
const shareBtn = document.querySelector('.dropdown')
const numberofpic = document.querySelector('.numberofpic');
const totalsnap = document.querySelector('.totalSnap')
const totalvideo = document.querySelector('.totalVideo')


const constraint = {
    video: true, 
    audio: true, 
} 

function RecordFunc() {
     navigator.mediaDevices.getUserMedia(constraint)
        .then((stream) => {
            video.focus();  
            video.srcObject = stream;

        }).catch((err) => {
            console.log(`Error Occured ${err}`)
            //location.reload(); 
            location.href = './404.html'; 
        }) 
}

RecordFunc(); 

const countDown = RecordFunc.prototype.recordCountDown = (videoLimit) => {
    const sec = document.getElementById("sec"); 
    const record = document.querySelector('.xy')
    var counter = 0;

    const startRecording = () => { 
        sec.innerHTML = counter++; 
        if(counter == videoLimit) {
            console.log('Video is Too Long!'); 
        }
        
        return; 
    }


    var countInterval = setInterval(startRecording, 1000)
    record.classList.add('spin') // adding spining css 
    record.disabled = true; 
    
    endRecord.addEventListener('click', () => {
        vddb.push(video); //save to database; 
        console.log('Video ended'); 
        setTimeout(() => {
            record.classList.remove('spin');//spinning CSS and to signify the video has ended
            record.disabled = false;
        }, 400);

        getTotal.record(); 
        clearInterval(countInterval);  //stop timer
        duplicateVideo.staticVideo(); 

    }); 
}


const schema  = (video, videoName) => {
    const appSchema = {
        id: Date.now(),
        video,
        videoName
    }

    snapdb.push(appSchema);
}


const videoFunc = RecordFunc.prototype.videoFunc = () => {
    const capture = document.querySelectorAll('.xx').forEach((snap) =>{
        snap.addEventListener('click', (element) => {
            ConvertTheCanva(snapdb)
            getTotal.snap()
        })
    })

    const record = document.querySelectorAll('.xy').forEach((vid) => {
        vid.addEventListener('click', (element) => {
            // console.log('Recording Started')
            countDown(500); 
        })
    })

}

videoFunc(); 




const duplicate = () => {
   ConvertTheCanva(snapdb);
}


const duplicateVideo = {
    staticVideo: () => {
        
        const liVid = document.createElement('liVid'); 
        const videoForm = document.createElement('canvas'); 
        ulVid.appendChild(liVid.innerHTML = videoForm); 
        ctx = videoForm.getContext('2d'); 
        ctx.drawImage(video, 0, 0, 100, 110); 
        
    }, 

    videoSlides: (slideNo) => {
         
    }
}
