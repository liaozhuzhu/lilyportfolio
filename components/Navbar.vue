<template>
    <div class="navbar flex-col pl-5">
        <div>
            <NuxtLink to="/"><img src="~/assets/imgs/LilyDosedel.svg" alt="logo" class="w-32 m-7 ml-0"/></NuxtLink>
        </div>
        <ul class="flex-col text-2xl">
            <li class="navli"><NuxtLink to="/" class="flex justify-left items-center"><font-awesome-icon icon="fa-solid fa-house" class="mr-5"/><p class="text-base">Home</p></NuxtLink></li>
            <li class="navli"><div class="flex justify-left items-center"><font-awesome-icon icon="fa-solid fa-search" class="mr-5"/><p class="text-base">Search</p></div></li>
            <li class="navli"><NuxtLink to="/explore" class="flex justify-left items-center"><font-awesome-icon icon="fa-solid fa-compass" class="mr-5"/><p class="text-base">Explore</p></NuxtLink></li>
            <li class="navli"><NuxtLink to="/reels" class="flex justify-left items-center"><font-awesome-icon icon="fa-solid fa-clapperboard" class="mr-5" /><p class="text-base">Reels</p></NuxtLink></li>
            <li class="navli"><NuxtLink to="/recommendations" class="flex justify-left items-center"><font-awesome-icon icon="fa-solid fa-comment-dots" class="mr-5"/><p class="text-base">Messages</p></NuxtLink></li>
            <li class="navli"><NuxtLink to="/contact" class="flex justify-left items-center"><font-awesome-icon icon="fa-solid fa-square-plus" class="mr-5"/><p class="text-base">Contact</p></NuxtLink></li>
            <li class="navli"><NuxtLink to="/profile" class="flex justify-left items-center"><font-awesome-icon icon="fa-solid fa-house" class="mr-5"/><p class="text-base">Profile</p></NuxtLink></li>
        </ul>
    </div>
</template>

<script setup lang="ts">
</script>

<style>
.navbar {
    max-width: 300px;
}

.navli {
    padding: 16px;
    padding-left: 0;
}
</style>