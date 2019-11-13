import { Alert, Linking, Platform } from 'react-native';
import { LanguageConfig } from '@config';

const LaunchURL = function(url) {
  Linking.canOpenURL(url)
    .then(supported => {
      if (!supported) {
        throw new Error(LanguageConfig.translate('error'));
      } else {
        Linking.openURL(url);
      }
    })
    .catch(err =>
      Alert.alert(
        LanguageConfig.translate('error'),
        !!err.message ? err.message : LanguageConfig.translate('error-unknown-error')
      )
    );
};

export const callNumber = function(phoneNumber, prompt = true) {
  LaunchURL(`${prompt && Platform.OS !== 'android' ? 'telprompt' : 'tel'}${phoneNumber}`);
};

export const openMap = function(address) {
  const formatedAddress = address.lower().replace(' ', '+');
  Linking.openURL(`https://www.google.com/maps/search/?api=1&query=${formatedAddress}`);
};
