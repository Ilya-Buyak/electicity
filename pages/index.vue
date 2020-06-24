<template>
  <div class="page">
    <my-header />
    <cover />
    <jobs />
    <instagram />
    <about />
    <facts />
    <my-footer />
  </div>
</template>

<script>
import Header from '~/components/blocks/Header';
import Cover from '~/components/blocks/Cover';
import Jobs from '~/components/blocks/Jobs';
import Instagram from '~/components/blocks/Instagram';
import About from '~/components/blocks/About';
import Facts from '~/components/blocks/Facts';
import Footer from '~/components/blocks/Footer';

export default {
  components: {
    'my-header': Header,
    cover: Cover,
    jobs: Jobs,
    about: About,
    facts: Facts,
    'my-footer': Footer,
    instagram: Instagram,
  },
};
</script>

<style scoped>
.page {
  width: 100%;
  margin: 0 auto;
}
</style>
