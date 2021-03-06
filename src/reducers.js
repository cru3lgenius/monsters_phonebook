import {
  CHANGE_SEARCH_FIELD,
  REQUEST_MONSTERS_PENDING,
  REQUEST_MONSTERS_SUCCESS,
  REQUEST_MONSTERS_FAILED
} from "./constants";

const initialState = {
  searchField: ""
};

const initialStateMonsters = {
  isPending: false,
  monsters: [],
  error: ""
};

export const searchMonsters = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_SEARCH_FIELD:
      return { ...state, searchField: action.payload };
    default:
      return state;
  }
};

export const requestMonsters = (state = initialStateMonsters, action) => {
  switch (action.type) {
    case REQUEST_MONSTERS_PENDING:
      return { ...state, isPending: true };
    case REQUEST_MONSTERS_SUCCESS:
      return { ...state, monsters: action.payload, isPending: false };
    case REQUEST_MONSTERS_FAILED:
      return { ...state, error: action.payload, isPending: false };
    default:
      return state;
  }
};
