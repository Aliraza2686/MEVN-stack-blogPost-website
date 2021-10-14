<template>
<div class="text-center">
<svg>
  <circle cx="50" cy="50" r="40" stroke="red" stroke-dasharray="78.5 235.5" stroke-width="3" fill="none" />
  <circle cx="50" cy="50" r="30" stroke="blue" stroke-dasharray="62.8 188.8" stroke-width="3" fill="none" />
  <circle cx="50" cy="50" r="20" stroke="green" stroke-dasharray="47.1 141.3" stroke-width="3" fill="none" />
</svg>

</div>
</template>

<script>
export default {

}
</script>

<style scoped>
body {
  position: relative;
  margin: 0;
  height: 100vh;
  display: grid;
  place-content: center;
}
circle {
  transform-origin: center;
  transform-box: fill-box;
  transform-origin: center;
  animation: rotate linear infinite;
}
circle:nth-child(1) {
  animation-duration: 1.6s;
}
circle:nth-child(2) {
  animation-duration: 1.2s;
}
circle:nth-child(3) {
  animation-duration: 0.8s;
}
@keyframes rotate {
  100% {
    transform: rotate(360deg);
  }
}
svg {
  width: 100px;
  height: 100px;
}

</style>