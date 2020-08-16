let img;

var resize = false;
var fileLoaded = false; //intializes boolean variable for loading image
var grayFilter = false; //intializes boolean variable for activating grayFilter

function setup() {
  createCanvas(windowWidth, windowHeight); //creates initial window
  background(204); // pleasing gray color

  input = createFileInput(handleFile); // create button for file input
  input.position(0, 20); // position of button

  button = createButton('Grayscale'); //creates button for Grayscale Filter
  button.position(0, 70); // position of button
  button.mousePressed(applyGrayFilter); // triggers function applyGrayFilter
  button.size(100,50);

  button = createButton('Save Image'); // creates button for Saving the image
  button.position(0, 150); // position of button
  button.mousePressed(saveImage); // triggers function saveImage
  button.size(100,50);

}

function draw() {
  if (fileLoaded == true) {
    img.resize(window.width, 0); // resizes image to window width and scales to relative height
    createCanvas(img.width, img.height); // sets canvas size to image size
    background(204); // creates background, needed for clear PNG files
    image(img, 0, 0); // places picture at top left corner

  }

  if (grayFilter == true) {
    img.filter(GRAY); // applies gray filter to image
  } else {}
}

function handleFile(file) {
  fileLoaded = true; // file loaded flag
  grayFilter = false; // resets grayFilter flag
  if (file.type === 'image') {
    img = loadImage(file.data); // loads image

  } else {
    img = null; // does nothing if 'cancel' is selected 
  }
}

function applyGrayFilter() {
  grayFilter = true; // activates gray filter flag
}

function saveImage() {
  save(); // saves image (with no GUI!)
}