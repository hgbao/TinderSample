import React from 'react';
import { StyleSheet, View, ActivityIndicator } from 'react-native';

import { AppColors } from '@theme';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: AppColors.background
  }
});

const LoadingView = ({ opacity = 1 }) => {
  return (
    <View style={[styles.container, { opacity: opacity }]}>
      <ActivityIndicator size="large" color={AppColors.border} />
    </View>
  );
};

export default LoadingView;
