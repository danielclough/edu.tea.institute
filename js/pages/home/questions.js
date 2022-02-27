questions = [
    {
        "question": "What is tea?",
        "image": "images/roasted-slides/tea/tea-plant.jpg",
        "answer": "For the purpose of this presentation, tea is any plant based beverage prepared by steeping.",
        "definitions": [
            {
                "term": {
                    "name": {
                        "english": ["Tea",""],
                        "chinese": "茶",
                        "pinyin": "",
                        "japanese": ["茶"],
                        "romanji": ""
                    },
                    "overview": {
                        "description": [
                            "Mint, Rooibos, and Barley Tea are not from the 'tea plant'. Some prefer to call them '\tisanes\".", ""
                        ],
                        "image": ["images/roasted-slides/tea/tea-plant.jpg", "Tea Plant"],
                        "firstDate": [],
                        "firstLocation": [],
                        "dates": [],
                        "facts": [""]
                    }
                }
            },
            {
                "term": {
                    "name": {
                        "english": ["tisane", "Medicinal tea (1931), from French tisane; <br/> earlier ptisan (14c.), from Latin ptisana, from Greek ptisane \"crushed barley\"", "https://www.etymonline.com/word/tisane"],
                        "chinese": "",
                        "pinyin": "",
                        "japanese": [""],
                        "romanji": ""
                    },
                    "overview": {
                        "description": [
                            "Tisane is a barley tea which is not roasted, today we are drinking Mugicha, roasted barley tea."
                        ],
                        "image": ["images/roasted-slides/tea/tea-plant.jpg", ""],
                        "firstDate": [],
                        "firstLocation": [],
                        "dates": [],
                        "facts": [""]
                    }
                }
            }
        ]
    },
    {
        "question": "What is roasted tea?",
        "image": "images/roasted-slides/tea-landscape.jpg",
        "answer": "For the purpose of this presentation, roasted tea is a \"process added\" tea which has been cooked with dry heat to the point of tasting \"roasty\". We will not cover Yunnan Kaocha litterally \"roast tea\" (pictured).",
        "definitions": [
            {
                "term": {
                    "name": {
                        "english": ["Roast",'late 13c., rosten, "to cook (meat, fish, etc.) by dry heat," from Old French rostir "to roast, burn"', "https://www.etymonline.com/word/roast#etymonline_v_46931"],
                        "chinese": "烤",
                        "pinyin": "kǎo",
                        "japanese": ["焼く"],
                        "romanji": "Yaku"
                    },
                    "overview": {
                        "description": [
                            "In modern english, roasting is like baking, but often using higher temperatures to produce crispness and caramelization. This also makes sense in talking about tea generally.", "In chinese kaocha (烤茶; lit. \"Roast Tea\") refers to a Bai (minority culture group) tea practice.", "https://www.merriam-webster.com/words-at-play/baking-vs-roasting", "https://baike.baidu.com/item/%E7%83%A4%E8%8C%B6"
                        ],
                        "image": ["images/roasted-slides/kaocha.jpg", "Yunnan Kaocha"],
                        "firstDate": [],
                        "firstLocation": [],
                        "dates": [],
                        "facts": [""]
                    }
                }
            },
            {
                "term": {
                    "name": {
                        "english": ["Bake", 'Old English bacan "to cook by dry heat in a closed place or on a heated surface," from Proto-Germanic *bakan "to bake"', "https://www.etymonline.com/word/bake#etymonline_v_207"],
                        "chinese": "焙茶",
                        "pinyin": "",
                        "japanese": [""],
                        "romanji": ""
                    },
                    "overview": {
                        "description": [
                            "Drying by baking at 100-300℃ is often the last process in the tea-making process. While the words roast and bake are used somewhat interchangeably (across languages), we will not consider baking dry to be \"roasting\"."
                        ],
                        "image": ["images/roasted-slides/beicha.jpg", "Baking Tea"],
                        "firstDate": [],
                        "firstLocation": [],
                        "dates": [],
                        "facts": [""]
                    }
                }
            }
        ]
    },
]

let questionArr = [];
for (let i = 0; i < questions.length; i++) {
    questionArr.push(questions[i])
    let question = questionArr[i].question
    let answer = questionArr[i].answer
    let definitions = questionArr[i].definitions
    
    let questionSection = document.createElement('section');
    questionSection.className = 'questionSection';
    questionSection.setAttribute("data-background-image", questionArr[i].image);
    questionSection.innerHTML = `
        <h2 class="back">${question}</h2>
    `
    document.getElementById('Questions').appendChild(questionSection);

    let definitionsArr = []
    for (let i = 0; i < definitions.length; i++) {
        definitionsArr.push(definitions[i])

        let termEnglish = definitionsArr[i].term.name.english
        let termChinese = definitionsArr[i].term.name.chinese
        let termPinyin = definitionsArr[i].term.name.pinyin
        let termJapanese = definitionsArr[i].term.name.japanese
        let termRomanji = definitionsArr[i].term.name.romanji
        let termDescription = definitionsArr[i].term.overview.description[0]
        let termImage = definitionsArr[i].term.overview.image[0]
        let termImageAlt = definitionsArr[i].term.overview.image[1]
        let termFirstDate = definitionsArr[i].termFirstDate
        let termFirstLocation = definitionsArr[i].termFirstLocation
        let termDates = definitionsArr[i].termDates
        let termFacts = definitionsArr[i].termFacts
        

        let definitionsSection = document.createElement('section');
        definitionsSection.className = 'definitionsSection';
        definitionsSection.setAttribute("data-background-image", termImage);
        definitionsSection.innerHTML = `<div class="back">
            <h2>${termEnglish[0]}</h2>
            <blockquote>${termEnglish[1]}</blockquote>
        </div>`
        document.getElementById('Questions').appendChild(definitionsSection);

        let termsSection = document.createElement('section');
        termsSection.className = 'termsSection';
        termsSection.setAttribute("data-background-image", termImage);
        termsSection.innerHTML = `
        <div class="back">
            <p>${termEnglish[0]}</p>
            <p><small>Chinese: ${termChinese}</small></p>
            <p><small>Pinyin: ${termPinyin}</small></p>
            <p><small>Japanese: ${termJapanese}</small></p>
            <p><small>Romanji: ${termRomanji}</small></p>
            <p><small>Description: ${termDescription}</small></p>
        </div>
        `
        document.getElementById('Questions').appendChild(termsSection);
        
        let termDetailsSection = document.createElement('section');
        termDetailsSection.className = 'termDetailsSection';
        termDetailsSection.innerHTML = `<div class="back">
            <h2 class="back">
                History:
            </h2>
            <p>
                ${termFirstDate}
                ${termFirstLocation}
                ${termDates}
                ${termFacts}
            </p>
        </div>`
    }

    let answerSection = document.createElement('section');
    answerSection.className = 'answerSection';
    answerSection.innerHTML = `<div class="back">
        <h2>${question}</h2>
        <p>${answer}</p>
    </div>`
    document.getElementById('Questions').appendChild(answerSection);
}