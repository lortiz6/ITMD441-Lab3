document.addEventListener("DOMContentLoaded", function() {
  const form = document.getElementById("tipCalculatorForm");
  const billTotal = document.getElementById("billTotal");
  const tipSlider = document.getElementById("tip");
  const tipAmount = document.getElementById("tipAmount");
  const totalWithTip = document.getElementById("totalWithTip");
  const tipPercentageValue = document.getElementById("tipPercentageValue");
  form.addEventListener("input", function () {
      const billTotalValue = parseFloat(billTotal.value);
      const tipPercentage = parseFloat(tipSlider.value);
      if (isNaN(billTotalValue)) {
          tipAmount.value = "0.00";
          totalWithTip.value = "0.00";
          tipPercentageValue.textContent = "0%";
      } else {
          const tipAmountValue = (billTotalValue * tipPercentage) / 100;
          const totalWithTipValue = billTotalValue + tipAmountValue;
          tipPercentageValue.textContent = tipPercentage + "%";
          tipAmount.value = tipAmountValue.toFixed(2);
          totalWithTip.value = totalWithTipValue.toFixed(2);
      }
  });
  billTotal.addEventListener("input", function () {
      if (isNaN(billTotal.value)) {
          billTotal.setCustomValidity("Please enter a valid number for Bill Total.");
      } else {
          billTotal.setCustomValidity("");
      }
  });
});
