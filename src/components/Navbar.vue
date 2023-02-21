<template>
    <div class="navbar">
        <div class="home-link"><a href="/">👩🏻</a></div>
        <ul class="desktop-ul">
            <li><a href="about">About</a></li>
            <li><a href="experience">Experience</a></li>
            <li><a href="redirect">Digital Media</a></li>
            <li><a href="contact">Contact</a></li>
        </ul>
        <div id="hamburger-icon" @click="toggleMobileMenu()">
            <div class="bar1"></div>
            <div class="bar2"></div>
            <div class="bar3"></div>
            <ul class="mobile-menu">
                <li class="mobile-menu-item"><a href="about">About</a></li>
                <li class="mobile-menu-item"><a href="experience">Experience</a></li>
                <li class="mobile-menu-item"><a href="redirect">Digital Media</a></li>
                <li class="mobile-menu-item"><a href="contact">Contact</a></li>
            </ul>
        </div>
    </div>
</template>
  
<script>
export default {
  name: "NavbarVue",
  methods: {
    toggleMobileMenu() {
        document.getElementById("hamburger-icon").classList.toggle('open');
    }  
  }
}
</script>
  
<style scoped>
#hamburger-icon {
    margin: auto 0;
    display: none;
    cursor: pointer;
    margin-left: auto;
}

#hamburger-icon div{
    width: 35px;
    height: 3px;
    background-color: var(--blue);
    margin: 6px 0;
    transition: 0.4s;
}

.open .bar1 {
    -webkit-transform: rotate(-45deg) translate(-6px, 6px);
    transform: rotate(-45deg) translate(-6px, 6px);
}
  
.open .bar2 {
    opacity: 0;
}
  
.open .bar3 {
    -webkit-transform: rotate(45deg) translate(-6px, -8px);
    transform: rotate(45deg) translate(-6px, -8px);
}
  
.open .mobile-menu {
    display: flex;
    align-items: center;
    justify-content: space-around;
    list-style-type: none;
}
  
.mobile-menu {
    display: none;
    position: absolute;
    left: 0; 
    width: 100%;
    background-color: var(--white);
    gap: 0px;
}

.mobile-menu-link {
  font-size: 0.3rem;
}

.home-link {
    text-decoration: none;
    font-size: 2rem;
}

.home-link:visited, .home-link:active {
    text-decoration: none;
    color: black;
}

.desktop-ul {
    margin-left: auto;
    display: flex;
    gap: 20px;
    list-style-type: none;
}

.navbar ul a {
    color: var(--blue);
    opacity: 0.6;
    transition: 0.2s;
    text-decoration: none;
    font-weight: 500;
}

.navbar ul a:hover {
    opacity: 1;
}

@media only screen and (max-width: 500px) {
/* ===== Navbar ===== */
  #hamburger-icon {
        display: block;
  }
  .navbar ul {
        display: none;
    }
}
</style>
  