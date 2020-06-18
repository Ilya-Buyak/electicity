<template>
  <footer class="footer">
    <app-container class="footer__container">
      <footer-nav class="footer__nav" theme="footer" />
      <div class="footer__content">
        <p class="footer__text">ИП Буяк Сергей Алексеевич</p>
        <p class="footer__text">+375296368185</p>
        <p class="footer__text">УНП 691907248</p>
      </div>
      <p class="footer__copyright">
        &#169;C. A. Буяк, {{ new Date().getFullYear() }}
      </p>
    </app-container>
  </footer>
</template>

<script>
import Container from '~/components/blocks/Container';
import Nav from '~/components/blocks/Nav';

export default {
  components: {
    'app-container': Container,
    'footer-nav': Nav,
  },
};
</script>

<style scoped>
.footer {
  background-color: black;
  padding: 25px 0;
  width: 100%;
}
.footer__container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  color: white;
}
.footer__nav {
  display: flex;
}
.footer/deep/.link {
  color: white;
}
.footer__copyright {
}
</style>
