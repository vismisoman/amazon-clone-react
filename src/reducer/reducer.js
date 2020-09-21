export const initialState = {
  basket: [],
  user: null,
};

//Selector
//getBasketTotal is take the basket and return the following
// The function reduce is essentially maps through the basket, it actually go ahead and iterate thorugh
// the basket and then it tally up the total.
export const getBasketTotal = (basket) =>
  basket?.reduce((amount, item) => item.price + amount, 0);

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_BASKET":
      return {
        ...state,
        basket: [...state.basket, action.item],
      };

    case "REMOVE_FROM_BASKET":
      const index = state.basket.findIndex(
        (basketItem) => (basketItem.id = action.id)
      );
      let newBasket = [...state.basket];
      if (index >= 0) {
        newBasket.splice(index, 1);
      } else {
        console.warn(
          `Cant remove product (id: ${action.id}) as its not in basket!`
        );
      }
      return { ...state, basket: newBasket };
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };

    case "EMPTY_BASKET":
      return {
        ...state,
        basket: [],
      };
    default:
      return state;
  }
};

export default reducer;
