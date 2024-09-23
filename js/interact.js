// const donateAmount = document.getElementById('donation-amount').value;
// console.log(donateAmount);
function getValueById(id) {
  return parseFloat(document.getElementById(id).value);
}
function getValueByIdTextField(id) {
  return parseFloat(document.getElementById(id).innerText);
}
document.getElementById("donate-button").addEventListener("click", function () {
  const donateAmount = getValueById("donation-amount");
  const totalDonation = getValueByIdTextField("total-donation-noakhali");
  const netBalance = getValueByIdTextField("net-balance");
  const displayTotalDonation = donateAmount + totalDonation ;
  const remainingBalance = netBalance - donateAmount ;
  document.getElementById("total-donation-noakhali").innerText = displayTotalDonation;
  document.getElementById("net-balance").innerText = remainingBalance;


 
});
