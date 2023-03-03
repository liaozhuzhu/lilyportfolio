<template>
    <div class="container-page">
        <div class="page-header container-flex">
            <h1 class="page-title">Instagram Stories</h1>
        </div>
        <div class="container-flex column experience-page">
            <div class="experience-about">
                <p>
                    This project was my main task during the intial summer portion of my internship. I reached out to all potential students, facilitated brainstorming meetings with each student, scheduled the content on Tippie’s content calendar, wrote each caption, aggregated all content and information to post the stories and feed photos for each student, and finally managed the Instagram account after posting.  
                    <br/>
                    <br/>
                    I construct these graphics using Adobe Illustrator and/or Photoshop, and I create every graphic in adherence to the University of Iowa and Tippie College of Business’s branding guidelines. Some of these graphics incorporated interactive Instagram story features such as polls, links, or other stickers at the time of posting, which are not included in the images here. 
                </p>
            </div>

            <div class="experience-project container-flex" id="story-container">
                <div class=" project-box" id="story-gallery">
                    <img src="../static/stories/stories-1.png"/>
                    <img src="../static/stories/stories-2.png"/>
                    <img src="../static/stories/stories-3.png"/>
                    <img src="../static/stories/stories-4.png"/>
                    <img src="../static/stories/stories-5.png"/>
                    <img src="../static/stories/stories-6.png"/>
                </div>
                
                <div class="project-box container-flex project-details" style="width: 50%;">
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
#story-container {
    justify-content: center !important;
}
#story-gallery {
  overflow-x: scroll;
  white-space: nowrap;
  width: 425px;
}

#story-gallery img {
  display: inline-block;
  width: 400px;
  object-fit: cover;
}

@media only screen and (max-width: 550px) {
    #story-gallery {
        width: 325px;
    }

    #story-gallery img {
        width: 300px;
    }
}
</style>