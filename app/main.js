requirejs.config({
    paths: {
        'text': '../scripts/text',
        'knockout': '../scripts/knockout',
        'jquery': '../scripts/jquery',
        'bootstrap': '../scripts/bootstrap',
        'durandal':'../scripts/durandal',
        'plugins' : '../scripts/durandal/plugins',
        'transitions' : '../scripts/durandal/transitions'
    },
    shim: {
        'bootstrap': {
            deps: ['jquery'],
            exports: 'jQuery'
        }
    }
});

define(function(require) {
    var app = require('durandal/app'),
        viewLocator = require('durandal/viewLocator'),
        system = require('durandal/system');

    //>>excludeStart("build", true);
    system.debug(true);
    //>>excludeEnd("build");

    app.title = 'Durandal Starter Kit';

    app.configurePlugins({
        router:true,
        dialog: true,
        widget: true
    });

    app.start().then(function() {
        //Replace 'viewmodels' in the moduleId with 'views' to locate the view.
        //Look for partial views in a 'views' folder in the root.
        viewLocator.useConvention();

        //Show the app by setting the root view model for our application with a transition.
        app.setRoot('viewmodels/shell', 'entrance');
    });
});