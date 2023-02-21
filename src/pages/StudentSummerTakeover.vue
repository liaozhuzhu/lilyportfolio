<template>
    <div class="container-page">
        <div class="page-header container-flex">
            <h1 class="page-title">Student Summer Takeovers</h1>
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
                    <div class="takeover-grid">
                        <div class="takeover-box" v-for="takeover in takeovers" :key="takeover.src">
                            <a :href="takeover.href" target="_blank">
                                <img :src="require(`../static/summer-takeovers/${takeover.src}`)"/>
                            </a>
                        </div>
                    </div>
                </div>
                
                <div class="project-box container-flex project-details">
                    <h1 class="project-title"><a href="https://www.instagram.com/tippiecollege/">Student Summer Takeovers 2022</a></h1>

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