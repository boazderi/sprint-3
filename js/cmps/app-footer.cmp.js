import { eventBus } from "../services/event-bus.service.js"

export default {
    name: 'footer-cmp',
    template: `
    <footer class="app-footer flex align-items-center justify-center">
        <img src="./img/my-photo.jpeg" width=80 class="my-photo" alt="">
        
        <div class=" flex flex-column justify-center align-items-center">
            <small class="p-container">
                &#9400; This site developed by Boaz Deri, find me here
            </small>
            
            <div class="flex icons-container justify-evenly align-items-center">
                <a href="https://www.linkedin.com/in/boaz-deri/" target="_blank">
                    <div class="icon">
                        <img class="linkedin-icon img-icon" src="./img/linkedin.png" width="30" height="30" alt="">
                    </div>
                </a>
                <a href="https://www.facebook.com/boazderi/" target="_blank">
                    <div class="icon">
                        <img class="facebook-icon img-icon" src="./img/facebook.png" width="30" height="30" alt="">
                    </div>
                </a>
                <a href="https://twitter.com/boaz_deri" target="_blank">
                    <div class="icon">
                        <img class="twitter-icon img-icon" src="./img/twitter.png" width="30" height="30" alt="">
                    </div>
                </a>
                <a href="https://www.instagram.com/boazderi/" target="_blank">
                    <div class="icon">
                        <img class="instagram-icon img-icon " src="./img/instagram.png" width="30" height="30" alt="">
                    </div>
                </a>
            </div>
        </div>
    </footer>
    `,
    created(){
        eventBus.on('test-event', payload => console.log(payload))
    }
}