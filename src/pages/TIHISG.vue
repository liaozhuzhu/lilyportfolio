<template>
    <div class="container-page">   
        <div class="page-header container-flex">
            <h1 class="page-title" v-if="windowWidth >= 901">#ThisIsHowIStayGrounded Campaign</h1>
            <h1 class="page-title" v-else>#TIHISG Campaign</h1>
        </div>
        <div class="container-flex column experience-page">
            <div class="experience-about">
                <p>
                    At the Tippie College of Business, we wanted to launch a mental health campaign that gave the opportunity to student leaders, faculty, and staff to talk about their methods of overcoming the different stressors faced in everyday life. 
                    <br/>
                    <br/> 
                    This series highlights the importance of finding a balance between intense academic workloads and self-care, emphasizing the significance of staying grounded through preventative measures such as exercise, meditation, and various hobbies.  
                </p>
            </div>

            <div class="experience-project container-flex">
                <div class="project-box container-flex">
                    <video-player
                        class="experience-video"
                        id="landscape"
                        src="./assets/tippie-intern/tihisg/andrew.mp4"
                        poster="./assets/tippie-intern/tihisg/andrew.png"
                        crossorigin="anonymous"
                        playsinline
                        controls
                        :loop="false"
                        :volume="0.6"
                        :playback-rates="[0.7, 1.0, 1.5, 2.0]"
                        @mounted="handleMounted"
                        @ready="handleEvent($event)"
                        @play="handleEvent($event)"
                        @pause="handleEvent($event)"
                        @ended="handleEvent($event)"
                        @loadeddata="handleEvent($event)"
                        @waiting="handleEvent($event)"
                        @playing="handleEvent($event)"
                        @canplay="handleEvent($event)"
                        @canplaythrough="handleEvent($event)"
                        @timeupdate="handleEvent(player?.currentTime())"
                    />
                </div>
                
                <div class="project-box container-flex project-details">
                    <h1 class="project-title"><a href="https://www.instagram.com/p/CkOTkcqj7tV/?hl=en" target="_blank">Andrew Tribbey</a></h1>

                    <p class="project-desc">
                    Having a solid routine is one way to stay grounded throughout life's constant changes.
                    <br/>
                    <br/>
                    Link to original post: <a class="desc-link" href="https://www.instagram.com/p/CkOTkcqj7tV/?hl=en" target="_blank">https://www.instagram.com/p/CkOTkcqj7tV/?hl=en</a>
                    </p>
                    
                    <p class="project-date">08/27/2022</p>
                </div>
            </div>

            <div class="experience-project container-flex">
                <div class="project-box container-flex">
                    <video-player
                        class="experience-video"
                        src="./assets/tippie-intern/tihisg/lily.mp4"
                        crossorigin="anonymous"
                        playsinline
                        controls
                        :loop="false"
                        :volume="0.6"
                        :playback-rates="[0.7, 1.0, 1.5, 2.0]"
                        @mounted="handleMounted"
                        @ready="handleEvent($event)"
                        @play="handleEvent($event)"
                        @pause="handleEvent($event)"
                        @ended="handleEvent($event)"
                        @loadeddata="handleEvent($event)"
                        @waiting="handleEvent($event)"
                        @playing="handleEvent($event)"
                        @canplay="handleEvent($event)"
                        @canplaythrough="handleEvent($event)"
                        @timeupdate="handleEvent(player?.currentTime())"
                    />
                </div>
                
                <div class="project-box container-flex project-details">
                    <h1 class="project-title"><a href="https://www.instagram.com/p/Cl6jjjaDHj_/?hl=en" target="_blank">Lily Dosedel</a></h1>

                    <p class="project-desc">
                    Mindfulness can be a brushstroke away.
                    <br/>
                    <br/>
                    Link to original post: <a class="desc-link" href="https://www.instagram.com/p/Cl6jjjaDHj_/?hl=en" target="_blank">https://www.instagram.com/p/Cl6jjjaDHj_/?hl=en</a>
                    </p>
                    
                    <p class="project-date">12/08/2022</p>
                </div>
            </div>
        </div>     
    </div>
</template>
  
<script>
import { defineComponent } from 'vue'
import { VideoPlayer } from '@videojs-player/vue'
import 'video.js/dist/video-js.css'

export default defineComponent({
    components: {
      VideoPlayer
    },
    created() {
        document.title = "#TIHISG | Lily Dosedel"
    },
    name: "TIHISG",
    data() {
    return {
      windowWidth: window.innerWidth
    }
  },

  mounted() {
    this.$nextTick(() => {
      window.addEventListener('resize', this.onResize);
    })
  },

  beforeUnmount() { 
    window.removeEventListener('resize', this.onResize); 
  },

  methods: {  
    onResize() {
      this.windowWidth = window.innerWidth
      console.log(this.windowWidth);
    }
  }
})
</script>

<style scoped>
/* make a flex container that's first child takes up 1/3 of the space */
.experience-project {
    width: 100%;
    height: 100%;
    gap: 25px;
    justify-content: left;
}
.experience-video {
    width: 370px;
    height: 650px;
    border: 5px solid black;
    border-radius: 20px;
}

#landscape {
    width: 650px;
    height: 370px;
}

.project-box {
    width: 100%;
}

.project-details {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 25px
}

.project-title a{
    color: black;
}

.project-desc {
    font-size: 1.2rem;
    line-height: 1.5;
    text-align: left;
    margin: 0;
    width: 100%;
    height: 100%;
}

.project-date {
    font-size: 0.85rem;
}

/* Mobile */
@media only screen and (max-width: 900px) {

    #landscape {
        height: 24vh;
        width: 450px;
    }
}
</style>
  