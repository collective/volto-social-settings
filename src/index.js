import { socialSettingsReducer } from './reducers/socialSettingsReducer';
import SocialLinks from './components/SocialLinks/SocialLinks';
import SocialLinksWidget from './widget/SocialLinksWidget';
import { getSocialSettings } from './actions/getSocialSettings';

export { SocialLinksWidget, getSocialSettings, SocialLinks };

export default function applyConfig(config) {
  config.widgets.id = {
    ...config.widgets.id,
    social_links: SocialLinksWidget,
  };

  config.addonReducers = {
    ...config.addonReducers,
    socialSettings: socialSettingsReducer,
  };

  return config;
}
