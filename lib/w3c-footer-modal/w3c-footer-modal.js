(function(){

var modal = document.getElementsByClassName("w3c-footer-modal")[0];
var btnClose = document.getElementsByClassName("w3c-footer-close")[0];
btnClose.onclick = function(){
    modal.style.display = "none";
    $(".more-info-content").css('display', 'none');
}
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
        $(".more-info-content").css('display', 'none');
    }
}

})();