const item =document.querySelectorAll("#item")
function runCodeForSmallScreens() {
    if (window.matchMedia("(max-width: 360px)").matches) {
        item.forEach((element)=>{
            element.dataset.originalFlex=element.style.flex || "1";
            element.addEventListener("click",(event)=>{
                console.log(event.target.id);
                item.forEach(el => el.style.flex = el.dataset.originalFlex);
                event.target.style.flex="10";
                if (event.target.style.flex === "10") {
                    event.target.style.flex = event.target.dataset.originalFlex; // Reset if already expanded
                } else {
                    event.target.style.flex = "10"; // Expand if not already expanded
                }
            })
        })
    }
}

runCodeForSmallScreens();

window.addEventListener("resize", runCodeForSmallScreens);