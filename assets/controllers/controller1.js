var counter = 0; 
var unsavedSnap = []
var vddb = []; 
var snapdb = []; 
const video = document.querySelector('.video'); 
const ulPic = document.querySelector('.savedpic');
const ulVid = document.querySelector('.savedvideo')
const numberofpic = document.querySelector('.numberofpic');
const totalsnap = document.querySelector('.totalSnap')
const totalvideo = document.querySelector('.totalVideo')
const displayFile = document.querySelector('.display'); 
const record = document.querySelector('.xy')
const sec = document.getElementById("sec"); 
const hr = document.createElement('hr')
const min = document.createElement('min')


const videoController = new DisplayVideo('myvid', 20)

const UnsavedSchema  = (video, NameofPic) => {
    const appSchema = {
        id: Date.now(),
        video,
        NameofPic
    }

    unsavedSnap.push(appSchema);
}


const constraint = {
    video: true, 
    audio: true, 
} 


class Controller1 {
    constructor(){}

    videoSchema(video, vidName) {
        const vddbSchema = {
            id:  Date.now(), 
            video,
            vidName
        }
    
        vddb.push(vddbSchema)
    }

    Snapschema (video, NameofPic) {
        const appSchema = {
            id: Date.now(),
            video,
            NameofPic
        }
    
        snapdb.push(appSchema);
    }

    startVideo(vidLimit) {
        console.log('STARTNG VIDEO')
        min.setAttribute('class', 'minutes')
        //time.play()
        if(vidLimit == 500) console.log('Video is Too Long')
        
        videoController.startRecord(video.captureStream())
    }

    endVideo() {
        this.videoSchema(video, 'data.webm')
        setTimeout(() => {
            record.classList.remove('spin');   //spinning CSS and to signify the video has ended
            record.disabled = false;
        }, 400)


        console.log('ENDING VIDEO')
        getTotal.recordCounter()
        this.duplicateVideo.staticVideo(vddb)
        videoController.stop(video.stop);
    }

    duplicateVideo =  {
        staticVideo: (arr = []) => {
            const liVid = document.createElement('liVid'); 
            const videocanvas = document.createElement('canvas'); 
            const img = document.createElement('img')
            var downloadbtn = document.createElement('button')
            
            ulVid.appendChild(liVid)
            ulVid.appendChild(videocanvas); 
            var ctx = videocanvas.getContext('2d'); 
            ctx.drawImage(video, 0, 0, 100, 110); 

            img.setAttribute('class', 'vidimg')
            downloadbtn.setAttribute('class', 'vidbtn')
            downloadbtn.innerHTML = `<a class="download" title="Download" data-toggle="tooltip"><i class="fas fa-download" style="color: green"></i></a>`


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

            $('canvas').click(() => {
                console.log('Playing Video')

            }).promise()
        }
    }
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



const time = {
    play: () => {
        setInterval(() => {
            var x = sec.innerHTML = counter++; 
            for(let i = 0; i<counter; i++){
                console.log(x)
                sec.appendChild(min)
                if(x == 59) {
                    setTimeout(() => {
                        counter = i-59; 
                    
                    }, 100);
    
                    if(counter > i) {
                        min.innerHTML = 1
                     }   
                }
            }
            
        }, 100);
    }, 

    end:  () => {
        clearInterval(time.play())
    }
}



const videoFunc = RecordFunc.prototype.videoFunc = () => {
    $('.xx').click(() => { //snap Pictures
        ConvertTheCanva(snapdb, snapdb); 
        getTotal.snapCounter()

    })

    $('.xy').click(() => { //start recording 
        var x = new Controller1().startVideo
        $('.xy').prop('disabled', true)
    })

    $('.xz').click(() => { //ending recording
        var y = new Controller1().endVideo()    
    })

}

videoFunc(); 
