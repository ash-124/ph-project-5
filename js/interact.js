//function starts 
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
  const inputValue = document.getElementById(id).value;

  if (isNaN(inputValue) || parseFloat(inputValue) <= 0  ) {
    document.getElementById(error).classList.remove("hidden");
    inputValue.value = " ";
    return;
  }
}
function calculateDonationShow(id, donationAmount, givenTotalDonation, accountNetBalance, donationTitle, inputErrorId, inputValidation ){
  document.getElementById(id).addEventListener("click", function () {
    const donateAmount = getValueById(donationAmount);
    const totalDonation = getValueByIdTextField(givenTotalDonation);
    const netBalance = getValueByIdTextField(accountNetBalance);
    const donatePlace = getInnerText(donationTitle);
    if ( donateAmount <= 0 || isNaN( donateAmount)) {
      document.getElementById( inputValidation).classList.remove("hidden");
      
      return;
    }
    else {
      document.getElementById( inputValidation).classList.add("hidden");
    };
    if (netBalance < donateAmount ) {
      document.getElementById(inputErrorId).classList.remove('hidden');
      return;
    }
    else{
      document.getElementById(inputErrorId).classList.add('hidden');
     
    };
    const displayTotalDonation = donateAmount + totalDonation;
    const remainingBalance = netBalance - donateAmount;
    document.getElementById(givenTotalDonation).innerText =
      displayTotalDonation;
    document.getElementById(accountNetBalance).innerText = remainingBalance;
    const history = addHistory(displayTotalDonation, donatePlace);
    history();
    if (netBalance > donateAmount || donateAmount >= 0) {
      my_modal_1.showModal();
    }
  });
};
// function ends 
// Event listeners
calculateDonationShow("donate-button", "donation-amount", "total-donation-noakhali", "net-balance", "donation-title", "input-balance-error", "inputError" );
function addHistory(displayTotalDonation, donatePlace) {
  const historyItems = document.createElement("div");
  historyItems.classList.add("border", "border-white-500", "mb-4");
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
// Toggle of tabs
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

// switching to another html page>
document.getElementById("blog-btn").addEventListener("click",function(){
  window.location.href = "../blog.html";
})

