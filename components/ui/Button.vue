<template>
  <div>
    <button :class="['btn', `btn_theme_${theme}`]">
      <slot></slot>
    </button>
  </div>
</template>

<script>
export default {
  props: {
    theme: String,
  },
};
</script>

<style scoped></style>
