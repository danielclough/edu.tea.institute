questions = [
    {
        "question": "What is tea?",
        "image": "images/roasted-slides/tea-landscape.jpg",
        "answer": "For the purpose of this presentation, tea is any plant based beverage prepared by steeping.",
        "definitions": [
            {
                "term": {
                    "name": {
                        "english": ["Tea",""],
                        "chinese": "",
                        "pinyin": "",
                        "japanese": [""],
                        "romanji": ""
                    },
                    "overview": {
                        "description": [
                            "Mint, Rooibos, and Barley Tea are not from the 'tea plant'. Some prefer to call them '\tisanes\".", ""
                        ],
                        "image": ["https://source.unsplash.com/random/300x300/?tea", "random"],
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
                            ""
                        ],
                        "image": ["https://source.unsplash.com/random/300x300/?tea", "random"],
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
        "answer": "For the purpose of this presentation, roasted tea is a \"process added\" tea which has been cooked with dry heat to the point of tasting \"roasty\".",
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
                        "image": ["https://source.unsplash.com/random/300x300/?tea", "random"],
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
                        "chinese": "",
                        "pinyin": "",
                        "japanese": [""],
                        "romanji": ""
                    },
                    "overview": {
                        "description": [
                            "Drying by baking at 100-300℃ is often the last process in the tea-making process."
                        ],
                        "image": ["https://source.unsplash.com/random/300x300/?tea", "random"],
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

questionArr =[];
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
        let termDescription = definitionsArr[i].termDescription
        let termImage = definitionsArr[i].termImage
        let termFirstDate = definitionsArr[i].termFirstDate
        let termFirstLocation = definitionsArr[i].termFirstLocation
        let termDates = definitionsArr[i].termDates
        let termFacts = definitionsArr[i].termFacts
        

        let definitionsSection = document.createElement('section');
        definitionsSection.className = 'definitionsSection';
        definitionsSection.innerHTML = `
            <h2>${termEnglish[0]}</h2>
            <blockquote>${termEnglish[1]}</blockquote>
        `
        document.getElementById('Questions').appendChild(definitionsSection);

        let termsSection = document.createElement('section');
        termsSection.className = 'termsSection';
        termsSection.innerHTML = `
        <div>
            <p>${termEnglish[0]}</p>
            <p><small>Chinese: ${termChinese}</small></p>
            <p><small>Pinyin: ${termPinyin}</small></p>
            <p><small>Japanese: ${termJapanese}</small></p>
            <p><small>Romanji: ${termRomanji}</small></p>
            <p><small>Description: ${termDescription}</small></p>
            <p><small>Image: ${termImage}</small></p>
        </div>
        `
        document.getElementById('Questions').appendChild(termsSection);
        
        let termDetailsSection = document.createElement('section');
        termDetailsSection.className = 'termDetailsSection';
        termDetailsSection.innerHTML = `
            <h2>
                History:
            </h2>
            <p>
                ${termFirstDate}
                ${termFirstLocation}
                ${termDates}
                ${termFacts}
            </p>
        `
    }

    let answerSection = document.createElement('section');
    answerSection.className = 'answerSection';
    answerSection.innerHTML = `
        <h2>${question}</h2>
        <p>${answer}</p>
    `
    document.getElementById('Questions').appendChild(answerSection);
}