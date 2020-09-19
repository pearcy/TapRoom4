import * as a from './../../actions';
import * as c from './../../actions/ActionTypes';

describe('help queue actions', () => {

    it('deleteKeg should create DELETE_KEG action', () => {
        expect(a.deleteKeg(1)).toEqual({
            type: c.DELETE_KEG,
            id: 1
        });
    });

    it('toggleForm should create TOGGLE_FORM action', () => {
        expect(a.toggleForm()).toEqual({
            type: c.TOGGLE_FORM
        });
    });

    it('addKeg should create ADD_KEG action', () => {
        expect(a.addKeg({
            brand: 'Frog Pond',
            varietal: 'Stout',
            price: '4',
            abv: '3',
            pintCount: 124,
            id: 1}))
            .toEqual({
            type: c.ADD_KEG,
            brand: 'Frog Pond',
            varietal: 'Stout',
            price: '4',
            abv: '3',
            id: 1

        });
    });

});



