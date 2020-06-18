export const state = () => ({
  links: [
    {
      id: 1,
      text: 'Услуги',
      block: '#about',
    },
    {
      id: 2,
      text: 'Наши работы',
      block: '#jobs',
    },
    {
      id: 3,
      text: 'О нас',
      block: '#facts',
    },
  ],
});

export const getters = {
  links(state) {
    return state.links;
  },
};
