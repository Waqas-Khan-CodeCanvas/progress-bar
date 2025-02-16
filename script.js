const progressBarElement = document.querySelector(".barline");
const prevBtnElement = document.querySelector(".prev");
const nextBtnElement = document.querySelector(".next");
const barPointsElement = document.querySelectorAll(".bar");

let barWidht = ["w-0", "w-10", "w-25", "w-50", "w-75"]
let barPioint = 0;

nextBtnElement.addEventListener("click", () => {
    if (barPioint == 4) {
        nextBtnElement.classList.add("disabled")
        barPointsElement[barPioint-1].classList.replace("border-danger","border-info")
    } else {
        barPioint++;
        progressBarElement.classList.replace(`${barWidht[barPioint - 1]}`, `${barWidht[barPioint]}`)
        prevBtnElement.classList.remove("disabled")
        barPointsElement[barPioint-1].classList.replace("border-danger","border-info")
    }
})
prevBtnElement.addEventListener("click", () => {
    if (barPioint == 1) {
        prevBtnElement.classList.add("disabled")
        barPointsElement[barPioint-1].classList.replace("border-info","border-danger")
    } else {
        barPioint--;
        progressBarElement.classList.replace(`${barWidht[barPioint + 1]}`, `${barWidht[barPioint]}`)
        nextBtnElement.classList.remove("disabled")
        barPointsElement[barPioint-1].classList.replace("border-info","border-danger")
        barPointsElement[3].classList.replace("border-info","border-danger")
    }
})
