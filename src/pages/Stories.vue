<template>
    <div class="container-page">
        <div class="page-header container-flex">
            <h1 class="page-title">Instagram Stories</h1>
        </div>
        <div class="container-flex column experience-page">
            <div class="experience-about">
                <p>
                    One of my responsibilities as an intern is to create Instagram story graphics to promote certain events or activities within the Tippie College of Business. 
                    <br/>
                    <br/>
                    I construct these graphics using Adobe Illustrator and/or Photoshop, and I create every graphic in adherence to the University of Iowa and Tippie College of Business’s branding guidelines. Some of these graphics incorporated interactive Instagram story features such as polls, links, or other stickers at the time of posting, which are not included in the images here. 
                </p>
            </div>

            <div class="experience-project container-flex" id="story-container">
                <carousel :slides="slides" :interval="2500" controls indicators></carousel>
                
                <div class="project-box container-flex project-details">
                    <h1 class="project-title"><a href="https://www.instagram.com/tippiecollege/">Tippie College of Business Instagram Stories</a></h1>

                    <p class="project-desc">
                    Some of the stories I created for the Tippie College of Business Instagram account.
                    </p>
                </div>
            </div>
        </div>     
    </div>
</template>
  
<script>
import Carousel from "../components/carousel/CarouselVue.vue";

export default {
    name: "StoriesVue",
    components: { Carousel },
    created() {
        document.title="Stories | Lily Dosedel"
    },
    data: () => ({
        slides: [
            "stories-1.png",
            "stories-2.png",
            "stories-3.png",
            "stories-4.png",
            "stories-5.png",
            "stories-6.png",
        ],
    }),
}
</script>

<style scoped>
</style>