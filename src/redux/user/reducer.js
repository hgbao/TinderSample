import { types } from './actions';

const initialState = {
  newProfileById: {},
  favoriteProfileById: {},
  removeProfileIds: []
};

export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case types.LOAD_DATA: {
      const { results } = action.data;

      const newProfileById = {};
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

    case types.CLEAN_DATA: {
      const { removeProfileIds } = state;
      const newProfileById = { ...state.newProfileById };

      for (let i = 0; i < removeProfileIds.length; i++) {
        if (newProfileById[removeProfileIds[i]]) {
          delete newProfileById[removeProfileIds[i]];
        }
      }

      return {
        ...state,
        newProfileById: newProfileById,
        removeProfileIds: []
      };
    }

    case types.ADD_PROFILE: {
      const { profileId } = action.data;

      const newProfileById = { ...state.newProfileById };
      const favoriteProfileById = { ...state.favoriteProfileById };
      const removeProfileIds = [...state.removeProfileIds];

      if (newProfileById[profileId]) {
        favoriteProfileById[profileId] = JSON.parse(JSON.stringify(newProfileById[profileId]));
        removeProfileIds.push(profileId);
      }

      return {
        ...state,
        newProfileById: newProfileById,
        favoriteProfileById: favoriteProfileById,
        removeProfileIds: removeProfileIds
      };
    }

    case types.REMOVE_PROFILE: {
      const { profileId } = action.data;

      const newProfileById = { ...state.newProfileById };
      const removeProfileIds = [...state.removeProfileIds];

      if (newProfileById[profileId]) {
        removeProfileIds.push(profileId);
      }

      return {
        ...state,
        newProfileById: newProfileById,
        removeProfileIds: removeProfileIds
      };
    }

    default:
      return state;
  }
}
