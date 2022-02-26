const serving = {
    "people": 60,
    "servingPerFlavor": {
        "cupSize": 3,
        "fill": 0.8
    },
    "teas": [
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
                "image": ["https://source.unsplash.com/random/300x300/?tea", "random"],
            },
            "brewing": {
                "withEquipment": ["tea cup", "brew basket"],
                "style": ["simple"],
                "description": [
                    "Brewing with realitivly long steeps yields a simple experience."
                ],
                "image": ["https://source.unsplash.com/random/300x300/?teacup", "random"],
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
                "image": ["https://source.unsplash.com/random/300x300/?tea", "random"],
            },
            "brewing": {
                "withEquipment": ["tea cup", "brew basket"],
                "style": ["simple"],
                "description": [
                    "Brewing with realitivly long steeps yields a simple experience."
                ],
                "image": ["https://source.unsplash.com/random/300x300/?teacup", "random"],
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
                "image": ["https://source.unsplash.com/random/300x300/?tea", "random"],
            },
            "brewing": {
                "withEquipment": ["tea cup", "brew basket"],
                "style": ["simple"],
                "description": [
                    "Brewing with realitivly long steeps yields a simple experience."
                ],
                "image": ["https://source.unsplash.com/random/300x300/?teacup", "random"],
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
                "english": "Barley Tea (Tisane)",
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
                "image": ["https://source.unsplash.com/random/300x300/?tea", "random"],
            },
            "brewing": {
                "withEquipment": ["tea cup", "brew basket"],
                "style": ["simple"],
                "description": [
                    "Brewing with realitivly long steeps yields a simple experience."
                ],
                "image": ["https://source.unsplash.com/random/300x300/?teacup", "random"],
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
                "image": ["https://source.unsplash.com/random/300x300/?tea", "random"],
            },
            "brewing": {
                "withEquipment": ["tea cup", "brew basket"],
                "style": ["simple"],
                "description": [
                    "Brewing with realitivly long steeps yields a simple experience."
                ],
                "image": ["https://source.unsplash.com/random/300x300/?teacup", "random"],
                "servingSizeGramsTsp": [7],
                "brewingTempF": [212],
                "waterMl": 250,
                "numberOfBrews": 4,
                "concatArrToStingSeconds": [60, 120, 180, 360]
            },
            "equipment": {}
        }
    ]
}

teaArr = [];
for (let i = 0; i < serving.teas.length; i++) {
    teaArr.push(serving.teas[i]);

    let nameEnglish = teaArr[i].name.english;
    let nameChinese = teaArr[i].name.chinese;
    let namePinyin = teaArr[i].name.pinyin;
    let nameJapanese = teaArr[i].name.japanese;
    let nameRomanji = teaArr[i].name.romanji;

    let overviewTeaStyle = teaArr[i].overview.style;
    let overviewDescription = teaArr[i].overview.description;
    let overviewImage = teaArr[i].overview.image;
    // let overviewFirstDate = teaArr[i].overview.firstDate;
    // let overviewFirstLocation = teaArr[i].overview.firstLocation;
    // let overviewDates = teaArr[i].overview.dates;
    // let overviewFacts = teaArr[i].overview.facts;

    let brewingStyle = teaArr[i].brewing.style;
    let brewingDescription = teaArr[i].brewing.description;
    let brewingImage = teaArr[i].brewing.image;
    let brewingWithEquipment = teaArr[i].brewing.withEquipment;
    let brewingServingSizeGramsTsp = teaArr[i].brewing.servingSizeGramsTsp;
    let brewingBrewingTempF = teaArr[i].brewing.brewingTempF;
    let brewingWaterMl = teaArr[i].brewing.waterMl;
    let brewingNumberOfBrews = teaArr[i].brewing.numberOfBrews;
    let brewingBrewingTimesSeconds = teaArr[i].brewing.concatArrToStingSeconds;

    let imageSection = document.createElement('section');
    let teaNameSection = document.createElement('section');
    let teaOverviewSection = document.createElement('section');
    let teaBrewingSection = document.createElement('section');

    imageSection.className = 'imageSection';
    imageSection.id = 'image' + nameEnglish;
    teaNameSection.className = 'teaNameSection';
    teaNameSection.id = 'teaName' + nameEnglish;
    teaOverviewSection.className = 'overviewSection';
    teaOverviewSection.id = 'overview' + nameEnglish;
    teaBrewingSection.className = 'teaBrewingSection';
    teaBrewingSection.id = 'teaBrewing' + nameEnglish;

    imageSection.innerHTML = `
    <h1>${nameEnglish}</h1>
    <img src="${overviewImage}" alt="image of ${nameEnglish}" />`
    document.getElementById('Serving').appendChild(imageSection);

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
    <div>
        <div class="teaNameContainer">
            <img src="${overviewImage}" alt="image of ${nameEnglish}" />
            <div>    
                <p> ${nameEnglish} </p>
                <small>${overviewTeaStyle} tea</small>
                <p><small>Chinese: ${nameChinese} (${namePinyin}) </small></p>
                <p><small>Japanese: ${nameJapanese} (${nameRomanji}) </small></p>
            </div>
        </div>
        <p> ${overviewDescription} </p>
    </div>
    `;
    document.getElementById('Serving').appendChild(teaNameSection);

    // teaOverviewSection.innerHTML =
    // `<h1>History</h1>
    // <p>First produced ${overviewFirstDate} in ${overviewFirstLocation}</p>
    // `;
    // document.getElementById('Serving').appendChild(teaOverviewSection);

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
    <div>
        <div class="brewingContainer">
            <img src="${brewingImage}" alt="image of ${nameEnglish}" />
            <div>
                <p> Using a ${brewingWithEquipment[0]} and ${brewingWithEquipment[1]} </p>
                <p> ${brewingDescription} </p>
                <small class="styleTag">#${brewingStyle}StyleBrewing</small>
            </div>
        </div>
        <p>
        Brew ${brewingServingSizeGramsTsp[0]} grams
        <small>(${brewingServingSizeGramsTsp[1]} tsp)</small>
        of ${nameEnglish} 
        in ${brewingWaterMl} ml of water
        at between ${brewingBrewingTempF[0]} °F and ${brewingBrewingTempF[1]} °F
        ${brewingNumberOfBrews} times.
        ${concatArrToSting(brewingNumberOfBrews, brewingBrewingTimesSeconds)}
        </p>
    </div>
    `;
    document.getElementById('Serving').appendChild(teaBrewingSection);

}
