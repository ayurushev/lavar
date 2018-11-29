exports.config = {
  paths: {
    'public': '_public'
  },
  sourceMaps: false,
  modules: {
    definition: false,
    wrapper: false,
  },
  npm: {
    enabled: false
  },
  files: {
    javascripts: {
      joinTo: {
        'js/app.js': /^app/,
        'js/vendor.js': /^(vendor|bower_components)/
      }
    },
    stylesheets: {
      joinTo: {
        'css/app.css': /^app/,
        'css/vendor.css': /^(vendor|bower_components)/
      }
    },
    templates: {
      joinTo: {
        'js/app.js': /^app\/partials\//
      }
    }
  },
  plugins: {
    angular_templates: {
      path_transform: function(path) {
        return path.replace('app/partials/', 'partials/');
      }
    },
    cleancss: {
      keepSpecialComments: false,
      removeEmpty: true
    }
  }
};
