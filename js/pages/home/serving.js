const teas = [
{
    "name": {
        "english": "Hojicha",
        "chinese": "焙茶",
        "pinyin": "bèi chá",
        "japanese": ["ほうじ茶"],
        "romanji": "Hōjicha"
    },
    "overview": {
        "style": ["Roasted", "Green"],
        "description": [
            "Roasting lower quality and old tea renews it's vitality and develops flavor and aroma."
        ],
        "image": ["images/roasted-slides/tea/green/hojicha.jpg", "random"],
    },
    "brewing": {
        "withEquipment": ["tea cup", "brew basket"],
        "style": ["simple"],
        "description": [
            "Brewing with realitivly long steeps yields a simple experience."
        ],
        "image": ["images/roasted-slides/tea/green/hojicha.jpg", "random"],
        "servingSizeGramsTsp": [1.5, 1],
        "brewingTempF": [205, 212],
        "waterMl": 250,
        "numberOfBrews": 2,
        "concatArrToStingSeconds": [180, 180]
    },
    "equipment": {}
},
{
    "name": {
        "english": "Sencha",
        "chinese": "煎茶",
        "pinyin": "jiānchá",
        "japanese": ["煎茶"],
        "romanji": "sencha"
    },
    "overview": {
        "style": "Green",
        "description": [
            "Early season unshaded steamed green tea from Japan."
        ],
        "image": ["images/roasted-slides/tea/green/green-sencha2.jpg", "random"],
    },
    "brewing": {
        "withEquipment": ["tea cup", "brew basket"],
        "style": ["simple"],
        "description": [
            "Brewing with realitivly long steeps yields a simple experience."
        ],
        "image": ["images/roasted-slides/tea/green/green-sencha2.jpg", "random"],
        "servingSizeGramsTsp": [1.5, 1],
        "brewingTempF": [165, 175],
        "waterMl": 250,
        "numberOfBrews": 3,
        "concatArrToStingSeconds": [30, 45, 60]
    },
    "equipment": {}
},
{
    "name": {
        "english": "Yancha",
        "chinese": "岩茶",
        "pinyin": "yān chá",
        "japanese": ["ヤンチャ"],
        "romanji": "yancha"
    },
    "overview": {
        "style": "",
        "description": [
            "Roasted wulong from the Wuyi Mountains of Fujian, China."
        ],
        "image": ["images/roasted-slides/tea/wulong/rougui.jpg", "random"],
    },
    "brewing": {
        "withEquipment": ["tea cup", "brew basket"],
        "style": ["simple"],
        "description": [
            "Brewing with realitivly long steeps yields a simple experience."
        ],
        "image": ["images/roasted-slides/tea/wulong/rougui.jpg", "random"],
        "servingSizeGramsTsp": [7],
        "brewingTempF": [212],
        "waterMl": 250,
        "numberOfBrews": 4,
        "concatArrToStingSeconds": [300, 300]
    },
    "equipment": {}
},
{
    "name": {
        "english": "Barley Tea",
        "chinese": "",
        "pinyin": "",
        "japanese": [""],
        "romanji": ""
    },
    "overview": {
        "style": "",
        "description": [
            "Non-caffinated herbal tea that is often roasted, Where?."
        ],
        "image": ["images/roasted-slides/tea/tisane/mugicha.jpg", "random"],
    },
    "brewing": {
        "withEquipment": ["tea cup", "brew basket"],
        "style": ["simple"],
        "description": [
            "Brewing with realitivly long steeps yields a simple experience."
        ],
        "image": ["images/roasted-slides/tea/tisane/mugicha.jpg", "random"],
        "servingSizeGramsTsp": [7],
        "brewingTempF": [212],
        "waterMl": 250,
        "numberOfBrews": 4,
        "concatArrToStingSeconds": [60, 120, 180, 360]
    },
    "equipment": {}
},
{
    "name": {
        "english": "Buckwheat Tea",
        "chinese": "",
        "pinyin": "",
        "japanese": [""],
        "romanji": ""
    },
    "overview": {
        "style": "",
        "description": [
            "Non-caffinated herbal tea that is often roasted, Where?."
        ],
        "image": ["images/roasted-slides/tea/tisane/sobacha.jpg", "random"],
    },
    "brewing": {
        "withEquipment": ["tea cup", "brew basket"],
        "style": ["simple"],
        "description": [
            "Brewing with realitivly long steeps yields a simple experience."
        ],
        "image": ["images/roasted-slides/tea/tisane/sobacha.jpg", "random"],
        "servingSizeGramsTsp": [7],
        "brewingTempF": [212],
        "waterMl": 250,
        "numberOfBrews": 4,
        "concatArrToStingSeconds": [60, 120, 180, 360]
    },
    "equipment": {}
}]

