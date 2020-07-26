// 초기화
// West
const westPanel = document.querySelector('#westPanel'); // West 패널
const westBtn = document.querySelector("#westBtn");     // West 패널 버튼
westPanel.active = true;
const westSubPanels = document.querySelectorAll('.westSubPanel');   // 서브 패널 리스트 [nav, set, inf]
const navBtn = document.querySelector('#navBtn'); // navigation 서브패널 버튼
const setBtn = document.querySelector('#setBtn'); // settings 서브패널 버튼
const infBtn = document.querySelector('#infBtn');  // information 서브패널 버튼
const westSubPanelBodies = document.querySelectorAll('.subPanelBody');  // 서브 패널 바디 리스트 [navBody, setBody, infBody]

// Center
const centerPanel = document.querySelector('#centerPanel');
const centerTab = document.querySelector('#centerTab');
const tabBtn = document.querySelector('.tabBtn');
const centerDefaultTab = document.querySelector('#centerDefaultTab');
const centerTabBody = document.querySelector('#centerTabBody');
const centerDefaultTabBody = document.querySelector('#centerDefaultTabBody');
const toggle = document.querySelector('#toggle');
// East
const eastPanel = document.querySelector('#eastPanel');
eastPanel.active = true;
const eastBtn = document.querySelector('#eastBtn');
const nameBtn = document.querySelector('#nameBtn');
nameBtn.active = true;
const valueBtn = document.querySelector('#valueBtn');
valueBtn.active = false;
const trList = document.querySelectorAll('tr');
const eastPanelTail = document.querySelector('.eastPanelTail');
const aTab = document.querySelector('#aTab');
const gridTab = document.querySelector('#gridTab');
const aTabBtn = document.querySelector('.aTabBtn');
const aTabBody = document.querySelector('#aTabBody');
const dataTable = document.querySelector('#dataTable');
const testBtn = document.querySelector('.testBtn');
const toolTip = document.querySelector('#toolTip');

// South
const southPanel = document.querySelector('.southPlaceholder');
southPanel.active = false;
const southBtn = document.querySelector('#southBtn');

// Data
const nameData = ['version', 'created', 'borderWidth', 'autoFitColumns', 'tested', 'productionQuality', 'grouping'];
const valueData = [0.01, 10152006, 1, true, false, false, false];
const nameMap = new Map();
const valueMap = new Map();
for (let i = 0; i < nameData.length; ++i) {
    nameMap.set(nameData[i], valueData[i]);
}
for(let i = 0; i < 4; ++i){
    valueMap.set(valueData[i], nameData[i]);    
}
valueMap.set(false, []);
valueMap.get(false).push('tested')
valueMap.get(false).push('productionQuality')
valueMap.get(false).push('grouping')

for (let i = 0; i < westSubPanels.length; ++i) westSubPanels[i].active = false;  // 서브 패널 상태
westSubPanels[0].active = true;

