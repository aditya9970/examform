export const isSelected = (store, i, j) => {
  return store.selected && store.selected.i === i && store.selected.j === j;
};
