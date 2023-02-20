<template>
    <div class="container-page">   
        <div class="page-header container-flex">
            <h1 class="page-title">#ThisIsHowIStayGrounded Campaign</h1>
        </div>
        <div class="container-flex column" id="black-in-business">
            <div class="experience-about">
                <p>
                    At the Tippie College of Business, we wanted to launch a mental health campaign that addresses the stress and pressures that all students face. 
                    Our aim was to create a safe space for students to talk about their struggles and promote the importance of mental wellness. We understand that student life can be challenging, and we wanted to offer support to those who may feel overwhelmed.
                    <br/>
                    <br/> 
                    Our campaign highlights the importance of finding a balance between intense academic workloads and self-care, emphasizing the significance of rest and relaxation.
                </p>
            </div>

            <div class="experience-project container-flex">
                <div class="project-box container-flex">
                    <video-player
                        class="experience-video"
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
})
</script>

<style scoped>
#black-in-business {
    margin-inline: 25px;
    gap: 100px;
    margin-bottom: 50px;
}

/* make a flex container that's first child takes up 1/3 of the space */
.experience-project {
    width: 100%;
    height: 100%;
    gap: 25px;
    justify-content: left;
}
.experience-video {
    width: 650px;
    height: 370px;
    border: 5px solid black;
    border-radius: 20px;
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
    width: 500px;
    height: 100%;
}

.project-date {
    font-size: 0.85rem;
}
</style>
  