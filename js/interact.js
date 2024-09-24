
function getValueById(id) {
  return parseFloat(document.getElementById(id).value);
}
function getValueByIdTextField(id) {
  return parseFloat(document.getElementById(id).innerText);
}
function getInnerText(id) {
  return document.getElementById(id).innerText;
}
function liveAlertD(id, error) {
  const inputValue = parseFloat(document.getElementById(id).value);

  if (isNaN(inputValue) || inputValue <= 0  ) {
    document.getElementById(error).classList.remove("hidden");
    return;
  }
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
  const history = addHistory(displayTotalDonation, donatePlace);
  history();
});
function addHistory(displayTotalDonation, donatePlace) {
  const historyItems = document.createElement("div");
  historyItems.classList.add("border", "border-white-500");
  historyItems.innerHTML = `
   <p class="text-lg text-slate-500 font-medium">
   ${new Date().toLocaleDateString()}
   </p>
   <h2 class="text-xl text-slate-800 font-semibold "> 
   ${displayTotalDonation} donated ${donatePlace}
   </h2>
   `;
  document.getElementById("history-container").appendChild(historyItems);
  return;
}
document.getElementById("donation-amount").addEventListener("input", function(){
  liveAlertD("donation-amount", "inputError")
 
})
const assistantTab = document.getElementById("donation-btn");
const historyTab = document.getElementById("donation-history");
historyTab.addEventListener("click", function () {
  historyTab.classList.add(
    "bg-lime-300",
    
  );
  historyTab.classList.remove("hover:bg-gray-300");
  assistantTab.classList.remove(
    "hover:bg-lime-300",
    "bg-primary",
    "border-none"

  );
  assistantTab.classList.add(
    "hover:bg-gray-300",
    "border",
    "border-gray-300"

  );
  document.getElementById("donation-section").classList.add("hidden");
  document.getElementById("history-container").classList.remove("hidden");
});
assistantTab.addEventListener("click", function () {
  assistantTab.classList.add(
   "hover:bg-lime-300",
    "bg-primary",
    "border-none"
  );
  historyTab.classList.remove(
    "bg-lime-300",
  );
  document.getElementById("donation-section").classList.remove("hidden");
  document.getElementById("history-container").classList.add("hidden");
});

