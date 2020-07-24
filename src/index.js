import { socialSettingsReducer } from 'volto-social-settings/reducers/socialSettingsReducer';
export { default as SocialLinks } from 'volto-social-settings/components/SocialLinks/SocialLinks';

export default config => {
  config.addonReducers = {
    ...config.addonReducers,
    socialSettings: socialSettingsReducer,
  };

  return config;
};
