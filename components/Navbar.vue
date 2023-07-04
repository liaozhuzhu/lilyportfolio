<template>
    <div class="navbar flex-col pl-5">
        <div>
            <NuxtLink to="/"><img src="~/assets/imgs/LilyDosedel.svg" alt="logo" class="w-32 m-8 ml-0"/></NuxtLink>
        </div>
        <ul class="flex-col leading-10 text-xl">
            <li><NuxtLink to="/"><font-awesome-icon icon="fa-solid fa-house" class="mr-2"/>Home</NuxtLink></li>
            <li><div><font-awesome-icon icon="fa-solid fa-search" class="mr-2"/>Search</div></li>
            <li><NuxtLink to="/explore"><font-awesome-icon icon="fa-solid fa-compass" class="mr-2"/>Explore</NuxtLink></li>
            <li><NuxtLink to="/reels"><font-awesome-icon icon="fa-solid fa-clapperboard" class="mr-2" />Reels</NuxtLink></li>
            <li><NuxtLink to="/recommendations"><font-awesome-icon icon="fa-solid fa-comment-dots" class="mr-2"/>Recommendations</NuxtLink></li>
            <li><NuxtLink to="/contact"><font-awesome-icon icon="fa-solid fa-square-plus" class="mr-2"/>Contact</NuxtLink></li>
            <li><NuxtLink to="/profile"><font-awesome-icon icon="fa-solid fa-house" class="mr-2"/>Profile</NuxtLink></li>
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