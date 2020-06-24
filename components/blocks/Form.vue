<template>
  <form class="form" name="form">
    <form-title theme="form">Оставьте контакт для связи</form-title>
    <p class="form__subtitle">
      Мы свяжемся с вами в ближайшее время
    </p>
    <div class="form__content">
      <div class="form__fieldset">
        <label for="name" class="form__label">Как вас зовут?</label>
        <input
          id="name"
          type="text"
          placeholder="Напишите тут"
          class="form__input"
        />
      </div>
      <div class="form__container">
        <div class="form__fieldset">
          <label for="email" class="form__label">Электронная почта</label>
          <input
            id="email"
            placeholder="pochta@example.com"
            class="form__input"
            type="email"
          />
        </div>
        <div class="form__fieldset">
          <label for="phone" class="form__label">Телефон</label>
          <input
            id="phone"
            placeholder="+375 29 123 45 67"
            class="form__input"
            type="tel"
          />
        </div>
      </div>
    </div>
  </form>
</template>

<script>
import Title from '~/components/ui/Title';

export default {
  components: {
    'form-title': Title,
  },
};
</script>

<style scoped>
.form__subtitle {
  font-size: 20px;
  line-height: 24px;
  margin-bottom: 25px;
}
.form__container {
  display: flex;
}
.form__label {
  font-size: 20px;
  line-height: 24px;
  font-weight: 600;
  margin-bottom: 15px;
}
.form__fieldset {
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 15px;
}
.form__fieldset:last-child {
  margin-left: 20px;
}
</style>
