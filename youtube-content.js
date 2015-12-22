var comments = document.getElementById("watch-discussion");
if(comments !== null) {
    comments.style.display = "none";
}

var footer = document.getElementById("footer-links");
if(comments !== null) {
    footer.style.display = "none";
}

function removeAPUN() {
    var autoplaybar = document.getElementsByClassName('autoplay-bar')[0];
    if (autoplaybar) {
        autoplaybar.removeAttribute('class');
        document.getElementsByClassName('checkbox-on-off')[0].remove();
    }
}

window.addEventListener('readystatechange', removeAPUN, true);
window.addEventListener('spfdone', removeAPUN);
