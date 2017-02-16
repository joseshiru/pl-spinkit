## Documentation

### Quick start

We provide compiled CSS and JS (pl-spinkit.*), as well as compiled and minified CSS and JS (pl-spinkit.min.*).

Start including the pl-spinkit.js after the p-loading script:

```
 <!-- jQuery -->
<script type="text/javascript" src="https://code.jquery.com/jquery-2.2.1.min.js"></script>

<!-- P-Loading JS -->
<script type="text/javascript" src="dist/js/p-loading.min.js"></script>

<!-- Pl-fontawesome JS -->
<script type="text/javascript" src="dist/js/pl-spinkit.min.js"></script>
```

Then include the CSS file after the P-loading CSS file:

```
<link rel="stylesheet" type="text/css" href="https://raw.githubusercontent.com/tobiasahlin/SpinKit/master/css/spinkit.css" />

<link rel="stylesheet" type="text/css" href="dist/css/p-loading.min.css" />

<link rel="stylesheet" type="text/css" href="dist/css/pl-spinkit.min.css" />
```

Or by just installing it through NPM (works in Meteor as well):
``` npm install pl-spinkit```

Important: the Spinkit CSS is not included as many people use different ways how to implement it (CDN, etc). In this example we are including the file by using a CDN.

##### New Settings

Property              | Description       | Default value
-------------         | -------------     | -------------
spinner         | The CSS class of the spinkit to display (in camelCase )  | ""


##### Spinners names

Original Name       |  Use it as     
-------------       | -------------
rotatingP-plane       | rotatingPlane
doubleB-bounce      |  doubleBounce
wave            | wave
wandering-cubes |wanderingCubes
spinner-pulse | spinnerPulse
chasing-dots | chasingDots
three-bounce | threeBounce  
sk-circle | skCircle
cube-grid | cubeGrid
fading-circle | fadingCircle
folding-cube | foldingCube


### Actions
This add-on is not adding any new action P-Loading.

##### Show loading mask with a spinner
Use this for show the loading mask in the selected jQuery element.
This will create all the markup and show the loading mask. 
```
$('#test').ploading({action: 'show', spinner: 'rotatingPlane', useAddOns: ['plspinkit']});
```

##### Update the spinner.
Use this for update the icon displayed the loading mask.
By just  updating the icon property to new icon we want, is all we need to do. 
```
$('#test').ploading({action: 'show', spinner: 'chasingDots', useAddOns: ['plspinkit']});
```

*Note: for avoid the constant definition of the useAddOns property, you can set it in the public settings of p-loading. `$.fn.ploading.defaults`*

```
//static settings
$.fn.ploading.defaults = {
    useAddOns: ['plspinkit'],
    spinner: 'rotatingPlane'
}
```

The code above will allow you to always include those properties as default in the p-loading. So, by running the next
code, you will not need to declare again wich addOn and spinner to use:
```
// It already has these properties: 
// useAddOns: ['plspinkit'], spinner: 'rotatingPlane'

$('#test').ploading({action: 'show'});
```