<template>
  <app-container class="container" id="facts">
    <section class="facts">
      <my-title>Почему вам стоит выбрать именно нас?</my-title>
      <ul class="facts__items">
        <li class="facts__item" v-for="fact in facts" :key="fact.id">
          <facts-title theme="facts">{{ fact.title }}</facts-title>
          <p class="facts__item-text">{{ fact.text }}</p>
        </li>
      </ul>
    </section>
  </app-container>
</template>

<script>
import Container from '~/components/blocks/Container';
import Title from '~/components/ui/Title';

export default {
  components: {
    'app-container': Container,
    'my-title': Title,
    'facts-title': Title,
  },
  computed: {
    facts() {
      return this.$store.getters['facts/items'];
    },
  },
};
</script>

<style scoped>
.container {
  padding-top: 25px;
  padding-bottom: 25px;
}
.facts {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.facts__items {
  margin-top: 25px;
  list-style: none;
  padding: 0;
  display: grid;
  grid-template-columns: minmax(200px, 300px) minmax(200px, 300px) minmax(
      200px,
      300px
    );
  grid-auto-rows: min-content;
  grid-gap: 40px;
  text-align: center;
}
.facts__item {
  border: 1px solid #f7f7f7;
  padding: 10px;
}
.facts__item-text {
  font-size: 14px;
  margin-top: 25px;
}
</style>
