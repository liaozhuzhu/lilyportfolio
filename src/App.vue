<template>
  <Navbar />
  <router-view />
  <Footer/>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: 'App',
  components: {
    Navbar,
    Footer
  }
}
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Roboto:300,400,500&display=swap");
@import url('https://fonts.googleapis.com/css2?family=Gloock&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Gloock&family=Montserrat:wght@300;400;500;600;700&display=swap');

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Montserrat', sans-serif;
    scroll-behavior: smooth;
    overflow-x: hidden;
}

:root {
    --blue: rgb(75, 91, 112);
    --white: #fbfefb;
    --heading: 'Gloock', serif;
}

/* ===== Global ===== */
.container-page {
    background-color: var(--white);
}

.fullheight {
    height: 100vh;
}

.container-flex {
    display: flex;
    justify-content: center;
    align-items: center;
}

.column {
    flex-direction: column;
}

.icon {
    font-size: 1.5rem;
    gap: 20px;
}

.icon a {
    color: white;
    transition: 0.3s ease-in;
}

.icon a:hover {
    color: var(--blue);
}

.subtitle {
    font-size: 3rem;
}

.desc-link {
    color: var(--blue);
}
/* ===== Navbar ===== */
.navbar {
    position: sticky;
    z-index: 1030;
    top: 0;
    left: 0;
    width: 100%;
    background-color: var(--white);
    display: flex;
    padding: 25px;
    padding-block: 15px;
    align-items: center;
}

/* ===== Footer ===== */
#footer {
    gap: 10px;
    margin-block: 15px;
}

#footer-links a{
    font-size: 1.2rem;
    color: black;
    opacity: 0.5;
    transition: 0.2s;
}

#footer-links a:hover {
    opacity: 1;
}

#footer p {
    opacity: 0.3;
    font-size: 0.7rem;
}

#liao {
    opacity: 1;
    color: inherit;
    text-decoration: none;
}

/* ===== Home ===== */
#home {
    width: 100%;
    position: relative;
}

#home div {
    line-height: 5rem;
    color: white;
    width: 100%;
    overflow-y: hidden;
}

#home h1 {
    font-size: 5rem;
    overflow-y: hidden;
    height: 100%;
    font-family: var(--heading);
    letter-spacing: 7px;
    text-align: center;
}

#home video {
    height: 100vh;
    width: 100%;
    object-fit: cover;
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    z-index: -1;
    overflow: hidden;
} 

/* ===== About ===== */
.page-title {
    font-family: var(--heading);
    letter-spacing: 4px;
}

.page-header {
    margin-left: 25px;
    margin-right: auto;
    padding-top: 20px;
    width: 100%;
}

.page-header h1 {
    font-size: 60px;
    font-style: normal;
    font-weight: 400;
    line-height: 64px;
    padding-bottom: 20px;
    padding-top: 0px;
    text-align: left;
    text-transform: none;
    width: 100%;
    color: #111;
}

#about {
    margin: 25px;
    margin-top: 7px;
    gap: 25px;
}

.about-child {
    width: 100%;
    height: 100%;
}

#about p {
    max-width: 100%;
    text-align: left;
    font-size: 1rem;
    font-weight: 300;
    line-height: 30px;
    color: #333333;
}

#about img {
    object-fit: cover;
}

#about-socials {
    justify-content: left;
    margin-block: 10px;
}

#about-socials a{
    color: var(--blue) !important;
    opacity: 0.5;
}

#about-socials a:hover {
    opacity: 1;
}

/* ===== Contact ====== */
.contact-form {
  margin: 25px;
  width: 500px;
}

.form-input {
  display: flex;
  flex-direction: column;
  width: 100%;
}

.form-input label {
  color: #333333;
    font-family: arial;
    font-weight: bold;
    font-size: 14px;
    font-style: normal;
    margin-bottom: 10px;
    margin-top: 0px;
    text-align: left;
    text-transform: none;
}

.form-input input {
  background-color: #ffffff;
  color: #333333;
  font-size: 18px;
  margin-bottom: 30px;
  margin-top: 0px;
  padding-left: 10px;
  text-align: left;
  height: 50px;
  padding-bottom: 13px;
  padding-top: 13px;
  resize: none;
  border-radius: 3px;
  border: 1px solid rgba(51, 51, 51, 0.6);
}

.form-input textarea {
  background-color: #ffffff;
  border: 1px solid rgba(51, 51, 51, 0.6);
  border-radius: 3px;
  color: #333333;
  font-size: 18px;
  margin-bottom: 30px;
  margin-top: 0px;
  padding-left: 10px;
  text-align: left;
  height: 200px;
  padding-bottom: 13px;
  padding-top: 13px;
  resize: none;
}

.form-input input:focus, textarea:focus {
  outline: none;
}

.contact-form button {
    border-radius: 5px;
    color: #333333;
    font-family: arial;
    font-size: 16px;
    font-style: normal;
    font-weight: bold;
    line-height: 40px;
    padding-left: 30px;
    padding-right: 30px;
    text-transform: none;
    border: 1px solid rgba(51, 51, 51, 0.6);
    cursor: pointer;
    background-color: #ffffff;
    transition: 0.1s;
}

