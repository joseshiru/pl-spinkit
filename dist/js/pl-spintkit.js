/*
 *  pl-spintkit - v0.5.0
 *  Spintkit spinners for P-loading.
 *  https://github.com/joseshiru/pl-spinkit
 *
 *  Made by Jose Zuniga
 *  Under MIT License
 */
( function( $ ) {
    "use strict";

    $.fn.ploading.addOns.plspinkit = function( api ) {
        var addOnTask = {};
        var addOnAction = {};
        var pluginName = "plspinkit";
        var $pluginElement = api.$pluginElement;
        var pluginSettings = api.pluginSettings;
        var pluginPrivateActions = api.pluginPrivateAction;
        var spinner = {};

        addOnTask.defineMarkup = function() {
            pluginSettings.containerHTML = "<div>";
            pluginSettings.containerClass = "p-loading-container pl-progress-spinkit-container";
            pluginSettings.spinnerClass = "pl-spinkit-spinner";
            pluginSettings.spinnerHTML = "<div last-spinner></div>";
        };

        addOnTask.defineSpinners = function() {
            spinner.rotatingPlane = {
                className: "sk-rotating-plane",
                html: '<div class="sk-rotating-plane"></div>'
            };

            spinner.doubleBounce = {
                className: "sk-double-bounce",
                html: '<div class="sk-double-bounce"> <div class="sk-child sk-double-bounce1"></div> <div class="sk-child sk-double-bounce2"></div> </div>'
            };

            spinner.wave = {
                className: "sk-wave",
                html: '<div class="sk-wave"> <div class="sk-rect sk-rect1"></div> <div class="sk-rect sk-rect2">' +
                '</div> <div class="sk-rect sk-rect3"></div> <div class="sk-rect sk-rect4"></div> <div class="sk-rect sk-rect5"></div> </div>'
            };

            spinner.wanderingCubes = {
                className: "sk-wandering-cubes",
                html: '<div class="sk-wandering-cubes"> <div class="sk-cube sk-cube1"></div> <div class="sk-cube sk-cube2"></div> </div>'
            };

            spinner.spinnerPulse = {
                className: "sk-spinner-pulse",
                html: '<div class="sk-spinner sk-spinner-pulse"></div>'
            };

            spinner.chasingDots = {
                className: "sk-chasing-dots",
                html: '<div class="sk-chasing-dots"> <div class="sk-child sk-dot1"></div> <div class="sk-child sk-dot2"></div> </div>'
            };

            spinner.threeBounce = {
                className: "sk-three-bounce",
                html: '<div class="sk-three-bounce"> <div class="sk-child sk-bounce1"></div> <div class="sk-child sk-bounce2"></div> <div class="sk-child sk-bounce3"></div> </div>'
            };

            spinner.skCircle = {
                className: "sk-sk-circle",
                html: '<div class="sk-circle">' +
                        '<div class="sk-circle1 sk-child"></div>' +
                        '<div class="sk-circle2 sk-child"></div>' +
                        '<div class="sk-circle3 sk-child"></div>' +
                        '<div class="sk-circle4 sk-child"></div>' +
                        '<div class="sk-circle5 sk-child"></div>' +
                        '<div class="sk-circle6 sk-child"></div>' +
                        '<div class="sk-circle7 sk-child"></div>' +
                        '<div class="sk-circle8 sk-child"></div>' +
                        '<div class="sk-circle9 sk-child"></div>' +
                        '<div class="sk-circle10 sk-child"></div>' +
                        '<div class="sk-circle11 sk-child"></div>' +
                        '<div class="sk-circle12 sk-child"></div>' +
                    "</div>"
            };

            spinner.cubeGrid = {
                className: "sk-cube-grid",
                html: '<div class="sk-cube-grid">' +
                        '<div class="sk-cube sk-cube1"></div>' +
                        '<div class="sk-cube sk-cube2"></div>' +
                        '<div class="sk-cube sk-cube3"></div>' +
                        '<div class="sk-cube sk-cube4"></div>' +
                        '<div class="sk-cube sk-cube5"></div>' +
                        '<div class="sk-cube sk-cube6"></div>' +
                        '<div class="sk-cube sk-cube7"></div>' +
                        '<div class="sk-cube sk-cube8"></div>' +
                        '<div class="sk-cube sk-cube9"></div>' +
                        "</div>"
            };

            spinner.fadingCircle = {
                className: "sk-fading-circle",
                html: '<div class="sk-fading-circle">' +
                        '<div class="sk-circle1 sk-circle"></div>' +
                        '<div class="sk-circle2 sk-circle"></div>' +
                        '<div class="sk-circle3 sk-circle"></div>' +
                        '<div class="sk-circle4 sk-circle"></div>' +
                        '<div class="sk-circle5 sk-circle"></div>' +
                        '<div class="sk-circle6 sk-circle"></div>' +
                        '<div class="sk-circle7 sk-circle"></div>' +
                        '<div class="sk-circle8 sk-circle"></div>' +
                        '<div class="sk-circle9 sk-circle"></div>' +
                        '<div class="sk-circle10 sk-circle"></div>' +
                        '<div class="sk-circle11 sk-circle"></div>' +
                        '<div class="sk-circle12 sk-circle"></div>' +
                        "</div>"
            };

            spinner.foldingCube = {
                className: "sk-folding-cube",
                html: '<div class="sk-folding-cube">' +
                        '<div class="sk-cube1 sk-cube"></div>' +
                        '<div class="sk-cube2 sk-cube"></div>' +
                        '<div class="sk-cube4 sk-cube"></div>' +
                        '<div class="sk-cube3 sk-cube"></div>' +
                        "</div>"
            };

        };

        addOnTask.defineActions = function() {

            addOnAction.addSpinner = function() {
                var selectedSpinner = api.pluginSettings.spinner;
                if ( !selectedSpinner ) {
                    return;
                }

                var $spinner = $pluginElement.find( ".pl-spinkit-spinner" );
                var lastSpinner = $spinner.attr( "last-spinner" );
                var isTheSameSpinner = lastSpinner && lastSpinner ===  selectedSpinner;

                if ( isTheSameSpinner ) {
                    return;
                } else if ( lastSpinner ) {
                    $spinner.empty();
                }

                $spinner.append( spinner[ selectedSpinner ].html );
                $spinner.attr( "last-spinner", selectedSpinner );
            };

            addOnAction.runAddOn = function() {
                addOnAction.addSpinner();
            };

            addOnAction.handleEvents = function() {
                pluginPrivateActions.events.off( "pl:spinner:show." + pluginName + ".runAddOn" ).on( "pl:spinner:show." + pluginName + ".runAddOn", addOnAction.runAddOn );
            };

            addOnAction.updateApi = function() {
                api.pluginSettings = pluginSettings;
            };
        };

        addOnTask.initialize = function() {
            addOnTask.defineMarkup();
            addOnTask.defineSpinners();
            addOnTask.defineActions();

            addOnAction.handleEvents();
            addOnAction.updateApi();
        };

        addOnTask.initialize();

        return api;
    };

} )( jQuery );
