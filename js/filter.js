const btnFilter = document.querySelectorAll(".button-value");
const root2 = document.getElementById("root");

const preview2 = (item) => {
    return `
        <div class='card1'>
            <h1 class='card1_text'>${item.name.common}</h1>
            <div class=card1_info>
                <img src="${item.flags.png}" alt="flag" class="card1_img" />
                <h1 class="card1_title">Capital: ${item.capital}</h1>
                
                <p class="card1_subtitle">${item.continents}</p>
                <a href="#" class="card1_link">Ver más</a>
            </div>
        </div>
    `
}

const fetchRegion = async (e) => {
    const res = await fetch(`https://restcountries.com/v3.1/region/${e}`);
    const data = await res.json()
    //console.log(data)
    return data
}

const btnSearch = async region => {
    const data = await fetchRegion(region);
    //console.log(data)

    const templates = data.map(elemento => preview2(elemento))
    root2.innerHTML = templates.join("")
    
}

btnFilter.forEach(e => {
    e.addEventListener('click', (e) => {
        //console.log(e.target.value)
        btnSearch(e.target.value)
    })
})


