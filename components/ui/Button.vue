<template>
  <div>
    <button :class="['btn', `btn_theme_${theme}`, { btn_disabled: disabled }]">
      <slot></slot>
    </button>
  </div>
</template>

<script>
export default {
  props: {
    theme: String,
    disabled: Boolean,
  },
};
</script>

<style scoped></style>
