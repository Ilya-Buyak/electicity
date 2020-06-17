<template>
  <a :class="['link', `link_theme_${theme}`]"><slot></slot></a>
</template>

<script>
export default {
  props: {
    theme: String,
  },
};
</script>

<style scoped>
.link {
  font-size: 16px;
  color: white;
  text-decoration: none;
}
.link:hover {
  opacity: 0.5;
  transition: 0.3s;
}
</style>
