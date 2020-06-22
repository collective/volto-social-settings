# volto-social-settings

A widget for [Volto](https://github.com/plone/volto) to insert values for any language enabled

To be used with mrs-developer, see [Volto docs](https://docs.voltocms.com/customizing/add-ons/) for further usage informations.

## Setup with voltocli

```bash
voltocli
```

and insert `volto-social-settings` as addon name and `git@github.com:collective/volto-social-settings.git` as addon URL.

## Manual setup

In your Volto project:

```bash
yarn add mrs-developer collective/volto-social-settings
```

and in `package.json`:

```json
  "scripts": {
    "develop:npx": "npx -p mrs-developer missdev --config=jsconfig.json --output=addons",
    "develop": "missdev --config=jsconfig.json --output=addons",
    "preinstall": "if [ -f $(pwd)/node_modules/.bin/missdev ]; then yarn develop; else yarn develop:npx; fi",
    "postinstall": "yarn omelette",
    ...
  }
```

Create a `mrs.developer.json` file:

```json
{
  "volto-social-settings": {
    "url": "git@github.com:collective/volto-social-settings.git"
  }
}
```

In `jsconfig.json`:

```json
{
  "compilerOptions": {
    "paths": {
      "volto-social-settings": ["addons/volto-social-settings"]
    },
    "baseUrl": "src"
  }
}
```

Fix tests, in `package.json`:

```json
"jest": {
    ...
    "moduleNameMapper": {
      "@plone/volto/(.*)$": "<rootDir>/node_modules/@plone/volto/src/$1",
      "@package/(.*)$": "<rootDir>/src/$1",
      "volto-social-settings/(.*)$": "<rootDir>/src/addons/volto-social-settings/src/$1",
      "~/(.*)$": "<rootDir>/src/$1"
    },
    "testMatch": [
      "**/__tests__/**/*.[jt]s?(x)",
      "**/?(*.)+(spec|test).[jt]s?(x)",
      "!**/src/addons/volto/**/*"
    ],
    ...
```

Edit `.eslintrc`:

```json
{
  "extends": "./node_modules/@plone/volto/.eslintrc",
  "settings": {
    "import/resolver": {
      "alias": {
        "map": [
          ["@plone/volto", "@plone/volto/src"],
          ["@package", "./src"],
          ["volto-social-settings", "./src/addons/volto-social-settings/src"]
        ],
        "extensions": [".js", ".jsx", ".json"]
      },
      "babel-plugin-root-import": {
        "rootPathSuffix": "src"
      }
    }
  }
}
```

Add `src/addons` in `.gitignore`:

```
# .gitignore
src/addons
```

Then, run `yarn` and install dependencies:

```bash
yarn
```

## Usage

In your Volto project, add the reducer:

```jsx
// src/reducers/index.js

/**
 * Root reducer.
 * @module reducers/root
 */

import defaultReducers from '@plone/volto/reducers'
import { socialSettingsReducer } from 'volto-social-settings/src/reducers/socialSettingsReducer'

/**
 * Root reducer.
 * @function
 * @param {Object} state Current state.
 * @param {Object} action Action to be handled.
 * @returns {Object} New state.
 */
const reducers = {
  ...defaultReducers,
  socialSettings: socialSettingsReducer,
}

export default reducers
```

And wherever you want to add the component, import and use it like this:

```jsx
import { SocialLinks } from 'volto-social-settings/src/components/SocialLinks/SocialLinks'

const YourAppComponent = () => <SocialLinks />
```

Or, if this basic one doesn't fit your needs and CSS isn't enough, you can define a custom component and take that as an example.
