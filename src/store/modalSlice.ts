import { createSlice } from '@reduxjs/toolkit';

const modal = createSlice({
  name: 'modal',
  initialState: {
    modalType: '',
    isOpen: false,
    title: '',
    description: '',
    onClickOk: () => ({}),
    onClickCancel: () => ({}),
    okText: '',
    cancelText: '',
  },
  reducers: {
    setModal: (state, action) => {
      // eslint-disable-next-line no-return-assign, no-param-reassign
      return (state = action.payload);
    },
  },
});

export const { setModal } = modal.actions;

export default modal;
