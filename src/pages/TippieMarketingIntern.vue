<template>
    <div class="container-page">   
        <div class="page-header container-flex">
            <h1 class="page-title">Tippie Marketing Intern</h1>
        </div>
        <div class="container-flex column" id="experience">
            <div class="container-grid" id="experience-grid">
                <div class="experience-item" id="mother-language-card">
                    <a href="/international-mother-language-day">
                        <div class="overlay">
                            <p class="subtitle">International Mother Language Day</p>
                        </div>
                    </a>
                </div>
                <div class="experience-item" id="black-in-business-card">
                    <a href="/black-in-business">
                        <div class="overlay">
                            <p class="subtitle">Black in Business</p>
                        </div>
                    </a>
                </div>
                <div class="experience-item" id="grounded-card">
                    <a href="/this-is-how-i-stay-grounded">
                        <div class="overlay">
                            <p class="subtitle">#ThisIsHowIStayGrounded</p>
                        </div>
                    </a>
                </div>
                <div class="experience-item" id="takeover-card">
                    <a href="/student-summer-takeovers">
                        <div class="overlay">
                            <p class="subtitle">Student Summer Takeovers</p>
                        </div>
                    </a>
                </div>
                <div class="experience-item" id="stories-card">
                    <a href="/stories">
                        <div class="overlay">
                            <p class="subtitle">Stories</p>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>
  
<script>
export default {
    created() {
        document.title = "Tippie Marketing Intern | Lily Dosedel"
    },
    name: "TippieMarketingInternVue"
}
</script>

<style scoped>
#experience {
    margin-inline: 25px;
}

#experience-grid {
    margin-inline: 15px;
    margin-block: 0;
}
.experience-item {
    position: relative;
    padding: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    font-size: 20px;
    place-items: center;
    color: #fff;
    transition: 0.4s;
    cursor: pointer;
    border-radius: 20px;
    border: 2px solid var(--blue);
    /* make the background image cover the whole card */
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
}

#experience-grid .experience-item:nth-child(1) {
    grid-column: span 1;
    grid-row: span 3;
}

#experience-grid .experience-item:nth-child(2) {
    grid-column: span 1;
    grid-row: span 3;
}

#experience-grid .experience-item:nth-child(3) {
    grid-column: span 2;
    grid-row: span 1;
}

#experience-grid .experience-item:nth-child(4) {
    grid-column: span 1;
    grid-row: span 2;
}

#experience-grid .experience-item:nth-child(5) {
    grid-column: span 1;
    grid-row: span 2;
}

#black-in-business-card {
    background-image: url(../../public/assets/tippie-intern/bib/bib.png);
}

#grounded-card {
    background-image: url(../../public/assets/tippie-intern/tihisg/tihisg.png);
}

#mother-language-card {
    background-image: url(../../public/assets/tippie-intern/motherlanguage/motherlanguage.png);
}

#takeover-card {
    background-image: url(../../public/assets/tippie-intern/summer-takeovers/summer-takeovers.jpg);
}

#stories-card {
    background-image: url(../../public/assets/tippie-intern/stories/stories.png);
}

@media only screen and (max-width: 670px) {
    #experience-grid {
        display: flex;
        flex-direction: column;
    }
    .experience-item {
        height: 670px;
    }
}
</style>
  