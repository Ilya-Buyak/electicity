<template>
  <section class="cover">
    <img class="cover__img" src="cover.jpg" alt="12" />
    <h1 class="cover__title">
      Любые виды электромонтажных работ по всей Беларуси
    </h1>
    <cover-btn theme="cover" @btn-click="openPopup">Оставить заявку</cover-btn>
    <decoration-btn
      class="cover__decoration"
      @btn-click="setActive"
      theme="decoration"
    >
      <img src="strelka.png" alt="стрелка вниз" />
    </decoration-btn>
  </section>
</template>

<script>
import Button from '~/components/ui/Button';
export default {
  components: {
    'cover-btn': Button,
    'decoration-btn': Button,
  },
  methods: {
    setActive(event) {
      document.querySelector('#jobs').scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    },
    openPopup() {
      this.$store.commit('popup/openForm');
    },
  },
};
</script>

<style scoped>
.cover {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 100%;
  height: calc(100vh - 80px);
  background-color: rgba(128, 128, 128, 0.5);
}
.cover__img {
  object-fit: cover;
  z-index: -1;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
.cover__title {
  color: white;
  max-width: 700px;
  font-size: 56px;
  text-align: center;
  margin: auto auto 40px auto;
}
.cover__decoration {
  margin: auto auto 40px auto;
}
</style>
