$('#store_pageing').pagination ({
    dataSource : [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    pageSize : 5,
    pageRange : null,
    showPageNumbers: true,
    callback: function(data, pagination) {
        var html = template(data);
        dataContainer.html(html);
    }
})