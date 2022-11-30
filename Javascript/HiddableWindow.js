var MALD_2022;
(function() {
    'use strict';
    if (MALD_2022) {
        MALD_2022();
    } else {
        function applyStyles(elem, obj) {
            for (var prop in obj) elem.style[prop] = obj[prop];
        }
        var wrapper = document.createElement("div"),
            frame = document.createElement("iframe");
        frame.src = "https://terbium.ga";
        frame.width = 700; // additional 30px to hide scrollbars
        frame.height = 835;
        frame.scrolling = "yes";
        applyStyles(frame, {
            position: 'absolute',
            top: '0px',
            left: '0px',
            border: "none"
        });
        applyStyles(wrapper, {
            position: "fixed",
            zIndex: 2147483647,
            display: "block",
            bottom: "0px",
            left: "0px",
            width: "700px",
            height: "835px",
            overflow: "hidden",
            transition: "opacity 0.1s",
            borderRadius: "6px",
            transform: "scale(1)"
        });
        wrapper.appendChild(frame);
        document.body.parentNode.appendChild(wrapper);

        function enter() {
            wrapper.style.opacity = "1";
        }

        function leave() {
            wrapper.style.opacity = "0";
            frame.blur();
        }
        wrapper.addEventListener("mouseenter", enter, false);
        wrapper.addEventListener("mouseleave", leave, false);
        MALD_2022 = () => {
            wrapper.removeEventListener("mouseenter", enter, false);
            wrapper.removeEventListener("mouseleave", leave, false);
            wrapper.parentNode.removeChild(wrapper);
            frame = null;
            wrapper = null;
            MALD_2022 = undefined;
            for (var script of document.querySelectorAll()) script.parentNode.removeChild(script);
        };
    }
}());
