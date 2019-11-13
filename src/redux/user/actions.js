import { fetchGet, fetchPost } from '@services/api';
import UserEndPoints from '@services/endpoints/user';

import UserDefaultSettings from '@constants/user';

export const types = {
  LOAD_DATA: 'LOAD_DATA',
  CLEAN_DATA: 'CLEAN_DATA',
  REMOVE_PROFILE: 'REMOVE_PROFILE',
  ADD_PROFILE: 'ADD_PROFILE'
};

export function reloadData(results = UserDefaultSettings.backgroundProfiles) {
  return async dispatch => {
    const response = await fetchGet(`${UserEndPoints.LOAD_DATA}?results=${results}`);
    if (!response.ok) {
      throw response;
    }

    return dispatch({
      type: types.LOAD_DATA,
      data: {
        results: response.data.results,
        removeExistence: true
      }
    });
  };
}

export function cleanData() {
  return async dispatch => {
    return dispatch({
      type: types.CLEAN_DATA
    });
  }
}

export function removeProfile(profileId) {
  return async dispatch => {
    // Suppose to call API to do something on server
    // const requestParams = { profileId: profileId };
    // const response = await fetchPost(UserEndPoints.REMOVE_PROFILE, requestParams);
    // ...handle reponse failure

    // Load another profile in background
    fetchGet(UserEndPoints.LOAD_DATA).then(response => {
      dispatch({
        type: types.LOAD_DATA,
        data: response.data
      });
    });

    return dispatch({
      type: types.REMOVE_PROFILE,
      data: {
        profileId: profileId
      }
    });
  };
}

export function addProfile(profileId) {
  return async dispatch => {
    // Suppose to call API to do something on server
    // const requestParams = { profileId: profileId };
    // const response = await fetchPost(UserEndPoints.ADD_PROFILE, requestParams);
    // ...handle reponse failure

    // Load another profile in background
    fetchGet(UserEndPoints.LOAD_DATA).then(response => {
      dispatch({
        type: types.LOAD_DATA,
        data: response.data
      });
    });

    return dispatch({
      type: types.ADD_PROFILE,
      data: {
        profileId: profileId
      }
    });
  };
}
