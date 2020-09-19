import rootReducer from '../../reducers/index';
import { createStore } from 'redux';
import formVisibleReducer from '../../reducers/form-visible-reducer';
import kegListReducer from '../../reducers/keg-list-reducer';
import * as c from './../../actions/ActionTypes';

let store = createStore(rootReducer);

describe("rooReducer", () => {

    test('Should return default state if no action type is recognized', () => {
        expect(rootReducer({}, { type: null })).toEqual({
            masterTicketList: {},
            formVisibleOnPage: false
        });
    });

    test('Check that initial state of kegListReduer matches root reducer', () => {
        expect(store.getState().masterKegList).toEqual(kegListReducer(undefined, { type: null 
        }));
    });

    test('Check that initial state of formVisibleReduer matches root reducer', () => {
        expect(store.getState().formVisibleOnPage).toEqual(formVisibleReducer(undefined, { type: null 
        }));
    });

    test('Check that initial state of kegListReducer matches root reducer', () => {
        const action = {
            type: c.ADD_KEG,
            brand: 'Flying Dog',
            varietal: 'Stout',
            price: 4,
            abv: 3,
            id: 1
        }
        store.dispatch(action);
        expect(store.getState().masterKegList).toEqual(kegListReducer(undefined, action));
    });

    test('Check that initial state of formVisibleReducer matches root reducer', () => {
        const action = {
            type: c.TOGGLE_FORM
        }
        store.dispatch(action);
        expect(store.getState().masterKegList).toEqual(kegListReducer(undefined, action));
    });

});
