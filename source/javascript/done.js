// showDialog
function showDialog(_id) {
    if (_id === undefined || _id === '') {
        return false;
    }
    _id = '#' + _id;
    var dialog = document.querySelector(_id);
    if (!dialog.showModal) {
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

// search boot
function search_boot() {
    var _text = $('#search_input').val();
    if (_text === undefined || _text.trim() === '') {
        $('#posts_chips').children().show();
        return false;
    }
    _text = _text.trim();
    $('#posts_chips').children().each(function (_, chip) {
        var _post_title = $(chip).text();
        if (_post_title !== undefined || _post_title !== '') {
            if (_post_title.toLowerCase().trim().indexOf(_text.toLowerCase()) > 0) {
                console.log(_post_title);
                $(chip).show();
            } else {
                $(chip).hide();
            }
        }
    });
}

// baidu url submit
function baidu_url_submit() {
    var bp = document.createElement('script');
    var curProtocol = window.location.protocol.split(':')[0];
    if (curProtocol === 'https') {
        bp.src = 'https://zz.bdstatic.com/linksubmit/push.js';
    }
    else {
        bp.src = 'http://push.zhanzhang.baidu.com/push.js';
    }
    var s = document.getElementsByTagName("script")[0];
    s.parentNode.insertBefore(bp, s);
}

$(document).ready(function() {
    $('figure').each(function(i, block) {
        hljs.highlightBlock(block);
    });
    baidu_url_submit();
});

