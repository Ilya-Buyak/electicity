<template>
  <ul class="contacts">
    <li v-for="contact in contacts" :key="contact.id" class="contacts__item">
      <contact-link :href="contact.href" class="contacts__link"
        ><img class="icon" :src="contact.src" alt="contact.alt" />{{
          contact.text
        }}</contact-link
      >
    </li>
  </ul>
</template>

<script>
import Link from '~/components/ui/Link';
export default {
  components: {
    'contact-link': Link,
  },
  data() {
    return {
      contacts: [
        {
          id: 1,
          text: '+375 (29) 636-81-85',
          href: 'tel:+375296368185',
          src: '/tel.svg',
          alt: 'телефон',
        },
        {
          id: 2,
          text: '+375 (29) 636-81-85(viber)',
          href: 'viber://chat?number=+375296368185',
          src: '/viber.svg',
          alt: 'вайбер',
        },
        {
          id: 3,
          text: 'serheybuyak@rambler.ru',
          href: 'mailto:serheybuyak@rambler.ru',
          src: '/mail.svg',
          alt: 'почта',
        },
      ],
    };
  },
};
</script>

<style scoped>
.contacts {
  list-style: none;
  padding: 0;
}
.contacts__link {
  display: flex;
}
.icon {
  margin-right: 10px;
  width: 20px;
  height: 20px;
  background-repeat: no-repeat;
  object-fit: cover;
}
.contacts__item {
  margin-bottom: 5px;
}
.contacts__item:last-child {
  margin-bottom: 0;
}
</style>