// 리스너 함수
// West
function westClick() {
    westPanel.classList.add('closeWestPanel');    
}
function westAnim(event) {
    if (event.type === 'animationend') {
        if (event.animationName === 'closeWestPanel') {
            if (westPanel.active === true) {
                westPanel.classList.replace('westPanel', 'westPlaceholder');
                westPanel.classList.replace('closeWestPanel', 'openWestPanel');
                westBtn.classList.replace('imgRight', 'imgLeft');
            } else {
                westPanel.classList.replace('westPlaceholder', 'westPanel');
                westPanel.classList.replace('closeWestPanel', 'openWestPanel');
                westBtn.classList.replace('imgLeft', 'imgRight');
            }
            westPanel.active = !westPanel.active;    
        }
    }
}
function navBtnClick() {
    if (westSubPanels[0].active) {
        westSubPanelBodies[1].classList.remove('hidden');
        westSubPanels[1].active = true;
        westSubPanels[1].classList.replace('closeSet', 'openSet');
    } else {
        westSubPanelBodies[0].classList.remove('hidden');
        westSubPanelBodies[1].classList.add('hidden');
        westSubPanelBodies[2].classList.add('hidden');
        westSubPanels[1].active = false;
        westSubPanels[2].active = false;
        westSubPanels[1].classList.replace('openSet', 'closeSet');
        westSubPanels[2].classList.replace('openInf', 'closeInf');
    }
    westSubPanels[0].active = !westSubPanels[0].active;
}
function setBtnClick() {
    if (westSubPanels[1].active) {
        westSubPanelBodies[2].classList.remove('hidden');
        westSubPanels[2].active = true;        // inf 상태 활성화
        westSubPanels[2].classList.replace('closeInf', 'openInf');
    } else {
        westSubPanelBodies[0].classList.add('hidden');
        westSubPanelBodies[1].classList.remove('hidden');
        westSubPanelBodies[2].classList.add('hidden');
        westSubPanels[0].active = false;
        westSubPanels[2].active = false;
        westSubPanels[1].classList.replace('closeSet', 'openSet');
        westSubPanels[2].classList.replace('openInf', 'closeInf');
    }
    westSubPanels[1].active = !westSubPanels[1].active;
}
function infBtnClick() {
    if (westSubPanels[2].active) {
        westSubPanelBodies[1].classList.remove('hidden');
        westSubPanels[1].active = true;
        westSubPanels[2].classList.replace('openInf', 'closeInf');
    } else {
        westSubPanelBodies[0].classList.add('hidden');
        westSubPanelBodies[1].classList.add('hidden');
        westSubPanelBodies[2].classList.remove('hidden');
        westSubPanels[0].active = false;
        westSubPanels[1].active = false;
        westSubPanels[1].classList.replace('closeSet', 'openSet');
        westSubPanels[2].classList.replace('closeInf', 'openInf');
    }
    westSubPanels[2].active = !westSubPanels[2].active;
}
function btnImg() {
    if (westSubPanels[0].active) navBtn.classList.replace('imgPlus', 'imgMinus');
    else navBtn.classList.replace('imgMinus', 'imgPlus');
    if (westSubPanels[1].active) setBtn.classList.replace('imgPlus', 'imgMinus');
    else setBtn.classList.replace('imgMinus', 'imgPlus');
    if (westSubPanels[2].active) infBtn.classList.replace('imgPlus', 'imgMinus');
    else infBtn.classList.replace('imgMinus', 'imgPlus');
}
// East
function eastClick() { eastPanel.classList.add('closeEastPanel'); }
function eastAnim(event) {
    if (event.type === 'animationend') {
        if (event.animationName === 'closeEastPanel') {
            if (eastPanel.active === true) {
                eastPanel.classList.replace('eastPanel', 'eastPlaceholder');
                eastPanel.classList.replace('closeEastPanel', 'openEastPanel');
                eastBtn.classList.replace('imgRight', 'imgLeft');
            } else {
                eastPanel.classList.replace('eastPlaceholder', 'eastPanel');
                eastPanel.classList.replace('closeEastPanel', 'openEastPanel');
                eastBtn.classList.replace('imgLeft', 'imgRight');
            }
            eastPanel.active = !eastPanel.active;            
        }
    }
}
function selectEastTab(event){
    if(event.target.className === 'aTabBtn') return;
    if(this.id === 'aTab') {
        this.classList.remove('unselectedHead');    
        this.classList.add('selectedHead');
        gridTab.classList.remove('selectedHead');
        gridTab.classList.add('unselectedHead');
        // body
        aTabBody.classList.remove('close');
        dataTable.classList.add('close');
    } else{
        this.classList.remove('unselectedHead');
        this.classList.add('selectedHead');
        aTab.classList.remove('selectedHead');
        aTab.classList.add('unselectedHead');
        // body
        dataTable.classList.remove('close');
        aTabBody.classList.add('close');
    }    
}
function closeEastTab(event){
    event.stopPropagation();
    gridTab.classList.remove('unselectedHead');
    gridTab.classList.add('selectedHead');
    aTab.classList.add('close');
    dataTable.classList.remove('close');
    aTabBody.classList.add('close');
}
function createToolTip(){
    toolTip.classList.remove('hidden');
    toolTip.classList.add('tooltip');
}
function destroyToolTip(){
    toolTip.classList.remove('tooltip');
    toolTip.classList.add('hidden');
}
//Center Tab
function selectCenterTab(event) {    
    if (event.target.className === 'tabBtn') return;
    if (this.id === 'centerTab') {
        this.classList.remove('unselectedHead');
        this.classList.add('selectedHead');
        centerDefaultTab.classList.remove('selectedHead');
        centerDefaultTab.classList.add('unselectedHead');
        centerTabBody.classList.remove('close');
        centerDefaultTabBody.classList.add('close');
    } else {
        this.classList.remove('unselectedHead');
        this.classList.add('selectedHead');
        centerTab.classList.remove('selectedHead');
        centerTab.classList.add('unselectedHead');
        centerDefaultTabBody.classList.remove('close');
        centerTabBody.classList.add('close');
    }
}
function closeTab() {
    centerDefaultTab.classList.replace('unselectedHead', 'selectedHead');
    centerDefaultTabBody.classList.remove('close');
    centerTab.classList.add('close');
    centerTabBody.classList.add('close');
}

