import shortid from 'shortid';

// selectors
export const getCardsForColumn = ({cards}, columnId ) => cards.filter(card => card.columnId == columnId);
// && 
//  new RegExp(searchString, 'i').test(card.title));
export const getMatchingCards = ({cards, searchString}) => cards.filter(card => 
  card.title.toLowerCase().includes(searchString.toLowerCase()));

// action name creator
const reducerName = 'cards';
const createActionName = name => `app/${reducerName}/${name}`;

// action types
export const ADD_CARD = createActionName('ADD_CARD');

// action creators
export const createActionAddCard = payload => ({ payload: { ...payload, id: shortid.generate() }, type: ADD_CARD });

// reducer
export default function reducer(statePart = [], action = {}) {
  switch (action.type) {
    case ADD_CARD:
      return [...statePart, action.payload];
    default:
      return statePart;
  }
}