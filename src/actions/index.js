export const deleteKeg = id => ({
    type: 'DELETE_KEG',
    id
});

export const toggleForm = () => ({
    type: 'TOGGLE_FORM'
});

export const addKeg = (keg) => {
    const {  brand, varietal, price, abv, id } = keg;
    return {
        type: 'ADD_KEG',
        brand: brand,
        varietal: varietal,
        price: price,
        abv: abv,
        id: id
    }
}



