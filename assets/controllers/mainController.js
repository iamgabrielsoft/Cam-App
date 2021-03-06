const shutterinit = new ShutterApp()
const openNav = () => {
    document.querySelector(".sidenav").style.width = "250px";
    document.querySelector(".main").style.marginLeft = "250px"
}

const closeNav = () => {
    document.querySelector(".sidenav").style.width = "0";
    document.querySelector(".main").style.marginLeft= "0"; 
}


const getTotal = {
    snapCounter: () => { //increase the number of pic 
        for(let i = 0; i <=snapdb.length; i++) {
            if(snapdb[i] == null) totalsnap.innerHTML = i;
            
        }
    }, 

    recordCounter: () => {
        for(let i = 0; i<=vddb.length; i++)
        {
            if(vddb[i] == null) totalvideo.innerHTML = i; 
        }
    }, 

    miCounter: () => {
        for(let i = 0; i <=micArr.length; i++) {
            if(micArr[i] == null) totalMic.innerHTML = i; 
        }
    }
}


const ConvertTheCanva = (arr = [])  => {
    var canvas = document.createElement('canvas');
    var savebtn = document.createElement('button'); 
    var saveinput = document.createElement('input')
    var liPic = document.createElement('liPic'); 
    canvas.setAttribute('class', 'imagecanvas');
    liPic.setAttribute('class', 'lipic')
    savebtn.setAttribute('class', 'savebtn')
    savebtn.setAttribute('id', 'trigger')
    saveinput.setAttribute('class', 'nameImage')

    ulPic.appendChild(liPic)
    ulPic.appendChild(canvas); 
    ctx = canvas.getContext('2d');
    ctx.drawImage(video, 0, 0, 100, 110);

    new Controller1().Snapschema(video, saveinput.value)
    saveinput.innerHTML = `<input type="text" class="form-control nameImage" aria-describedby="emailHelp">`
    savebtn.innerHTML = `<a class="download" title="Download" data-toggle="tooltip"><i class="fas fa-download" style="color: green"></i></a>`


    arr.forEach((pic) => {
        liPic.innerHTML = `
        <div class="dropdown dropdown-class sharebtn">
            <a class="btn btn-secondary dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <i class="fas fa-share-alt"></i> Share
            </a>
            <div class="dropdown-menu drop" aria-labelledby="dropdownMenuLink" >
                    <a class="dropdown-item twitter" href="#"><i class="fab fa-twitter"></i>twitter</a><br>
                    <a class="dropdown-item facebook" href="#"><i class="fab fa-facebook-f"></i>Facebook</a>
            </div>
        </div>
        <a id ="${pic.id}" class="deletecanvas" title="Delete" data-toggle="tooltip" ><i class="fas fa-trash deleteachpic">&#xE872;</i></a>
        `
    })


        $('.savedpic').each(() => {
        }).append(saveinput, savebtn).each(() => {
            $('.savebtn').click(() => {
                    return new Promise((resolve, reject) => {
                        canvas.toBlob((data) => {
                            a = document.createElement('a')
                            a.href = URL.createObjectURL(data);     
                            if(saveinput.value.length == " ") {
                                console.log('empty field'); //notify the user on the input field 
                                $('.popup-overlay, .popup-content').addClass('active')
                                $('.display').text('Try Naming Your Image!')
                                setTimeout(() => {      
                                    $('.popup-overlay, .popup-content').removeClass('active')
                                }, 5000);

                                
                            }else {
                                //a.download = controller1.Snapschema(video, saveinput.value);
                                a.download = saveinput.value 
                                a.click(); 
                                URL.revokeObjectURL(a.href); 
                                resolve(data); 

                                $(".popup-overlay, .popup-content").addClass("active")
                                $('.close, .popup-overlay').on('click', () => {
                                    $('.popup-overlay, .popup-content').removeClass('active')
                                })
                            }
                            
                        }, 'image/png', 2.9) 
                    })

                    .then((data) => {
                        console.log(data)
                    })
            })
        })

        $('.canvas').click(() => {
            new Slider({})
        })

    $('.deletecanvas').click((event) => {
        deletingEachPic(event);

    })

}


const deletingEachPic = (event) => {
    const key = event.target; 
    console.log(key.parentNode.parentNode.removeChild(key.parentNode))
}



const videoFunc = RecordFunc.prototype.videoFunc = () => {
    $('.xx').click(() => { //snap Pictures 
        new VideoController().shutter()
        getTotal.snapCounter(); //counter for snapped pic
    })

    $('.xy').click(() => { //start recording 
        console.log('STARTNG VIDEO')
        new Controller1().startVideo(video.duration); 
    })

    $('.xz').click(() => { //ending recording
       // new Controller1().endVideo()
    })

    $('.five-minutes').click((event) => { //5 minutes timer
        new VideoController().timer(5);  
    })


    $('.ten-minutes').click((event) => { //10  minutes timer
        new VideoController().timer(10); 
        
    })

    $('.fifteen-minutes').click((event) => { //15 minutes timer
        new VideoController().timer(15); 
        
    })

}


videoFunc(); 

