<template>
    <div class="container-page">
        <div class="page-header container-flex">
            <h1 class="page-title">International Mother Language Day</h1>
        </div>
        <div class="container-flex column experience-page">
            <div class="experience-about">
                <p>
                    International Mother Language Day is a global observance that celebrates linguistic and cultural diversity around the world.
                    <br/>
                    <br/>
                    This day provides a unique opportunity to promote the importance of cultural diversity and the significance of language as a means of communication. This day highlights the role of mother languages in shaping identities, connecting people, and preserving cultural heritage.
                    <br/>
                    <br/>
                    International Mother Language Day also offers a platform to promote language learning, which is essential for personal growth, career advancement, and global citizenship. I believe that promoting language learning could be a valuable addition to any business's corporate social responsibility initiatives.
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
                    <h1 class="project-title"><a href="#">Tippie International Mother Language Day</a></h1>

                    <p class="project-desc">
                    "Business is Global"
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