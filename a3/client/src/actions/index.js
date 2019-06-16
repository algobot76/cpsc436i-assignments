let nextItemId = 2;
export const addItem = text => ({
  type: 'ADD_ITEM',
  id: nextItemId++,
  text
});

export const setVisibilityFilter = filter => ({
  type: 'SET_VISIBILITY_FILTER',
  filter
});

export const toggleItem = id => ({
  type: 'TOGGLE_ITEM',
  id
});

export const openPopup = {
  type: 'OPEN_POPUP'
};

export const closePopup = {
  type: 'CLOSE_POPUP'
};

export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_DELETED: 'SHOW_DELETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE'
};
