// photo's autoplay
let photoList = new Array();
photoList[0] = "url(/images/auto_1.jpeg)";
photoList[1] = "url(/images/auto_2.jpeg)";
photoList[2] = "url(/images/auto_3.jpeg)";
photoList[3] = "url(/images/auto_4.jpeg)";
photoList[4] = "url(/images/auto_5.jpeg)";
photoList[5] = "url(/images/auto_6.jpeg)";
photoList[6] = "url(/images/auto_7.jpeg)";
photoList[7] = "url(/images/auto_8.jpeg)";
photoList[8] = "url(/images/auto_9.jpeg)";
photoList[9] = "url(/images/auto_10.jpeg)";
photoList[10] = "url(/images/auto_11.jpeg)";
photoList[11] = "url(/images/auto_12.jpeg)";
photoList[12] = "url(/images/auto_13.jpeg)";
photoList[13] = "url(/images/auto_14.jpeg)";
photoList[14] = "url(/images/auto_15.jpeg)";
photoList[15] = "url(/images/auto_16.jpeg)";

let autoPlay = document.getElementById("auto_photo");
let x = -1;
let l = photoList.length;

function autoScroll() {
    x++;
    if (x == l) {
        x = 0;
    }
    autoPlay.style.backgroundImage = photoList[x];
    window.setTimeout("autoScroll()", 2000);
};

window.setTimeout("autoScroll()", 0);

// date 
let currentDate = new Date();
const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric'};
let currentDatetStr = currentDate.toLocaleDateString(undefined, options);
document.getElementById("current_date").innerHTML = currentDatetStr;

// search-engine
// first way to search
// const housingCardTemplate = document.querySelector("[data-housing-template]")
// const housingCardContainer = document.querySelector("[data-housing-cards-container]")
// const searchInput = document.querySelector("[data-search]")

// let housings = []

// searchInput.addEventListener("input", e => {
//     const value = e.target.value.toLowerCase()
//     // console.log(value)
//     housings.forEach(housing => {
//         const isVisible = housing.location.toLowerCase().includes(value) || housing.name.toLowerCase().includes(value)
//         housing.element.classList.toggle("hide", !isVisible)
//     })
// })

// fetch('https://zhikeng.github.io/demoAPI/housingList.json')
// .then(response => response.json())
// .then(data => {
//     housings = data.map(housing => {
//         const card = housingCardTemplate.content.cloneNode(true).children[0]
//         const header = card.querySelector("[data-header")
//         const body = card.querySelector("[data-body]")
//         const tail = card.querySelector("[data-tail]")
//         header.textContent = housing.location
//         body.textContent = housing.name
//         tail.textContent = housing.address
//         housingCardContainer.append(card)
//         return { location: housing.location, name: housing.name, address: housing.address, element: card }
//         // console.log(housing)
//     })

// })

// second way to search
const housingList = document.getElementById('housingList');
const searchBar = document.getElementById('searchBar');
let maHousingList = [];

// console.log(searchBar);
searchBar.addEventListener('keyup', e => {
    const searchString = e.target.value.toLowerCase();
    const filteredHousingList = maHousingList.filter( (housing) => {
        return housing.name.toLowerCase().includes(searchString) || housing.location.toLowerCase().includes(searchString);
    });
    // console.log(filteredHousingList);
    displayHousingList(filteredHousingList);
});

const loadHousingList = async () => {
    try {
        const res = await fetch('https://zhikeng.github.io/demoAPI/housingList.json')
        maHousingList = await res.json()
        displayHousingList(maHousingList)
        // console.log(maHousingList)
    } catch (err) {
        console.error(err)
    }
};

const displayHousingList = (housing) => {
    const htmlString = housing.map((housing) => {
        return `
        <li class="housing">
        <h3>${housing.name}</h3>
        <p>${housing.location}</p>
        <p>${housing.address}</p>
        <p>&#9742 ${housing.telephone}</p>
        <p>Management: ${housing.management_name}</p>
        <p>&#9742 ${housing.management_telephone}</p>
        <p>${housing.subsidy? "Has Subsidies": "No Subsidies"}</p>
        <p>${housing.financed? "Masshousing financed": "Not financed"}</p>
        <p>Bedrooms:</p>
        <p>0-1 bed: ${housing.number_of_bedroom0_1}</p>
        <p>2-3 beds: ${housing.number_of_bedroom2_3}</p>
        <p>4 beds: ${housing.number_of_bedroom4}</p>
        <p>accessible unit: ${housing.number_of_accessUnits}</p>
        </li>
        `
    })
    .join('')
    housingList.innerHTML = htmlString
};

loadHousingList();

