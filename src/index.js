import { socialSettingsReducer } from './reducers/socialSettingsReducer';
export { default as SocialLinks } from './components/SocialLinks/SocialLinks';

export default config => {
  config.addonReducers = {
    ...config.addonReducers,
    socialSettings: socialSettingsReducer,
  };

  return config;
};
