const inputEl = document.getElementById("input");
const convertBtn = document.getElementById("convert-btn");

const length = document.getElementById("length");
const volume = document.getElementById("volume");
const mass = document.getElementById("mass");

const lengthConvert = 3.281;
const volumeConvert = 0.264;
const massConvert = 2.204;

convertBtn.addEventListener("click", function () {
  let baseValue = inputEl.value;

  length.textContent = `${baseValue} meters = ${(
    baseValue * lengthConvert
  ).toFixed(3)} feet | ${baseValue} feet = ${(
    baseValue / lengthConvert
  ).toFixed(3)} meters`;

  volume.textContent = `${baseValue} liters = ${(
    baseValue * volumeConvert
  ).toFixed(3)} gallons | ${baseValue} gallons = ${(
    baseValue / volumeConvert
  ).toFixed(3)} liters`;

  mass.textContent = `${baseValue} kilos = ${(baseValue * massConvert).toFixed(
    3
  )} pounds | ${baseValue} pounds = ${(baseValue / massConvert).toFixed(
    3
  )} kilos`;
});
