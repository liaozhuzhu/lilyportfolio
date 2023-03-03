<template>
    <div class="container-page">   
        <div class="page-header container-flex">
            <h1 class="page-title">Black in Business</h1>
        </div>
        <div class="container-flex column experience-page">
            <div class="experience-about">
                <p>
                    The 2023 Black in Business social media campaign in celebration of Black History Month is a continuation of the original Black in Business campaign started in 2021. With the same goal of amplifying the voices of Black students in the Tippie College of Business, the Tippie social media team captured the stories of 6 students through a series of videos and interviews shared on the @tippiecollege Instagram page.  
                    <br/>
                    <br/>
                    Our goal for this campaign was to elevate the narratives and experiences of our Black students, a group that remains underrepresented and underserved in the field of business. We hope that by sharing what it means to them to be Black in business, we can shine a light on their unique perspectives and continue to foster a more inclusive and equitable community. 
                    <br/>
                    <br/>
                    The campaign has garnered widespread positive feedback from current students, alumni, faculty, and staff. Moreover, it has helped uplift a section of our student population that has often felt invisible and marginalized. By creating this platform of visibility, we aim to inspire current and prospective students to feel that they have a place within the Tippie College of Business.  
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

            <div class="experience-project container-flex">
                    <div class="project-box container-flex">
                        <video-player
                            class="experience-video"
                            src="./assets/tippie-intern/bib/bibteaser.mp4"
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
                        <h1 class="project-title"><a href="https://www.instagram.com/reel/CpN-rgwjkfy/?hl=en" target="_blank">Continuing the Conversation Teaser</a></h1>

                        <p class="project-desc">
                        Continuing change means continuing the conversation.
                        <br/>
                        <br/>
                        Link to original post: <a class="desc-link" href="https://www.instagram.com/reel/CpN-rgwjkfy/?hl=en" target="_blank">https://www.instagram.com/reel/CpN-rgwjkfy/?hl</a>
                        </p>
                    
                        <p class="project-date">02/28/2023</p>
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
</style>
  