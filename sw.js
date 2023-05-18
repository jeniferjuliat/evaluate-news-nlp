const WorkboxPlugin = require('workbox-webpack-plugin');

// ...

plugins: [
  // ...

  // Configuração do service worker
  new WorkboxPlugin.GenerateSW({
    clientsClaim: true,
    skipWaiting: true
  })
]
