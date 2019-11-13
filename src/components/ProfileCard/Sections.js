import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

import { formatDate } from '@lib/utils';
import { LanguageConfig } from '@config';
import { AppColors } from '@theme';

const styles = StyleSheet.create({
  section: {
    marginVertical: 5,
    alignItems: 'center'
  },
  sectionTitle: {
    fontSize: 18,
    color: AppColors.textSecondary,
    fontWeight: '500'
  },
  sectionContent: {
    marginTop: 2,
    fontSize: 26
  },
  textCapitalize: {
    textTransform: 'capitalize'
  }
});

const SectionContent = ({ title, content }) => {
  return (
    <View style={styles.section}>
      <Text style={[styles.sectionTitle, styles.textCapitalize]}>{title}</Text>
      <Text style={[styles.sectionContent, styles.textCapitalize]}>{content}</Text>
    </View>
  );
};

const SectionName = ({ name }) => {
  return <SectionContent title={LanguageConfig.translate('info-name')} content={`${name.first} ${name.last}`} />;
};

const SectionInfo = ({ dob }) => {
  return <SectionContent title={LanguageConfig.translate('info-dob')} content={formatDate(dob)} />;
};

const SectionAddress = ({ address }) => {
  return <SectionContent title={LanguageConfig.translate('info-address')} content={address.street} />;
};

const SectionContact = ({ phone }) => {
  return <SectionContent title={LanguageConfig.translate('info-phone')} content={phone} />;
};

export { SectionName, SectionInfo, SectionAddress, SectionContact };
