function getValueById(id) {
  return parseFloat(document.getElementById(id).value);
}
function getValueByIdTextField(id) {
  return parseFloat(document.getElementById(id).innerText);
}
function getInnerText(id) {
  return document.getElementById(id).innerText;
}
document.getElementById("donate-button").addEventListener("click", function () {
  const donateAmount = getValueById("donation-amount");
  const totalDonation = getValueByIdTextField("total-donation-noakhali");
  const netBalance = getValueByIdTextField("net-balance");
  const historyContent = document.getElementById("history-container");
  const donatePlace = getInnerText("donation-title");
  console.log(donatePlace);
  const displayTotalDonation = donateAmount + totalDonation;
  const remainingBalance = netBalance - donateAmount;
  document.getElementById("total-donation-noakhali").innerText =
    displayTotalDonation;
  document.getElementById("net-balance").innerText = remainingBalance;
  historyContent.innerHTML = `<div class="border border-white rounded-lg p-4">
   <p class="text-lg text-slate-500 font-medium">${new Date().toLocaleDateString()}</p>
      <h2 class="text-xl text-slate-800 font-semibold "> ${displayTotalDonation} donated ${donatePlace}</h2>
     
    </div>`;
});
