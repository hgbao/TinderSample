import React, { useCallback, useEffect, useMemo } from 'react';
import { StyleSheet, View } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

import { loadData, removeProfile, addProfile } from '@redux/user/actions';

import ProfileCarousel from '@components/ProfileCarousel';
import { AppColors } from '@theme';

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  backgroundContainer: {
    flex: 1
  },
  backgroundPrimary: {
    flex: 3,
    backgroundColor: AppColors.backgroundSecondary,
    alignItems: 'center'
  },
  backgroundSecondary: {
    flex: 1,
    backgroundColor: AppColors.border
  },
  cardContainer: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    justifyContent: 'flex-start',
    padding: '10%'
  }
});

const ExploreView = () => {
  const dispatch = useDispatch();

  const profileById = useSelector(state => state.user.newProfileById);
  const profiles = useMemo(() => Object.values(profileById), [profileById]);

  const onRemoveProfile = useCallback(profileId => dispatch(removeProfile(profileId)), [dispatch]);
  const onAddProfile = useCallback(profileId => dispatch(addProfile(profileId)), [dispatch]);

  useEffect(() => {
    dispatch(loadData({ clearExistence: true }));
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.backgroundContainer}>
        <View style={styles.backgroundSecondary} />
        <View style={styles.backgroundPrimary} />
      </View>
      <View style={styles.cardContainer}>
        <ProfileCarousel profiles={profiles} onRemoveProfile={onRemoveProfile} onAddProfile={onAddProfile} />
      </View>
    </View>
  );
};

export default ExploreView;
