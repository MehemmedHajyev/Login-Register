let logPage = document.querySelector('.log_page');
let loginEmail = document.querySelector('.login');

let passvord = document.querySelector('.passvord');
let logBtn = document.querySelector('.logBtn');


let persons = [
    {
        id: 1,
        name: 'mehemmed',
        surname: 'hajyeff',
        email: 'mehemmed@gmail.com',
        passvord: 'mm'
    },
    {
        id: 2,
        name: 'mansur',
        surname: 'isa',
        email: 'mansur@gmail.com',
        passvord: '12'
    },
    {
        id: 3,
        name: 'adem',
        surname: 'orucov',
        email: 'adem@gmail.com',
        passvord: '22'
    }
]
let loginName = document.querySelector('.login_name');

let goBackParent = document.querySelector('.goBackParent')
let profle = document.querySelector('.profle')



logBtn.addEventListener('click', () => {
    if (loginEmail.value !== '' && passvord.value !== '') {
        let cariIstifadeci = persons.find(data => data.email === loginEmail.value)
        if (cariIstifadeci) {
            if (cariIstifadeci.passvord === passvord.value) {
                loginName.innerHTML = `Xosgeldin: ${cariIstifadeci.name}
                `
                logPage.style.display = 'none'
                log.style.display = "none";
                logPar.style.display = "none";
                goBackParent.style.display = "block"
                profle.style.display = "block"



            } else {
                alert('sifre yanlisdir')
            }
        } else {
            alert('Email yanlisdir')
        }
    } else {
        alert('xanalari doldurun')
    }
    loginEmail.value = ''
    passvord.value = ''

});





let registerPage = document.querySelector('.register_page');
let regLog = document.querySelector('.reg_log');
let regPass = document.querySelector('.reg_pass');
let regEmail = document.querySelector('.reg_email');
let regBtn = document.querySelector('.regBtn');
let goReg = document.querySelector('.goReg');
let goLogin = document.querySelector('.goLogin')

let log = document.querySelector('.log')
let reg = document.querySelector('.reg')

let logPar = document.querySelector('.logPar')
let regPar = document.querySelector('.regPar')



goReg.addEventListener('click', () => {
    logPage.style.display = "none";
    registerPage.style.display = "flex";
    log.style.display = "none";
    reg.style.display = "block";
    logPar.style.display = "none";
    regPar.style.display = "none";
    regPar.style.display = "block";



})

goLogin.addEventListener('click', () => {
    logPage.style.display = "flex"
    registerPage.style.display = "none"
    log.style.display = "block";
    reg.style.display = "none";
    regPar.style.display = "none";
    logPar.style.display = "block";



})

regBtn.addEventListener('click', () => {

    if (regLog.value !== "" && regPass.value !== "" && regEmail.value !== "") {
        let yeniIstifadeciYoxla = persons.find(data => data.email === regEmail.value)
        if (yeniIstifadeciYoxla) {
            alert('Istifadeci movcuddur')
        } else {
            const yeniIstifadeci = {
                id: persons.length + 1,
                name: regLog.value,
                email: regEmail.value,
                passvord: regPass.value
            }
            persons.push(yeniIstifadeci)
            alert('Qeydiyyat tamamlandi')
            localStorage.setItem('pers', JSON.stringify(persons))
        }

    }
    else {
        alert('xanalari doldurun')
    }



})

function GoLog() {
    logPage.style.display = "flex";
    logPar.style.display = "block";
    log.style.display = "block";
    loginName.innerHTML = '';
    goBackParent.style.display = "none";
    profle.style.display = "none";


}
if (GoLog()) {
    logPage.style.display = "none";
    logPar.style.display = "none";
    log.style.display = "none";
    loginName.innerHTML = '';

}

if (localStorage.getItem('pers')) {
    persons = JSON.parse(localStorage.getItem('pers'));
}
/////////////////////////////////


let productList = document.querySelector('.product_list')

let basketList = document.querySelector('.basket_list')

let spnnn = document.querySelector('#err')
let zibilQabi = document.querySelector("#clear")
let count = document.querySelector('.count')


let products = [
    {
        id: 1,
        name: 'iphone',
        price: 1000,
        img: "./images/apple-iphone-11-pro-max.jpg"

    },
    {
        id: 2,
        name: 'honor',
        price: 600,
        img: "./images/H0753b55aabf5485f9c45a726354901405.jpg"

    },
    {
        id: 3,
        name: 'poko',
        price: 700,
        img: "./images/indir.jpg"

    },
    {
        id: 4,
        name: 'iphone12',
        price: 1300,
        img: "./images/kmkh6tza5egxw7ggu60e.jpg"

    }
]
let sebet = []



products.forEach(data => {
    productList.innerHTML += `
   <div class='product_card'>
   <img src="${data.img}">
   <div class='product_card_content'>
   <p>${data.name}</p>
   <p>${data.price} M</p>
   </div>
   <button onclick="indiAl(event,${data.id})">Now Buy</button>
   </div>
   `
})


function sebetiGoster(arr) {
    basketList.innerHTML = ''
    arr.forEach(data => {
        basketList.innerHTML += `
    <div class="basket_card">
    <img src="${data.img}">
    <p>${data.name}</p>
    <p>${data.count}</p>
    <p>${data.count * data.price}</p>
    <button name="artir" onclick="edit(event,${data.id})">+</button>
    <button name="azalt" onclick="edit(event,${data.id})">-</button>
    

    </div>`

    })

}

function indiAl(e, id) {
    let sebetiYoxla = sebet.find(data => data.id === +id)
    if (sebetiYoxla) {
        sebetiYoxla.count = sebetiYoxla.count + 1
    } else {

        let produkAxtar = products.find(data => data.id === +id)
        produkAxtar.count = 1
        sebet.push(produkAxtar)
    }
    sebetiGoster(sebet)
    localStorage.setItem('basket', JSON.stringify(sebet))


}

function edit(e, id) {
    let sebetiYoxla = sebet.find(data => data.id === +id)
    // sebetiYoxla.count = e.target.name === "artir"? sebetiYoxla.count + 1 : sebetiYoxla.count - 1
    sebetiYoxla.count = e.target.name === "artir" ? sebetiYoxla.count + 1 : sebetiYoxla.count - 1
    if (sebetiYoxla.count === 0) {
        let index = sebet.findIndex(data => data.id === +id)
        sebet.splice(index, 1)
    }

    sebetiGoster(sebet)
    localStorage.setItem('basket', JSON.stringify(sebet))

}

zibilQabi.addEventListener('click', () => {
    if (basketList.innerHTML = '') {
        let clear = basketList.findIndex(data => data.id === +id)
        basketList.splice(clear, 0)
    }



    if (localStorage.getItem('basket')) {
        sebet = JSON.parse(localStorage.getItem('basket'))
    }


    window.addEventListener('load', () => {
        sebetiGoster(sebet)
    })

})

let m = 0;
for (let i = 0; i < arr3.length; i++) {
    m = m + arr3[i]
}
console.log(m);


let y = 0;
for (let i = 0; i < arr2.length; i++) {
    y = y + arr2[i]
}

console.log(y);
count.innerHTML = y

