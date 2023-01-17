<template>
    <div class="video-player">
      <video class="video" ref="video">
        <source src="@static/images/video.mp4" type="video/mp4">
      </video>
    </div>
</template>
  
<script>
export default {
name: "VideoPlayer",
 computed: {
  videoElement () {
    return this.$refs.video;
  }, 
}
}
</script>