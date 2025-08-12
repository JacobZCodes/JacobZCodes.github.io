function fadeIn(el) {
    el.style.opacity = "0";    
    el.style.animation = "fadeIn 0.6s forwards";
  }

function fadeInAndResetAnimaton(el) {
    console.log("called");
    el.style.opacity = "0";
    el.style.animation = "none";   
    el.style.animation = "fadeIn 0.6s forwards";
    
  }