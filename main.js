const slider = document.getElementById("slider");
const sliderValueDisplay = document.getElementById("sliderValue");

const sliderValues = ["$8.00", "$12.00", "$16.00", "$24.00", "$36.00"];

function updateSliderValue() {
  const index = parseInt(slider.value) - 1;
  sliderValueDisplay.textContent = sliderValues[index];
}

slider.addEventListener("input", updateSliderValue);

updateSliderValue();
