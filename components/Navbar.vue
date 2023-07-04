<template>
    <div class="navbar flex-col pl-5">
        <div>
            <NuxtLink to="/"><img src="~/assets/imgs/LilyDosedel.svg" alt="logo" class="w-32 m-8 ml-0"/></NuxtLink>
        </div>
        <ul class="flex-col leading-10 text-xl">
            <li><NuxtLink to="/">Home</NuxtLink></li>
            <li><div>Search</div></li>
            <li><NuxtLink to="/explore">Explore</NuxtLink></li>
            <li><NuxtLink to="/reels">Reels</NuxtLink></li>
            <li><NuxtLink to="/recommendations">Recommendations</NuxtLink></li>
            <li><NuxtLink to="/contact">Contact</NuxtLink></li>
            <li><NuxtLink to="/profile">Profile</NuxtLink></li>
        </ul>
    </div>
</template>

<script setup lang="ts">
</script>

<style>
.navbar {
    max-width: 300px;
}
</style>