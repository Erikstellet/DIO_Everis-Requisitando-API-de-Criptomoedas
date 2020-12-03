var apikey = {
    key: "---- Senha da conta de dev ----"
}

fetch("---- URL API ----" + apikey.key)
.then((response) => 
{
    if(!response.ok) throw new Error("Erro ao executar a requisição, status" + response.status);

     return response.json();
})
.then((api) =>
{   
    var texto = "";

    for(let i = 0; i < 10; i++)
    {
        texto = texto + 
        ` <div class="media">
            <img src="coin.jpg" class="align-self-center mr-3" alt="coin" width="150" height="80">
            <div class="media-body">
                <h5 class="mt-2"> ${api.data[i].name}</h5>
                <p>${api.data[i].symbol}</p>
                <p class="data">${api.data[i].first_historical_data}</p>
            </div>
        </div> `;

        document.getElementById("coins").innerHTML = texto;
    }
})
.catch((error) => 
{
    console.error(error.message);
});