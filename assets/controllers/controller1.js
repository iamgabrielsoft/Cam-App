
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
    const init = new DisplayVideo('myvid', 20)
    init.startRecord(video)
}



const endVideo = async() => {
    videoSchema(video, 'data.mp3') //save to database
    setTimeout(() => {
        record.classList.remove('spin');   //spinning CSS and to signify the video has ended
        record.disabled = false;

    }, 400);

    console.log('ENDING VIDEO')
    getTotal.recordCounter()
    //clearInterval(countInterval);  //stop counter 
    duplicateVideo.staticVideo(vddb);  
    const init = new DisplayVideo('myvid', 20)
    init.stop(video)
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
    staticVideo: async (arr = []) => {
        
        const liVid = document.createElement('liVid'); 
        const videocanvas = document.createElement('canvas'); 
        var source = document.createElement('source')
        var vidInput = document.querySelector('input')
        var downloadbtn = document.createElement('button')
        
        ulVid.appendChild(liVid)
        ulVid.appendChild(videocanvas); 
        ctx = videocanvas.getContext('2d'); 
        ctx.drawImage(video, 0, 0, 100, 110); 


        downloadbtn.setAttribute('class', 'vidbtn')
        vidInput.setAttribute('class', 'vidinput')
        downloadbtn.innerHTML = `<a class="download" title="Download" data-toggle="tooltip"><i class="fas fa-download" style="color: green"></i></a>`
        // vidInput.innerHTML = `<input type="text" class="form-control nameImage" aria-describedby="emailHelp">`

        arr.forEach((vid) => {
            liVid.innerHTML = `
                <div class="dropdown dropdown-class sharebtn">
                    <a class="btn btn-secondary dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <i class="fas fa-share-alt"></i> Share
                    </a>
                    <div class="dropdown-menu drop" aria-labelledby="dropdownMenuLink" >
                            <a class="dropdown-item twitter" href="#"><i class="fab fa-twitter"></i>twitter</a><br>
                            <a class="dropdown-item facebook" href="#"><i class="fab fa-facebook-f"></i>Facebook</a>
                    </div>
                </div>
                <a id ="${console.log('Video with the Id of ', vid.id)}" class="deletevid" title="Delete" data-toggle="tooltip" ><i class="fas fa-trash deleteachpic">&#xE872;</i></a>
            `
        })

        ulVid.appendChild(downloadbtn); 


    }, 

    videoSlides: (slideNo) => {
         
    }
}