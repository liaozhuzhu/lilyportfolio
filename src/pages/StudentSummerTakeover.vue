<template>
    <div class="container-page">
        <div class="page-header container-flex">
            <h1 class="page-title">Student Summer Takeovers</h1>
        </div>
        <div class="container-flex column experience-page">
            <div class="experience-about">
                <p>
                    The student takeover project in Summer 2022 was a series of Instagram takeovers by Tippie College of Business students who were completing an internship or studying abroad. The takeovers were designed to showcase the breadth of opportunities Tippie students have and to provide a platform for students to share their experiences and perspectives. 
                    <br/>
                    <br/>
                    The takeovers featured 22 total students from a variety of backgrounds and majors, and each takeover consisted of a series of Instagram stories that were posted over the course of a day, detailing aspects of their everyday routine or overall experience.  
                    <br/>
                    <br/>
                    This project was my main task during the intial summer portion of my internship. I reached out to all potential students, facilitated brainstorming meetings with each student, scheduled the content on Tippie’s content calendar, wrote each caption, aggregated all content and information to post the stories and feed photos for each student, and finally managed the Instagram account after posting.  
                </p>
            </div>

            <div class="experience-project container-flex">
                <div class="project-box container-flex">
                    <div class="takeover-grid">
                        <div class="takeover-box" v-for="takeover in takeovers" :key="takeover.src">
                            <a :href="takeover.href" target="_blank">
                                <img :src="require(`../static/summer-takeovers/${takeover.src}`)"/>
                            </a>
                        </div>
                    </div>
                </div>
                
                <div class="project-box container-flex project-details">
                    <h1 class="project-title"><a href="https://www.instagram.com/tippiecollege/" target="_blank">Student Summer Takeovers 2022</a></h1>

                    <p class="project-desc">
                    Here are a handful of the takeovers I directed! Click on each one to see the full takeover.
                    </p>
                    
                    <p class="project-date">06/02/2022 - 08/16/2022</p>
                </div>
            </div>
        </div>     
    </div>
</template>
  
<script>
import { takeovers } from '../assets/takeovers.js'
export default {
    name: "StudentSummerTakeoverVue",
    created() {
        document.title="Student Summer Takeover | Lily Dosedel"
    },
    data() {
        return {
            takeovers: takeovers
        }
    },
}
</script>

<style scoped>

/* make an instagram grid */
.takeover-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 2px;
    width: auto;
    height: 650px;
    border: 5px solid black;
    background-color: black;
    border-radius: 20px;
    -ms-overflow-style: none;  /* Internet Explorer 10+ */
    scrollbar-width: none;  /* Firefox */
}

.takeover-grid::-webkit-scrollbar { 
    display: none;  /* Safari and Chrome */
}

.takeover-box {
    width: 150px;
    height: 150px;
    overflow-y: hidden;
}

.takeover-box img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

@media only screen and (max-width: 600px) {
    .takeover-grid {
        height: 500px;
    }
    .takeover-box {
        width: 100px;
        height: 100px;
    }
}
</style>