WebFontConfig = {
    google: {
        families: [
            'Open+Sans:300,300italic,400,400italic',
            'Josefin+Slab:100,300,700',
            'Lato:300,300italic,400,700,900'
        ]
    }
};
(function () {
    var wf = document.createElement('script');
    wf.src = '//ajax.googleapis.com/ajax/libs/webfont/1/webfont.js';
    wf.type = 'text/javascript';
    wf.async = 'true';
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(wf, s);
})();