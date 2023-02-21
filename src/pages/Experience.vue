<template>
    <div class="container-page">
        <div class="page-header container-flex">
            <h1 class="page-title">Experience</h1>
        </div>
        <div class="container-flex column"  id="experience">
            <div class="container-flex" id="experience-grid">
                <div class="container-flex experience-item" id="tippie-intern">
                    <a href="/tippie-marketing-intern">
                        <div class="overlay">
                            <p class="subtitle">Tippie College of Business Social Media Marketing Intern</p>
                        </div>
                    </a>
                </div>
                <div class="container-flex experience-item" id="marketing-institute">
                    <a href="#">
                        <div class="overlay">
                            <p class="subtitle">Marketing Institute Consultant</p>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>
  
<script>
export default {
    name: "ExperienceVue",
    created() {
        document.title="Experience | Lily Dosedel"
    }
}
</script>

<style scoped>
@media only screen and (max-width: 930px) {
    #tippie-intern {
        background-size: cover;
    }
}
</style>