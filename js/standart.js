$(document).ready(function(){
  $("dot").click(function() {
    $('dot[data-list="' + $(this).data("list") + '"]').each(function() {
      $(this).removeClass("active");
    });
    $(this).addClass("active");
    $($("#" + $(this).data("list") + " a")[$(this).data("order")]).tab('show');
  });
  $('.dotlist-a').click(function(){
    $(this).tab('show');
    $('dot[data-list="' + $(this).parent()[0].id + '"]').each(function() {
      $(this).removeClass("active");
    });
    $($('[data-list="' + $(this).parent()[0].id + '"]')[$(this).data("order")]).addClass("active");
  });
  $(".nav-link[data-href]").click(function (){
    $("main").html('<div class="center"><div class="loadingio-spinner-bean-eater-uc7wonlv5n"><div class="ldio-ekm3r3yczkq"><div><div></div><div></div><div></div></div><div><div></div><div></div><div></div></div></div></div></div>');
    var title_name = $(this).data("href");
    $("main").load("/sites/" + $(this).data("href") + ".html", function() {
      window.history.pushState({"html":$("main").html(),"pageTitle":"BBG Sport"},"", "index.html?p=" + title_name);
      $('.nav-link').each(function() {
        $(this).removeClass("active");
      });
      $(this).addClass("active");
      $("main").append('<div id="stage" class="running"><div class="ball-arc"><div class="shadow"></div></div><div class="ball-arc"><div class="ball"><img class="tennis" src="https://cdn1.iconfinder.com/data/icons/ball-1/32/Ball_sport_badminton_shuttle_shuttlecock-512.png"></div></div></div>');
      $('li[data-href]').click(function(){
        $('html, body').animate({
          scrollTop: ($('#' + $(this).data("href")).first().offset().top)
        },500);
      });
    });
  });
  if(getUrlParameter("p") != null && getUrlParameter("p") != "main"){
    $("main").html('<div class="center"><div class="loadingio-spinner-bean-eater-uc7wonlv5n"><div class="ldio-ekm3r3yczkq"><div><div></div><div></div><div></div></div><div><div></div><div></div><div></div></div></div></div></div>');
    var title_name = getUrlParameter("p");
    $("main").load("/sites/" + getUrlParameter("p") + ".html", function() {
      window.history.pushState({"html":$("main").html(),"pageTitle":"BBG Sport"},"", "index.html?p=" + title_name);
      $('.nav-link').each(function() {
        $(this).removeClass("active");
      });
      $(this).addClass("active");
      $("main").append('<div id="stage" class="running"><div class="ball-arc"><div class="shadow"></div></div><div class="ball-arc"><div class="ball"><img class="tennis" src="https://cdn1.iconfinder.com/data/icons/ball-1/32/Ball_sport_badminton_shuttle_shuttlecock-512.png"></div></div></div>');
    });
  }
  $('#stage').addClass('running');

    $('.trigger').click(function() {
        $('#stage').removeClass('running').delay(10).queue(function(next){
            $(this).addClass('running');
            next();
        });
        return false;
    });
    $('li[data-href]').click(function(){
      $('html, body').animate({
        scrollTop: ($('#' + $(this).data("href")).first().offset().top)
      },500);
    });

    setTimeout(andro, 2000);
});

function reload_image(){
  $("dot").click(function() {
    $('dot[data-list="' + $(this).data("list") + '"]').each(function() {
      $(this).removeClass("active");
    });
    $(this).addClass("active");
    $($("#" + $(this).data("list") + " a")[$(this).data("order")]).tab('show');
  });
  $('.dotlist-a').click(function(){
    $(this).tab('show');
    $('dot[data-list="' + $(this).parent()[0].id + '"]').each(function() {
      $(this).removeClass("active");
    });
    $($('[data-list="' + $(this).parent()[0].id + '"]')[$(this).data("order")]).addClass("active");
  });
  $('li[data-href]').click(function(){
    $('html, body').animate({
      scrollTop: ($('#' + $(this).data("href")).first().offset().top)
    },500);
  });
}

function andro(){
  if(getMobileOperatingSystem() == "Android" && getCookie("android") != "true"){
    $('#Android').ready(function(){
      //$('#Android').modal('toggle');
      //document.cookie = "android=true";     // Cookie-Domaine
    });
  }
}

function getCookie(cname) {
  var name = cname + "=";
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(';');
  for(var i = 0; i <ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

var getUrlParameter = function getUrlParameter(sParam) {
    var sPageURL = window.location.search.substring(1),
        sURLVariables = sPageURL.split('&'),
        sParameterName,
        i;

    for (i = 0; i < sURLVariables.length; i++) {
        sParameterName = sURLVariables[i].split('=');

        if (sParameterName[0] === sParam) {
            return sParameterName[1] === undefined ? true : decodeURIComponent(sParameterName[1]);
        }
    }
};
document.addEventListener('DOMContentLoaded', function() {
  $('li[data-href]').click(function(){
    $('html, body').animate({
      scrollTop: ($('#' + $(this).data("href")).first().offset().top)
    },500);
  });
}, false);
function getMobileOperatingSystem() {
  var userAgent = navigator.userAgent || navigator.vendor || window.opera;

      // Windows Phone must come first because its UA also contains "Android"
    if (/windows phone/i.test(userAgent)) {
        return "Windows Phone";
    }

    if (/android/i.test(userAgent)) {
        return "Android";
    }

    // iOS detection from: http://stackoverflow.com/a/9039885/177710
    if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
        return "iOS";
    }

    return "unknown";
}

window.onpopstate = function(e){
  if(e.state){
    $("main").html(e.state.html);
    document.title = e.state.pageTitle
  }
};
