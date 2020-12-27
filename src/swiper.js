
import Swiper from 'swiper' 
import 'swiper/swiper-bundle'; 
import Swiper, {Navigation, Pagination} from 'swiper'; 
Swiper.use([Navigation, Pagination]); 


const swiper = new Swiper('.swiper-container', {
    direction: 'vertical', 
    loop: true, 

    pagination: {
        el: '.swiper-pagination'
    }, 

    navigation: {
        nextEl: '.swiper-button-next', 
        prevEl: '.swiper-button-prev'
    }, 

    scrollbar: {
        el: '.swiper-scrollbar'
    }
})


console.log('Hello bro')


var html = `
    <div class="swiper-container">
        <!-- Additional required wrapper -->
        <div class="swiper-wrapper">
            <!-- Slides -->
            <div class="swiper-slide">Slide 1</div>
            <div class="swiper-slide">Slide 2</div>
            <div class="swiper-slide">Slide 3</div>
            ...
        </div>
        <!-- If we need pagination -->
        <div class="swiper-pagination"></div>

        <!-- If we need navigation buttons -->
        <div class="swiper-button-prev"></div>
        <div class="swiper-button-next"></div>

        <!-- If we need scrollbar -->
        <div class="swiper-scrollbar"></div>
    </div>
`

console.log(html)