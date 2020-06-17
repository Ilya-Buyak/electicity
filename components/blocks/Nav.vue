<template>
  <nav class="navigation">
    <ul class="navigation__items">
      <li class="navigation__item" v-for="link in links" :key="link.id">
        <nav-link href="https://vk.com">{{ link.text }}</nav-link>
      </li>
    </ul>
  </nav>
</template>

<script>
import Link from '~/components/ui/Link';
export default {
  data() {
    return {
      links: [
        {
          id: 1,
          text: 'Услуги',
        },
        {
          id: 2,
          text: 'Наши работы',
        },
        {
          id: 3,
          text: 'О нас',
        },
      ],
    };
  },
  components: {
    'nav-link': Link,
  },
};
</script>

<style scoped>
.navigation__items {
  list-style: none;
  padding: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.navigation__item {
  margin-right: 15px;
}
.navigation__item:last-child {
  margin: 0;
}
</style>
