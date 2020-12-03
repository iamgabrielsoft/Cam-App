
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
$('.open-modal').click((event) => {
    $('.deletebtn').hide(); //hide the delete dialog
    $('.deletedpic').click(() => {
        $('.deletebtn').show("slow"); //show the delete dialog
        $('.deletebtn').click(() => {
           $('.deletedpic').prop('checked', false); 
           totalsnap.innerHTML = i = 0;
           snapdb = []; //clear the database
           ulPic.innerHTML = ' ' + '<h3>Picture Gallery</h3>';
           $('.deletedpic').prop('checked', false);
        })
    })

    $('.deletedvid').click(() => {
        $('.deletebtn').show("slow"); //show the delete dialog
        $('.deletebtn').click(() => {
            $('.deletedvid').prop('checked', false); 
            totalvideo.innerHTML = i = 0;
            vddb = []; //clear the database
            ulVid.innerHTML = ' ' + '<h3>Video Gallery<h3>';
            $('.deletedvid').prop('checked', false);
         })
    })
})



function ConvertTheCanva (arr = []) {

    var canvas = document.createElement('canvas');
    var liPic = document.createElement('liPic');
    canvas.setAttribute('class', 'imagecanvas');
    liPic.setAttribute('class', 'lipic')


    schema(video)
    snapdb.forEach((pic) => {
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
        <a id ="deleteachpic" class="deletecanvas" title="Delete" data-toggle="tooltip" ><i class="fas fa-trash deleteachpic">&#xE872;</i></a>
        <a class="downloadcanvas" title="Delete" data-toggle="tooltip" ><i class="fas fa-download" ">&#xE872;</i></a>
        `; 

        ulPic.appendChild(liPic); 
        ulPic.appendChild(canvas)
        ctx = canvas.getContext('2d'); 
        ctx.drawImage(pic, 0, 0, 100, 110); 
        
    })

    

    //delete Each  canvas 

    document.querySelectorAll('.deletecanvas').forEach((dart) => {
        dart.addEventListener('click', (element) => {
            deletecanvas(element?.target); 
            console.log('deleted')

        })
    })

    


    $('.downloadcanvas').click(() => {

        download(); 
    })
}


const deletecanvas = ConvertTheCanva.prototype.delete = (element) => {
    console.log(element) 
    snapdb = snapdb.filter((value) => { console.log(value)})
    // schema(video); 
}




const download  = ConvertTheCanva.prototype.download = () => {
    console.log('Canvas downloaded'); 
}