<template>
  <app-container class="instagram__container">
    <section class="instagram">
      <div class="instagram__content">
        <instagram-link
          theme="instagram"
          href="https://www.instagram.com/elektrikaminskborisov/"
          target="_blank"
          >Инстаграм
        </instagram-link>
        <p class="instagram__text">Фотографии из нашего инстаграма</p>
      </div>
      <ul class="instagram__items">
        <li
          class="instagram__item"
          v-for="photo in instagram"
          :key="instagram.indexOf(photo)"
        >
          <a class="instagram__item-link" :href="photo.url" target="_blank">
            <img
              class="instagram__item-image"
              :src="photo.display_url"
              alt="Фото из инстаграма"
            />
          </a>
        </li>
      </ul>
    </section>
  </app-container>
</template>

<script>
import Title from '~/components/ui/Title';
import Container from '~/components/blocks/Container';
import Link from '~/components/ui/Link';

export default {
  components: {
    'instagram-title': Title,
    'app-container': Container,
    'instagram-link': Link,
  },
  computed: {
    instagram() {
      return this.$store.getters['instagram/getPosts'].slice(0, 8);
    },
  },
  async created() {
    await this.$store.dispatch('instagram/GET_PHOTOS');
  },
};
</script>

<style scoped>
.instagram {
  display: flex;
  justify-content: space-between;
}

.instagram__container {
  padding-top: 25px;
  padding-bottom: 25px;
}
.instagram__text {
  margin-top: 25px;
  color: #666;
}

.instagram__items {
  width: 100%;
  max-width: 900px;
  display: grid;
  list-style: none;
  padding-left: 0;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-rows: min-content;
  grid-gap: 30px;
}

.instagram__item-image {
  height: 100%;
  width: 100%;
  object-fit: cover;
}

@media (max-width: 1281px) {
  .instagram__items {
    margin-top: -10px;
    grid-gap: 23px;
  }
}
@media (max-width: 1062px) {
  .instagram__items {
    max-width: 604px;
    grid-gap: 20px;
  }
}

@media (max-width: 875px) {
  .instagram__items {
    max-width: 688px;
    grid-gap: 20px;
  }
}
@media (max-width: 765px) {
  .instagram__items {
    max-width: 500px;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 20px;
  }
}
@media (max-width: 550px) {
  .instagram__items {
    max-width: 400px;
    grid-gap: 10px;
  }
}
@media (max-width: 410px) {
  .instagram__items {
    max-width: 290px;
  }
}
</style>