.contact-form button:hover {
    border-color: #dddddd;
}

/* ===== Experience ===== */
#experience {
    justify-content: left !important;
    margin-inline: 25px;
}

/* make a 2x2 grid container */
#experience-grid {
    display: grid;
    grid-template-columns: repeat(100px, 1fr);
    grid-template-rows: repeat(50px, 1fr);
    grid-gap: 20px;
    height: 100%;
    gap: 10px;
    height: 75vh;
    width: 100%;
}


.experience-item {
    border-radius: 20px;
    height: 100%;
    width: 100%;
    padding: 15px;
    position: relative;   
    background-repeat: no-repeat;
    background-size: cover;
    background-size:100% auto;
    border: 2px solid var(--blue);
}

.experience-item a {
    height: 100%;
    width: 100%;
    text-decoration: none;
    color: var(--white);
    opacity: 0;
    transition: 0.5s;
}

.experience-item p {
    text-align: center;
}

.experience-item:hover a {
    opacity: 1;
}

.experience-item:hover .overlay {
    background: rgb(220, 220, 220);
    background: rgb(75, 91, 112, 0.5);
}

#tippie-intern {
    background-image: url(./static/images/tippie.JPG);
}

#marketing-institute {
    display: none;
}

.experience-page {
    margin-inline: 25px;
    gap: 100px;
    margin-bottom: 50px;
}


.experience-project {
    width: 100%;
    height: 100%;
    gap: 25px;
    justify-content: left;
}
.experience-video {
    width: 370px;
    height: 650px;
    border: 5px solid black;
    border-radius: 20px;
}

.project-box {
    width: 100%;
}

.project-details {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 25px
}

.project-title a{
    color: black;
}

.project-desc {
    font-size: 1.2rem;
    line-height: 1.5;
    text-align: left;
    margin: 0;
    width: 100%;
    height: 100%;
}

.project-date {
    font-size: 0.85rem;
}

/* ===== Home ===== */
.container-grid {
    position: relative;
    max-width: 100%;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    grid-template-rows: minmax(100px, auto);
    margin: 100px;
    grid-auto-flow: dense;
    grid-gap: 10px;
}

#home-grid {
    min-height: 100vh;
}

#home-grid .box {
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
}

.overlay {
    position: absolute;
    top: 0;
    left: 0;
    transition: 0.4s;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
    background-color: #000;
    background: transparent;
    border-radius: 20px;
}

#home-grid .box:hover .overlay {
    background: rgb(220, 220, 220);
    background: rgb(75, 91, 112, 0.5);
}

#home-grid .box p {
    opacity: 0;
    transition: 0.5s;
}

#home-grid .box:hover p {
    opacity: 1;
}

#home-grid .box img {
    position: relative;
    max-width: 100px;
    margin-bottom: 10px;
}

#home-grid .box:nth-child(1) {
    grid-column: span 2;
    grid-row: span 1;
}

#home-grid .box:nth-child(2) {
    grid-column: span 1;
    grid-row: span 2;
}

#home-grid .box:nth-child(4) {
    grid-column: span 1;
    grid-row: span 2;
}

#home-grid .box:nth-child(5) {
    grid-column: span 2;
    grid-row: span 1;
}

#home-grid .box a {
    text-decoration: none;
    color: white;
}

.card-images {
    background-position: center;
    background-size: cover;
    overflow-y: hidden;
}

#resume-card {
    background-image: url(./static/images/resume.jpg);
}

#about-card {
    background-image: url(./static/images/about.jpg);
}

#experience-card {
    background-image: url(./static/images/experience.jpg);
}

#art-card {
    background-image: url(./static/images/art.JPG);
}

#photography-card {
    position: relative;
}

#graphicdesign-card {
    background-image: url(./static/images/graphicdesign.PNG);
}

#contact-card {
    background-image: url(./static/images/contact.JPG  );
}

.content-grid video {
    position: absolute;
    object-fit: cover;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
}

/* ===== Media Query ===== */
@media only screen and (max-width: 991px) {
    /* ===== Globals ===== */
    .subtitle {
        font-size: 1.75rem;
    }
    /* ===== Pages ===== */
    .page-header h1{
        font-size: 2.5rem;
        line-height: 45px;
        margin-right: 10px;
    }
    #home {
        background-attachment: scroll;
    }
    #experience {
        background-attachment: scroll;
    }
    #home-grid {
        grid-template-rows: minmax(auto, auto);
        margin: 25px !important;
    }
    #home-grid .box {
        grid-column: unset !important;
        grid-row: unset !important;
    }

    /* ===== Experience ===== */    
  .experience-project {
        flex-direction: column;
        align-items: center;
    }
    .project-details {
        text-align: left;
    }

    .project-title {
        font-size: calc(20px + 1vw);
    }

    .project-desc {
        font-size: calc(10px + 1vw);
    }

    .project-date {
        font-size: calc(5px + 1vw);
    }
}
</style>
