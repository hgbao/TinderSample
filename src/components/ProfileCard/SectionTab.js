import React, { useState, useCallback, useMemo } from 'react';
import { StyleSheet, View, Image, TouchableOpacity } from 'react-native';

import { AppColors } from '@theme';

import { SectionName, SectionInfo, SectionAddress, SectionContact } from './Sections';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  tabContainer: {
    flexDirection: 'row',
    position: 'absolute',
    bottom: 10
  },
  tabIcon: {
    marginHorizontal: 4,
    width: 24,
    height: 24,
    tintColor: AppColors.inactive
  },
  tabIconIndicator: {
    height: 1,
    width: 24,
    marginHorizontal: 4,
    marginBottom: 4,
    backgroundColor: AppColors.background
  },
  tabIconSelected: {
    tintColor: AppColors.active
  },
  tabIconIndicatorSelected: {
    backgroundColor: AppColors.active
  }
});

const Icons = {
  Profile: require('@images/ProfileIcon.png'),
  Calendar: require('@images/CalendarIcon.png'),
  House: require('@images/HouseIcon.png'),
  Phone: require('@images/PhoneIcon.png')
};

const SectionIcon = ({ source, onSelect, isSelected = false }) => {
  return (
    <TouchableOpacity onPress={onSelect}>
      <View>
        <View style={[styles.tabIconIndicator, isSelected && styles.tabIconIndicatorSelected]} />
        <Image style={[styles.tabIcon, isSelected && styles.tabIconSelected]} source={source} />
      </View>
    </TouchableOpacity>
  );
};

const SectionTab = ({ name, dob, location, phone }) => {
  const [sectionIndex, setSectionIndex] = useState(0);

  const setSectionName = useCallback(() => setSectionIndex(0), []);
  const setSectionInfo = useCallback(() => setSectionIndex(1), []);
  const setSectionAddress = useCallback(() => setSectionIndex(2), []);
  const setSectionContact = useCallback(() => setSectionIndex(3), []);

  const _renderSectionIndex = useMemo(() => {
    switch (sectionIndex) {
      case 0:
        return <SectionName name={name} />;
      case 1:
        return <SectionInfo dob={dob} />;
      case 2:
        return <SectionAddress address={location} />;
      case 3:
        return <SectionContact phone={phone} />;
      default:
        return null;
    }
  }, [dob, location, name, phone, sectionIndex]);

  return (
    <View style={styles.container}>
      {_renderSectionIndex}
      <View style={styles.tabContainer}>
        <SectionIcon
          source={Icons.Profile}
          section={SectionName}
          onSelect={setSectionName}
          isSelected={sectionIndex === 0}
        />
        <SectionIcon
          source={Icons.Calendar}
          section={SectionInfo}
          onSelect={setSectionInfo}
          isSelected={sectionIndex === 1}
        />
        <SectionIcon
          source={Icons.House}
          section={SectionAddress}
          onSelect={setSectionAddress}
          isSelected={sectionIndex === 2}
        />
        <SectionIcon
          source={Icons.Phone}
          section={SectionContact}
          onSelect={setSectionContact}
          isSelected={sectionIndex === 3}
        />
      </View>
    </View>
  );
};

export default SectionTab;
