module.exports = {
  siteTitle: 'Kshitiz Saxena',
  siteDescription: 'Kshitiz Saxena is a software architect based in Vadodara, India. He is also a full-stack developer and a passionate runner.',
  siteKeywords: 'Kshitiz Saxena, Kshitiz, software architect, full-stack developer, microservices, mobile apps, web apps, java, kotlin, swift, javascript',
  siteUrl: 'https://www.kshitizsaxena.com',
  siteLanguage: 'en_US',
  googleAnalyticsID: 'UA-43662625-2',
  googleVerification: 'NAnvp9qMCz59NvlWQ6rr_wve069_zPI4x9xw0MqpHFA',
  name: 'Kshitiz Saxena',
  location: 'Vadodara, India',
  email: 'kshitiz@kshitizsaxena.com',
  github: 'https://github.com/kshitiz-saxena',
  twitterHandle: '@kshitizks',
  socialMedia: [
    {
      name: 'Twitter',
      url: 'https://twitter.com/kshitizks',
    },
    {
      name: 'Linkedin',
      url: 'https://www.linkedin.com/in/kshitiz-saxena-70482317',
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/kshitizsaxena',
    },
    {
      name: 'GitHub',
      url: 'https://github.com/kshitiz-saxena',
    }
  ],

  navLinks: [
    {
      name: 'About',
      url: '/#about',
    },
    {
      name: 'Experience',
      url: '/#jobs',
    },
    {
      name: 'Contact',
      url: '/#contact',
    },
  ],

  navHeight: 100,

  colors: {
    green: '#64ffda',
    navy: '#0a192f',
    darkNavy: '#020c1b',
  },

  srConfig: (delay = 200) => ({
    origin: 'bottom',
    distance: '20px',
    duration: 500,
    delay,
    rotate: { x: 0, y: 0, z: 0 },
    opacity: 0,
    scale: 1,
    easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
    mobile: true,
    reset: false,
    useDelay: 'always',
    viewFactor: 0.25,
    viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
  }),
};
