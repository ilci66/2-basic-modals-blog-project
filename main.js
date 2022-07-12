console.log("works")

const modalBtnOne = document.querySelector("#button-one")
const modalBtnTwo = document.querySelector("#button-two")

const modalOne = document.querySelector("#modal-container-one")
const modalTwo = document.querySelector("#modal-container-two")


const modalOneCloseButton = document.querySelector("#modal-one-close-button");
const modalTwoCloseButton = document.querySelector("#modal-two-close-button");


let modalOpen = false // Gonna check if there's an active modal

window.addEventListener('click', (event) => {

    if(modalOpen) {
        if(event.target === modalOneCloseButton) {
            modalOpen = false
            modalOne.style.zIndex = "-1";
            modalOne.style.opacity = "0";

        } else if(event.target === modalTwoCloseButton) {
            modalOpen = false
            modalTwo.style.zIndex = "-1";
            modalTwo.style.opacity = "0";
            modalTwo.style.width = "0px"

        }
    } else if(event.target === modalBtnOne) {
        modalOpen = true;
        modalOne.style.zIndex = "100";
        modalOne.style.opacity = "1";
    }
    else if(event.target === modalBtnTwo) {
        modalOpen = true;
        modalTwo.style.zIndex = "100"
        modalTwo.style.opacity = "1"
        modalTwo.style.width = "100%"
    }
})