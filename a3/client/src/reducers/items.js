const defaultState = [
  { id: 0, text: 'default item 1', deleted: false },
  { id: 1, text: 'default item 2', deleted: false }
];

const items = (state = defaultState, action) => {
  switch (action.type) {
    case 'ADD_ITEM':
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          deleted: false
        }
      ];
    case 'TOGGLE_ITEM':
      return state.map(item =>
        item.id === action.id ? { ...item, deleted: !item.deleted } : item
      );
    default:
      return state;
  }
};

export default items;
