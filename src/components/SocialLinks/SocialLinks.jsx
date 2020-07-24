/**
 * SocialLinks component.
 * @module volto-social-settings/src/components/SocialLinks/SocialLinks
 */

import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { getSocialSettings } from 'volto-social-settings/actions/getSocialSettings';
import { Icon } from 'semantic-ui-react';
import cx from 'classnames';

const SocialLinks = ({ wrapperCssClass, itemCssClass }) => {
  const socialSettings = useSelector(state => state.socialSettings?.results);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSocialSettings());
  }, [dispatch]);

  return socialSettings?.length > 0 ? (
    <div className={cx('social-header', wrapperCssClass)}>
      {socialSettings.map(social => {
        const { title, icon, url } = social;

        return (
          <a
            href={url}
            rel="noopener noreferrer"
            className={cx(itemCssClass)}
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

SocialLinks.propTypes = {
  wrapperCssClass: PropTypes.string,
  itemCssClass: PropTypes.string,
};

export default SocialLinks;
