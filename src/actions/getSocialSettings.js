/**
 * Social settings action.
 * @module volto-social-settings/actions/getSocialSettings
 */
export const GET_SOCIAL_SETTINGS = 'GET_SOCIAL_SETTINGS';

/**
 * Get social settings
 * @function getSocialSettings
 * @returns {Object}  Get social settings action
 */
export function getSocialSettings() {
  return {
    type: GET_SOCIAL_SETTINGS,
    request: {
      op: 'get',
      path: `/@social-links`,
    },
  };
}
