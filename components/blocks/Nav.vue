<template>
  <nav class="navigation">
    <ul class="navigation__items">
      <li class="navigation__item" v-for="link in links" :key="link.id">
        <nav-link @link-click="setActive(link.block)">{{ link.text }}</nav-link>
      </li>
    </ul>
  </nav>
</template>

<script>
import Link from '~/components/ui/Link';
export default {
  methods: {
    setActive(block, event) {
      document.querySelector('' + block).scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    },
  },
  components: {
    'nav-link': Link,
  },
  computed: {
    links() {
      return this.$store.getters['nav/links'];
    },
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
