
const openNav = () => {
    document.querySelector(".sidenav").style.width = "250px";
    document.querySelector(".main").style.marginLeft = "250px"
}

const closeNav = () => {
    document.querySelector(".sidenav").style.width = "0";
    document.querySelector(".main").style.marginLeft= "0"; 
}


const getTotal = {
    snapCounter: () => {

        //increase the number when a shot is taken
        //how do i increase the value 
        for(let i = 0; i <=snapdb.length; i++) {
            if(snapdb[i] == null) {
                totalsnap.innerHTML = i;
            }
        }
    }, 

    recordCounter: () => {

        for(let i = 0; i<= vddb.length; i++)
        {
            if(vddb[i] == null) {
                totalvideo.innerHTML = i; 
                $('.deletedvid').click(() => {
                    console.log('Your About to delete Videos')
                    //delete the video

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




async function ConvertTheCanva (arr = []) {

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
    
    schema(video, saveinput.value);

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

    
    //posting the canvass to twitter

    const post = {
        twitt : (dataurl) => {
            x = dataurl.toDataURL('image/png', 0.9); 
            console.log(x)
            var datalink = $('.twitter').attr('href', `https://twitter.com/share?text=${x}`);  //place the image on the twitter post 
            $('.twitter').attr('target', datalink);
        }, 

        fb : (dbpost) => {
            //process canvas posting
            console.log(dbpost)
        }
    }

    $('.twitter').click(() => {
       post.twitt(canvas); //post the canvas image to twitter
    })

    $('.facebook').click(() => {
        post.fb(canvas)
    })



        $('.savedpic').each((data) => {
        }).append(saveinput, savebtn).each((value) => {
            $('.savebtn').click(() => {
                    $(".popup-overlay, .popup-content").addClass("active")
                    $('.close, .popup-overlay').on('click', () => {
                        $('.popup-overlay, .popup-content').removeClass('active')
                    })

                    setTimeout(() => {
                        $('.popup-overlay, .popup-content').removeClass('active')
                    }, 5000);
                

                    const promise = new Promise((resolve, reject) => {
                        canvas.toBlob((data) => {
                            a = document.createElement('a')
                            a.href = URL.createObjectURL(data);        
                        
                            if(saveinput.value.length == " ") {
                                console.log('empty field'); //notify the user on the input field 
                                //throw in spinner

                                //reject(data); 
                                
                            }else {
                                a.download = saveinput.value 
                                a.click(); 
                                URL.revokeObjectURL(a.href); 
                                resolve(data); 
                            }
                            
                        }, 'image/png', 2.9) 
                    })

                    promise.then((datalink) => {
                        console.log(datalink)
                    })
            })
        })


    //delete Each  canvas 
    document.querySelectorAll('.deletecanvas').forEach((del) => {
        del.addEventListener('click', (element) => {
            deletecanvas(element?.target); //delete func
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


// module.export = {
//     openNav,  
//     closeNav, 
//     deletecanvas, 
// }