let teaArr = [];
for (let i = 0; i < teas.length; i++) {
    teaArr.push(teas[i]);

    const idName = teaArr[i].name.english.includes(" ")
        ? teaArr[i].name.english.split(" ")[0]
        : teaArr[i].name.english
    
    let imageSection = document.createElement('section');
    let teaNameSection = document.createElement('section');
    let teaOverviewSection = document.createElement('section');
    let teaBrewingSection = document.createElement('section');

    imageSection.className = 'imageSection';
    imageSection.id = 'image' + teaArr[i].name.english;
    imageSection.setAttribute("data-background-image", teaArr[i].overview.image[0]);
    teaNameSection.className = 'teaNameSection';
    teaNameSection.id = 'teaName' + teaArr[i].name.english;
    teaNameSection.setAttribute("data-background-image", teaArr[i].overview.image[0]);
    teaOverviewSection.className = 'overviewSection';
    teaOverviewSection.id = 'overview' + teaArr[i].name.english;
    teaOverviewSection.setAttribute("data-background-image", teaArr[i].overview.image[0]);
    teaBrewingSection.className = 'teaBrewingSection';
    teaBrewingSection.id = 'teaBrewing' + teaArr[i].name.english;
    teaBrewingSection.setAttribute("data-background-image", teaArr[i].overview.image[0]);

    imageSection.innerHTML = `
    <h1 class="back">${teaArr[i].name.english}</h1>`
    document.getElementById(idName).appendChild(imageSection);

    teaNameSection.innerHTML =`
	<style>
    .teaNameContainer {
        display:flex;
        width:80%;
        justify-content: space-between;
        margin: 0 auto;
    }
    .teaNameContainer img {
        width:50%;
    }
    </style>
    <div class="back">
        <div class="teaNameContainer">
            <img src="${teaArr[i].overview.image[0]}" alt="image of ${teaArr[i].name.english}" />
            <div>    
                <p> ${teaArr[i].name.english} </p>
                <small>${teaArr[i].overview.style} tea</small>
                <p><small>Chinese: ${teaArr[i].name.chinese} (${teaArr[i].name.pinyin}) </small></p>
                <p><small>Japanese: ${teaArr[i].name.japanese} (${teaArr[i].name.romanji}) </small></p>
            </div>
        </div>
        <p> ${teaArr[i].overview.description} </p>
    </div>
    `;
    document.getElementById(idName).appendChild(teaNameSection);

    // teaOverviewSection.innerHTML =
    // `<h1>History</h1>
    // <p>First produced ${overviewFirstDate} in ${overviewFirstLocation}</p>
    // `;
    // document.getElementById(idName).appendChild(teaOverviewSection);

    let concatedStr = ""
    const concatArrToSting = (x, y) => {
        for (let i=0; i<x; i++) {
            concatedStr += `<li>Brew ${i+1}: ${y[i]}</li>`
        }
        return `<ul>${concatedStr}</ul>`
    }

    teaBrewingSection.innerHTML =
    `
	<style>
    .brewingContainer {
        display:flex;
        width:100%;
        justify-content: space-around;
        margin: 0 auto;
    }
    .brewingContainer img {
        width:45%;
    }
    .styleTag {
        position:absolute;
        top:-2rem;
        left:1rem;
    }
    </style>
    <div class="back">
        <div class="brewingContainer">
            <img src="${teaArr[i].brewing.image[0]}" alt="image of ${teaArr[i].name.english}" />
            <div>
                <p> Using a ${teaArr[i].brewing.withEquipment[0]} and ${teaArr[i].brewing.withEquipment[1]} </p>
                <p> ${teaArr[i].brewing.description} </p>
                <small class="styleTag">#${teaArr[i].brewing.style}StyleBrewing</small>
            </div>
        </div>
        <p>[0]} grams[1]} tsp)</small>
        of ${teaArr[i].name.english} 
        in ${teaArr[i].brewing.waterMl} ml of water
        at between ${teaArr[i].brewing.brewingTempF[0]} °F and ${teaArr[i].brewing.brewingTempF[1]} °F
        ${teaArr[i].brewing.numberOfBrews} times.
        ${concatArrToSting(teaArr[i].brewing.numberOfBrews, teaArr[i].brewing.concatArrToStingSeconds)}
        </p>
    </div>
    `;
    document.getElementById(idName).appendChild(teaBrewingSection);

}
