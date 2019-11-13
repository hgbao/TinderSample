import React, { useState, useCallback, useEffect, useMemo } from 'react';
import { StyleSheet, View, Alert } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

import { reloadData, cleanData, removeProfile, addProfile } from '@redux/user/actions';

import LoadingView from '@components/LoadingView';
import ProfileCarousel from '@components/ProfileCarousel';
import { AppColors } from '@theme';
import { LanguageConfig } from '@config';

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
  cardWrapper: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    justifyContent: 'flex-start',
    padding: '10%'
  },
  cardContainer: {
    flex: 1,
    padding: 10,
    maxHeight: 360,
    backgroundColor: AppColors.background,
    borderRadius: 8,
    shadowColor: AppColors.shadow,
    shadowOpacity: 0.12,
    shadowRadius: 10,
    shadowOffset: {
      width: 0,
      height: 0
    },
    elevation: 1
  }
});

const ExploreView = () => {
  const dispatch = useDispatch();

  const profileById = useSelector(state => state.user.newProfileById);
  const profiles = useMemo(() => Object.values(profileById), [profileById]);

  const [isLoading, setIsLoading] = useState(true);

  const onRemoveProfile = useCallback(profileId => dispatch(removeProfile(profileId)), [dispatch]);
  const onAddProfile = useCallback(profileId => dispatch(addProfile(profileId)), [dispatch]);

  useEffect(() => {
    dispatch(reloadData())
      .then(() => setIsLoading(false))
      .catch(error => Alert.alert(LanguageConfig.translate('error'), error.message || error.problem));
    return dispatch(cleanData());
  }, []);

  const _renderProfileBlock = useMemo(() => {
    if (isLoading) {
      return <LoadingView />;
    }
    return <ProfileCarousel profiles={profiles} onRemoveProfile={onRemoveProfile} onAddProfile={onAddProfile} />;
  }, [isLoading, onAddProfile, onRemoveProfile, profiles]);

  return (
    <View style={styles.container}>
      <View style={styles.backgroundContainer}>
        <View style={styles.backgroundSecondary} />
        <View style={styles.backgroundPrimary} />
      </View>
      <View style={styles.cardWrapper}>
        <View style={styles.cardContainer}>{_renderProfileBlock}</View>
      </View>
    </View>
  );
};

export default ExploreView;
