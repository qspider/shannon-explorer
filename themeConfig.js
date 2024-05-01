// Theme Colors
// Initially this will be blank. Later on when app is initialized we will assign bootstrap colors to this from CSS variables.
export const $themeColors = {}

// App Breakpoints
// Initially this will be blank. Later on when app is initialized we will assign bootstrap breakpoints to this object from CSS variables.
export const $themeBreakpoints = {}

// APP CONFIG
export const $themeConfig = {
  app: {
    appName: 'POKTROLL', // Will update name in navigation menu (Branding)
    // eslint-disable-next-line global-require
    appLogoImage: '/pocket-network-pokt-logo.png', // Will update logo in navigation menu (Branding)
  },
  layout: {
    isRTL: false,
    skin: 'semi-dark', // light, dark, bordered, semi-dark
    routerTransition: 'zoom-out', // zoom-fade, slide-fade, fade-bottom, fade, zoom-out, none
    type: 'vertical', // vertical, horizontal
    contentWidth: 'boxed', // full, boxed
    menu: {
      hidden: false,
      isCollapsed: true,
    },
    navbar: {
      // ? For horizontal menu, navbar type will work for navMenu type
      type: 'static', // static , sticky , floating, hidden
      backgroundColor: 'secondary', // BS color options [primary, success, etc]
    },
    footer: {
      type: 'static', // static, sticky, hidden
    },
    customizer: true,
    enableScrollToTop: true,
  },
}
