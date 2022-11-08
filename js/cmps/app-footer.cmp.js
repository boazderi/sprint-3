import { eventBus } from "../services/event-bus.service.js"

export default {
    name: 'footer-cmp',
    template: `
    <footer class="app-footer flex align-items-center justify-center">
        <section class="yair-section">
            <img src="./img/yair-photo.jpeg" width=80 class="my-photo" alt="">
            <div class=" flex flex-column justify-center align-items-center">
                <div class="flex icons-container justify-evenly align-items-center">
                    <a href="https://www.linkedin.com/in/yair-orchen-11572a223" target="_blank">
                        <div class="icon">
                            <img class="linkedin-icon img-icon" src="./img/linkedin.png" width="30" height="30" alt="">
                        </div>
                    </a>
                    <a href="https://www.facebook.com/yair.orchen" target="_blank">
                        <div class="icon">
                            <img class="facebook-icon img-icon" src="./img/facebook.png" width="30" height="30" alt="">
                        </div>
                    </a>
                    <a href="https://twitter.com/boaz_deri" target="_blank">
                        <div class="icon">
                            <img class="twitter-icon img-icon" src="./img/twitter.png" width="30" height="30" alt="">
                        </div>
                    </a>
                    <a href="https://www.instagram.com/yairorchen/" target="_blank">
                        <div class="icon">
                            <img class="instagram-icon img-icon " src="./img/instagram.png" width="30" height="30" alt="">
                        </div>
                    </a>
                </div>
            </div>
        </section>
        <div class="p-section">
            <small class="p-container">
                &#9400; This site developed by Boaz Deri, find me here
            </small>
        </div>
        <section class="boaz-section">
        <img src="./img/my-photo.jpeg" width=80 class="my-photo" alt="">
        
        <div class=" flex flex-column justify-center align-items-center">
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
        </section>
    </footer>
    `,
    created() {
        eventBus.on('test-event', payload => console.log(payload))
    }
}