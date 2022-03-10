!(() => {
    // get element
    var qfkguy = document.getElementById("Dock");
    var svpejb = qfkguy.getElementsByTagName("img");
    var izqsuq = qfkguy.getElementsByTagName("span");
    // initialization
    var xotcmm = [];
    var index = 0;

    for (index = 0; index < svpejb.length; index++) {
        // store default width
        xotcmm.push(svpejb[index].offsetWidth);
        // set new width
        var dlwsft = parseInt(svpejb[index].offsetWidth / 2);
        svpejb[index].style.width = dlwsft + "px";
        svpejb[index].style.height = dlwsft + "px";
    }
    // mouseover event
    qfkguy.onmousemove = function(qfkguy) {
        var qfkguy = qfkguy || window.event;
        for (index = 0; index < svpejb.length; index++) {
            /*
             * Application of the Pythagorean theorem, a/b is both sides of a right angle
             * Calculate the straight-line distance from the mouse to the center of various pictures
             */
            var dlwsft = qfkguy.clientX - svpejb[index].offsetLeft - svpejb[index].offsetWidth / 1.8;
            var jjwzyg = qfkguy.clientY - svpejb[index].offsetTop - this.offsetTop - svpejb[index].offsetHeight / 2;
            /*
             * To set the magnification ratio of the image, first divide the obtained value by a value (Math.sqrt(a*a+b*b) / 850;
T            * hen subtract this initial scale from 1 (the closer the distance, the larger the scale should be) 
             */
            var mchrxx = 1 - Math.sqrt(dlwsft * dlwsft + jjwzyg * jjwzyg) / 850;

            // If the mouse is too far from the picture, the scale is set to 0.5
            if (mchrxx < .5) {
                mchrxx = .5;
                svpejb[index].style.transition = 0;
            }
            var upkbgc = xotcmm[index] * mchrxx + 12;
            svpejb[index].style.width = upkbgc + "px";
            svpejb[index].style.height = upkbgc + "px";
            svpejb[index].style.transition = "100ms";
            izqsuq[index].style.top = "-" + upkbgc + "px";
        }
    };
    // mouse out event
    qfkguy.onmouseleave = function() {
        for (index = 0; index < svpejb.length; index++) {
            svpejb[index].style.width = 64 + "px";
            svpejb[index].style.height = 64 + "px";
        }
    };
})();