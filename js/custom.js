let tab1Btn = document.getElementById("tab1");
let tab2Btn = document.getElementById("tab2");
let tab3Btn = document.getElementById("tab3");
let tab1Pane = document.getElementById("tab1-pane");
let tab2Pane = document.getElementById("tab2-pane");
let tab3Pane = document.getElementById("tab3-pane");

tab1Btn.addEventListener('click',activeTab1);
tab2Btn.addEventListener('click',activeTab2);
tab3Btn.addEventListener('click',activeTab3);

function activeTab1(){
    tab1Btn.classList.add("active");
    tab2Btn.classList.remove("active");
    tab3Btn.classList.remove("active");
    tab1Pane.classList.add('show','active');
    tab2Pane.classList.remove('show','active');
    tab3Pane.classList.remove('show','active');
}

function activeTab2(){
    tab2Btn.classList.add("active");
    tab1Btn.classList.remove("active");
    tab3Btn.classList.remove("active");
    tab2Pane.classList.add('show','active');
    tab1Pane.classList.remove('show','active');
    tab3Pane.classList.remove('show','active');
}

function activeTab3(){
    tab3Btn.classList.add("active");
    tab2Btn.classList.remove("active");
    tab1Btn.classList.remove("active");
    tab3Pane.classList.add('show','active');
    tab2Pane.classList.remove('show','active');
    tab1Pane.classList.remove('show','active');
}