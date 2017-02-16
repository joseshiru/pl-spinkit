( function( $, QUnit ) {

	"use strict";

	var $testCanvas = $( "#testCanvas" );
	var $fixture = null;

	QUnit.module( "Pl-spinkit", {
		beforeEach: function() {

			// fixture is the element where your jQuery plugin will act
			$fixture = $( "<div/>" );

			$testCanvas.append( $fixture );
		},
		afterEach: function() {

			// we remove the element to reset our plugin job :)
			$fixture.remove();
		}	
	} );

	QUnit.test( "is inside jQuery library", function( assert ) {

		assert.equal( typeof $.fn.ploading, "function", "has function inside jquery.fn" );
		assert.equal( typeof $fixture.ploading, "function", "another way to test it" );
	} );

	QUnit.test( "returns jQuery functions after called (chaining)", function( assert ) {
		assert.equal(
			typeof $fixture.ploading().on,
			"function",
			"'on' function must exist after plugin call" );
	} );

	QUnit.test( "caches plugin id of the container", function( assert ) {
		$fixture.ploading();
		assert.ok(
			$fixture.data( "p-loaderid" ),
			"has cached it into a jQuery data"
		);
	} );

	QUnit.test( "Shows the spinner", function( assert ) {
		$fixture.ploading({action: "show"});

		assert.ok( $fixture.find(".p-loading-container").is(":visible"),
		"Spinner is hidden" );
	} );

	QUnit.test( "Hides the spinner", function( assert ) {
		$fixture.ploading({action: "hide"});

		assert.ok( !$fixture.find(".p-loading-container").is(":visible"),
		"Spinner is hidden" );
	} );

}( jQuery, QUnit ) );
