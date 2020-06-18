<template>
  <header class="header">
    <app-container class="header__container">
      <h2 class="header__title">нашсайт.бай</h2>
      <navigation />
      <my-contacts />
    </app-container>
  </header>
</template>

<script>
import Container from '~/components/blocks/Container';
import Nav from '~/components/blocks/Nav';
import Link from '~/components/ui/Link';
import Contacts from '~/components/blocks/Contacts';
export default {
  components: {
    'app-container': Container,
    navigation: Nav,
    'logo-link': Link,
    'my-contacts': Contacts,
  },
};
</script>
<style scoped>
.header {
  width: 100%;
  padding-top: 5px;
  padding-bottom: 5px;
}
.header__container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.header__title {
  font-size: 24px;
}
</style>
