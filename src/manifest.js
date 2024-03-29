module.exports = {
  'name': 'theconversation.social',
  'version': '0.3',
  'description': 'Bringing Organization to the Conversation',
  'manifest_version': 2,
  'background': {
    'scripts': [
      'md5.js',
      'jquery.min.js',
      'background.js'
    ],
    'persistent': true
  },
  'content_scripts': [{
    'matches': ['http://*/*', 'https://*/*'],
    'js': [
      'doubly-linked-list.js',
      'jquery.min.js',
      'jquery-migrate-3.0.1.js',
      'jquery.qtip.min.js',
      'content-link.js',
      'popup-button.js',
      'content.js',
      'FileSaver.js',
    ],
    'css': ['jquery.qtip.css', 'fonts.css', 'content.css'],
    'run_at': 'document_start'
  }],
  'browser_action': {
    'default_icon': 'icon-16.png',
    'default_title': 'the conversation .social',
    'default_popup': 'pages/popup.html'
  },
  'icons': {
    '16': 'icon-16.png',
    '48': 'icon-48.png',
    '64': 'icon-64.png',
    '96': 'icon-96.png',
    '128': 'icon-128.png'
  },
  'permissions': [
    'webNavigation',
    'tabs',
    'activeTab',
    'http://*/*',
    'https://*/*',
    'storage',
    'unlimitedStorage'
  ],
  'web_accessible_resources': [
    'fonts/*',
    'payload.js',
    "payload-before.js",
    'chrome-extension:/*',
    'icon-16.png',
    'icon-19.png',
    'icon-48.png',
    'ajax-loader-transparent.gif',
    'information-2-16.png',
    'c-icon.png',
    'information-2-12.png',
    'close.png',
    'spinner_200.svg',
    'iframe.html',
    'iframe_new.html',
    'domainlist.txt',
    'widget/index.html',
    'widget/reading_list.html',
    'widget/recommends_list.html',
    'widget/no_subscription.html',
    'poppins.woff2'
  ],
  'content_security_policy': "default-src *; frame-src *; img-src * data:; connect-src *; style-src * 'unsafe-inline'; font-src *; script-src 'self' http://* https://* 'unsafe-eval' 'unsafe-inline' https://cdn.syndication.twimg.com/ https://platform.twitter.com/ theconversation.social https://v1.addthis.com/ https://connect.facebook.net/ https://ajax.googleapis.com/ https://maxcdn.bootstrapcdn.com/ https://cdnjs.cloudflare.com/ https://unpkg.com/ https://cdnjs.cloudflare.com/ 'sha256-lginy85hjkZ5Jnvk7yrHOdHZS3UL3eUfkNrkB6l45KA='; object-src 'self'",
  'options_page': 'options.html'
}
