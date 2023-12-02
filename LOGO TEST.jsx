// Begin Photoshop scripting
var originalDoc = app.activeDocument;

// Replace this with your actual Base64 string
var base64String = "data:image/png;base64,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"; // Replace with your full base64 string

// Helper function to manually decode Base64 string to binary data
function decodeBase64(input) {
    var keyStr = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';
    var output = [];
    var chr1, chr2, chr3;
    var enc1, enc2, enc3, enc4;
    var i = 0;
    var j = 0;

    input = input.replace(/[^A-Za-z0-9\+\/\=]/g, "");

    while (i < input.length) {
        enc1 = keyStr.indexOf(input.charAt(i++));
        enc2 = keyStr.indexOf(input.charAt(i++));
        enc3 = keyStr.indexOf(input.charAt(i++));
        enc4 = keyStr.indexOf(input.charAt(i++));

        chr1 = (enc1 << 2) | (enc2 >> 4);
        chr2 = ((enc2 & 15) << 4) | (enc3 >> 2);
        chr3 = ((enc3 & 3) << 6) | enc4;

        output.push(String.fromCharCode(chr1));

        if (enc3 != 64) {
            output.push(String.fromCharCode(chr2));
        }
        if (enc4 != 64) {
            output.push(String.fromCharCode(chr3));
        }
    }
    return output.join('');
}

// Function to decode a Base64 string and return a File object pointing to a temporary PNG file
function decodeBase64ToPngFile(base64Str) {
    var tempFile = new File(Folder.temp + "/tempImage.png");
    tempFile.encoding = 'BINARY';
    tempFile.open('w');
    var imageData = base64Str.replace(/^data:image\/(png|jpg);base64,/, "");
    var binaryData = decodeBase64(imageData);
    tempFile.write(binaryData);
    tempFile.close();
    return tempFile;
}

// Decode Base64 string and write to a temporary PNG file
var decodedPng = decodeBase64ToPngFile(base64String);

try {
    // Flatten the image
    originalDoc.flatten();

    // Convert to Grayscale
    originalDoc.changeMode(ChangeMode.GRAYSCALE);

    // Create the dialog
    var dialog = new Window('dialog', 'Set Halftone Options');
    dialog.orientation = 'column';
    dialog.alignChildren = 'fill';

    // Add the logo image to the dialog
    var logoFrame = dialog.add('panel', undefined, undefined, {borderStyle: 'black'});
    logoFrame.alignment = 'fill';
    logoFrame.margins = 0;
    var logoImage = logoFrame.add('image', undefined, decodedPng);

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
