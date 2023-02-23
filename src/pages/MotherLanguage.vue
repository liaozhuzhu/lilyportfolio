<template>
    <div class="container-page">
        <div class="page-header container-flex">
            <h1 class="page-title">International Mother Language Day</h1>
        </div>
        <div class="container-flex column experience-page">
            <div class="experience-about">
                <p>
                    International Mother Language Day is a global observance that celebrates linguistic and cultural diversity around the world. This day provides a unique opportunity to promote the importance of cultural diversity and the significance of language as a means of communication, specifically within business.  
                    <br/>
                    <br/>
                    Ideated during the summer portion of my internship, this project stems from my passion for world languages, cultures, and linguistics. As someone who is involved in a lot of the cultural organizations within Tippie, I realized how amazing students who are attending classes, completing homework, and connecting with others in English, despite their native language being completely different. It’s truly a superpower that most native English speakers do not recognize or appreciate.  
                    <br/>
                    <br/>
                    Since this video is my own passion project, my supervisors gave me full responsibility to execute the idea. I coordinated the filming, recorded the footage, and edited the footage into the final video. 
                </p>
            </div>

            <div class="experience-project container-flex">
                <div class="project-box container-flex">
                    <video-player
                        class="experience-video"
                        src="./assets/tippie-intern/motherlanguage/motherlanguage.mp4"
                        poster="./assets/tippie-intern/motherlanguage/thumbnail.png"
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
                    <h1 class="project-title"><a href="https://www.instagram.com/p/Co79nhyDYfF/?hl=en" target="_blank">Tippie International Mother Language Day</a></h1>

                    <p class="project-desc">
                    "Business is Global"
                    <br/>
                    <br/>
                    Link to original post: <a class="desc-link" href="https://www.instagram.com/p/Co79nhyDYfF/?hl=en" target="_blank">https://www.instagram.com/p/Co79nhyDYfF/?hl=en</a>
                    </p>
                    
                    <p class="project-date">02/21/2023</p>
                </div>
            </div>
        </div>     
    </div>
</template>
  
<script>
export default {
    name: "MotherLanguageVue",
    created() {
        document.title="International Mother Language Day | Lily Dosedel"
    }
}
</script>

<style scoped>
</style>