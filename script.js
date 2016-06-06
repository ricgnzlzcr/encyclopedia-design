window.onload = function() {
  truncateArticles();
};


function truncateArticles() {
    var articles = $('.truncate');
    
    for (var i = 0; i < articles.length; i++) {
        var newPara = shortenParagraph($(articles[i]).text(), 250);
        $(articles[i]).text(newPara);
    }
}

function shortenParagraph(para, length) {
    if (para.length > length) {
       return para.slice(0, length - 1) + "..."; 
    }
    
    return para;
}