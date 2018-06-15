hexo.extend.helper.register('pagination', function(basePath, page, per_page){
    var total_pages = page.total / per_page;
    if (page.total % per_page > 0) {
        total_pages ++;
    }
    var pages = {};
    if (total_pages < 6) {
        for (var i = 1; i <= total_pages; i ++) {
            var path = basePath;
            if (i === 1) {
                if (page.current === i) {
                    pages.push({'path': path, 'isCurrent': true, 'text': '' + page.current});
                } else {
                    pages.push({'path': path, 'isCurrent': false, 'text': '' + page.current});
                }
                continue;
            }
            path = basePath + '/page/' + i;
            if (page.current === i) {
                pages.push({'path': path, 'isCurrent': true, 'text': '' + page.current});
            } else {
                pages.push({'path': path, 'isCurrent': false, 'text': '' + page.current});
            }
        }
        return pages;
    }
    if (total_pages < 9) { // left ...

    }
    // left and right ...



});