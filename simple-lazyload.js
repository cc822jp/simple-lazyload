/**
 * @license Simple-lazyload v1.0.0
 * (c) 2015 CrystalCode https://github.com/cc822jp/simple-lazyload
 * License: MIT
 */
(function() {

    'use strict';

    /**
     * load image
     */
    function loadImage() {
        var src, bgSrc, i,
            elems = document.getElementsByTagName('*');

        for (i = 0; i < elems.length; i++) {
            src = elems[i].getAttribute('data-lazy-src');
            bgSrc = elems[i].getAttribute('data-lazy-bg');

            if (src) {
                elems[i].setAttribute('src', src);
            }

            if (bgSrc) {
                elems[i].style.backgroundImage = 'url('+ bgSrc +')';
            }
        }
    }

    /**
     * add event listener
     * @param elm
     * @param event
     * @param fn
     */
    function addEvent(el, event, fn) {
        try {
            // for Chrome, Safari, etc
            el.addEventListener(event, fn, false);
        } catch (e) {
            // for IE
            el.attachEvent('on' + event, fn);
        }
    }

    // set onload event
    addEvent(window, 'load', function() {
        setTimeout(loadImage, 1);
    });

})();
