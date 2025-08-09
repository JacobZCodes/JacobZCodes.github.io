const openBtn = document.getElementById("openModal");
const closeBtn = document.getElementById("closeModal");
const modal = document.getElementById("modal");
const homeBtn = document.getElementById("homeBtn");
const defaultInnerModalHTML = `<h3 style="color: #000;">Push "Enter" to progress</h3> <h3 style="color: black">Press the home icon at any time to return to the landing page.</h3>`;
let modalHasBeenClosedOnce = false;
function updateInnerModalHTML(newHTML) {
    document.getElementById("modal-inner-text").innerHTML = newHTML;

}

function resetInnerModalHTML() {
    document.getElementById("modal-inner-text").innerHTML = defaultInnerModalHTML;
}

function openModal() {
    modal.classList.add("open");
}

openBtn.addEventListener("click", () => {
    modal.classList.add("open");
})

closeBtn.addEventListener("click", () => {
    modal.classList.remove("open");
    resetInnerModalHTML();
    let playBtn = document.getElementById("playBtn");
    if (playBtn) {
        if (modalHasBeenClosedOnce == false && playBtn.style.display == "none") {
            modalHasBeenClosedOnce = true;
            showNext();
        }
    }



})

