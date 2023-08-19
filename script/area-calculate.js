// Triangle Area Calculator
function calculateTriangleArea() {
  // get triangle base value
  const triangleBase = document.getElementById("triangle-base");
  const triangleBaseValueString = triangleBase.value;
  const base = parseFloat(triangleBaseValueString);

  // get triangle height value
  const triangleHeight = document.getElementById("triangle-height");
  const triangleHeightValueString = triangleHeight.value;
  const height = parseFloat(triangleHeightValueString);

  // calculate area
  const area = 0.5 * base * height;

  // show triangle area
  const triangleArea = document.getElementById("triangle-area");
  triangleArea.innerText = area;

  addToCalculationEntry('Triangle', area);

  // clear the input field
  // triangleBase.value = '';
  // triangleHeight.value = '';
}

// Rectangle Area Calculator
function calculateRectangleArea() {
  // get rectangle width value
  const rectangleWidth = document.getElementById("rectangle-width");
  const rectangleWidthValueString = rectangleWidth.value;
  const width = parseFloat(rectangleWidthValueString);

  // get rectangle length value
  const rectangleLength = document.getElementById("rectangle-length");
  const rectangleLengthValueString = rectangleLength.value;
  const length = parseFloat(rectangleLengthValueString);

  // validate input width and length
  if (isNaN(width) || isNaN(length)) {
    alert("Please input a number");
    return;
  }

  // calculate area
  const area = width * length;

  // show rectangle area
  const rectangleArea = document.getElementById("rectangle-area");
  rectangleArea.innerText = area;

  addToCalculationEntry('Rectangle', area);

  // clear the input field
  // rectangleWidth.value = '';
  // rectangleLength.value = '';
}

// Re-usable function --> reduce duplicate code
function calculateParallelogramArea() {
  const base = getInputValue("parallelogram-base");
  const height = getInputValue("parallelogram-height");
  const area = base * height;
  setElementArea("parallelogram-area", area);

  addToCalculationEntry('Parallelogram', area);

}

function calculateEllipseArea() {
  const ellipseMajorRadius = getInputValue("ellipse-major-radius");
  const ellipseMinorRadius = getInputValue("ellipse-minor-radius");
  const area = 3.14 * ellipseMajorRadius * ellipseMinorRadius;
  const twoDecimal = area.toFixed(2);
  setElementArea("ellipse-area", twoDecimal);

  addToCalculationEntry('Ellipse', twoDecimal);
}

// reusable show area function
function setElementArea(elementId, areaId) {
  const element = document.getElementById(elementId);
  element.innerText = areaId;
}

// reusable get input value field in number
function getInputValue(inputFieldId) {
  const inputField = document.getElementById(inputFieldId);
  const inputFieldValueString = inputField.value;
  const inputFieldValue = parseFloat(inputFieldValueString);
  // inputField.value = '';
  return inputFieldValue;
}

// Add to calculation entry
/**
   * 1. get the element where you want to add the dynamic HTML
   * 2. create an element where you want to add
   * 3. if need some class
   * 4. set innerHTML it could be dynamic template string
   * 5. append the created element as a child of the parent
   */

function addToCalculationEntry(areaType, area) {
    const calculationEntry = document.getElementById("calculation-entry");

    const count = calculationEntry.childElementCount;

    const p = document.createElement("p");
    p.classList.add('my-4');
    p.innerHTML = `${count + 1}. ${areaType} ${area} cm <sup>2</sup>`;
    calculationEntry.appendChild(p);
  }

// Data Validation
/*
 * 1. set the proper type of the input field (number, date, time)
 * 2. Check type using typeof
 * 3. isNaN is checking whether the input is not a number or not
 */
