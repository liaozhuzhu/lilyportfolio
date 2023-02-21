<template>
    <div class="container-page">
        <div class="page-header container-flex">
            <h1 class="page-title">Instagram Stories</h1>
        </div>
        <div class="container-flex column experience-page">
            <div class="experience-about">
                <p>
                    I create Instagram stories for the College of Business to promote the college's events and initiatives. I also create stories to promote the college's social media accounts and encourage students to follow them.
                </p>
            </div>

            <div class="experience-project container-flex">
                <div class="project-box container-flex" id="story-gallery">
                    <img src="../static/stories/stories-1.png"/>
                    <img src="../static/stories/stories-2.png"/>
                    <img src="../static/stories/stories-3.png"/>
                    <img src="../static/stories/stories-4.png"/>
                </div>
                
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
export default {
    name: "StoriesVue",
    created() {
        document.title="Stories | Lily Dosedel"
    },
}
</script>

<style scoped>
#story-gallery {
    gap: 10px;
}

@media only screen and (max-width: 550px) {
    #story-gallery {
        flex-direction: column;
    }

    #story-gallery img {
        width: 100%;
    }
}
</style>