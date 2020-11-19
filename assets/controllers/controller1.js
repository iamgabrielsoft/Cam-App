
var db = []; 
const video = document.querySelector('.video'); 
const capture = document.querySelector('.xx'); 
const canvas = document.querySelector('.canva'); 
const endRecord = document.querySelector('.xz')
//const loader = document.querySelector('.loader')



const openNav = () => {
    document.querySelector(".sidenav").style.width = "250px";
    document.querySelector(".main").style.marginLeft = "250px";
}

const closeNav = () => {
    document.querySelector(".sidenav").style.width = "0";
    document.querySelector(".main").style.marginLeft= "0"; 
}

const constraint = {
    video: true, 
    audio: true, 
} 

function RecordFunc() {
     navigator.mediaDevices.getUserMedia(constraint)
        .then((stream) => {
            video.focus()
            video.srcObject = stream;

        }).catch((err) => {
            console.log(`Error Occured ${err}`)
            //location.reload(); 
            location.href = './404.html'; 
        }) 
}

RecordFunc()


RecordFunc.prototype.getConnected = () => {
    navigator.mediaDevices.enumerateDevices()
        .then((stream) => {
            stream.filter((id_) => id_.deviceId)

        }).catch((err) => {
            console.log('Refuse to connect Because', err.name)
        })
}



RecordFunc.prototype.zoomVideo = () => { 
    /*  const zoom = document.createElement('zoom')
        const aspects = window.innerWidth / window.innerHeight; 
        zoom.className = 'zoomin'; 
        factor = video.width / video.height; 
        video.appendChild(zoom);
    */


}


const countDown = RecordFunc.prototype.recordCountDown = (videoLimit) => {
    const sec = document.getElementById("sec"); 
    // const min = document.getElementById('min')
    //const hr = document.getElementById('hr'); 
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
        console.log('Video ended'); 
        db.push(video); //save to database; 
        setTimeout(() => {
            record.classList.remove('spin');//spinning CSS and to signify the video has ended
            record.disabled = false;
        }, 400);
        clearInterval(countInterval);  //stop timer
    }); 
}


const manipulate = () => {
    const processor = {
       timeCallback : function () {
           if(video.play()) {
               console.log('Video Mode')

           }

            //var videoInterval = setTimeout(this.timeCallback(), 1000); 
           // console.log(videoInterval)           
        }, 

        doLoad: function () { 
            //c1 = canvas.getContext('2d'); 
        },

    }


    //processor.doLoad(); 
    processor.timeCallback(); 
}


const videoFunc = RecordFunc.prototype.videoFunc = () => {
    const videoSchema = {
        id: Date.now(), 
        video: video, 
        
    }


    const capture = document.querySelectorAll('.xx').forEach((snap) =>{
        snap.addEventListener('click', (element) => {
            dupPictures(db); 
        })
    })

    const record = document.querySelectorAll('.xy').forEach((vid) => {
    vid.addEventListener('click', (element) => {
        console.log('Recording Started'); 
        manipulate(); 
        countDown(500);
    })
})

}


videoFunc(); 


var dupPictures = (arr = []) => {

    const convertTheCanva = (imageV) => {
        var img = new Image(); 
        canvas.width = imageV.width; 
        canvas.height = imageV.height;
        ctx = canvas.getContext('2d'); 
        ctx.drawImage(imageV, 0, 0, 120, 150);
        arr.push(imageV);    

        arr.forEach((pic) => {
            
        })
    }

    return convertTheCanva(video); //video.width
}

const dupVideo = () => {
    const canvasVideo = document.createElement('canvasVideo'); 
    canvasVideo.setAttribute('class', 'canvasvideo'); 
    canvasVideo.setAttribute('data-key', 'canvasvideo'); 

    

    return {
        staticVideo: () => {

        }, 

        movingVideo: () => {
            
        }
    }
}
var db = []; 
const video = document.querySelector('.video'); 
const capture = document.querySelector('.xx'); 
const canvas = document.querySelector('.canva'); 
const endRecord = document.querySelector('.xz')
//const loader = document.querySelector('.loader')



const openNav = () => {
    document.querySelector(".sidenav").style.width = "250px";
    document.querySelector(".main").style.marginLeft = "250px";
}

const closeNav = () => {
    document.querySelector(".sidenav").style.width = "0";
    document.querySelector(".main").style.marginLeft= "0"; 
}

const constraint = {
    video: true, 
    audio: true, 
} 

function RecordFunc() {
     navigator.mediaDevices.getUserMedia(constraint)
        .then((stream) => {
            video.focus()
            video.srcObject = stream;

        }).catch((err) => {
            console.log(`Error Occured ${err}`)
            //location.reload(); 
            location.href = './404.html'; 
        }) 
}

RecordFunc()


RecordFunc.prototype.getConnected = () => {
    navigator.mediaDevices.enumerateDevices()
        .then((stream) => {
            stream.filter((id_) => id_.deviceId)

        }).catch((err) => {
            console.log('Refuse to connect Because', err.name)
        })
}



RecordFunc.prototype.zoomVideo = () => { 
    /*  const zoom = document.createElement('zoom')
        const aspects = window.innerWidth / window.innerHeight; 
        zoom.className = 'zoomin'; 
        factor = video.width / video.height; 
        video.appendChild(zoom);
    */


}


const countDown = RecordFunc.prototype.recordCountDown = (videoLimit) => {
    const sec = document.getElementById("sec"); 
    // const min = document.getElementById('min')
    //const hr = document.getElementById('hr'); 
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
        console.log('Video ended'); 
        db.push(video); //save to database; 
        setTimeout(() => {
            record.classList.remove('spin');//spinning CSS and to signify the video has ended
            record.disabled = false;
        }, 400);
        clearInterval(countInterval);  //stop timer
    }); 
}


const manipulate = () => {
    const processor = {
       timeCallback : function () {
           if(video.play()) {
               console.log('Video Mode')

           }

            //var videoInterval = setTimeout(this.timeCallback(), 1000); 
           // console.log(videoInterval)           
        }, 

        doLoad: function () { 
            //c1 = canvas.getContext('2d'); 
        },

    }


    //processor.doLoad(); 
    processor.timeCallback(); 
}


const videoFunc = RecordFunc.prototype.videoFunc = () => {
    const videoSchema = {
        id: Date.now(), 
        video: video, 
        
    }


    const capture = document.querySelectorAll('.xx').forEach((snap) =>{
        snap.addEventListener('click', (element) => {
            dupPictures(db); 
        })
    })

    const record = document.querySelectorAll('.xy').forEach((vid) => {
    vid.addEventListener('click', (element) => {
        console.log('Recording Started'); 
        manipulate(); 
        countDown(500);
    })
})

}


videoFunc(); 


var dupPictures = (arr = []) => {

    const convertTheCanva = (imageV) => {
        var img = new Image(); 
        canvas.width = imageV.width; 
        canvas.height = imageV.height;
        ctx = canvas.getContext('2d'); 
        ctx.drawImage(imageV, 0, 0, 120, 150);
        arr.push(imageV);    

        arr.forEach((pic) => {
            
        })
    }

    return convertTheCanva(video); //video.width
}

const dupVideo = () => {
    const canvasVideo = document.createElement('canvasVideo'); 
    canvasVideo.setAttribute('class', 'canvasvideo'); 
    canvasVideo.setAttribute('data-key', 'canvasvideo'); 

    

    return {
        staticVideo: () => {

        }, 

        movingVideo: () => {
            
        }
    }
}