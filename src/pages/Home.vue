<template>
    <div class="container-flex column fullheight" id="home">
        <div class="container-flex column">
            <video autoplay loop muted playsinline>
                    <source src="../static/images/wallpaper.mp4">
            </video>
            <h1>Lily Dosedel</h1>
            <div class="container-flex icon">
                <a href="https://www.linkedin.com/in/lily-dosedel/" target="_blank"><fa icon="fa-brands fa-linkedin-in"/></a>
                <a href="https://www.instagram.com/lil.dos/?hl=en" target="_blank"><fa icon="fa-brands fa-instagram"/></a>
                <a href="contact"><fa icon="fa-solid fa-envelope"/></a>
                <a href="./lilydosedel.pdf" target="_blank"><fa icon="fa-solid fa-file"/></a>
            </div>
        </div>
    </div>

    <div class="container-grid">

        <div class="box card-images">
            <a href="/about">
                <div class="content-grid">
                    <video autoplay loop muted playsinline>
                        <source src="../static/images/videography.mp4">
                    </video>
                    <div class="overlay">
                        <p class="subtitle">Videography</p>
                    </div>
                </div>
            </a>
        </div>
        <div class="box card-images" id="experience-card">
            <a href="/experience">
                <div class="content-grid">
                    <div class="overlay">
                        <p class="subtitle">Experience</p>
                    </div>
                </div>
            </a>
        </div>
        <div class="box card-images" id="resume-card">
            <a href="./lilydosedel.pdf" target="_blank">
                <div class="content-grid">
                    <div class="overlay">
                        <p class="subtitle">Resume</p>
                    </div>
                </div>
            </a>
        </div>
        <div class="box card-images" id="about-card">
            <a href="/about">
                <div class="content-grid">
                    <div class="overlay">
                        <p class="subtitle">About</p>
                    </div>
                </div>
            </a>
        </div>
        <div class="box card-images" id="photography-card">
            <a href="/about">
                <div class="content-grid">
                    <video autoplay loop muted playsinline>
                        <source src="../static/images/photography.mp4">
                    </video>
                    <div class="overlay">
                        <p class="subtitle">Photography</p>
                    </div>
                </div>
            </a>
        </div>
        <div class="box card-images" id="art-card">
            <a href="/about">
                <div class="content-grid">
                    <div class="overlay">
                        <p class="subtitle">Art</p>
                    </div>
                </div>
            </a>
        </div>
        <div class="box card-images" id="graphicdesign-card">
            <a href="/about">
                <div class="content-grid">
                    <div class="overlay">
                        <p class="subtitle">Graphic Design</p>
                    </div>
                </div>
            </a>
        </div>
        <div class="box card-images" id="contact-card">
            <a href="/contact">
                <div class="content-grid">
                    <div class="overlay">
                        <p class="subtitle">Contact</p>
                    </div>
                </div>
            </a>
        </div>
    </div>
</template>
  
<script>
export default {
    created() {
        document.title = "Lily Dosedel"
    },
    name: "HomeVue"
}
</script>

<style scoped>
</style>
  