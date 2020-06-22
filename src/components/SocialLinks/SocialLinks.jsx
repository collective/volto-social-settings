/**
 * SocialLinks component.
 * @module volto-social-settings/src/components/SocialLinks/SocialLinks
 */

import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getSocialSettings } from '../../actions/getSocialSettings';
import { Icon } from 'semantic-ui-react';

const SocialLinks = () => {
  const socialSettings = useSelector(state => state.socialSettings.results);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSocialSettings());
  }, [dispatch]);

  return socialSettings?.length > 0 ? (
    <div className="social-header">
      {socialSettings.map(social => {
        const { title, icon, url } = social;

        return (
          <a
            href={url}
            rel="noopener noreferrer"
            target="_blank"
            title={title}
            key={url}
          >
            <Icon name={icon} />
          </a>
        );
      })}
    </div>
  ) : null;
};

export default SocialLinks;
