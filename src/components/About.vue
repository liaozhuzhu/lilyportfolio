<template>
    <div class="container-page">
        <div class="page-header container-flex">
            <h1>Hello!</h1>
        </div>
        <div class="container-flex fullheight"  id="about">
            <div class="about-child" id="desc">
                <p>My name is Lily Dosedel, and I'm a second-year, University of Iowa student pursuing majors in Marketing and Business Analytics & Information Systems (BAIS) with a minor in Chinese. 
                    <br/><br/>
                    Since coming to college, I've been able to experience a wide range of things and gain new insights on life. After joining various organizations focused on advancing diversity, equity, and inclusion (DEI) and cultural awareness, it's now part of my mission to advocate for those things within the spaces that I'm in. In addition, I've learned how to harness my natural inclination towards creativity into a career path I'm passionate about–marketing! I'm striving towards becoming a creative director for a brand. In the meantime, however, I'm eager to experience as much I can within my time in college. 
                    <br/><br/>
                    While I consider myself a student first, I also have a variety of interests and skills not related to my academic goals. I'm an artist, a chef, a traveler, and an aspiring polyglot. 
                    <br/><br/>
                    Feel free to connect with me to chat about anything!
                </p>
                <br/><br/>
                <div class="container-flex icon" id="about-socials">
                    <a href="https://www.linkedin.com/in/lily-dosedel/" target="_blank"><fa icon="fa-brands fa-linkedin-in"/></a>
                    <a href="https://www.instagram.com/lil.dos/?hl=en" target="_blank"><fa icon="fa-brands fa-instagram"/></a>
                    <a href="mailto:lily-dosedel@uiowa.edu" target="_blank"><fa icon="fa-solid fa-envelope"/></a>
                    <a href="#" target="_blank"><fa icon="fa-solid fa-file"/></a>
                </div>
            </div> 
        

            <img class="about-child" src="../static/images/about.jpg"/>
        </div>
    </div>
</template>
  
<script>
export default {
    name: "AboutVue",
    created() {
        document.title="About | Lily Dosedel"
    }
}
</script>

<style scoped>
</style>