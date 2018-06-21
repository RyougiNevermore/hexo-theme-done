hexo.extend.helper.register('pagination', function(basePath, page, per_page){
    var total_pages = page.total / per_page;
    if (page.total % per_page > 0) {
        total_pages ++;
    }
    var pages = {};
    if (total_pages < 8) {
        for (var i = 1; i <= total_pages; i ++) {
            var path = basePath;
            if (i === 1) {
                if (page.current === i) {
                    pages.push({'path': path, 'isCurrent': true, 'text': '' + page.current.toString()});
                } else {
                    pages.push({'path': path, 'isCurrent': false, 'text': '' + page.current.toString()});
                }
                continue;
            }
            path = basePath + '/page/' + i;
            if (page.current === i) {
                pages.push({'path': path, 'isCurrent': true, 'text': '' + page.current.toString()});
            } else {
                pages.push({'path': path, 'isCurrent': false, 'text': '' + page.current.toString()});
            }
        }
        return pages;
    }
    if (total_pages - page.current < 4) { // left ...
        var path = basePath;
        pages.push({'path': path, 'isCurrent': false, 'text': '1'});
        pages.push({'path': '', 'isCurrent': false, 'text': '...'});
        var leftPages = total_pages - page.current + 1;
        for (var i = -1; i < leftPages; i ++) {
            var page_no = page.current + i;
            var isCurrent = page_no === page.current;
            path = basePath + '/page/' + page_no;
            pages.push({'path': path, 'isCurrent': isCurrent, 'text': page_no.toString()});
        }
        return pages;
    }
    pages.push({'path': basePath, 'isCurrent': false, 'text': '1'});
    pages.push({'path': '', 'isCurrent': false, 'text': '...'});
    pages.push({'path': basePath + '/page/' + (page.current - 1), 'isCurrent': false, 'text': (page.current - 1).toString()});
    pages.push({'path': basePath + '/page/' + page.current, 'isCurrent': true, 'text': page.current.toString()});
    pages.push({'path': basePath + '/page/' + (page.current + 1), 'isCurrent': false, 'text': (page.current + 1).toString()});
    pages.push({'path': '', 'isCurrent': false, 'text': '...'});
    pages.push({'path': basePath + '/page/' + total_pages, 'isCurrent': false, 'text': total_pages.toString()});
    return pages;
});