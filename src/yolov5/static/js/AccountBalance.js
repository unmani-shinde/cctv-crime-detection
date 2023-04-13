import Web3 from "web3";
// Create a new instance of web3 using the provider injected by MetaMask
const web3 = new Web3(window.ethereum);

// Get the current account
async function getCurrentAccount() {
  const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
  return accounts[0];
}

// Get the balance of the current account
async function getCurrentBalance() {
  const currentAccount = await getCurrentAccount();
  const balance = await web3.eth.getBalance(currentAccount);
  return balance;
}

// Update the balance on the HTML page
async function updateBalance() {
  const balance = await getCurrentBalance();
  const balanceElement = document.getElementById('balance');
  balanceElement.innerHTML = `Balance: ${web3.utils.fromWei(balance, 'ether')} ETH`;
}

// Call updateBalance() when the page loads
window.addEventListener('load', async () => {
  if (window.ethereum) {
    await window.ethereum.enable();
    updateBalance();
  }
});
