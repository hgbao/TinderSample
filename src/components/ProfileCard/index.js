import React from 'react';
import { StyleSheet, View } from 'react-native';
import FastImage from 'react-native-fast-image';

import { AppColors } from '@theme';

import SectionTab from './SectionTab';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'stretch',
    borderRadius: 5,
    overflow: 'hidden',
    maxHeight: 350
  },
  primaryContainer: {
    flex: 2,
    backgroundColor: AppColors.background,
    alignItems: 'center'
  },
  secondaryContainer: {
    flex: 1,
    backgroundColor: AppColors.backgroundSecondary
  },
  avatarContainer: {
    position: 'absolute',
    top: -75,
    width: 150,
    height: 150,
    borderRadius: 150,
    borderWidth: 0.5,
    borderColor: AppColors.border,
    padding: 4
  },
  avatar: {
    flex: 1,
    borderRadius: 150
  },
  sectionTitle: {
    fontSize: 18,
    color: AppColors.textSecondary,
    fontWeight: '500'
  },
  sectionContent: {
    marginTop: 2,
    fontSize: 26
  }
});

const ProfileCard = ({ avatar, name, dob, location, phone }) => {
  return (
    <View style={styles.container}>
      <View style={styles.secondaryContainer} />
      <View style={styles.primaryContainer}>
        <View style={styles.avatarContainer}>
          <FastImage
            style={styles.avatar}
            source={{ uri: avatar }}
            fallback
            defaultSource={require('@images/ProfileIcon.png')}
          />
        </View>
        <SectionTab name={name} dob={dob} location={location} phone={phone} />
      </View>
    </View>
  );
};

export default ProfileCard;
