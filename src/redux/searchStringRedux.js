import shortid from 'shortid';

// selectors
export const getSearchString = state => state.searchString;
export const countVisibleCards = ({cards, searchString}) => cards.filter(card => new RegExp(searchString, 'i').test(card.title)).length; 
export const countAllCards = ({cards}) => cards.length;
// action name creator
const reducerName = 'searchString';
const createActionName = name => `app/${reducerName}/${name}`;
// actions types
export const SEARCH_STRING = createActionName('SEARCH_STRING'); 
// action creators
export const createAction_changeSearchString = payload => ({ payload: payload, id: shortid.generate() , type: SEARCH_STRING });
// reducer
export default function reducer(statePart = '', action = {}) {
  switch (action.type) {
    case SEARCH_STRING:
      return action.payload;
    default:
      return statePart;
  }
}

