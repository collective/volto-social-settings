import { GET_SOCIAL_SETTINGS } from '../actions/getSocialSettings';

const initialState = {
  error: null,
  hasErrror: false,
  results: {},
  loadingResults: false,
};

export const socialSettingsReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case `${GET_SOCIAL_SETTINGS}_PENDING`:
      return {
        ...state,
        loadingResults: true,
      };
    case `${GET_SOCIAL_SETTINGS}_SUCCESS`:
      return {
        ...state,
        results: action.result,
        loadingResults: false,
      };
    case `${GET_SOCIAL_SETTINGS}_FAIL`:
      return {
        ...state,
        error: action.error,
        hasError: true,
        loadingResults: false,
      };
    default:
      return state;
  }
};
