const rinkebyAddress = "0x80871786917473703D0eced80C1F52F05999B103";

const web3js = new Web3(web3.currentProvider);

var blockchainsmokers = new web3js.eth.Contract(bcsAbi, rinkebyAddress);

function totalSupply() {
  var supply;
  blockchainsmokers.methods.totalSupply().call()
    .then(function(result) {
      console.log("Supply: ", result);
      supply = result;
    })
    .catch(function(error) {
      console.log(error);
    })
  return supply;
}

var accs;

function fetchAccounts() {
  web3js.eth.getAccounts()
  .then(function(accounts) {
    console.log("Successfully fetched accounts");
    accs = accounts;
  })
  .catch(function(error) {
    console.log("error while getting accounts");
    console.log(error)
  });
};


var supply = blockchainsmokers.methods.totalSupply().call()

function estimateMintGas(to, quantity) {
  blockchainsmokers.methods.mint(to, quantity).estimateGas(
      {from: to})
    .then(function(gasAmount) {
      console.log("Estimated gas:");
      console.log(gasAmount);
    })
    .catch(function(error) {
      console.log(error)
    });
}

function mint(to, quantity) {
  blockchainsmokers.methods.mint(to, quantity).send(
    {from: to})
  .then(function() {
    console.log("Successfully minted for account ", to);
  })
  .catch(function(error) {
    console.log(error)
  });
}

//var balance = blockchainsmokers.methods.balanceOf(accounts[0]).call();

//const ethEnabled = async () => {
  //if (window.ethereum) {
    //// This calls the metamask pop-up
    //await window.ethereum.send('eth_requestAccounts');
    //window.web3 = new Web3(window.ethereum);
    //return true;
  //}
  //return false;
//}

