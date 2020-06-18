<template>
  <div>
    <button
      :class="['btn', `btn_theme_${theme}`]"
      @click.prevent="$emit('btn-click')"
    >
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

<style scoped>
.btn {
  font-family: 'Inter', sans-serif;
  cursor: pointer;
  background-color: transparent;
  border: 1px solid transparent;
}
.btn:hover {
  opacity: 0.7;
  transition: 0.3s;
}
.btn_theme_cover {
  color: white;
  padding: 20px;
  font-size: 30px;
  border: solid white 3px;
  border-radius: 15px;
}
.btn:focus {
  outline: none;
}
.btn_theme_decoration {
  border: solid transparent 2px;
}
.btn_theme_about {
  color: #fff;
  background-color: #000;
  font-size: 16px;
  padding: 10px 24px;
  line-height: 24px;
}
</style>
