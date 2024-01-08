// URL API : https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Cetherum%2Ccardano%2Clitecoin%2Cdogecoin%2Ctether&vs_currencies=usd&include_24hr_change=true

fetch('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Ctether%2Cethereum%2Clitecoin%2Ccardano%2Cdogecoin&vs_currencies=usd&include_24hr_change=true')
    .then(reponse => reponse.json())
    .then(data => {
        const coins = Object.getOwnPropertyNames(data); //utilisation de l'objet Object pour récupérer les données
        console.log(coins);
        console.log(data)

        for (let coin of coins) { // boucle for pour afficher chaque coin dans le code HTML 1 par 1 avec condition falling ou rising dans la div principale
            const coinInfo = data[`${coin}`];
            const price = coinInfo.usd
            const change = coinInfo.usd_24h_change.toFixed(5);

            // ajouter de l'HTML directement dans le javascript avec les données récupérées
            const container = document.querySelector('.container');
            container.innerHTML += `
            <div class="coin ${change < 0 ? 'falling' : 'rising'}">
                <div class="coin-logo">
                    <img src="img/${coin}.png">
                </div>
                <div class="coin-name">
                    <h3>${coin}</h3>
                    <span>/USD</span>
                </div>
                <div class="coin-price">
                    <span class="price">$${price}</span>
                    <span class="change">${change}</span>
                </div>
            </div>
            `;
        }
    });