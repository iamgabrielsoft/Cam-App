

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


const videoFunc = RecordFunc.prototype.videoFunc = () => {
    const capture = document.querySelectorAll('.xx').forEach((snap) =>{
        snap.addEventListener('click', (element) => {
            duplicate(); 
            getTotal.snap()
            console.log(element?.target)
        })
    })

    const record = document.querySelectorAll('.xy').forEach((vid) => {
        vid.addEventListener('click', (element) => {
            console.log('Recording Started')
            countDown(500); 
        })
    })

}

videoFunc()


const duplicate = () => {
    
    ConvertTheCanva();
    // ConvertTheCanva.create(); 


    const onScreen = {
        Imageviwes: () => {
            const row = document.createElement('row')
            const columns = document.createElement('colum')
            const modal = document.createElement('modal'); 
            const modalContent = document.createElement('modal-content'); 
            const mySlides = document.createElement('mySlides'); 
            const imagetext = document.createElement('imagetext'); 
            const imageNo = document.createElement('imageNo')
            const img = document.createElement('img')
            const caption = document.createElement('caption-container')
            const span = document.createElement('span')
            const p = document.createElement('p')
            const prev = document.createElement('prev'); 
            const next = document.createElement('next'); 

            row.setAttribute('class', 'row')
            columns.setAttribute('class', 'column')
            modal.setAttribute('class', 'modal')
            modalContent.setAttribute('class', 'modal-content')
            mySlides.setAttribute('class', 'myslides')
            imagetext.setAttribute('class', 'imagetext')
            span.setAttribute('class', 'close cursor')
            mySlides.setAttribute('class', 'mySlides')
            imageNo.setAttribute('class', 'numbertext')
            caption.setAttribute('class',  'caption-container')
            p.id = 'caption'; 

            prev.setAttribute('class', 'prev'); 
            next.setAttribute('class', 'next'); 

           console.log(window.document.parentElement = row);
           console.log(window.document.parentElement = modal)
           row.appendChild(columns)
           columns.appendChild(mySlides)
           columns.appendChild(img)
           modal.appendChild(span)
           modal.appendChild(modalContent)
           modalContent.appendChild(mySlides)
           mySlides.appendChild(imageNo)
           modalContent.appendChild(caption)
           caption.appendChild(p); 
        }, 
    }


    onScreen.Imageviwes(); 
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
