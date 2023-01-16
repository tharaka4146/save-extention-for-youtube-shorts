$(document).ready(function () {

  console.log('4')

  storedcontent = $('#content-2').html();
  $('#content-2').remove();

  var ripple_wrap = $('.ripple-wrap'),
    rippler = $('.ripple'),
    finish = false,
    monitor = function (el) {
      var computed = window.getComputedStyle(el, null),
        borderwidth = parseFloat(computed.getPropertyValue('border-left-width'));
      if (!finish && borderwidth >= 1500) {
        console.log('1')
        el.style.WebkitAnimationPlayState = "paused";
        el.style.animationPlayState = "paused";
        swapContent();
      }
      if (finish) {
        console.log('2')
        el.style.WebkitAnimationPlayState = "running";
        el.style.animationPlayState = "running";
        return;
      } else {
        console.log('3')
        window.requestAnimationFrame(function () { monitor(el) });
      }
    };

  rippler.bind("webkitAnimationEnd oAnimationEnd msAnimationEnd mozAnimationEnd animationend", function (e) {
    ripple_wrap.removeClass('goripple');
  });

  // $('body').on('click', '#content-area', function (e) {
  // document.getElementById('button-1').addEventListener('click', function (e) {
  $("#button-1").click(function (e) {

    console.log('5')

    rippler.css('left', e.clientX + 'px');
    rippler.css('top', e.clientY + 'px');
    e.preventDefault();
    finish = false;
    ripple_wrap.addClass('goripple');
    window.requestAnimationFrame(function () { monitor(rippler[0]) });
  });

  // document.getElementById('home').addEventListener('click', function (e) {
  $("#home").click(function (e) {

    console.log('6')

    rippler.css('left', e.clientX + 'px');
    rippler.css('top', e.clientY + 'px');
    e.preventDefault();
    finish = false;
    ripple_wrap.addClass('goripple');
    window.requestAnimationFrame(function () { monitor(rippler[0]) });
  });



  function swapContent() {

    console.log('6')

    var newcontent = $('#content-1').html();

    $('#content-1').html(storedcontent);

    storedcontent = newcontent;

    // do some Ajax, put it in the DOM and then set this to true

    setTimeout(function () {
      finish = true;
    }, 10);
  }

});