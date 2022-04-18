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

var buttonGroup = document.querySelector('.button-group');
var buttons = buttonGroup.querySelectorAll('.button');
buttons = fizzyUIUtils.makeArray( buttons );

buttonGroup.addEventListener( 'click', function( event ) {

    if ( !matchesSelector( event.target, '.button' ) ) {
        return;
    }
    var index = buttons.indexOf( event.target );
    flkty.selectCell( index );
});
