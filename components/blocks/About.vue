<template>
  <app-container class="container" id="about">
    <section class="about">
      <div class="about__container">
        <about-title theme="about">О нас</about-title>
        <p class="about__text">
          Мы занимаемся Электромонтажными работами любой сложности. Наш опыт
          работы в сфере электрики уже более 20 лет. Работы выполняем
          качественно и в срок. Заключаем договор, согласование сметы и
          пожелания заказчика,мы всегда идем вам на встречу. Если вам нужно
          произвести Электромонтажные работы, обращайтесь к нам и мы вам
          обязательно поможем.
        </p>
      </div>
      <div class="services">
        <about-title theme="about">Наши услуги</about-title>
        <ul class="about__items">
          <li class="about__item" v-for="item in items" :key="item.id">
            <p class="about__item-text">{{ item.text }}</p>
          </li>
        </ul>
        <about-btn theme="about" @btn-click="openPopup"
          >Оставить контакт</about-btn
        >
      </div>
    </section>
  </app-container>
</template>

<script>
import Container from '~/components/blocks/Container';
import Title from '~/components/ui/Title';
import Button from '~/components/ui/Button';

export default {
  components: {
    'app-container': Container,
    'about-title': Title,
    'about-btn': Button,
  },
  computed: {
    items() {
      return this.$store.getters['about/items'];
    },
  },
  methods: {
    openPopup() {
      this.$store.commit('popup/openForm');
    },
  },
};
</script>

<style scoped>
.container {
  background-color: #f7f7f7;
  padding-top: 25px;
  padding-bottom: 25px;
}
.about {
  display: flex;
  justify-content: space-between;
}
.about__items {
  padding-left: 20px;
  list-style-image: url('/checkmark.svg');
  margin-bottom: 25px;
}
.about__text {
  max-width: 540px;
  color: #666;
  font-size: 18px;
  line-height: 22px;
}
.about__item {
  margin-bottom: 10px;
}
.about__item:last-child {
  margin: 0;
}
.about__item-text {
  color: #666;
}
</style>
