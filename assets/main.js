

const openNav = () => {
    document.querySelector(".sidenav").style.width = "250px";
    document.querySelector(".main").style.marginLeft = "250px"
}

const closeNav = () => {
    document.querySelector(".sidenav").style.width = "0";
    document.querySelector(".main").style.marginLeft= "0"; 
}


const getTotal = {
    snap: () => {

        //increase the number when a shot is taken
        //how do i increase the value 
        for(let i = 0; i <=snapdb.length; i++) {
            if(snapdb[i] == null) {
                totalsnap.innerHTML = i;
            }
        }
    }, 

    record: () => {
        for(let i = 0; i<= vddb.length; i++)
        {
            if(vddb[i] == null) {
                totalvideo.innerHTML = i; 
                $('.deletedvid').click(() => {
                    console.log('Your About to delete Videos')
                    


                        // vddb = []; 
                        // totalvideo.innerHTML = i = 0; 
                        // ulVid.innerHTML = ' ' + '<h3>Video Gallery<h3>';

                }) 
            } 
        }
    }
}


//deleteAll Button 
// $('.open-modal').click((event) => {
//     $('.deletebtn').hide(); //hide the delete dialog
//     $('.deletedpic').click(() => {
//         $('.deletebtn').show("slow"); //show the delete dialog
//         $('.deletebtn').click(() => {
//            $('.deletedpic').prop('checked', false); 
//            totalsnap.innerHTML = i = 0;
//            snapdb = []; //clear the database
//            ulPic.innerHTML = ' ' + '<h3>Picture Gallery</h3>';
//            $('.deletedpic').prop('checked', false);
//         })
//     })

//     $('.deletedvid').click(() => {
//         $('.deletebtn').show("slow"); //show the delete dialog
//         $('.deletebtn').click(() => {
//             $('.deletedvid').prop('checked', false); 
//             totalvideo.innerHTML = i = 0;
//             vddb = []; //clear the database
//             ulVid.innerHTML = ' ' + '<h3>Video Gallery<h3>';
//             $('.deletedvid').prop('checked', false);
//          })
//     })
// })




function ConvertTheCanva (arr = []) {

    var canvas = document.createElement('canvas');
    var savebtn = document.createElement('button'); 
    var saveinput = document.createElement('input')
    var liPic = document.createElement('liPic'); 
    canvas.setAttribute('class', 'imagecanvas');
    liPic.setAttribute('class', 'lipic')
    savebtn.setAttribute('class', 'savebtn')
    savebtn.setAttribute('id', 'trigger')
    saveinput.setAttribute('class', 'saveinput')

    
    ulPic.appendChild(liPic)
    ulPic.appendChild(canvas); 
    ctx = canvas.getContext('2d');
    ctx.drawImage(video, 0, 0, 100, 110); 
    schema(video, saveinput.value);

    savebtn.innerHTML = `<a class="download" title="Download" data-toggle="tooltip"><i class="fas fa-download" style="color: green"></i></a>`
    arr.forEach((pic) => {
        liPic.innerHTML = `
        <div class="dropdown dropdown-class">
            <a class="btn btn-secondary dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <i class="fas fa-share-alt"></i>
                    Share
            </a>
            <div class="dropdown-menu drop" aria-labelledby="dropdownMenuLink" >
                    <a class="dropdown-item" href="#"><i class="fab fa-instagram"></i>Instagram</a><br>
                    <a class="dropdown-item" href="#"><i class="fab fa-twitter"></i>twitter</a><br>
                    <a class="dropdown-item" href="#"><i class="fab fa-facebook-f"></i>Facebook</a>
            </div>
        </div>
        <a id ="${pic.id}" class="deletecanvas" title="Delete" data-toggle="tooltip" ><i class="fas fa-trash deleteachpic">&#xE872;</i></a>

        `
    })


    snapdb.forEach((value, index) => {
        console.log(value.id, index); 
        $('.savedpic').each((data) => {
            console.log('hit', value.id, data); 

        }).append(saveinput, savebtn).each((value) => {
            $('.savebtn').click(() => {
                    $(".popup-overlay, .popup-content").addClass("active"); 
                    
                    $('.close, .popup-overlay').on('click', () => {
                        $('.popup-overlay, .popup-content').removeClass('active')
                    })

            })
        })
    })



    //delete Each  canvas 
    document.querySelectorAll('.deletecanvas').forEach((del) => {
        del.addEventListener('click', (element) => {
            deletecanvas(element?.target); //delete func
        })
    })


    document.querySelectorAll('.downloadcanvas').forEach((download) => {
        download.addEventListener('click', () => {
            downloadFunc(saveinput)
        })
    })
}


const deletecanvas = (element) => {
    let key = element?.id; 
    console.log(key); //empty string  
    snapdb = snapdb.filter((value) => {
        value.id != Number(key); 
    })

    //ConvertTheCanva(snapdb) //duplicating the image
}




const downloadFunc  = ConvertTheCanva.prototype.downloadFunc = (filename) => { 
    const image = new Image(); 
    console.log(filename); 
    // const blob = new Blob([image],  {type: jpg});
    // url = window.URL.createObjectURL(blob); 
    // console.log(blob)
    
    // const image = new Image(300, 400); 
    // console.log(image.src = snapdb[0]); 

    // blob = new Blob([image], {type: MimeType}); 
    // url = window.URL.createObjectURL(blob);
    // a = document.querySelector('.downloadcanvas'); 
    // //document.body.appendChild(a); 
    // a.href = url; 
    // a.download = snapdb[0].video; 
    // a.click(); 
    // window.URL.revokeObjectURL(url); 
}