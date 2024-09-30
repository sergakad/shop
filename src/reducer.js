export function reducer(state, { type, payload }) {
  switch (type) {
    case "CLOSE_ALERT":
      return {
        ...state,
        alertName: "",
      };
    case "DELETE_TO_BASKET":
      return {
        ...state,
        order: state.order.filter((el) => el.id !== payload.id),
      };
    case "ORDER_INCREMENT": {
      const itemIndex = state.order.findIndex(
        (orderItem) => orderItem.id === payload.id
      );
      const newOrder = state.order.map((orderItem, index) => {
        if (index === itemIndex) {
          return {
            ...orderItem,
            quantity: orderItem.quantity + 1,
          };
        } else {
          return orderItem;
        }
      });
      return {
        ...state,
        order: newOrder,
      };
    }

    default:
      return state;
  }
}
