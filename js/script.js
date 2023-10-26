document.addEventListener("DOMContentLoaded", function() {
  const form = document.getElementById("tipCalculatorForm");
  const billTotal = document.getElementById("billTotal");
  const tipSlider = document.getElementById("tip");
  const tipAmount = document.getElementById("tipAmount");
  const totalWithTip = document.getElementById("totalWithTip");
  const tipPercentageValue = document.getElementById("tipPercentageValue");
  const emoji = document.getElementById("emoji");

  form.addEventListener("input", function() {
    const billTotalValue = parseFloat(billTotal.value);
    const tipPercentage = parseFloat(tipSlider.value);
    if (isNaN(billTotalValue)) {
      billTotal.setCustomValidity("Please enter a valid number.");
    } else {
      billTotal.setCustomValidity("");
      const tipAmountValue = (billTotalValue * tipPercentage) / 100;
      const totalWithTipValue = billTotalValue + tipAmountValue;
      tipPercentageValue.textContent = tipPercentage + "%";
      tipAmount.value = tipAmountValue.toFixed(2);
      totalWithTip.value = totalWithTipValue.toFixed(2);
    }
    emoji.textContent = getEmojiForPercentage(tipPercentage);
    billTotal.reportValidity();
  });

  form.addEventListener("submit", function(event) {
    event.preventDefault();
  });

  function getEmojiForPercentage(percentage) {
    if (percentage <= 25) {
      return "😊";
    } else if (percentage <= 50) {
      return "😯";
    } else if (percentage <= 75) {
      return "😍";
    } else {
      return "🤯";
    }
  }
});
