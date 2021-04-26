


const reducer = (state, {type, payload}) => {
    switch(type) {
        case "SET_GOODS": return {...state, goods: payload || [], loading: false};
        case "ADD_TO_BASKET":  {
            const itemIndex = state.orders.findIndex(el => el.id === payload.id);

            let newOrders = null;

            if(itemIndex < 0) {
                const newItem = {
                    ...payload,
                    quantity: 1
                };
                newOrders = [...state.orders, newItem]
            }else {
                newOrders = state.orders.map(el => {
                    if(el.id === payload.id) {
                        return {
                            ...el,
                            quantity: el.quantity + 1
                        };
                    }else {
                        return el;
                    }
                });
            }

            return {
                ...state,
                orders: newOrders
            };
        };
        case "REMOVE_FROM_BASKET": return {...state, orders: state.orders.filter(el => el.id !== payload.id)};
        case "INC_QUANTITY": return {
            ...state,
            orders: state.orders.map(el => {
                if(el.id === payload.id) {
                    return {
                        ...el,
                        quantity: el.quantity + 1
                    };
                }else {
                    return el;
                }
            })
        };
        case "DEC_QUANTITY": return {
            ...state,
            orders: state.orders.map(el => {
                if(el.id === payload.id) {
                    return {
                        ...el,
                        quantity: (el.quantity - 1) > 1 ? el.quantity - 1 : 1
                    };
                }else {
                    return el;
                }
            })
        };
        case "TOGGLE_BASKET": return {...state, isBasketShow: !state.isBasketShow};
        default: return state;
    }
};


export default reducer;