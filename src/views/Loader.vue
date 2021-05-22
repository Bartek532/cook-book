<template>
  <div class="wrapper">
    <div class="loader">
      <div class="loader__cube1 loader__cube"></div>
      <div class="loader__cube2 loader__cube"></div>
      <div class="loader__cube4 loader__cube"></div>
      <div class="loader__cube3 loader__cube"></div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Loader",
});
</script>

<style lang="scss" scoped>
.wrapper {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  .loader {
    margin: 0 auto;
    width: 70px;
    height: 70px;
    position: relative;
    transform: rotateZ(45deg);

    &__cube {
      float: left;
      width: 50%;
      height: 50%;
      position: relative;
      transform: scale(1.1);

      &::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: var(--main-color);
        animation: foldCubeAngle 2.4s infinite linear both;
        transform-origin: 100% 100%;
      }
    }

    &__cube2 {
      transform: scale(1.1) rotateZ(90deg);

      &::before {
        animation-delay: 0.3s;
      }
    }

    &__cube3 {
      transform: scale(1.1) rotateZ(180deg);

      &::before {
        animation-delay: 0.6s;
      }
    }

    &__cube4 {
      transform: scale(1.1) rotateZ(270deg);

      &::before {
        animation-delay: 0.9s;
      }
    }
  }
}

@keyframes foldCubeAngle {
  0%,
  10% {
    transform: perspective(140px) rotateX(-180deg);
    opacity: 0;
  }
  25%,
  75% {
    transform: perspective(140px) rotateX(0deg);
    opacity: 1;
  }
  90%,
  100% {
    transform: perspective(140px) rotateY(180deg);
    opacity: 0;
  }
}
</style>
