import * as c from './ActionTypes';

export const deleteKeg = id => ({
    type: c.DELETE_KEG,
    id
});

export const toggleForm = () => ({
    type: c.TOGGLE_FORM
});

export const addKeg = (keg) => {
    const {  brand, varietal, price, abv, pintCount, id } = keg;
    return {
        type: c.ADD_KEG,
        brand: brand,
        varietal: varietal,
        price: price,
        abv: abv,
        pintCount,
        id: id
    }
}



