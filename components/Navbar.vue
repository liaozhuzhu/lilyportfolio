<template>
    <div class="container flex column p-10">
        <div>
            <NuxtLink to="/"><img src="~/assets/imgs/LilyDosedel.svg" alt="logo" class="logo"/></NuxtLink>
        </div>
        <ul class="container flex column">
            <li><NuxtLink to="/">Home</NuxtLink></li>
            <li><div>Search</div></li>
            <li><NuxtLink to="/">Explore</NuxtLink></li>
            <li><NuxtLink to="/">Reels</NuxtLink></li>
            <li><NuxtLink to="/">Recommendations</NuxtLink></li>
            <li><NuxtLink to="/">Contact</NuxtLink></li>
            <li><NuxtLink to="/">Profile</NuxtLink></li>
        </ul>
    </div>
</template>

<script setup lang="ts">
</script>

<style>
.logo {
  width: 150px;
}


</style>