
const y = $('.shutterCheck').change(() => {
    //disabled the shutter
   y = new Shutter().stopAnimate()
   console.log(y)
})


$('.timerCheck').change(() => {
    console.log('Timer set')
    new VideoController().stopTimer() 
    //disabled the timer
})

$('.effectCheck').change(() => {
    console.log('effect')
    //disabled effect
})