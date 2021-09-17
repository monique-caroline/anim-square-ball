var element = document.querySelectorAll('.square-ball');

TweenMax.to(element, 1, {
    scale: .6,
    borderRadius: '50%',
    rotation: 360,
    repeat: -1,
    repeatDelay: .5,
    yoyo: true
});