// hamburger menu script


const navToggleBtn =document.getElementById('ham_Cls_Btn');
navToggleBtn.addEventListener('click',toggleNavMenu);
const swidth =window.screen.width;

function toggleNavMenu(){
    if(navToggleBtn.classList.contains('hamBtn')&& swidth <600){
        document.getElementById('navItem').style.display = 'flex';
        navToggleBtn.classList.replace('hamBtn','clsBtn');
        navToggleBtn.childNodes.item(1).src = './images/icon-close-menu.svg'   
    }
    else if(navToggleBtn.classList.contains('clsBtn')&& swidth <600){
        document.getElementById('navItem').style.display = 'none';
        navToggleBtn.classList.replace('clsBtn','hamBtn');
        navToggleBtn.childNodes.item(1).src = './images/icon-hamburger.svg';
    }
}
// Bookmark Script


const bookmarkBtn = document.getElementById('bookmarkBtn');
bookmarkBtn.addEventListener('click',bookmarkToogle);

function bookmarkToogle(){
    if(bookmarkBtn.classList.contains('bookmarkBtn')){
        bookmarkBtn.classList.replace('bookmarkBtn','bookmarkedBtn');
        bookmarkBtn.childNodes.item(1).src ='./images/icon-bookmarked.svg';
    }
    else{
        bookmarkBtn.classList.replace('bookmarkedBtn','bookmarkBtn');
        bookmarkBtn.childNodes.item(1).src ='./images/icon-bookmark.svg';
    }
    
}


//backer tab Close script
const header = document.getElementById('header');
const main = document.getElementById('main');
const backerCls = document.getElementById('backerTab');

const backClsBtn = backerCls.childNodes[1].childNodes[3];

backClsBtn.addEventListener('click',closeBacker);

function closeBacker(){
    backerCls.style.display= 'none';
    header.style.opacity = '1';
    main.style.opacity = '1';
    Bshowreset();
}

//direct select reward script


const SBtn= document.getElementsByClassName('S_Btn');
for(let p=0; p<SBtn.length; p++){
    SBtn[p].addEventListener('click',()=>{
        backerCls.style.display= 'flex';
        header.style.opacity = '0.3';
        main.style.opacity = '0.3'
    });
}

//back the project


const bringBacker = document.getElementById('connectBtn');
bringBacker.addEventListener('click',()=>{
    backerCls.style.display= 'flex';
    header.style.opacity = '0.3';
    main.style.opacity = '0.3'
});


const bArry = document.getElementsByClassName('Bselect');
const BshowArry = document.getElementsByClassName('Bshow');

// backer model select


function Bshowreset(){
    for(let k=0; k<BshowArry.length-1;k++){
        BshowArry[k].style.display= 'none';
    }
}

for(let i=0; i<bArry.length-1; i++){
    bArry[i].addEventListener('click',()=>{
        Bshowreset();
        BshowArry[i].style.display= 'flex';
    })
}

// For going into final page 


const fArray = document.getElementsByClassName('fBtn');
for(let a=0; a<fArray.length; a++){
    fArray[a].addEventListener('click',()=>{
        backerCls.style.display='none';
        header.style.opacity='0.3';
        main.style.opacity='0.3';
        completed.parentElement.style.display= 'flex';
    })
}

//Final all clear 


const completed = document.getElementById('T4');
completed.addEventListener('click',allreset);

function allreset(){
    Bshowreset();
    header.style.opacity='1';
    main.style.opacity='1';
    completed.parentElement.style.display= 'none';
}