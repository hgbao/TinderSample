import React, { useCallback, useMemo } from 'react';
import { StyleSheet, View } from 'react-native';
import Swiper from 'react-native-deck-swiper';

import ProfileCard from '@components/ProfileCard';
import LoadingScreen from '@components/LoadingScreen';
import { AppColors } from '@theme';

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    maxHeight: 350,
    borderRadius: 6,
    backgroundColor: 'white'
  },
  cardStyle: {
    height: '100%',
    width: '100%',
    top: 0,
    left: 0,
    backgroundColor: AppColors.background,
    shadowColor: AppColors.shadow,
    shadowOpacity: 0.12,
    shadowRadius: 6,
    shadowOffset: {
      width: 0,
      height: 0
    },
    elevation: 1
  }
});

const ProfileCarousel = ({ profiles, onRemoveProfile, onAddProfile }) => {
  const _renderSwiper = useMemo(() => {
    if (!profiles.length) {
      return <LoadingScreen />;
    }

    return (
      <Swiper
        backgroundColor="transparent"
        animateCardOpacity
        cardStyle={styles.cardStyle}
        containerStyle={styles.container}
        cards={profiles}
        renderCard={profile => <ProfileCard {...profile} />}
        keyExtractor={profile => profile.id}
        cardIndex={0}
        stackSize={2}
        verticalSwipe={false}
        onSwipedLeft={index => onRemoveProfile(profiles[index].id)}
        onSwipedRight={index => onAddProfile(profiles[index].id)}
      />
    );
  }, [onAddProfile, onRemoveProfile, profiles]);

  return <View style={styles.container}>{_renderSwiper}</View>;
};

export default ProfileCarousel;
