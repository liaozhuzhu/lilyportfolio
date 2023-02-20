<template>
    <div class="container-page">   
        <div class="page-header container-flex">
            <h1 class="page-title">Black in Business</h1>
        </div>
        <div class="container-flex column" id="black-in-business">
            <div class="experience-about">
                <p>
                    The 2023 Black History Month social media campaign at the University of Iowa Tippie College of Business continues to amplify the voices of our Black students. We captured their stories through a series of videos and interviews, and shared them on our social media channels.
                    <br/>
                    <br/>
                    Our goal for this campaign is to elevate the narratives and experiences of our Black students, a group that remains underrepresented and underserved in the field of business. We hope that by sharing their unfiltered experiences, we can shine a light on their unique perspectives, and continue to foster a more inclusive and equitable community.
                    <br/>
                    <br/>
                    The campaign has garnered widespread positive feedback from current students, alumni, faculty, staff, and our social media colleagues outside the university. Moreover, it has helped humanize a section of our student population that has often felt invisible and marginalized. By creating this platform of visibility, we aim to inspire prospective students to envision themselves as part of our college community.
                </p>
            </div>

            <div class="experience-project container-flex">
                <div class="project-box container-flex">
                    <video-player
                        class="experience-video"
                        src="./assets/tippie-intern/bib/jordyn.mp4"
                        poster=""
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
                    <h1 class="project-title"><a href="https://www.instagram.com/reel/Cnm-RmLjCXJ/?igshid=YmMyMTA2M2Y=" target="_blank">Jordyn Johnson</a></h1>

                    <p class="project-desc">
                    Sometimes a smile is all it takes.
                    <br/>
                    <br/>
                    Link to original post (audio was removed on Instagram): <a class="desc-link" href="https://www.instagram.com/reel/Cnm-RmLjCXJ/?igshid=YmMyMTA2M2Y=" target="_blank">https://www.instagram.com/reel/Cnm-RmLjCXJ/?igshid=YmMyMTA2M2Y=</a>
                    </p>
                    
                    <p class="project-date">01/19/2023</p>
                </div>
            </div>

            <div class="experience-project container-flex">
                <div class="project-box container-flex">
                    <video-player
                        class="experience-video"
                        src="./assets/tippie-intern/bib/mckenzie.mp4"
                        poster=""
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
                    <h1 class="project-title"><a href="https://www.instagram.com/p/CoKwhT6jC0R/" target="_blank">McKenzie Turner</a></h1>

                    <p class="project-desc">
                    Professional attire doesn't have to come at the cost of individual style.
                    <br/>
                    <br/>
                    Link to original post: <a class="desc-link" href="https://www.instagram.com/p/CoKwhT6jC0R/" target="_blank">https://www.instagram.com/p/CoKwhT6jC0R/</a>
                    </p>
                    
                    <p class="project-date">02/02/2023</p>
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
        document.title = "Black in Business | Lily Dosedel"
    },
    name: "BlackInBusinessVue",
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
    width: 370px;
    height: 650px;
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
  