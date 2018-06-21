hexo.extend.helper.register('pagination', function(basePath, page){
    var total_pages = page.total;
    var pages = [];
    if (total_pages < 8 && page.current < 8) {
        for (var i = 1; i <= total_pages; i ++) {
            var path = basePath;
            if (i === 1) {
                if (page.current === i) {
                    pages.push({'path': page.current_url, 'isCurrent': true, 'text': '' + page.current.toString(), 'isLink':true});
                } else {
                    pages.push({'path': path, 'isCurrent': false, 'text': '' + i.toString(), 'isLink':true});
                }
                continue;
            }
            path = basePath + '/page/' + i;
            if (page.current === i) {
                pages.push({'path': page.current_url, 'isCurrent': true, 'text': '' + page.current.toString(), 'isLink':true});
            } else {
                pages.push({'path': path, 'isCurrent': false, 'text': '' + i.toString(), 'isLink':true});
            }
        }
        return pages;
    }

    if (total_pages - page.current < 4) { // left ...
        var path = basePath;
        pages.push({'path': path, 'isCurrent': false, 'text': '1', 'isLink':true});
        pages.push({'path': '', 'isCurrent': false, 'text': '...', 'isLink':false});
        var leftPages = total_pages - page.current + 1;
        for (var i = -1; i < leftPages; i ++) {
            var page_no = page.current + i;
            var isCurrent = page_no === page.current;
            if (isCurrent === true) {
                path = page.current_url;
            } else {
                path = basePath + '/page/' + page_no;
            }
            pages.push({'path': path, 'isCurrent': isCurrent, 'text': page_no.toString(), 'isLink':true});
        }
        return pages;
    }
    if (total_pages > 7 && page.current < 5) {
        var path = basePath;
        for (var i = 1; i < 6; i ++) {
            var page_no = i;
            var isCurrent = page_no === page.current;
            if (isCurrent === true) {
                path = page.current_url;
            } else if ( i > 1) {
                path = basePath + '/page/' + page_no;
            }
            pages.push({'path': path, 'isCurrent': isCurrent, 'text': page_no.toString(), 'isLink':true});
        }
        pages.push({'path': '', 'isCurrent': false, 'text': '...', 'isLink':false});
        pages.push({'path': basePath + '/page/' + total_pages, 'isCurrent': false, 'text': total_pages.toString(), 'isLink':true});
        return pages;
    }
    pages.push({'path': basePath, 'isCurrent': false, 'text': '1', 'isLink':true});
    pages.push({'path': '', 'isCurrent': false, 'text': '...', 'isLink':false});
    pages.push({'path': basePath + '/page/' + (page.current - 1), 'isCurrent': false, 'text': (page.current - 1).toString(), 'isLink':true});
    pages.push({'path': page.current_url, 'isCurrent': true, 'text': page.current.toString(), 'isLink':true});
    pages.push({'path': basePath + '/page/' + (page.current + 1), 'isCurrent': false, 'text': (page.current + 1).toString(), 'isLink':true});
    pages.push({'path': '', 'isCurrent': false, 'text': '...', 'isLink':false});
    pages.push({'path': basePath + '/page/' + total_pages, 'isCurrent': false, 'text': total_pages.toString(), 'isLink':true});
    return pages;
});