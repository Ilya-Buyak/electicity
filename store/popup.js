export const state = () => ({
  visible: false,
  isForm: false,
  isHaveClose: true,
  isError: false,
  isLoading: false,
});

export const mutations = {
  openForm(state) {
    state.visible = true;
    state.isForm = true;
  },
  close(state) {
    state.visible = false;
    state.isForm = false;
    state.isError = false;
  },
  toggleIconClose(state) {
    state.isHaveClose = !state.isHaveClose;
  },
  addErrorElement(state) {
    state.isError = true;
  },
  removeErrorElement(state) {
    state.isError = false;
  },
  toggleLoading(state) {
    state.isLoading = !state.isLoading;
  },
};
