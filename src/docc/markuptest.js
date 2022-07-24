docReady(function() {
    checkBar();
    tabList();
    // fullScreen();
    browserFullScreen();
    mainTabList();
    selectBx();
    // observer();
});

function docReady(fn) {
	if (document.readyState === "complete" || document.readyState === "interactive") {
		setTimeout(fn, 1);
	} else {
		document.addEventListener("DOMContentLoaded", fn);
	}
}

var checkBar = function(){
    const checkBar = document.querySelector('.button_fold');
    const checkBarClose = document.querySelector('.button_close');

    if(checkBar){
        checkBar.addEventListener("click", e =>{
            if(checkBar){
                checkBar.parentNode.classList.add('active');
            }
            e.preventDefault();
        });
        checkBarClose.addEventListener("click", () => {
            checkBar.parentNode.classList.remove('active');
        })
    }
}

var tabList = function(){
    const tabs = [...document.querySelectorAll('.snb_bx li')];
    const activeClass = 'active';

    if(tabs){
        function initTabs() {
            tabs.forEach((tab) => {
                tab.addEventListener('click', (e) => {
                    updateActiveTab(tab);
                })
            })
        }

        function updateActiveTab(selected) {
            tabs.forEach((tab) => {
                if (tab && tab.classList.contains(activeClass)) {
                tab.classList.remove(activeClass);
                }
            });
            selected.classList.add(activeClass);
        }
        initTabs();
    }
}

var mainTabList = function(){
    const mainTabs = [...document.querySelectorAll('.tabs_bx li')];
    const activeClass = 'active';

    if(mainTabs){
        function mainInitTabs() {
            mainTabs.forEach((tab) => {
                tab.addEventListener('click', (e) => {
                    mainUpdateActiveTab(tab);
                })
            })
        }

        function mainUpdateActiveTab(selected) {
            mainTabs.forEach((tab) => {
                if (tab && tab.classList.contains(activeClass)) {
                tab.classList.remove(activeClass);
                }
            });
            selected.classList.add(activeClass);
        }
        mainInitTabs();
    }
}

var fullScreen = function(){
    const elementScreenZoom = document.querySelector('#zoom');
    const elementScreenZoomOut = document.querySelector('#zoomout');
    const elementTarget = document.querySelector('.pan_bx');

    if(elementScreenZoom){
        elementScreenZoom.addEventListener("click", e =>{
            elementTarget.style.position = "fixed";
            elementTarget.style.top = "0";
            elementTarget.style.left = "0";
            elementTarget.style.bottom = "0";
            elementTarget.style.right = "0";
            elementTarget.style.borderRadius = "0";
            elementTarget.style.zIndex = "10";
            document.querySelector('.pan_bx .docc').classList.remove('type_pan');
            // document.querySelector('.zoom_bx').classList.add('active');
        });
    }

    if(elementScreenZoomOut){
        elementScreenZoomOut.addEventListener("click", e =>{
            elementTarget.style.position = "";
            elementTarget.style.top = "";
            elementTarget.style.left = "";
            elementTarget.style.bottom = "";
            elementTarget.style.right = "";
            elementTarget.style.borderRadius = "";
            elementTarget.style.zIndex = "";
            document.querySelector('.pan_bx .docc').classList.add('type_pan');
            // document.querySelector('.zoom_bx').classList.remove('active');
        });
    }
}

var selectBx = function(){
    const elementSelect = document.querySelector('.common_component_select');

    if(elementSelect){
        document.querySelector('.selected_item').addEventListener('click', function(){
            elementSelect.classList.toggle('open');
        })
    }
}

// var observer = function(){
//     let containerCheck = document.querySelector('.drawing_bx');
//     let rowCheck = document.querySelectorAll('.list_body .row');
//     const checkItem = document.querySelector('.bottom_check_bar')

//     var observer = new MutationObserver(mutations => {
//         if(checkItem.style.display == "block" && rowCheck.length >= 10){
//             containerCheck.style.paddingBottom = "92px";
//         } else {
//             containerCheck.style.paddingBottom = "40px";
//         }
//     });

//     var config = {
//         attributes: true,
//     };

//     observer.observe(checkItem, config);
// }

function checkSelectAll(checkbox) {
    const selectall = document.querySelector('input[name="check_all"]');
    if (checkbox.checked === false) {
        selectall.checked = false;
    }
}

function selectAll(selectAll) {
    const checkboxes = document.getElementsByName('check_bx');

    checkboxes.forEach((checkbox) => {
        checkbox.checked = selectAll.checked
    })
}

var browserFullScreen = function() {

    var elem = document.documentElement;
    var elementScreenZoom = document.querySelector('#zoom');
    var elementScreenZoomOut = document.querySelector('#zoomout');
    var elementTarget = document.querySelector('.pan_bx');

    elementScreenZoom.addEventListener('click', function(){
        if(elementTarget.requestFullscreen()){
            elementTarget.requestFullscreen();
        } else if(elementTarget.webkitRequestFullscreen){
            elementTarget.webkitRequestFullscreen();
        } else if(elementTarget.msRequestFullscreen){
            elementTarget.msRequestFullscreen();
        }
    })

    elementScreenZoomOut.addEventListener('click', function(){
        if (document.exitFullscreen) {
            document.exitFullscreen();
          } else if (document.webkitExitFullscreen) { /* Safari */
            document.webkitExitFullscreen();
          } else if (document.msExitFullscreen) { /* IE11 */
            document.msExitFullscreen();
          }
    })
}