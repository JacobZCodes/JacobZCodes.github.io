styleSheetHrefs = ["../../Styles/modalStyle.css", "../../Styles/buttonStyles.css", "../../Styles/font.css","../../Styles/animations.css"]
scriptHrefs = ["../../Scripts/modalScript.js", "../../Scripts/buttonScripts.js", "../../Scripts/animations.js"]
faviconHref = "../../Images/sigma.png"

function insertStylesheet(href) {
    document.head.insertAdjacentHTML('beforeend', `<link rel="stylesheet" type="text/css" href="${href}">`);
}

function insertScript(href) {
    const script = document.createElement('script');
    script.src = href;
    script.defer = false;
    document.body.appendChild(script);
}


function insertFavicon(href) {
    document.head.insertAdjacentHTML('beforeend', `<link rel="icon" type="image/png" href="${href}">`);
}

function insertStylesheets(hrefs) {
    hrefs.forEach(href => {
        insertStylesheet(href);
    })
}

function insertScripts(hrefs) {
    hrefs.forEach(href => {
        console.log("Inserrting ", href);

        insertScript(href);

    })
}

insertFavicon(faviconHref)
insertStylesheets(styleSheetHrefs)
insertScripts(scriptHrefs)

