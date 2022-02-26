const staff = [
    {
        "title": "Performing Arts Center Coordinator",
        "name": "Diondra",
        "image": "images/icons/LVCCLD.jpg",
        "backgroundImage": "images/roasted-slides/tea-landscape.jpg",
        "list": ["Amazing", "Wonderful", "Fantastic", "Superb"],
        "contact": {
            "facebook": "@LVCCLD",
            "twitter": "@LVCCLD",
            "website": "lvccld.org",
            "email": "diondra@lvccld.org"
        }
    },
    {
        "title": "Tea Roaster",
        "name": "Yukino Aoshima",
        "image": "",
        "backgroundImage": "images/roasted-slides/tea-landscape.jpg",
        "list": ["Japanese Tea Specialist", "Wholesale and Food Service", "Staff and Individual Training", "Private Events", "Former Harney and Sons Fine Teas, West Coast Sales"],
        "contact": {
            "instagram": "@VegasTeaSomm"
        },
    },
    {
        "title": "Presenter",
        "name": "Daniel Clough",
        "image": "images/logo/immodestea-logo.jpg",
        "backgroundImage": "images/roasted-slides/tea-landscape.jpg",
        "list": ["Chinese Tea Specialist", "Intl. Trade and Wholesale", "Staff and Individual Training", "Educational Tours", "Private Events"],
        "contact": {
            "instagram": "@Immodestea & @Tea.Institute",
            "facebook": "@ImmodesteaLV & @Institute.Tea",
            "website": "Immodestea.com & Tea.Institute",
            "email": "daniel@immodestea.com"
        }
    },
]


let styles = `
    <style>
        .row {
            display: inline-flex;
            justify-content: space-between;
        }
        .social {
            display: block;
            font-size: 22px;
            padding: 3rem;
            width: 50%;
        }
        .services {
            width: 50%;
            font-size: 28px;
            text-align: left;
            padding: 3rem;
        }
        .staffImg {
            width: 20vw;
        }
        .socialImg {
            width: 2rem;
            height: 2rem;
            padding-right: .5rem;
        }
    </style>
`

for (let i = 0; i < staff.length; i++) {
    let staffTitle = staff[i].title
    let staffName = staff[i].name
    let staffImage = staff[i].image
    
    let staffList = staff[i].list
    let contactList = staff[i].contact

    let staffSection = document.createElement('section');
    staffSection.setAttribute("data-background-image", staff[i].backgroundImage);
    staffSection.className = 'staffSection';
    staffSection.innerHTML = `
    ${styles}
    <div>
        <div class="row">
            <div>
                <img class="staffImg" src="${staffImage}" alt="${staffName} ${staffTitle}" />
            </div>
            <div>
                <h1 class="back">${staffName}</h1>
                <p class="back">${staffTitle}</p>
            </div>
        </div>
        <div class="row">
            <div class="services">
                ${staffList.map(x => `<p class="back">${x}</p>`).join('')}
            </div>
            <div class="social">
                ${Object.keys(contactList).map(key => `
                    <div class="row">
                        <img class="socialImg" src="images/icons/${key}.png" alt="${key}" />
                        <p class="back"> ${contactList[key]}</p>
                    </div>        
                `).join(' ')}
            </div>
        </div>
    </div>
    `
    
    document.getElementById('Intro').appendChild(staffSection);
}