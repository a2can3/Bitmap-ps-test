// Begin Photoshop scripting
var originalDoc = app.activeDocument;

try {
  // Flatten the image
  originalDoc.flatten();

  // Convert to Grayscale
  originalDoc.changeMode(ChangeMode.GRAYSCALE);

  // Create a dialog window to get user input for the scale and type
  var dialog = new Window('dialog', 'Set Halftone Options');
  dialog.orientation = 'column';
  dialog.alignChildren = 'fill';

  // Calculate the position for the second monitor
  var secondMonitorX = 1920; // Example value, adjust to your setup
  var secondMonitorY = 0; // Example value, adjust to your setup

  // Position the dialog on the second monitor
  dialog.location = [secondMonitorX, secondMonitorY];

  // Add a slider for the scale
  var scaleSlider = dialog.add('slider', undefined, 30, 1, 100);
  var scaleText = dialog.add('statictext');
  scaleText.text = 'Scale: ' + scaleSlider.value;

  // Update text when slider is moved
  scaleSlider.onChanging = function () {
    scaleText.text = 'Scale: ' + Math.round(this.value);
  };

  // Add a dropdown for the bitmap type
  var typeGroup = dialog.add('group');
  typeGroup.orientation = 'row';
  typeGroup.add('statictext', undefined, 'Type:');
  var typeDropdown = typeGroup.add('dropdownlist', undefined, [
    'Round',
    'Diamond',
    'Ellipse',
    'Line',
    'Square',
    'Cross'
  ]);
  typeDropdown.selection = 0; // Default to 'Round'

  // Add an OK and Cancel button
  var buttons = dialog.add('group');
  buttons.alignment = 'center';
  buttons.add('button', undefined, 'OK', { name: 'ok' });
  buttons.add('button', undefined, 'Cancel', { name: 'cancel' });

  // Show the dialog and wait for input
  if (dialog.show() === 1) {
    // User clicked OK, apply the bitmap effect with the chosen scale and type
    var bitmapOptions = new BitmapConversionOptions();
    bitmapOptions.resolution = originalDoc.resolution;
    bitmapOptions.method = BitmapConversionType.HALFTONESCREEN;
    bitmapOptions.frequency = scaleSlider.value;
    bitmapOptions.angle = 45;

    // Determine the selected halftone shape
    switch (typeDropdown.selection.text) {
      case 'Round':
        bitmapOptions.shape = BitmapHalfToneType.ROUND;
        break;
      case 'Diamond':
        bitmapOptions.shape = BitmapHalfToneType.DIAMOND;
        break;
      case 'Ellipse':
        bitmapOptions.shape = BitmapHalfToneType.ELLIPSE;
        break;
      case 'Line':
        bitmapOptions.shape = BitmapHalfToneType.LINE;
        break;
      case 'Square':
        bitmapOptions.shape = BitmapHalfToneType.SQUARE;
        break;
      case 'Cross':
        bitmapOptions.shape = BitmapHalfToneType.CROSS;
        break;
    }

    // Apply the Bitmap effect
    originalDoc.changeMode(ChangeMode.BITMAP, bitmapOptions);

    // Close the initial dialog
    dialog.close();

    // Create a new dialog for the success message
    var successDialog = new Window('dialog', 'Success');
    successDialog.orientation = 'column';
    successDialog.alignChildren = 'center';
    
    // Position the success dialog on the second monitor
    successDialog.location = [secondMonitorX, secondMonitorY];

    successDialog.add('statictext', undefined, 'Bitmap effect applied successfully.');
    var okButton = successDialog.add('button', undefined, 'OK', { name: 'ok' });

    okButton.onClick = function() {
      successDialog.close();
    };

    successDialog.show();

  } else {
    // User clicked Cancel, do nothing
    dialog.close();
  }

} catch (e) {
  // If there's an error, display it in a dialog
  var errorDialog = new Window('dialog', 'Error');
  errorDialog.orientation = 'column';
  errorDialog.alignChildren = 'center';
  errorDialog.add('statictext', undefined, 'An error has occurred: ' + e.message);
  errorDialog.add('button', undefined, 'OK', { name: 'ok' });
  errorDialog.show();
}
