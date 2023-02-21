<template>
    <div class="container-page">
        <div class="container-flex fullheight column">
            <h1 style="font-size: 10rem">🙍🏻‍♀️</h1>
            <h1 class="disclaimer-title">Sorry,</h1>
            <br/>
            <br/>
            <p class="disclaimer-desc">
                We are still working on building this page. 
                <br/>
                <br/>
                In the meantime please check out the <a href="/about" class="desc-link">about</a> and <a href="/experience" class="desc-link">experience</a> page.
            </p>
        </div>
    </div>
</template>
  
<script>
export default {
    name: "RedirectVue",
    created() {
        document.title="Redirect | Lily Dosedel"
    }
}
</script>

<style scoped>
.disclaimer-title {
    font-size: 3rem;
}

.disclaimer-desc {
    font-size: 1.2rem;
    text-align: center;
}
</style>