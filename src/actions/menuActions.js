import axios from "axios";
import { config } from "../utils/config";

const menuActions = {
  fetchMenuCategories: () => {
    return (dispatch) => {
      return axios({
        url: `${config.backendURL}/menuOptions`,
        method: "get",
      }).then((res) => {
        dispatch({
          type: "SET_MENU_CATEGORIES",
          payload: res.data,
        });
        return res.data;
      });
    };
  },

  setMenuPopupStatus: (flag) => {
    return (dispatch) => {
      dispatch({
        type: "IS_MENU_POPUP",
        payload: flag,
      });
    };
  },
};

export default menuActions;
