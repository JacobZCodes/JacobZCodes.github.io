let playBtn = document.getElementById("playBtn");
if (playBtn != null) {
    playBtn.addEventListener("click", function() {
        // hide and disable play btn
        this.style.display = "none";
        // show modal
        openModal();
        // when user closes modal, showNext
    })
}

let homeButton = document.getElementById("homeBtn");

homeButton.addEventListener("click", function() {
    console.log("clciked");
    window.location.href = "../../index.html";
});

homeButton.innerHTML = homeBtn.innerHTML = '<img src="../../Images/home.jpeg" alt="Home" style="width: 48px; height: 24px;">';

// feedback btn insertion
let nav = document.getElementsByClassName("navBtns");
nav = nav[0];
let feedbackBtnHTML = `<button id="feedbackBtn" class="circle" onclick=" window.open('../../feedback.html','_blank')">
<img src="../../Images/pencil-1.png" alt="F" style="width: 48px; height: 48px;"></button>`;

let tempDiv = document.createElement("div");
tempDiv.innerHTML = feedbackBtnHTML;

nav.appendChild(tempDiv);



