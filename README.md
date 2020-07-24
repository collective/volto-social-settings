# volto-social-settings

A widget for [Volto](https://github.com/plone/volto) to insert values for any language enabled

To be used with: [collective.volto.socialsettings](https://github.com/collective/collective.volto.socialsettings)

To be used with mrs-developer, see [Volto docs](https://docs.voltocms.com/customizing/add-ons/) for further usage informations.


## Usage

Add wherever you want the component, import and use it like this:

```jsx
import { SocialLinks } from 'volto-social-settings'

const YourAppComponent = () => <SocialLinks />
```

It's customizable using CSS via two props:

`wrapperCssClass`: a CSS class applied to the wrapper of the elements
`itemCssClass`: a CSS class applied to each item

Or, if this basic one doesn't fit your needs and CSS isn't enough, you can define a custom component and take that as an example.
