import shareSVG from '@plone/volto/icons/share.svg';
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

  config.settings.controlPanelsIcons['social-settings'] = shareSVG;

  config.settings.asyncPropsExtenders = [
    ...(config.settings.asyncPropsExtenders ?? []),
    {
      path: '/',
      extend: (dispatchActions) => {
        if (
          dispatchActions.filter(
            (asyncAction) => asyncAction.key === 'socialsettings',
          ).length === 0
        ) {
          dispatchActions.push({
            key: 'socialsettings',
            promise: ({ location, store: { dispatch } }) =>
              __SERVER__ && dispatch(getSocialSettings()),
          });
        }

        return dispatchActions;
      },
    },
  ];
  return config;
}
