import { types } from './actions';

const initialState = {
  newProfileById: {},
  favoriteProfileById: {}
};

export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case types.LOAD_DATA: {
      const { results, clearExistence } = action.data;

      const newProfileById = clearExistence ? {} : { ...state.newProfileById };

      results.forEach(profile => {
        const { user } = profile;
        newProfileById[user.sha1] = {
          id: user.sha1,
          avatar: user.picture,
          name: user.name,
          dob: user.dob,
          location: user.location,
          phone: user.phone
        };
      });

      return {
        ...state,
        newProfileById: newProfileById
      };
    }

    case types.ADD_PROFILE: {
      const { profileId } = action.data;

      const newProfileById = { ...state.newProfileById };
      const favoriteProfileById = { ...state.favoriteProfileById };

      if (newProfileById[profileId]) {
        favoriteProfileById[profileId] = JSON.parse(JSON.stringify(newProfileById[profileId]));
        delete newProfileById[profileId];
      }

      return {
        ...state,
        newProfileById: newProfileById,
        favoriteProfileById: favoriteProfileById
      };
    }

    case types.REMOVE_PROFILE: {
      const { profileId } = action.data;

      const newProfileById = { ...state.newProfileById };

      if (newProfileById[profileId]) {
        delete newProfileById[profileId];
      }

      return {
        ...state,
        newProfileById: newProfileById
      };
    }

    default:
      return state;
  }
}
