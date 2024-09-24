function getValueById(id) {
  return parseFloat(document.getElementById(id).value);
}
function getValueByIdTextField(id) {
  return parseFloat(document.getElementById(id).innerText);
}
function getInnerText(id) {
  return document.getElementById(id).innerText;
}
function addHistory(displayTotalDonation, donatePlace) {
  const historyItems = document.createElement("div");
  historyItems.classList.add('border','border-white-500')
  historyItems.innerHTML = `
   <p class="text-lg text-slate-500 font-medium">
   ${new Date().toLocaleDateString()}
   </p>
   <h2 class="text-xl text-slate-800 font-semibold "> 
   ${displayTotalDonation} donated ${donatePlace}
   </h2>
   `;
  document.getElementById('history-container').appendChild(historyItems);
  return;
}
document.getElementById("donate-button").addEventListener("click", function () {
  const donateAmount = getValueById("donation-amount");
  const totalDonation = getValueByIdTextField("total-donation-noakhali");
  const netBalance = getValueByIdTextField("net-balance");
  const donatePlace = getInnerText("donation-title");
  const displayTotalDonation = donateAmount + totalDonation;
  const remainingBalance = netBalance - donateAmount;
  document.getElementById("total-donation-noakhali").innerText =
    displayTotalDonation;
  document.getElementById("net-balance").innerText = remainingBalance;
   const history= addHistory(displayTotalDonation, donatePlace);
   history();
});
