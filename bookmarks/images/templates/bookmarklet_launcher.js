(function(){
    if(!window.bookmarklet) {
        bookmarketl_js = document.body.appendChild(document.createElement('script'));
        bookmarketl_js.src = '//127.0.0.1:8000/static/js/bookmarklet.js?r='+Math.floor(Math.random()*9999999999999999);
        window.bookmarklet = true;
    }
    else {
        bookmarkletLaunch();
    }
})();