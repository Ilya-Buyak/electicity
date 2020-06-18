<template>
  <app-container сlass="container" id="jobs">
    <section class="jobs">
      <my-title class="jobs__title">Наши работы</my-title>
      <div class="jobs__content">
        <Swiper />
      </div>
    </section>
  </app-container>
</template>

<script>
import Container from '~/components/blocks/Container';
import Title from '~/components/ui/Title';
import Swiper from '~/components/blocks/Swiper';

export default {
  components: {
    'app-container': Container,
    'my-title': Title,
    Swiper,
  },
};
</script>

<style scoped>
.container {
  background-color: #f7f7f7;
  padding-top: 25px;
  padding-bottom: 25px;
}
.jobs {
  height: 100vh;
}
.jobs__title {
  margin-bottom: 25px;
}
</style>
