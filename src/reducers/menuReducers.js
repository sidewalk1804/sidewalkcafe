const initialState = {
  menuCategories: {},
  isMenuLayout: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case "SET_MENU_CATEGORIES":
      return {
        ...state,
        menuCategories: action.payload,
      };

    case "IS_MENU_POPUP":
      return {
        ...state,
        isMenuLayout: action.payload,
      };

    default:
      return {
        ...state,
      };
  }
}