function sortByName() {
    if (nameBtn.active) {
        // 내림차순
        nameData.sort().reverse();
        for (let i = 1; i < 8; ++i) {
            trList[i].children[0].innerText = nameData[i - 1];
            trList[i].children[1].innerText = nameMap.get(nameData[i - 1]);
        }
        trList[8].children[0].innerText = '(name)';
        trList[8].children[1].innerText = 'Properties Grid';
    } else {
        // 오름차순
        nameData.sort();
        let j = 0;
        for (let i = 2; i < 9; ++i) {
            trList[i].children[0].innerText = nameData[j];
            trList[i].children[1].innerText = nameMap.get(nameData[j]);
            ++j;
        }
        trList[1].children[0].innerText = '(name)';
        trList[1].children[1].innerText = 'Properties Grid';
    }
    nameBtn.active = !nameBtn.active;
}

function sortByValue() {
    if (valueBtn.active) {
        // 내림차순                
        let j = 0;
        let k = 0;
        valueData.sort((a, b) => {
            return a - b;
        }).reverse();
        if (nameBtn.active) {
            // 2 ~ 9 까지 대입
            for (let i = 2; i < 9; ++i) {
                if(valueData[j] === false){
                    trList[i].children[0].innerText = valueMap.get(false)[k];
                    ++k;
                } else {
                    trList[i].children[0].innerText = valueMap.get(valueData[j]);
                }
                trList[i].children[1].innerText = valueData[j];
                ++j;
            }
        } else {
            // 1 ~ 8 까지 대입
            for (let i = 1; i < 8; ++i) {
                if(valueData[j] === false){
                    trList[i].children[0].innerText = valueMap.get(false)[k];
                    ++k;
                } else {
                    trList[i].children[0].innerText = valueMap.get(valueData[j]);
                }
                trList[i].children[1].innerText = valueData[j];
                ++j;
            }
        }
    } else {
        // 오름차순
        let j = 0;
        let k = 0;
        valueData.sort((a, b) => {
            return b - a;
        }).reverse();
        if (nameBtn.active) {
            // 2 ~ 9 까지 대입
            for (let i = 2; i < 9; ++i) {
                if(valueData[j] === false){
                    trList[i].children[0].innerText = valueMap.get(false)[k];
                    ++k;
                } else {
                    trList[i].children[0].innerText = valueMap.get(valueData[j]);
                }
                trList[i].children[1].innerText = valueData[j];
                ++j;
            }
        } else {
            // 1 ~ 8 까지 대입
            for (let i = 1; i < 8; ++i) {
                if(valueData[j] === false){
                    trList[i].children[0].innerText = valueMap.get(false)[k];
                    ++k;
                } else {
                    trList[i].children[0].innerText = valueMap.get(valueData[j]);
                }
                trList[i].children[1].innerText = valueData[j];
                ++j;
            }
        }    
    }
    valueBtn.active = !valueBtn.active;
}

// South
function southClick() {    
    southPanel.classList.add('closeSouthPanel');
}
function southAnim(event){    
    if(event.type === 'animationend'){
        if(event.animationName === 'closeSouthPanel'){
            if(southPanel.active === true){
                southPanel.classList.replace('southPanel', 'southPlaceholder');
                southPanel.classList.replace('closeSouthPanel', 'openSouthPanel');
                southBtn.classList.replace('imgDown', 'imgUp');
            } else{
                southPanel.classList.replace('southPlaceholder', 'southPanel');
                southPanel.classList.replace('closeSouthPanel', 'openSouthPanel');
                southBtn.classList.replace('imgUp', 'imgDown');
            }
            southPanel.active = !southPanel.active;
        }
    }
}
// 이벤트 리스너 연결
westBtn.addEventListener('click', westClick, false);
westPanel.addEventListener('animationend', westAnim, false);
navBtn.addEventListener('click', navBtnClick, false);
navBtn.addEventListener('click', btnImg, false);
setBtn.addEventListener('click', setBtnClick, false);
setBtn.addEventListener('click', btnImg, false);
infBtn.addEventListener('click', infBtnClick, false);
infBtn.addEventListener('click', btnImg, false);

eastBtn.addEventListener('click', eastClick, false);
eastPanel.addEventListener('animationend', eastAnim, false);
nameBtn.addEventListener('click', sortByName, false);
valueBtn.addEventListener('click', sortByValue, false);
aTab.addEventListener('click', selectEastTab, false);
gridTab.addEventListener('click', selectEastTab, false);
aTabBtn.addEventListener('click', closeEastTab, false);
testBtn.addEventListener('mouseover', createToolTip, false);
testBtn.addEventListener('mouseout', destroyToolTip, false);

centerTab.addEventListener('click', selectCenterTab, false);
centerDefaultTab.addEventListener('click', selectCenterTab, false);
tabBtn.addEventListener('click', closeTab, false);
toggle.addEventListener('click', westClick, false);

//South
southBtn.addEventListener('click', southClick, false);
southPanel.addEventListener('animationend', southAnim, false);