$(document).ready(function() {
        anime({
                targets: '.fa-arrow-down',
                keyframes: [
                  {translateY: -5},
                  {translateY: 15},
                  {translateY: 0}
                ],
                duration: 500,
                easing: 'easeInSine',
                loop: true
              });
})
