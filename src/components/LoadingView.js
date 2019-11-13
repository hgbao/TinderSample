import React from 'react';
import { StyleSheet, View, ActivityIndicator } from 'react-native';

import { AppColors } from '@theme';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

const LoadingScreen = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color={AppColors.border} />
    </View>
  );
};

export default LoadingScreen;