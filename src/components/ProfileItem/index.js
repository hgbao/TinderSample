import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import FastImage from 'react-native-fast-image';

import { AppColors } from '@theme';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    margin: 12,
    padding: 15,
    alignItems: 'center',
    backgroundColor: AppColors.background,
    shadowColor: AppColors.shadow,
    shadowOpacity: 0.3,
    shadowRadius: 5,
    shadowOffset: {
      width: 0,
      height: 0
    },
    elevation: 1,
    borderRadius: 5
  },
  avatar: {
    width: 30,
    height: 30,
    borderRadius: 30,
    marginHorizontal: 8
  },
  nameContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 12
  },
  nameTitle: {
    fontSize: 15,
    color: AppColors.textSecondary,
    textTransform: 'capitalize'
  },
  nameFull: {
    fontSize: 18,
    fontWeight: '500',
    textTransform: 'capitalize',
    color: AppColors.textPrimary
  }
});

const ProfileItem = ({ avatar, name }) => {
  return (
    <TouchableOpacity>
      <View style={styles.container}>
        <FastImage
          style={styles.avatar}
          source={{ uri: avatar }}
          fallback
          defaultSource={require('@images/ProfileIcon.png')}
        />
        <View style={styles.nameContainer}>
          <Text style={styles.nameTitle}>{`${name.title}. `}</Text>
          <Text style={styles.nameFull}>{`${name.first} ${name.last}`}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default ProfileItem;
