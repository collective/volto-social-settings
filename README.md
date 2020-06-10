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
    "postinstall": "rm -rf ./node_modules/volto-* && yarn omelette",
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

`Document your addon here`
