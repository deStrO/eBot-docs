export default defineAppConfig({
  docus: {
    title: 'eBot-CS2',
    description: 'INGAME CONTROLLER. AFTERMATCH ANALYZER',
    image: '/logo.png',
    socials: {
      twitter: 'deStrO_BE',
      github: 'deStrO/eBot-CSGO',
    },
    github: {
      dir: '',
      branch: 'main',
      repo: 'eBot-docs',
      owner: 'deStrO',
      edit: true
    },
    aside: {
      level: 0,
      collapsed: false,
      exclude: []
    },
    main: {
      padded: true,
      fluid: false
    },
    header: {
      logo: true,
      showLinkIcon: true,
      exclude: [],
      fluid: false
    }
  }
})
