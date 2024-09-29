import { createContext, useReducer } from "react";
import { reducer } from "./reducer";

export const ShopContext = createContext();

const initialState = {
  items: [],
  loading: true,
  currentPage: 1,
  itemsPerPage: 9,
  displayBasket: false,
  order: [],
  alertName: "",
};

export const ContextProvider = ({ children }) => {
  const [value, dispatch] = useReducer(reducer, initialState);
  
  value.closeAlert = () => {
    dispatch({type: 'CLOSE_ALERT'})
  } 

  return <ShopContext.Provider value={value}>{children}</ShopContext.Provider>;
};
