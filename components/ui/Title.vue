<template>
  <h2 :class="['title', `title_theme_${theme}`]"><slot></slot></h2>
</template>

<script>
export default {
  props: {
    theme: String,
  },
};
</script>

<style scoped>
.title {
  font-weight: 600;
  font-size: 32px;
  line-height: 36px;
  margin: 0 auto;
  text-align: center;
}
.title_theme_about {
  width: max-content;
  margin-left: 0;
  margin-bottom: 25px;
}
.title_theme_facts {
  font-size: 20px;
}
.title_theme_form {
  width: max-content;
  margin-left: 0;
  margin-bottom: 25px;
}
</style>
