import configurationData from './configuration-data.json';

interface PopupData {
  title: string;
  subtitle: string;
  asset: string;
  consentCheckbox: boolean;
  activatedFields: {
    email: boolean;
    name: boolean;
    phone: boolean;
    gender: boolean;
  };
}

interface ConfigurationData {
  type: string;
  video: PopupData;
  game: PopupData;
}

export type PopupType = 'video' | 'game';

const getConfiguration = (): ConfigurationData => {
  return configurationData;
};

export const useConfiguration = () => {
  // FUTURE: Add logic to load configuration data from a remote source
  const configuration = getConfiguration();
  const selectedPopUp = configuration[configuration.type];

  return {
    ...selectedPopUp,
    type: configuration.type,
  };
};
