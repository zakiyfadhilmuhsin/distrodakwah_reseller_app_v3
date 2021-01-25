<template>
  <div class="mobile-view bg-white full-width">
    <slot />
  </div>
</template>

<script>
export default {
  name: "DefaultLayout"
};
</script>

<style>
.mobile-view {
  max-width: 360px;
  margin-right: auto;
  margin-left: auto;
  box-shadow: 0 0 0px 0px rgba(0, 0, 0, 0.1);
}

.full-width {
  min-height: 100vh;
}
</style>
