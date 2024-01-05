// https://api.coingecko.com/api/v3/simple/price?
// ids=bitcoin%2Cetherum%2Ccardano%2Clitecoin%2Cdogecoin%2Ctether&vs_currencies=usd&include_24hr_change=true


fetch('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Cetherum%2Ccardano%2Clitecoin%2Cdogecoin%2Ctether&vs_currencies=usd&include_24hr_change=true')
    .then(response => response.json)
    .then(json => {

    });