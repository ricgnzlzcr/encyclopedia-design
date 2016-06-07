window.onload = function() {
  truncateArticles();
};

/*
 * Function: truncateArticles();
 * -----------------------------
 * Takes any element with a .truncate class and shortens the
 * element to 350 characters and adds an ellipsis
 */
function truncateArticles() {
    var articles = $('.truncate');
    
    for (var i = 0; i < articles.length; i++) {
        var newPara = shortenParagraph($(articles[i]).text(), 350);
        $(articles[i]).text(newPara);
    }
}

/*
 * Function: shortenParagraph(string, maxCharacterLength);
 * -----------------------------
 * Takes a string and shortens it to the length provided and adds ellipsis. 
 * If string is already less than length given then it returns original string.
 */
function shortenParagraph(para, length) {
    if (para.length > length) {
       return para.slice(0, length - 1) + "..."; 
    }
    
    return para;
}