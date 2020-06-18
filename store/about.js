export const state = () => ({
  items: [
    {
      id: 1,
      text: 'Замена электропроводки',
    },
    {
      id: 2,
      text: 'Монтаж розеток, выключателей, светильников',
    },
    {
      id: 3,
      text: 'Сборка электрического щита',
    },
    {
      id: 4,
      text: 'Монтаж теплого пола',
    },
    {
      id: 5,
      text: 'Монтаж контура заземления',
    },
    {
      id: 6,
      text: 'Подключение техники',
    },
  ],
});

export const getters = {
  items(state) {
    return state.items;
  },
};
