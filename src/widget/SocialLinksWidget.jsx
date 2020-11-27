import React, { useState } from 'react';
import { defineMessages, useIntl } from 'react-intl';
import { Icon, Grid, Form, Button } from 'semantic-ui-react';
import { TextWidget } from '@plone/volto/components';
import './index.css';

const messages = defineMessages({
  addItem: {
    id: 'social-settings-additem',
    defaultMessage: 'Add item',
  },
  moveItemUp: {
    id: 'social-settings-move-item-up',
    defaultMessage: 'Move item up',
  },
  moveItemDown: {
    id: 'social-settings-move-item-down',
    defaultMessage: 'Move item down',
  },
  icon: {
    id: 'social-settings-icon',
    defaultMessage: 'Icon name',
  },
  title: {
    id: 'social-settings-social-name',
    defaultMessage: 'Social name',
  },
  url: {
    id: 'social-settings-url',
    defaultMessage: 'Url',
  },
  deleteItem: {
    id: 'social-settings-delete-item',
    defaultMessage: 'Delete social',
  },
});

const defaultItem = (title) => ({
  title: title || '',
  url: '',
  icon: '',
});
const defaultConfiguration = () => [defaultItem()];

const SocialLinksWidget = ({
  value,
  id,
  onChange,
  required,
  title,
  description,
}) => {
  const intl = useIntl();
  const [configuration, setConfiguration] = useState(
    value ? JSON.parse(value) : defaultConfiguration,
  );

  const handleChangeConfiguration = (value) => {
    setConfiguration(value);
    onChange(id, JSON.stringify(value));
  };

  const addItem = (e) => {
    e.preventDefault();

    let newConfiguration = [
      ...configuration,
      {
        ...defaultItem(),
      },
    ];

    handleChangeConfiguration(newConfiguration);
  };

  const moveItem = (e, index, direction) => {
    e.preventDefault();
    const up = direction === 'up';
    let newConfiguration = [...configuration];

    let item = newConfiguration[index];
    newConfiguration.splice(index, 1);
    newConfiguration.splice(index + (up ? -1 : 1), 0, item);

    handleChangeConfiguration(newConfiguration);
  };

  const onChangeItem = (index, item) => {
    let newConfiguration = [...configuration];
    newConfiguration[index] = item;

    handleChangeConfiguration(newConfiguration);
  };

  const deleteItem = (e, index) => {
    e.preventDefault();
    let newConfiguration = [...configuration];
    newConfiguration.splice(index, 1);

    handleChangeConfiguration(newConfiguration);
  };

  return (
    <div className="footer-configuration-widget">
      <Form.Field inline id={id}>
        <Grid>
          {/* <Grid.Row><Grid.Column width="12">
              <div className="wrapper">
                <label htmlFor="footer-configuration">{title}</label>
              </div>
            </Grid.Column></Grid.Row> */}
          {description && (
            <Grid.Row>
              <Grid.Column stretched width="12">
                <p className="help">{description}</p>
              </Grid.Column>
            </Grid.Row>
          )}
          <Grid.Row>
            <Grid.Column width="12" className="social-links-widget">
              <Grid stackable celled="internally">
                {configuration.map((item, idx) => (
                  <Grid.Row>
                    <Grid.Column width={1}>
                      <div className="preview-social">
                        <Button.Group vertical className="move-buttons">
                          <Button
                            disabled={idx === 0}
                            size="tiny"
                            icon={<Icon name="arrow left" />}
                            title={intl.formatMessage(messages.moveItemUp)}
                            onClick={(e) => moveItem(e, idx, 'up')}
                          />
                          <Button
                            disabled={idx === configuration.length - 1}
                            size="tiny"
                            icon={<Icon name="arrow right" />}
                            title={intl.formatMessage(messages.moveItemDown)}
                            onClick={(e) => moveItem(e, idx, 'down')}
                          />
                        </Button.Group>
                      </div>
                    </Grid.Column>
                    <Grid.Column width={11}>
                      <TextWidget
                        id="icon"
                        title={intl.formatMessage(messages.icon)}
                        description=""
                        required={true}
                        value={item.icon}
                        onChange={(id, value) => {
                          onChangeItem(idx, {
                            ...configuration[idx],
                            icon: value?.length ? value : '',
                          });
                        }}
                      />
                      <TextWidget
                        id="title"
                        title={intl.formatMessage(messages.title)}
                        description=""
                        required={true}
                        value={item.title}
                        onChange={(id, value) => {
                          onChangeItem(idx, {
                            ...configuration[idx],
                            title: value?.length ? value : '',
                          });
                        }}
                      />

                      <TextWidget
                        id="url"
                        title={intl.formatMessage(messages.url)}
                        description=""
                        required={true}
                        value={item.title}
                        onChange={(id, value) => {
                          onChangeItem(idx, {
                            ...configuration[idx],
                            url: value?.length ? value : '',
                          });
                        }}
                      />
                      <div className="social-settings-footer">
                        <Button
                          icon="trash"
                          negative
                          onClick={(e) => deleteItem(e, idx)}
                          content={intl.formatMessage(messages.deleteItem)}
                          size="tiny"
                        />
                      </div>
                    </Grid.Column>
                  </Grid.Row>
                ))}

                {/* add row */}
                <Grid.Row>
                  <Grid.Column width={1}>
                    <Button
                      size="tiny"
                      icon={<Icon name="plus" />}
                      onClick={(e) => addItem(e)}
                    />
                  </Grid.Column>
                  <Grid.Column></Grid.Column>
                </Grid.Row>
              </Grid>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Form.Field>
    </div>
  );
};

export default SocialLinksWidget;
