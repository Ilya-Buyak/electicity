<template>
  <div>
    <nuxt />
    <transition name="fade">
      <Popup v-if="popupVisible" :haveClose="true">
        <Form v-if="formVisible" />
      </Popup>
    </transition>
    <transition name="overlay">
      <Overlay @overlayClick="closeByOverlay" v-if="popupVisible" />
    </transition>
  </div>
</template>

<script>
import Overlay from '@/components/ui/Overlay';
import Popup from '~/components/blocks/PopUp';
import Form from '~/components/blocks/Form';

export default {
  computed: {
    popupVisible() {
      const { popup } = this.$store.state;

      return popup.visible;
    },
    formVisible() {
      const { popup } = this.$store.state;
      return popup.isForm;
    },
  },
  components: {
    Popup,
    Overlay,
    Form,
  },
  methods: {
    closeByOverlay() {
      this.$store.commit('popup/close');
    },
  },
};
</script>

<style></style>
