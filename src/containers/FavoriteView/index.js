import React, { useMemo } from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import { useSelector } from 'react-redux';

import ProfileItem from '@components/ProfileItem';

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

const FavoriteView = () => {
  const profileById = useSelector(state => state.user.favoriteProfileById);
  const profiles = useMemo(() => Object.values(profileById), [profileById]);

  const _renderProfiles = useMemo(() => {
    return profiles.map(profile => <ProfileItem key={profile.id} {...profile} />);
  }, [profiles]);

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>{_renderProfiles}</ScrollView>
    </View>
  );
};

export default FavoriteView;
