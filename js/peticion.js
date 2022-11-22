const url = 'https://restcountries.com/v3.1/all'

const content = document.getElementById('root')
const inputSearch = document.getElementById("search-input");

window.addEventListener('load', () => {
    fetchData(url)
})

let data = []

const fetchData = async(url) => {
    const response = await fetch(url)
    data = await response.json()
    //console.log(data)
    preview(data)

    // const view = data.map(item => preview(item))
    // content.innerHTML = view.join("")
}

const preview = (items) => {
    const htmlString = items.map(item => {
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
    })
    .join("")
    content.innerHTML = htmlString
}


inputSearch.addEventListener("keyup", (e) => {
        const searchString = e.target.value.toLowerCase()
    const filterPaises = data.filter(item => {
       return item.translations.spa.common.toLowerCase().includes(searchString)
    })
    console.log(filterPaises)
    preview(filterPaises)
})

