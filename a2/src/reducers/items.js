const defaultState = [
  { id: 0, text: 'default item 1', completed: false },
  { id: 1, text: 'default item 2', completed: false }
];

const items = (state = defaultState, action) => {
  switch (action.type) {
    case 'ADD_ITEM':
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          completed: false
        }
      ];
    case 'TOGGLE_ITEM':
      return state.map(item =>
        item.id === action.id ? { ...item, completed: !item.completed } : item
      );
    default:
      return state;
  }
};

export default items;
