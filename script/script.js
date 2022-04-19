let switchMode = document.getElementById("switchMode")

switchMode.onclick = function () {
    let theme = document.getElementById("theme")

    if (theme.getAttribute("href") == "style/light-mode.css"){
        theme.href = "style/dark-mode.css"
    }else {
        theme.href = "style/light-mode.css"
    }
}
var flkty = new Flickity( '.carousel', {
    groupCells: true
});

