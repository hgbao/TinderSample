import React, { useMemo } from 'react';
import { StyleSheet, View } from 'react-native';
import Swiper from 'react-native-deck-swiper';

import ProfileCard from '@components/ProfileCard';
import LoadingView from '@components/LoadingView';
import { AppColors } from '@theme';

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  cardStyle: {
    height: '100%',
    width: '100%',
    top: 0,
    left: 0
  }
});

const ProfileCarousel = ({ profiles, onRemoveProfile, onAddProfile }) => {
  const _renderSwiper = useMemo(() => {
    if (!profiles.length) {
      return <LoadingView />;
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
