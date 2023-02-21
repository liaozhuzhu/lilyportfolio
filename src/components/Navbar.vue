<template>
    <div class="navbar">
        <div><a href="/">👩🏻</a></div>
        <ul>
            <li><a href="about">About</a></li>
            <li><a href="experience">Experience</a></li>
            <li><a href="redirect">Digital Media</a></li>
            <li><a href="contact">Contact</a></li>
        </ul>
        <div id="hamburger-icon" onclick="toggleMobileMenu(this)">
            <div class="bar1"></div>
            <div class="bar2"></div>
            <div class="bar3"></div>
            <ul class="mobile-menu">
                <li><a href="about">About</a></li>
                <li><a href="experience">Experience</a></li>
                <li><a href="redirect">Digital Media</a></li>
                <li><a href="contact">Contact</a></li>
            </ul>
        </div>
    </div>
</template>
  
<script>
export default {
  name: "NavbarVue",
  methods: {
    toggleMobileMenu(menu) {
        menu.classList.toggle('open');
    }  
  }
}
</script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@media only screen and (max-width: 500px) {
/* ===== Navbar ===== */
  #hamburger-icon {
        display: none;
  }
}
</style>
  