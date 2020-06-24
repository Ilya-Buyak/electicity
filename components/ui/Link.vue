<template>
  <a :class="['link', `link_theme_${theme}`]" @click="$emit('link-click')"
    ><slot></slot
  ></a>
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
  color: black;
  text-decoration: none;
  cursor: pointer;
}
.link:hover {
  opacity: 0.5;
  transition: 0.3s;
}
.link_theme_instagram {
  font-size: 24px;
  border-bottom: 2px solid black;
}
</style>
