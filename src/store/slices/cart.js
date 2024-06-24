import { createSlice } from '@reduxjs/toolkit';

import { normId, uniqueId } from '@/utils';

const initialState = {
  items: []
};

const storeSlicesCart = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    add: (state, { payload }) => {
      const add = ({ id, ...data }) => {
        id = normId(id);

        const isDuplicated = state.items.some((data) => data.id === id);

        if (!isDuplicated)
          state.items = [{ id: uniqueId(`${id}-`), ...data }, ...state.items];
      };

      if (Array.isArray(payload)) {
        payload.forEach(add);
      } else {
        add(payload);
      }
    },
    remove: (state, { payload }) => {
      const items = [...state.items];

      const remove = (id) => {
        id = normId(id);

        const itemIdx = state.items.findIndex((data) => data.id === id);

        if (itemIdx >= 0) items.splice(itemIdx, 1);

        state.items = items;
      };

      if (Array.isArray(payload)) {
        payload.forEach(remove);
      } else {
        remove(payload);
      }
    },
    update: (state, { payload }) => {
      const update = ({ id, ...data }) => {
        id = normId(id);

        const items = state.items.map((item) =>
          item.id === id ? { ...item, ...data, id } : item
        );

        state.items = items;
      };

      if (Array.isArray(payload)) {
        payload.forEach(update);
      } else {
        update(payload);
      }
    }
  }
});

export default storeSlicesCart;
export const { add, remove, update } = storeSlicesCart.actions;
