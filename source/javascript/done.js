// showDialog
function showDialog(_id) {
    if (_id === undefined || _id === '') {
        return false;
    }
    _id = '#' + _id;
    var dialog = document.querySelector(_id);
    if (! dialog.showModal) {
        dialogPolyfill.registerDialog(dialog);
    }
    dialog.showModal();
    dialog.querySelector('.close').addEventListener('click', function() {
        dialog.close();
    });
}

// location jump
function jump(_url) {
    window.location.href = _url;
}