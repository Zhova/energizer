"use strict";
$(window).on("beforeunload", function () {
  $(window).scrollTop(0);
});

window.addEventListener("DOMContentLoaded", preloaderHide, false);
var preloader = $("#preloader");
var mainBgVid = document.getElementById("main-bg-vid");
mainBgVid.pause();

function preloaderHide() {
  window.setTimeout(function () {
    preloader.addClass("preloader-hide");
    preloader.css("opacity", "0");
    setTimeout(function () {
      preloader.css("display", "none");
    }, 500);
    mainBgVid.play();
  }, 4100);
}

$(document).ready(function () {
  new WOW().init();
  // $("#full-page").onepage_scroll();

  // menu scroll to

  $(".nav-list__item a").click(function (e) {
    e.preventDefault();
    let id = $(this).attr("href");
    $("html, body").animate(
      {
        scrollTop: $(id).offset().top,
      },
      "300"
    );
  });

  // mob menu
  $(".burger-wrap").click(function () {
    $(".nav-menu").toggleClass("open-menu");
  });

  // scroll to ---

  $(".btn-footer").click(function () {
    setTimeout(() => {
      var id = $(this).data().toid,
        top = $(id).offset().top;

      $("body,html").animate(
        {
          scrollTop: top,
        },
        1000
      );

      $("body").scroll(toId);
    }, 300);
  });

  // sliders init
  $(".second-slider").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    dots: true,
  });

  // block specifications
  var $commonInfo = $(".info-common");
  var $mainInfo = $(".main-info");
  var $subInfo = $(".sub-info");
  var $commonToggle = $(".common-toggle");
  var $mainToggle = $(".main-toggle");
  var $subToggle = $(".sub-toggle");
  var $itemHead = $(".item-head");
  var $itemBtn = $(".item-head__btn");
  var $commonSize = $(".sizes-common");
  var $mainSize = $(".specifications-main");
  var $subSize = $(".specifications-sub");
  $commonToggle.click(function () {
    $commonInfo.removeClass("info-open");
    $commonToggle.removeClass("active-toggle");
    $(this).addClass("active-toggle");
    $commonSize.removeClass("active-size");

    if ($(this).hasClass("main-toggle")) {
      $mainInfo.addClass("info-open");
      $mainSize.addClass("active-size");
    } else {
      $subInfo.addClass("info-open");
      $subSize.addClass("active-size");
    }
  });
  $(".item-text").slideUp(500);

  $itemHead.click(function () {
    $(this).next().slideToggle(500);
    $itemHead.not(this).next().slideUp(500);
    $itemHead.not(this).find($itemBtn).removeClass("btn-close");
    $(this).find($itemBtn).toggleClass("btn-close");
  });

  $commonSize.click(function () {
    if ($(this).hasClass("specifications-main")) {
      $mainToggle.trigger("click");
    } else {
      $subToggle.trigger("click");
    }
  });
  $mainToggle.trigger("click");
  $itemHead[0].click();

  if ($(window).width() < 1199) {
    var $specTitle = $(".specifications-head__title");
    var $specContent = $(".specifications-content");
    $specContent.prepend($specTitle);
  }

  // animation (presentation)

  const sunAnim =
    '<div class="presentation-animation-inner__sun"><svg id="first-anim" width="608" height="537" viewBox="0 0 608 537" fill="none" xmlns="http://www.w3.org/2000/svg" class="" style=""> <g class="start"> <path d="M73.9725 111.801C94.8644 111.801 111.801 94.8648 111.801 73.973C111.801 53.0812 94.8644 36.145 73.9725 36.145C53.0807 36.145 36.1445 53.0812 36.1445 73.973C36.1445 94.8648 53.0807 111.801 73.9725 111.801Z" stroke="#D3D3D3" stroke-width="2" stroke-miterlimit="10" /> <path d="M73.9727 128.16V147.948" stroke="#D3D3D3" stroke-width="2" stroke-miterlimit="10" /> <path d="M73.9727 0V19.788" stroke="#D3D3D3" stroke-width="2" stroke-miterlimit="10" /> <path d="M101.066 120.899L110.96 138.035" stroke="#D3D3D3" stroke-width="2" stroke-miterlimit="10" /> <path d="M36.9883 9.91016L46.8823 27.0462" stroke="#D3D3D3" stroke-width="2" stroke-miterlimit="10" /> <path d="M120.898 101.067L138.034 110.961" stroke="#D3D3D3" stroke-width="2" stroke-miterlimit="10" /> <path d="M9.91016 36.9868L27.0462 46.8808" stroke="#D3D3D3" stroke-width="2" stroke-miterlimit="10" /> <path d="M128.16 73.9731H147.948" stroke="#D3D3D3" stroke-width="2" stroke-miterlimit="10" /> <path d="M0 73.9731H19.788" stroke="#D3D3D3" stroke-width="2" stroke-miterlimit="10" /> <path d="M120.898 46.8808L138.034 36.9868" stroke="#D3D3D3" stroke-width="2" stroke-miterlimit="10" /> <path d="M9.91016 110.961L27.0462 101.067" stroke="#D3D3D3" stroke-width="2" stroke-miterlimit="10" /> <path d="M101.066 27.0462L110.96 9.91016" stroke="#D3D3D3" stroke-width="2" stroke-miterlimit="10" /> <path d="M36.9883 138.035L46.8823 120.899" stroke="#D3D3D3" stroke-width="2" stroke-miterlimit="10" /> </g> <g class="start"> <path d="M295.216 422.859L299.357 427L295.249 431.108" stroke="#3EB1C8" stroke-width="2" stroke-miterlimit="10" class="BEIuDoEn_4"></path><path d="M285.322 285.439H138.622C119.858 285.439 101.862 292.893 88.5943 306.161C75.3261 319.429 67.8721 337.425 67.8721 356.189C67.8721 365.48 69.7021 374.68 73.2576 383.264C76.8131 391.848 82.0246 399.647 88.5943 406.217C95.164 412.787 102.963 417.998 111.547 421.553C120.131 425.109 129.331 426.939 138.622 426.939H298" stroke="#3EB1C8" stroke-width="2" stroke-miterlimit="10" class="BEIuDoEn_5"></path><path d="M285.322 285.439H138.622C119.858 285.439 101.862 292.893 88.5943 306.161C75.3261 319.429 67.8721 337.425 67.8721 356.189C67.8721 365.48 69.7021 374.68 73.2576 383.264C76.8131 391.848 82.0246 399.647 88.5943 406.217C95.164 412.787 102.963 417.998 111.547 421.553C120.131 425.109 129.331 426.939 138.622 426.939H298" stroke="#121212" stroke-width="4" stroke-miterlimit="10" stroke-dasharray="3 10"></path> </g><g class="start"> <path fill-rule="evenodd" clip-rule="evenodd" d="M460.141 289.577L505.141 354.717V522.856H415.149V354.719L460.149 289.578L460.141 289.577Z" fill="#121212" stroke="#D3D3D3" stroke-miterlimit="10"/><path fill-rule="evenodd" clip-rule="evenodd" d="M399.206 349.748H178.267C178.186 349.748 178.138 349.657 178.184 349.591L250.544 244.839H471.482C471.563 244.839 471.61 244.929 471.565 244.996L399.206 349.748Z" fill="transparent" stroke="#D3D3D3" stroke-width="2" stroke-miterlimit="10"/> <path fill-rule="evenodd" clip-rule="evenodd" d="M415.146 354.72L471.673 272.884L528.202 354.719V522.856H544.141V349.749L471.755 244.957C471.716 244.899 471.631 244.899 471.591 244.957L399.206 349.749V522.856H415.146V354.72Z" fill="#121212" stroke="#D3D3D3" stroke-width="2" stroke-miterlimit="10"/> <path fill-rule="evenodd" clip-rule="evenodd" d="M528.202 354.718H505.138V522.855H528.202V354.718Z" fill="#121212" stroke="#D3D3D3" stroke-miterlimit="10"/> <path fill-rule="evenodd" clip-rule="evenodd" d="M283.716 522.856H239.668V446.139H283.716V522.856Z" fill="#121212" stroke="#D3D3D3" stroke-width="2" stroke-miterlimit="10"/> <path fill-rule="evenodd" clip-rule="evenodd" d="M283.716 522.856H247.445V446.139H283.718V522.856H283.716Z" fill="#121212" stroke="#D3D3D3" stroke-miterlimit="10"/> <path fill-rule="evenodd" clip-rule="evenodd" d="M461.482 522.857H148.263V535.695H461.482V522.857Z" fill="#121212" stroke="#D3D3D3" stroke-width="2" stroke-miterlimit="10"/><path fill-rule="evenodd" clip-rule="evenodd" d="M399.13 350.1C399.13 350.045 399.085 350 399.03 350H178.1C178.045 350 178 350.045 178 350.1V374.187C178 374.242 178.045 374.287 178.1 374.287H253.231C253.286 374.287 253.331 374.332 253.331 374.387L253.219 398.473C253.219 398.529 253.175 398.573 253.119 398.573H178.1C178.045 398.573 178 398.618 178 398.673V523.009C178 523.064 178.045 523.109 178.1 523.109H399.03C399.085 523.109 399.13 523.064 399.13 523.009V350.1Z" fill="transparent" stroke="#D3D3D3" stroke-width="2" stroke-miterlimit="10"/> <path fill-rule="evenodd" clip-rule="evenodd" d="M283.824 398.55H275.305V383.631H185.851V374.3H283.718L283.825 398.55H283.824Z" fill="#121212" stroke="#D3D3D3" stroke-miterlimit="10"/> <path fill-rule="evenodd" clip-rule="evenodd" d="M283.823 398.55H185.853V374.301H283.823V398.55Z" fill="#121212" stroke="#D3D3D3" stroke-width="2" stroke-miterlimit="10"/><path fill-rule="evenodd" clip-rule="evenodd" d="M606.417 522.856H461.483V535.695H606.417V522.856Z" fill="#121212" stroke="#D3D3D3" stroke-width="2" stroke-miterlimit="10"/> <path fill-rule="evenodd" clip-rule="evenodd" d="M269.23 244.839C245.074 279.808 220.918 314.778 196.762 349.749L269.23 244.839Z" fill="#121212"/> <path d="M269.23 244.839C245.074 279.808 220.918 314.778 196.762 349.749" stroke="#D3D3D3" stroke-miterlimit="10"/> <path fill-rule="evenodd" clip-rule="evenodd" d="M289.57 244.839C265.414 279.808 241.258 314.778 217.102 349.749L289.57 244.839Z" fill="#121212"/> <path d="M289.57 244.839C265.414 279.808 241.258 314.778 217.102 349.749" stroke="#D3D3D3" stroke-miterlimit="10"/> <path fill-rule="evenodd" clip-rule="evenodd" d="M309.91 244.839C285.754 279.808 261.598 314.778 237.442 349.749L309.91 244.839Z" fill="#121212"/> <path d="M309.91 244.839C285.754 279.808 261.598 314.778 237.442 349.749" stroke="#D3D3D3" stroke-miterlimit="10"/> <path fill-rule="evenodd" clip-rule="evenodd" d="M330.25 244.839C306.094 279.808 281.938 314.778 257.782 349.749L330.25 244.839Z" fill="#121212"/> <path d="M330.25 244.839C306.094 279.808 281.938 314.778 257.782 349.749" stroke="#D3D3D3" stroke-miterlimit="10"/> <path fill-rule="evenodd" clip-rule="evenodd" d="M350.59 244.839C326.434 279.808 302.278 314.778 278.122 349.749L350.59 244.839Z" fill="#121212"/> <path d="M350.59 244.839C326.434 279.808 302.278 314.778 278.122 349.749" stroke="#D3D3D3" stroke-miterlimit="10"/> <path fill-rule="evenodd" clip-rule="evenodd" d="M370.929 244.839C346.773 279.808 322.617 314.778 298.461 349.749L370.929 244.839Z" fill="#121212"/> <path d="M370.929 244.839C346.773 279.808 322.617 314.778 298.461 349.749" stroke="#D3D3D3" stroke-miterlimit="10"/> <path fill-rule="evenodd" clip-rule="evenodd" d="M391.268 244.839C367.111 279.808 342.955 314.778 318.8 349.749L391.268 244.839Z" fill="#121212"/> <path d="M391.268 244.839C367.111 279.808 342.955 314.778 318.8 349.749" stroke="#D3D3D3" stroke-miterlimit="10"/> <path fill-rule="evenodd" clip-rule="evenodd" d="M411.609 244.839C387.453 279.808 363.297 314.778 339.141 349.749L411.609 244.839Z" fill="#121212"/> <path d="M411.609 244.839C387.453 279.808 363.297 314.778 339.141 349.749" stroke="#D3D3D3" stroke-miterlimit="10"/> <path fill-rule="evenodd" clip-rule="evenodd" d="M431.949 244.839C407.793 279.808 383.637 314.778 359.481 349.749L431.949 244.839Z" fill="#121212"/> <path d="M431.949 244.839C407.793 279.808 383.637 314.778 359.481 349.749" stroke="#D3D3D3" stroke-miterlimit="10"/> <path fill-rule="evenodd" clip-rule="evenodd" d="M452.288 244.839C428.132 279.808 403.976 314.778 379.82 349.749L452.288 244.839Z" fill="#121212"/> <path d="M452.288 244.839C428.132 279.808 403.976 314.778 379.82 349.749" stroke="#D3D3D3" stroke-miterlimit="10"/><path fill-rule="evenodd" clip-rule="evenodd" d="M415.146 450.728H424.292V522.853H428.885V450.728H468.335V522.853H472.928V450.728H500.545V522.853H505.138V354.719L460.138 289.579L457.347 293.62L468.331 309.52V398.32H428.881V334.828L424.288 341.477V398.32H415.142V402.913H424.288V446.138H415.142V450.73L415.146 450.728ZM500.546 446.136H472.929V402.911H500.546V446.136ZM500.546 398.318H472.929V316.166L500.546 356.147V398.318ZM468.336 446.136H428.886V402.911H468.336V446.136Z" fill="transparent" stroke="#D3D3D3" stroke-miterlimit="10"/> </g> <g class="start"><path fill-rule="evenodd" clip-rule="evenodd" d="M331.79 488.12L336.29 492.62H375.25V398.54L369.88 393.17" fill="#121212"/> <path d="M331.79 488.12L336.29 492.62H375.25V398.142" stroke="#3EB1C8" stroke-width="2" stroke-miterlimit="10"/> <path fill-rule="evenodd" clip-rule="evenodd" d="M313.5 488.12L318 492.62H336" fill="#121212"/> <path d="M318 492.62H336" stroke="#3EB1C8" stroke-width="2" stroke-miterlimit="10"/> <path d="M369.88 393.95H331.79V488.12H369.88V393.95Z" fill="#121212" stroke="#3EB1C8" stroke-width="2" stroke-miterlimit="10"/> <path d="M331.57 393.95H313.25V488.12H331.57V393.95Z" fill="#121212" stroke="#3EB1C8" stroke-width="2" stroke-miterlimit="10"/> <path d="M369.88 452.81H313.25" stroke="#3EB1C8" stroke-width="2" stroke-miterlimit="10"/> <path d="M369.88 431.62H313.25" stroke="#3EB1C8" stroke-width="2" stroke-miterlimit="10"/> <path fill-rule="evenodd" clip-rule="evenodd" d="M374.84 399.55L369.47 394.36L370.88 392.95L376.26 398.13L374.84 399.55Z" fill="#3EB1C8"/> <path d="M318.02 493.62L312.25 489.11L313.66 487.7L319.44 492.2L318.02 493.62Z" fill="#3EB1C8"/><path class="batary" fill-rule="evenodd" clip-rule="evenodd" d="M331.79 488.12L336.29 492.62H375.25V398.54L369.88 393.17" fill="#121212"/> <path class="batary" d="M331.79 488.12L336.29 492.62H375.25V398.142" stroke="#D3D3D3" stroke-width="2" stroke-miterlimit="10"/> <path class="batary" fill-rule="evenodd" clip-rule="evenodd" d="M313.5 488.12L318 492.62H336" fill="#121212"/> <path class="batary" d="M318 492.62H336" stroke="#D3D3D3" stroke-width="2" stroke-miterlimit="10"/> <path class="batary" d="M369.88 393.95H331.79V488.12H369.88V393.95Z" fill="#121212" stroke="#D3D3D3" stroke-width="2" stroke-miterlimit="10"/> <path class="batary" d="M331.57 393.95H313.25V488.12H331.57V393.95Z" fill="#121212" stroke="#D3D3D3" stroke-width="2" stroke-miterlimit="10"/> <path class="batary" d="M369.88 452.81H313.25" stroke="#D3D3D3" stroke-width="2" stroke-miterlimit="10"/> <path class="batary" d="M369.88 431.62H313.25" stroke="#D3D3D3" stroke-width="2" stroke-miterlimit="10"/> <path class="batary" fill-rule="evenodd" clip-rule="evenodd" d="M374.84 399.55L369.47 394.36L370.88 392.95L376.26 398.13L374.84 399.55Z" fill="#D3D3D3"/> <path class="batary" d="M318.02 493.62L312.25 489.11L313.66 487.7L319.44 492.2L318.02 493.62Z" fill="#D3D3D3"/> </g><g class="lines-block start"> <path fill-rule="evenodd" clip-rule="evenodd" d="M325.281 253.287H304.47L247.948 335.05C247.902 335.117 247.95 335.207 248.031 335.207L365.623 335.215L385.768 335.207L442.289 253.444C442.335 253.378 442.288 253.287 442.207 253.287H325.281Z" fill="#121212" stroke="#3EB1C8" stroke-width="2" stroke-miterlimit="10"/><path fill-rule="evenodd" clip-rule="evenodd" d="M445.564 262.392L442.46 253.472C442.433 253.395 442.33 253.381 442.284 253.448L385.766 335.206L388.869 344.128C388.896 344.205 388.999 344.219 389.046 344.152L445.564 262.392Z" fill="#121212" stroke="#D3D3D3" stroke-width="2" stroke-miterlimit="10"/> <path fill-rule="evenodd" clip-rule="evenodd" d="M385.766 335.206L247.977 335.255C247.908 335.255 247.86 335.323 247.882 335.388L251.004 344.363L388.793 344.313C388.862 344.313 388.91 344.245 388.888 344.18L385.766 335.206Z" fill="#121212" stroke="#D3D3D3" stroke-width="2" stroke-miterlimit="10"/><path id="panel-white" fill-rule="evenodd" clip-rule="evenodd" d="M442.389 253.296L442.301 253.301L435.068 253.286L435.062 253.294L325.278 253.287H304.468L303.637 254.536L278.322 291.158H278.207L275.352 295.458L252.142 329.031L252.242 328.887L247.844 335.197C247.84 335.203 247.844 335.211 247.851 335.211C247.858 335.211 247.862 335.219 247.858 335.225L247.85 335.237C247.842 335.247 247.85 335.262 247.863 335.262H255.162L255.194 335.215H291.387L291.365 335.246H298.696L298.715 335.218H334.908L334.899 335.231H342.229L342.236 335.221H365.617H385.762L390.029 329.041L411.936 297.351H412.024C413.446 295.291 414.868 293.231 416.291 291.17H416.208L438.33 259.416L438.285 259.481L442.459 253.435C442.499 253.377 442.459 253.298 442.389 253.296ZM387.268 259.473L365.362 291.162H343.927H329.169L337.788 278.694L351.075 259.473H387.268ZM307.554 259.467H328.321H343.753L334.744 272.499L321.844 291.156H285.65L307.554 259.467ZM295.662 329.028H259.469L281.376 297.338H317.57L295.662 329.028ZM339.182 329.028H302.989L324.896 297.339H361.089L352.844 309.266L339.182 329.028ZM382.702 329.028H346.509L355.892 315.456L368.416 297.338H404.609L382.702 329.028ZM408.881 291.158H372.688L394.594 259.469H430.788L408.881 291.158Z" fill="#121212" stroke-width="2" stroke-miterlimit="10"/><path class="blue-path" fill-rule="evenodd" clip-rule="evenodd" d="M445.564 262.392L442.46 253.472C442.433 253.395 442.33 253.381 442.284 253.448L385.766 335.206L388.869 344.128C388.896 344.205 388.999 344.219 389.046 344.152L445.564 262.392Z" fill="#121212" stroke="#3EB1C8" stroke-width="2" stroke-miterlimit="10"/> <path class="blue-path" fill-rule="evenodd" clip-rule="evenodd" d="M385.766 335.206L247.977 335.255C247.908 335.255 247.86 335.323 247.882 335.388L251.004 344.363L388.793 344.313C388.862 344.313 388.91 344.245 388.888 344.18L385.766 335.206Z" fill="#121212" stroke="#3EB1C8" stroke-width="2" stroke-miterlimit="10"/><path id="panel-blue" class="blue-path" fill-rule="evenodd" clip-rule="evenodd" d="M442.389 253.296L442.301 253.301L435.068 253.286L435.062 253.294L325.278 253.287H304.468L303.637 254.536L278.322 291.158H278.207L275.352 295.458L252.142 329.031L252.242 328.887L247.844 335.197C247.84 335.203 247.844 335.211 247.851 335.211C247.858 335.211 247.862 335.219 247.858 335.225L247.85 335.237C247.842 335.247 247.85 335.262 247.863 335.262H255.162L255.194 335.215H291.387L291.365 335.246H298.696L298.715 335.218H334.908L334.899 335.231H342.229L342.236 335.221H365.617H385.762L390.029 329.041L411.936 297.351H412.024C413.446 295.291 414.868 293.231 416.291 291.17H416.208L438.33 259.416L438.285 259.481L442.459 253.435C442.499 253.377 442.459 253.298 442.389 253.296ZM387.268 259.473L365.362 291.162H343.927H329.169L337.788 278.694L351.075 259.473H387.268ZM307.554 259.467H328.321H343.753L334.744 272.499L321.844 291.156H285.65L307.554 259.467ZM295.662 329.028H259.469L281.376 297.338H317.57L295.662 329.028ZM339.182 329.028H302.989L324.896 297.339H361.089L352.844 309.266L339.182 329.028ZM382.702 329.028H346.509L355.892 315.456L368.416 297.338H404.609L382.702 329.028ZM408.881 291.158H372.688L394.594 259.469H430.788L408.881 291.158Z" fill="#121212" stroke="#3EB1C8" stroke-width="2" stroke-miterlimit="10"/><path d="M161 119L405 269.5" stroke="#3EB1C8" stroke-width="2" class="vSjtVOPI_0"></path> <path d="M153 132L355.5 278.5" stroke="#3EB1C8" stroke-width="2" class="vSjtVOPI_0"></path> <path d="M143.09 143.861L331 312" stroke="#3EB1C8" stroke-width="2" class="vSjtVOPI_0"></path> <path d="M134 155L281.5 312" stroke="#3EB1C8" stroke-width="2" class="vSjtVOPI_0"></path> </g><style data-made-with="vivus-instant">svg{background:#121212}.start .blue-path{animation:blue-panel linear 5s infinite}.start .batary{animation:batary linear 5s infinite}.start #panel-white{stroke:#D3D3D3}.start .vSjtVOPI_0{stroke-dasharray:287 289;stroke-dashoffset:288;animation:vSjtVOPI_draw_0 5s linear infinite}.start .BEIuDoEn_4{stroke-dasharray:12 14;animation:BEIuDoEn_draw_4 5s linear infinite}.start .BEIuDoEn_5{stroke-dasharray:531 533;stroke-dashoffset:532;animation:BEIuDoEn_draw_5 5s linear infinite}@keyframes vSjtVOPI_draw_0{0%{opacity:0}0.1%{opacity:1}1%{stroke-dashoffset:288}50%{stroke-dashoffset:-288;opacity:1}51%{opacity:0}100%{opacity:0}}@keyframes blue-panel{0%{opacity:0}50%{opacity:1}100%{opacity:0}}@keyframes batary{0%{opacity:1}50%{opacity:1}100%{opacity:0}}@keyframes BEIuDoEn_draw_4{0%{opacity:0}75%{opacity:0}80%{opacity:1}100%{opacity:1}}@keyframes BEIuDoEn_draw_5{30%{stroke-dashoffset:532}100%{stroke-dashoffset:-532}}</style></svg></div>';

  const moonAnim =
    '<div class="presentation-animation-inner__moon"><svg id="second-anim" width="574" height="508" viewBox="0 0 574 508" fill="none" xmlns="http://www.w3.org/2000/svg" ><g class="start"><path d="M412.84 438.727L408.699 442.868L412.806 446.976" stroke="#3EB1C8" stroke-width="2" stroke-miterlimit="10" class="ceQscdcF_0"></path> <path d="M347.988 393.381L452.609 390.561C459.594 390.561 466.292 393.336 471.231 398.274C476.17 403.213 478.944 409.912 478.944 416.896V416.896C478.945 420.355 478.264 423.779 476.94 426.975C475.617 430.17 473.677 433.074 471.232 435.52C468.787 437.965 465.883 439.905 462.688 441.229C459.493 442.553 456.068 443.234 452.609 443.234H409.89" stroke="#3EB1C8" stroke-width="2" stroke-miterlimit="10" stroke-dasharray="7 8" class="ceQscdcF_1"></path> <path d="M347.988 393.381L452.609 390.561C459.594 390.561 466.292 393.336 471.231 398.274C476.17 403.213 478.944 409.912 478.944 416.896V416.896C478.945 420.355 478.264 423.779 476.94 426.975C475.617 430.17 473.677 433.074 471.232 435.52C468.787 437.965 465.883 439.905 462.688 441.229C459.493 442.553 456.068 443.234 452.609 443.234H409.89" stroke="#121212" stroke-width="3" stroke-miterlimit="10" stroke-dasharray="2 11"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M426.946 261.17L471.946 326.31V494.449H381.954V326.312L426.954 261.172L426.946 261.17Z" fill="transparent" stroke="#D3D3D3" stroke-miterlimit="10"/> <path fill-rule="evenodd" clip-rule="evenodd" d="M366.012 321.343H144.982C144.927 321.343 144.882 321.388 144.882 321.443V345.63H220.213L220.101 369.916H144.882V494.452H366.012V321.343Z" fill="transparent" stroke="#D3D3D3" stroke-width="2" stroke-miterlimit="10"/> <path fill-rule="evenodd" clip-rule="evenodd" d="M366.012 321.342H145.073C144.992 321.342 144.945 321.251 144.991 321.185L217.321 216.476C217.339 216.449 217.37 216.433 217.403 216.433H438.289C438.369 216.433 438.417 216.523 438.371 216.589L366.012 321.342Z" fill="#121212" stroke="#D3D3D3" stroke-width="2" stroke-miterlimit="10"/> <path fill-rule="evenodd" clip-rule="evenodd" d="M495.007 326.312H471.943V494.448H495.007V326.312Z" fill="transparent" stroke="#D3D3D3" stroke-miterlimit="10"/> <path fill-rule="evenodd" clip-rule="evenodd" d="M250.522 494.449H206.474V417.732H250.522V494.449Z" fill="#121212" stroke="#D3D3D3" stroke-width="2" stroke-miterlimit="10"/> <path fill-rule="evenodd" clip-rule="evenodd" d="M250.522 494.449H214.251V417.732H250.524V494.449H250.522Z" fill="#121212" stroke="#D3D3D3" stroke-miterlimit="10"/> <path fill-rule="evenodd" clip-rule="evenodd" d="M250.629 369.914H152.659V345.628H250.629V369.914Z" fill="#121212" stroke="#D3D3D3" stroke-width="2" stroke-miterlimit="10"/> <path fill-rule="evenodd" clip-rule="evenodd" d="M428.287 494.451H115.069V507.289H428.287V494.451Z" fill="#121212" stroke="#D3D3D3" stroke-width="2" stroke-miterlimit="10"/> <path fill-rule="evenodd" clip-rule="evenodd" d="M250.631 369.914H242.112V354.973H152.658V345.627H250.524L250.631 369.914Z" fill="#121212" stroke="#D3D3D3" stroke-miterlimit="10"/> <path fill-rule="evenodd" clip-rule="evenodd" d="M573.222 494.45H428.288V507.289H573.222V494.45Z" fill="#121212" stroke="#D3D3D3" stroke-width="2" stroke-miterlimit="10"/> <path fill-rule="evenodd" clip-rule="evenodd" d="M236.036 216.433C211.88 251.402 187.724 286.372 163.568 321.343L236.036 216.433Z" fill="#121212"/> <path d="M236.036 216.433C211.88 251.402 187.724 286.372 163.568 321.343" stroke="#D3D3D3" stroke-miterlimit="10"/> <path fill-rule="evenodd" clip-rule="evenodd" d="M256.375 216.433C232.219 251.402 208.063 286.372 183.907 321.343L256.375 216.433Z" fill="#121212"/> <path d="M256.375 216.433C232.219 251.402 208.063 286.372 183.907 321.343" stroke="#D3D3D3" stroke-miterlimit="10"/> <path fill-rule="evenodd" clip-rule="evenodd" d="M276.715 216.433C252.559 251.402 228.403 286.372 204.247 321.343L276.715 216.433Z" fill="#121212"/> <path d="M276.715 216.433C252.559 251.402 228.403 286.372 204.247 321.343" stroke="#D3D3D3" stroke-miterlimit="10"/> <path fill-rule="evenodd" clip-rule="evenodd" d="M297.055 216.433C272.899 251.402 248.743 286.372 224.588 321.343L297.055 216.433Z" fill="#121212"/> <path d="M297.055 216.433C272.899 251.402 248.743 286.372 224.588 321.343" stroke="#D3D3D3" stroke-miterlimit="10"/> <path fill-rule="evenodd" clip-rule="evenodd" d="M317.395 216.433C293.239 251.402 269.083 286.372 244.927 321.343L317.395 216.433Z" fill="#121212"/> <path d="M317.395 216.433C293.239 251.402 269.083 286.372 244.927 321.343" stroke="#D3D3D3" stroke-miterlimit="10"/> <path fill-rule="evenodd" clip-rule="evenodd" d="M337.735 216.433C313.579 251.402 289.423 286.372 265.267 321.343L337.735 216.433Z" fill="#121212"/> <path d="M337.735 216.433C313.579 251.402 289.423 286.372 265.267 321.343" stroke="#D3D3D3" stroke-miterlimit="10"/> <path fill-rule="evenodd" clip-rule="evenodd" d="M358.074 216.433C333.918 251.402 309.762 286.372 285.606 321.343L358.074 216.433Z" fill="#121212"/> <path d="M358.074 216.433C333.918 251.402 309.762 286.372 285.606 321.343" stroke="#D3D3D3" stroke-miterlimit="10"/> <path fill-rule="evenodd" clip-rule="evenodd" d="M378.414 216.433C354.258 251.402 330.102 286.372 305.946 321.343L378.414 216.433Z" fill="#121212"/> <path d="M378.414 216.433C354.258 251.402 330.102 286.372 305.946 321.343" stroke="#D3D3D3" stroke-miterlimit="10"/> <path fill-rule="evenodd" clip-rule="evenodd" d="M398.754 216.433C374.598 251.402 350.442 286.372 326.286 321.343L398.754 216.433Z" fill="#121212"/> <path d="M398.754 216.433C374.598 251.402 350.442 286.372 326.286 321.343" stroke="#D3D3D3" stroke-miterlimit="10"/> <path fill-rule="evenodd" clip-rule="evenodd" d="M419.094 216.433C394.938 251.402 370.783 286.372 346.627 321.343L419.094 216.433Z" fill="#121212"/> <path d="M419.094 216.433C394.938 251.402 370.783 286.372 346.627 321.343" stroke="#D3D3D3" stroke-miterlimit="10"/> <path fill-rule="evenodd" clip-rule="evenodd" d="M412.082 234.064L408.979 225.145C408.952 225.067 408.848 225.053 408.802 225.12L352.284 306.878L355.387 315.8C355.414 315.878 355.517 315.892 355.564 315.824L412.082 234.064Z" fill="#121212" stroke="#D3D3D3" stroke-width="2" stroke-miterlimit="10"/> <path fill-rule="evenodd" clip-rule="evenodd" d="M352.284 306.878L214.495 306.927C214.426 306.927 214.378 306.995 214.4 307.06L217.522 316.035L355.312 315.985C355.38 315.985 355.429 315.918 355.406 315.853L352.284 306.878Z" fill="#121212" stroke="#D3D3D3" stroke-width="2" stroke-miterlimit="10"/> <path fill-rule="evenodd" clip-rule="evenodd" d="M291.799 224.959H270.988L214.467 306.723C214.421 306.789 214.468 306.88 214.549 306.88L332.141 306.887L352.286 306.88L408.808 225.116C408.854 225.05 408.806 224.959 408.725 224.959H291.799Z" fill="#121212" stroke="#D3D3D3" stroke-width="2" stroke-miterlimit="10"/> <path fill-rule="evenodd" clip-rule="evenodd" d="M408.907 224.969L408.819 224.974L401.586 224.958L401.58 224.966L291.796 224.959H270.986L270.155 226.208L244.84 262.83H244.725L241.87 267.13L218.66 300.703L218.688 300.664L214.362 306.87C214.358 306.876 214.362 306.883 214.369 306.883V306.883C214.376 306.883 214.38 306.891 214.376 306.897L214.368 306.909C214.36 306.92 214.368 306.934 214.381 306.934H221.68L221.712 306.887H257.905L257.883 306.918H265.214L265.233 306.891H301.426L301.417 306.903H308.747L308.754 306.893H332.135H352.28L356.547 300.714L378.454 269.023H378.542C379.964 266.963 381.387 264.903 382.809 262.842H382.726L404.819 231.131L404.803 231.153L408.978 225.108C409.018 225.05 408.978 224.971 408.907 224.969V224.969ZM353.786 231.146L331.88 262.834H310.445H295.687L304.306 250.366L317.593 231.146H353.786ZM274.072 231.139H294.839H310.271L301.262 244.172L288.362 262.828H252.168L274.072 231.139ZM262.18 300.7H225.987L247.894 269.01H284.088L262.18 300.7ZM305.7 300.7H269.507L291.414 269.011H327.607L319.362 280.938L305.7 300.7ZM349.22 300.7H313.027L322.41 287.128L334.934 269.01H371.127L349.22 300.7ZM375.399 262.83H339.206L361.112 231.141H397.306L375.399 262.83Z" fill="#121212" stroke="#D3D3D3" stroke-width="2" stroke-miterlimit="10"/> <path fill-rule="evenodd" clip-rule="evenodd" d="M381.952 326.314L438.479 244.478L495.008 326.313V494.45H510.947V321.343L438.562 216.551C438.522 216.493 438.437 216.493 438.397 216.551L366.012 321.343V494.45H381.952V326.314Z" fill="transparent" stroke="#D3D3D3" stroke-width="2" stroke-miterlimit="10"/><path d="M91.0803 111.426C99.5565 108.015 107.018 102.49 112.753 95.3777C101.643 98.1911 89.8895 96.8848 79.6683 91.7004C69.4471 86.5161 61.45 77.8047 57.1567 67.1785C52.8634 56.5523 52.5647 44.7305 56.3158 33.901C60.067 23.0715 67.614 13.9674 77.5602 8.27345C69.4173 7.26456 61.1515 8.13384 53.3965 10.8146C45.6416 13.4954 38.6036 17.9165 32.8221 23.7389C27.0407 29.5613 22.6694 36.6304 20.0434 44.404C17.4174 52.1777 16.6064 60.4495 17.6728 68.5851C18.7391 76.7207 21.6544 84.5041 26.195 91.3384C30.7357 98.1728 36.7811 103.877 43.8677 108.012C50.9544 112.148 58.894 114.606 67.0779 115.198C75.2617 115.79 83.4724 114.499 91.0803 111.426Z" fill="#121212" stroke="white" stroke-miterlimit="10"/> <path d="M90.7285 110.467C99.2047 107.057 106.666 101.532 112.401 94.4192C101.291 97.2326 89.5376 95.9263 79.3165 90.7419C69.0953 85.5576 61.0981 76.8463 56.8049 66.22C52.5116 55.5938 52.2129 43.772 55.964 32.9425C59.7151 22.113 67.2622 13.0089 77.2084 7.31495C69.0655 6.30607 60.7996 7.17535 53.0447 9.85614C45.2898 12.5369 38.2518 16.958 32.4703 22.7804C26.6889 28.6028 22.3176 35.6719 19.6916 43.4455C17.0656 51.2192 16.2546 59.491 17.321 67.6266C18.3873 75.7622 21.3025 83.5456 25.8432 90.3799C30.3838 97.2143 36.4293 102.918 43.5159 107.054C50.6026 111.19 58.5422 113.648 66.7261 114.239C74.9099 114.831 83.1206 113.541 90.7285 110.467V110.467Z" fill="#121212" stroke="white" stroke-miterlimit="10" ></path><path id="home-inner" fill-rule="evenodd" clip-rule="evenodd" d="M381.952 422.322H391.098V494.447H395.691V422.322H435.141V494.447H439.734V422.322H467.352V494.447H471.945V326.313L426.945 261.173L424.154 265.214L435.138 281.114V369.914H395.688V306.422L391.095 313.071V369.914H381.949V374.507H391.095V417.732H381.949V422.324L381.952 422.322ZM467.352 417.73H439.734V374.505H467.352V417.73ZM467.352 369.912H439.734V287.76L467.352 327.741V369.912ZM435.142 417.73H395.692V374.505H435.142V417.73Z" fill="#121212" stroke-miterlimit="10"/><path fill-rule="evenodd" clip-rule="evenodd" d="M297.79 459.12L302.29 463.62H341.25V369.54L335.88 364.17" fill="#121212"/> <path fill-rule="evenodd" clip-rule="evenodd" d="M279.5 459.12L284 463.62H302" fill="#121212"/><path d="M297.79 459.12L302.29 463.62H341.25V369.142" stroke="#3EB1C8" stroke-width="2" stroke-miterlimit="10"/> <path d="M284 463.62H302" stroke="#3EB1C8" stroke-width="2" stroke-miterlimit="10"/> <path d="M335.88 364.95H297.79V459.12H335.88V364.95Z" fill="#121212" stroke="#3EB1C8" stroke-width="2" stroke-miterlimit="10"/> <path d="M297.57 364.95H279.25V459.12H297.57V364.95Z" fill="#121212" stroke="#3EB1C8" stroke-width="2" stroke-miterlimit="10"/> <path d="M335.88 423.81H279.25" stroke="#3EB1C8" stroke-width="2" stroke-miterlimit="10"/> <path d="M335.88 402.62H279.25" stroke="#3EB1C8" stroke-width="2" stroke-miterlimit="10"/> <path fill-rule="evenodd" clip-rule="evenodd" d="M340.84 370.55L335.47 365.36L336.88 363.95L342.26 369.13L340.84 370.55Z" fill="#3EB1C8"/> <path d="M284.02 464.62L278.25 460.11L279.66 458.7L285.44 463.2L284.02 464.62Z" fill="#3EB1C8"/><path class="batary" d="M297.79 459.12L302.29 463.62H341.25V369.142" stroke="#fff" stroke-width="2" stroke-miterlimit="10"/> <path class="batary" d="M284 463.62H302" stroke="#fff" stroke-width="2" stroke-miterlimit="10"/> <path class="batary" d="M335.88 364.95H297.79V459.12H335.88V364.95Z" fill="#121212" stroke="#fff" stroke-width="2" stroke-miterlimit="10"/> <path class="batary" d="M297.57 364.95H279.25V459.12H297.57V364.95Z" fill="#121212" stroke="#fff" stroke-width="2" stroke-miterlimit="10"/> <path class="batary" d="M335.88 423.81H279.25" stroke="#fff" stroke-width="2" stroke-miterlimit="10"/> <path class="batary" d="M335.88 402.62H279.25" stroke="#fff" stroke-width="2" stroke-miterlimit="10"/> <path class="batary" fill-rule="evenodd" clip-rule="evenodd" d="M340.84 370.55L335.47 365.36L336.88 363.95L342.26 369.13L340.84 370.55Z" fill="#fff"/> <path class="batary" d="M284.02 464.62L278.25 460.11L279.66 458.7L285.44 463.2L284.02 464.62Z" fill="#fff"/> </g><style data-made-with="vivus-instant">svg{background:#121212}.start .ceQscdcF_0{stroke-dasharray:12 14;animation:ceQscdcF_draw_1 3s linear infinite}.start .ceQscdcF_1{stroke-dasharray:231 233;stroke-dashoffset:232;animation:ceQscdcF_draw 3s linear infinite}.start #home-inner{stroke:#3EB1C8;fill:transparent;animation:inner-blue linear 3s infinite}.start .batary{animation:batary 3s linear infinite}@keyframes batary{0%{opacity:0}80%{opacity:1}100%{opacity:1}}@keyframes inner-blue{0%{stroke:#fff}50%{stroke:#fff}100%{stroke:#3EB1C8}}@keyframes ceQscdcF_draw{0%{opacity:0}0.1%{opacity:1;stroke-dashoffset:232}80%{opacity:1;stroke-dashoffset:-232}80.1%{opacity:0}100%{opacity:0}}@keyframes ceQscdcF_draw_1{0%{opacity:0}40%{opacity:0}45%{opacity:1}80%{opacity:1}85%{opacity:0}100%{opacity:0}}</style></svg></div>';
  const towerAnim =
    '<div class="presentation-animation-inner__tower"><svg width="680" height="412" viewBox="0 0 680 412" fill="none" xmlns="http://www.w3.org/2000/svg" style=""> <g class="start"> <path fill-rule="evenodd" clip-rule="evenodd" d="M532.637 164.392L577.643 229.545V397.718H487.633V229.543L532.633 164.388L532.637 164.392Z" fill="#121212" stroke="#D3D3D3" stroke-miterlimit="10" /> <path fill-rule="evenodd" clip-rule="evenodd" d="M472.687 224.575H251.512V248.867H326.858L326.746 273.158H251.512V397.719H472.687V224.575Z" fill="#121212" stroke="#D3D3D3" stroke-width="2" stroke-miterlimit="10" /> <path fill-rule="evenodd" clip-rule="evenodd" d="M403.715 362.749L408.215 367.249H447.188V273.149L441.812 267.773" fill="#121212" /> <path fill-rule="evenodd" clip-rule="evenodd" d="M385.426 362.749L389.926 367.249H407.907" fill="#121212" /> <path fill-rule="evenodd" clip-rule="evenodd" d="M471.687 224.574H251.635C251.554 224.574 251.507 224.484 251.552 224.418L322.995 119.643H543.979C544.059 119.643 544.107 119.734 544.061 119.8L471.687 224.574Z" fill="#121212" stroke="#D3D3D3" stroke-width="2" stroke-miterlimit="10"/> <path fill-rule="evenodd" clip-rule="evenodd" d="M487.63 229.547L544.169 147.695L600.709 229.547V397.718H616.651V224.575L544.251 119.762C544.212 119.705 544.127 119.705 544.087 119.762L471.687 224.575V397.717H487.63V229.547Z" fill="#121212" stroke="#D3D3D3" stroke-width="2" stroke-miterlimit="10"/><path fill-rule="evenodd" clip-rule="evenodd" d="M600.709 229.546H577.641V397.718H600.709V229.546Z" fill="#121212" stroke="#D3D3D3" stroke-miterlimit="10" /> <path fill-rule="evenodd" clip-rule="evenodd" d="M356.174 397.718H312.117V320.986H356.174V397.718Z" fill="#121212" stroke="#D3D3D3" stroke-width="2" stroke-miterlimit="10" /> <path fill-rule="evenodd" clip-rule="evenodd" d="M356.176 397.718H319.898V320.986H356.178V397.718H356.176Z" fill="#121212" stroke="#D3D3D3" stroke-miterlimit="10" /> <path fill-rule="evenodd" clip-rule="evenodd" d="M356.284 273.157H258.293V248.866H356.285V273.157H356.284Z" fill="#121212" stroke="#D3D3D3" stroke-width="2" stroke-miterlimit="10" /> <path fill-rule="evenodd" clip-rule="evenodd" d="M533.977 397.718H220.695V410.558H533.977V397.718Z" fill="#121212" stroke="#D3D3D3" stroke-width="2" stroke-miterlimit="10" /> <path fill-rule="evenodd" clip-rule="evenodd" d="M356.282 273.157H347.762V258.212H258.289V248.866H356.175L356.282 273.157V273.157Z" fill="#121212" stroke="#D3D3D3" stroke-miterlimit="10" /> <path fill-rule="evenodd" clip-rule="evenodd" d="M678.941 397.717H533.977V410.559H678.941V397.717Z" fill="#121212" stroke="#D3D3D3" stroke-width="2" stroke-miterlimit="10" /> <path fill-rule="evenodd" clip-rule="evenodd" d="M341.686 119.644C317.525 154.621 293.364 189.598 269.203 224.575Z" fill="#121212" /> <path d="M341.686 119.644C317.525 154.621 293.364 189.598 269.203 224.575" stroke="#D3D3D3" stroke-miterlimit="10" /> <path fill-rule="evenodd" clip-rule="evenodd" d="M362.03 119.644C337.869 154.621 313.708 189.598 289.547 224.575Z" fill="#121212" /> <path d="M362.03 119.644C337.869 154.621 313.708 189.598 289.547 224.575" stroke="#D3D3D3" stroke-miterlimit="10" /> <path fill-rule="evenodd" clip-rule="evenodd" d="M382.374 119.644C358.212 154.621 334.051 189.598 309.891 224.575Z" fill="#121212" /> <path d="M382.374 119.644C358.212 154.621 334.051 189.598 309.891 224.575" stroke="#D3D3D3" stroke-miterlimit="10" /> <path fill-rule="evenodd" clip-rule="evenodd" d="M402.716 119.644C378.556 154.621 354.395 189.598 330.234 224.575Z" fill="#121212" /> <path d="M402.716 119.644C378.556 154.621 354.395 189.598 330.234 224.575" stroke="#D3D3D3" stroke-miterlimit="10" /> <path fill-rule="evenodd" clip-rule="evenodd" d="M423.064 119.644C398.903 154.621 374.742 189.598 350.582 224.575Z" fill="#121212" /> <path d="M423.064 119.644C398.903 154.621 374.742 189.598 350.582 224.575" stroke="#D3D3D3" stroke-miterlimit="10" /> <path fill-rule="evenodd" clip-rule="evenodd" d="M443.405 119.644C419.244 154.621 395.083 189.598 370.922 224.575Z" fill="#121212" /> <path d="M443.405 119.644C419.244 154.621 395.083 189.598 370.922 224.575" stroke="#D3D3D3" stroke-miterlimit="10" /> <path fill-rule="evenodd" clip-rule="evenodd" d="M463.749 119.644C439.587 154.621 415.426 189.598 391.266 224.575Z" fill="#121212" /> <path d="M463.749 119.644C439.587 154.621 415.426 189.598 391.266 224.575" stroke="#D3D3D3" stroke-miterlimit="10" /> <path fill-rule="evenodd" clip-rule="evenodd" d="M484.092 119.644C459.931 154.621 435.77 189.598 411.609 224.575Z" fill="#121212" /> <path d="M484.092 119.644C459.931 154.621 435.77 189.598 411.609 224.575" stroke="#D3D3D3" stroke-miterlimit="10" /> <path fill-rule="evenodd" clip-rule="evenodd" d="M504.436 119.644C480.275 154.621 456.114 189.598 431.953 224.575Z" fill="#121212" /> <path d="M504.436 119.644C480.275 154.621 456.114 189.598 431.953 224.575" stroke="#D3D3D3" stroke-miterlimit="10" /> <path fill-rule="evenodd" clip-rule="evenodd" d="M524.779 119.644C500.618 154.621 476.458 189.598 452.297 224.575Z" fill="#121212" /> <path d="M524.779 119.644C500.618 154.621 476.458 189.598 452.297 224.575" stroke="#D3D3D3" stroke-miterlimit="10" /><path fill-rule="evenodd" clip-rule="evenodd" d="M517.732 137.106L514.628 128.186C514.601 128.109 514.498 128.095 514.452 128.162L457.934 209.92L461.037 218.842C461.064 218.919 461.167 218.933 461.214 218.866L517.732 137.106Z" fill="#121212" stroke="#D3D3D3" stroke-width="2" stroke-miterlimit="10"/> <path fill-rule="evenodd" clip-rule="evenodd" d="M457.934 209.92L320.145 209.969C320.076 209.969 320.027 210.037 320.05 210.102L323.172 219.077L460.961 219.027C461.03 219.027 461.078 218.959 461.056 218.894L457.934 209.92Z" fill="#121212" stroke="#D3D3D3" stroke-width="2" stroke-miterlimit="10"/> <path fill-rule="evenodd" clip-rule="evenodd" d="M397.449 128.001H376.638L320.116 209.764C320.07 209.83 320.118 209.921 320.198 209.921L437.791 209.929L457.936 209.921L514.457 128.158C514.503 128.092 514.456 128.001 514.375 128.001H397.449Z" fill="#121212" stroke="#D3D3D3" stroke-width="2" stroke-miterlimit="10"/> <path fill-rule="evenodd" clip-rule="evenodd" d="M514.557 128.01L514.469 128.015L507.236 128L507.23 128.008L397.446 128.001H376.636L375.805 129.25L350.49 165.872H350.375L347.52 170.172L324.31 203.745L320.011 209.911C320.007 209.917 320.012 209.925 320.019 209.925V209.925C320.026 209.925 320.03 209.933 320.026 209.938L320.018 209.95C320.01 209.961 320.018 209.976 320.031 209.976H327.33L327.362 209.929H363.555L363.533 209.96H370.864L370.883 209.932H407.076L407.067 209.945H414.397L414.404 209.935H437.785H457.93L462.197 203.755L484.104 172.065H484.192C485.614 170.005 487.036 167.945 488.459 165.884H488.376L510.47 134.171L510.453 134.195L514.627 128.149C514.667 128.091 514.627 128.012 514.557 128.01V128.01ZM459.436 134.187L437.53 165.876H416.095H401.337L409.956 153.408L423.243 134.187H459.436ZM379.722 134.181H400.489H415.921L406.912 147.213L394.012 165.87H357.818L379.722 134.181ZM367.83 203.742H331.637L353.544 172.052H389.738L367.83 203.742ZM411.35 203.742H375.157L397.064 172.053H433.257L425.012 183.98L411.35 203.742ZM454.87 203.742H418.677L428.06 190.17L440.584 172.052H476.777L454.87 203.742ZM481.049 165.872H444.856L466.762 134.183H502.956L481.049 165.872Z" fill="#121212" stroke="#D3D3D3" stroke-width="2" stroke-miterlimit="10"/><path fill-rule="evenodd" clip-rule="evenodd" d="M487.629 325.579H496.777V397.719H501.371V325.579H540.829V397.719H545.423V325.579H573.046V397.719H577.64V229.542L532.635 164.389L529.843 168.431L540.829 184.331V273.15H501.371V209.652L496.777 216.303V273.158H487.629V277.752H496.777V320.986H487.629V325.579V325.579ZM573.046 320.986H545.423V277.752H573.046V320.986ZM573.046 273.158H545.423V190.99L573.046 230.979V273.158V273.158ZM540.829 320.986H501.371V277.752H540.829V320.986Z" fill="transparent" stroke="#D3D3D3" stroke-miterlimit="10" /><path fill-rule="evenodd" clip-rule="evenodd" d="M403.54 363.17L408.04 367.67H447V273.59L441.63 268.22" fill="#121212"/> <path fill-rule="evenodd" clip-rule="evenodd" d="M385.25 363.17L389.75 367.67H407.75" fill="#121212"/><path d="M403.54 363.17L408.04 367.67H447V273.191" stroke="#fff" stroke-width="2" stroke-miterlimit="10"/> <path d="M389.75 367.67H407.75" stroke="#fff" stroke-width="2" stroke-miterlimit="10"/> <path d="M441.63 269H403.54V363.17H441.63V269Z" fill="#121212" stroke="#fff" stroke-width="2" stroke-miterlimit="10"/> <path d="M403.32 269H385V363.17H403.32V269Z" fill="#121212" stroke="#fff" stroke-width="2" stroke-miterlimit="10"/> <path d="M441.63 327.86H385" stroke="#fff" stroke-width="2" stroke-miterlimit="10"/> <path d="M441.63 306.67H385" stroke="#fff" stroke-width="2" stroke-miterlimit="10"/> <path fill-rule="evenodd" clip-rule="evenodd" d="M446.59 274.6L441.22 269.41L442.63 268L448.01 273.18L446.59 274.6Z" fill="#fff"/> <path d="M389.77 368.67L384 364.16L385.41 362.75L391.19 367.25L389.77 368.67Z" fill="#fff"/><path class="block-blue" d="M403.54 363.17L408.04 367.67H447V273.191" stroke="#3EB1C8" stroke-width="2" stroke-miterlimit="10"/> <path class="block-blue" d="M389.75 367.67H407.75" stroke="#3EB1C8" stroke-width="2" stroke-miterlimit="10"/> <path class="block-blue" d="M441.63 269H403.54V363.17H441.63V269Z" fill="#121212" stroke="#3EB1C8" stroke-width="2" stroke-miterlimit="10"/> <path class="block-blue" d="M403.32 269H385V363.17H403.32V269Z" fill="#121212" stroke="#3EB1C8" stroke-width="2" stroke-miterlimit="10"/> <path class="block-blue" d="M441.63 327.86H385" stroke="#3EB1C8" stroke-width="2" stroke-miterlimit="10"/> <path class="block-blue" d="M441.63 306.67H385" stroke="#3EB1C8" stroke-width="2" stroke-miterlimit="10"/> <path class="block-blue" fill-rule="evenodd" clip-rule="evenodd" d="M446.59 274.6L441.22 269.41L442.63 268L448.01 273.18L446.59 274.6Z" fill="#3EB1C8"/> <path class="block-blue" d="M389.77 368.67L384 364.16L385.41 362.75L391.19 367.25L389.77 368.67Z" fill="#3EB1C8"/><path d="M158.607 397.862H20.4922V410.559H158.607V397.862Z" stroke="#D3D3D3" stroke-width="2" stroke-miterlimit="10" class="RseSHVAi_13"></path><path d="M31.0479 398.453L69.7649 163.98H109.086L147.803 398.453" stroke="#D3D3D3" stroke-width="2" stroke-miterlimit="10"/> <path d="M147.798 398.453L49.076 289.253L119.798 228.871L69.762 163.98L109.013 82.907L69.9007 1.97389C69.869 1.90839 69.7802 1.89753 69.7337 1.95348L2.14404 83.2679H176.704L109.114 1.95348C109.068 1.89753 108.979 1.90839 108.947 1.97389L69.835 82.907L109.086 163.98L59.05 228.871L129.771 289.252L31.049 398.452" stroke="#D3D3D3" stroke-width="2" stroke-miterlimit="10"/> <path d="M2.146 163.863L69.835 83.2681H109.015L176.704 163.863H2.146Z" stroke="#D3D3D3" stroke-width="2" stroke-miterlimit="10"/> <path d="M108.915 1.83496H69.935C69.8797 1.83496 69.835 1.87974 69.835 1.93497V163.98H109.015V1.93496C109.015 1.87973 108.97 1.83496 108.915 1.83496Z" stroke="#D3D3D3" stroke-width="2" stroke-miterlimit="10"/> <path d="M21.012 86H0.5V106.086H21.012V86Z" stroke="#D3D3D3" stroke-miterlimit="10"/> <path d="M178.512 86H158V106.086H178.512V86Z" stroke="#D3D3D3" stroke-miterlimit="10"/><path d="M178.512 165.904H158V186.829H178.512V165.904Z" stroke="#D3D3D3" stroke-miterlimit="10"/> <path d="M21.012 165.863H0.5V186.788H21.012V165.863Z" stroke="#D3D3D3" stroke-miterlimit="10"/><path class="tower-blocks" d="M178.512 165.904H158V186.829H178.512V165.904Z" stroke="#3EB1C8" stroke-miterlimit="10"/> <path class="tower-blocks" d="M21.012 165.863H0.5V186.788H21.012V165.863Z" stroke="#3EB1C8" stroke-miterlimit="10"/><path fill-rule="evenodd" clip-rule="evenodd" d="M6 201.847L10.0167 198.122L14 201.817" fill="#121212" class="RseSHVAi_55"></path> <path d="M6 201.847L10.0167 198.122L14 201.817" stroke="#3EB1C8" stroke-width="2" stroke-miterlimit="10" class="RseSHVAi_56"></path> <path fill-rule="evenodd" clip-rule="evenodd" d="M164 201.847L168.017 198.122L172 201.817" fill="#121212" class="RseSHVAi_57"></path> <path d="M164 201.847L168.017 198.122L172 201.817" stroke="#3EB1C8" stroke-width="2" stroke-miterlimit="10" class="RseSHVAi_58"></path><path d="M377.822 298.426L250.498 298.426C198.498 298.426 168 263.5 168 219.5L168 203" stroke="#3EB1C8" stroke-width="2" stroke-miterlimit="10" stroke-dasharray="7 8" class="RseSHVAi_53"></path> <path d="M377.824 311.426L102.5 311.426C55.9995 311.426 10 277.5 10 228.5L10 203" stroke="#3EB1C8" stroke-width="2" stroke-miterlimit="10" stroke-dasharray="7 8" class="RseSHVAi_54"></path> <path d="M377.822 298.426L250.498 298.426C198.498 298.426 168 263.5 168 219.5L168 203" stroke="#121212" stroke-width="3" stroke-miterlimit="10" stroke-dasharray="3 10" ></path> <path d="M377.824 311.426L102.5 311.426C55.9995 311.426 10 277.5 10 228.5L10 203" stroke="#121212" stroke-width="3" stroke-miterlimit="10" stroke-dasharray="3 10" ></path></g><style data-made-with="vivus-instant">svg{background:#121212}.start .block-blue{animation:block-blue 3s linear infinite}.start .tower-blocks{animation:tower-blocks 3s linear infinite}.start .RseSHVAi_53{stroke-dasharray:275 277;stroke-dashoffset:276;animation:RseSHVAi_draw_1 3s linear infinite}.start .RseSHVAi_54{stroke-dasharray:437 439;stroke-dashoffset:438;animation:RseSHVAi_draw_2 3s linear infinite}.start .RseSHVAi_55{stroke-dasharray:11 13;animation:RseSHVAi_draw 3s linear infinite}.start .RseSHVAi_56{stroke-dasharray:11 13;animation:RseSHVAi_draw 3s linear infinite}.start .RseSHVAi_57{stroke-dasharray:11 13;animation:RseSHVAi_draw 3s linear infinite}.start .RseSHVAi_58{stroke-dasharray:11 13;animation:RseSHVAi_draw 3s linear infinite}@keyframes block-blue{0%{opacity:1}100%{opacity:0}}@keyframes tower-blocks{0%{opacity:0}100%{opacity:1}}@keyframes RseSHVAi_draw_1{0%{stroke-dashoffset:276}100%{stroke-dashoffset:-276}}@keyframes RseSHVAi_draw_2{0%{stroke-dashoffset:438}100%{stroke-dashoffset:-438}}@keyframes RseSHVAi_draw{0%{opacity:0}40%{opacity:0}45%{opacity:1}95%{opacity:1}100%{opacity:0}}</style></svg></div>';

  // $commonAnim.fadeOut();
  // const changePresentation = function () {
  //   $commonAnim.fadeOut();
  //   $commonCtr.removeClass("active-control");
  //   setTimeout(() => {
  //     $sunId.find($animInner).html(sunAnim);
  //     $sunId.fadeIn(500);
  //     $commonCtr.removeClass("active-control");
  //     $(".controls-one").addClass("active-control");
  //     setTimeout(() => {
  //       $moonId.find($animInner).html(moonAnim);
  //       $sunId.fadeOut(500);
  //       setTimeout(() => {
  //         $moonId.fadeIn(500);
  //         $commonCtr.removeClass("active-control");
  //         $(".controls-two").addClass("active-control");
  //       }, 500);
  //       setTimeout(() => {
  //         $towerId.find($animInner).html(towerAnim);
  //         $moonId.fadeOut(500);
  //         setTimeout(() => {
  //           $towerId.fadeIn(500);
  //           $commonCtr.removeClass("active-control");
  //           $(".controls-third").addClass("active-control");
  //           setTimeout(() => {
  //             changePresentation();
  //           }, 10000);
  //         }, 500);
  //       }, 10000);
  //     }, 10000);
  //   }, 500);
  // };

  const $sunId = $("#sun-anim");
  const $moonId = $("#moon-anim");
  const $towerId = $("#tower-anim");
  const $commonAnim = $(".presentation-slider__item");
  const $animInner = $(".presentation-animation-inner");
  const $commonCtr = $(".controls__item");
  const $animInnerSvg = $(".presentation-animation-inner svg g");

  let timeOutFirstAnim;
  let timeOutSecondAnim;
  let timeOutThirdAnim;

  const changePresentationMob = function () {
    $commonCtr.click(function () {
      console.log($(window).width());
      if ($(window).width() < 767) {
        $commonAnim.fadeOut(400);
      } else {
        $commonAnim.fadeOut(500);
      }
      $commonCtr.removeClass("active-control");
      $animInner.empty();
      $animInnerSvg.removeClass("start");

      if ($(this).hasClass("controls-one")) {
        $sunId.find($animInner).html(sunAnim);
        $sunId.find($animInnerSvg).addClass("start");
        $(this).addClass("active-control");
        setTimeout(() => {
          $sunId.fadeIn(500);
        }, 500);
        clearTimeout(timeOutThirdAnim);
        clearTimeout(timeOutFirstAnim);

        timeOutSecondAnim = setTimeout(() => {
          $(".controls-two").trigger("click");
        }, 15250);
      }

      if ($(this).hasClass("controls-two")) {
        $moonId.find($animInner).html(moonAnim);
        $moonId.find($animInnerSvg).addClass("start");
        $(this).addClass("active-control");
        setTimeout(() => {
          $moonId.fadeIn(500);
        }, 500);
        clearTimeout(timeOutSecondAnim);
        clearTimeout(timeOutFirstAnim);

        timeOutThirdAnim = setTimeout(() => {
          $(".controls-third").trigger("click");
        }, 9500);
      }

      if ($(this).hasClass("controls-third")) {
        $towerId.find($animInner).html(towerAnim);
        $towerId.find($animInnerSvg).addClass("start");
        $(this).addClass("active-control");
        setTimeout(() => {
          $towerId.fadeIn(500);
        }, 500);
        clearTimeout(timeOutThirdAnim);
        clearTimeout(timeOutSecondAnim);

        timeOutFirstAnim = setTimeout(() => {
          $(".controls-one").trigger("click");
        }, 9500);
      }
    });
  };

  // const changePresentationTime = () => {
  //   setTimeout(() => {
  //     $(".controls-two").trigger("click");
  //     setTimeout(() => {
  //       $(".controls-third").trigger("click");
  //       setTimeout(() => {
  //         $(".controls-one").trigger("click");
  //       }, 9000);
  //     }, 10500);
  //   }, 23500);
  // };

  let deleteFun = true;

  const $discreet = $("#discreet");
  const $expandable = $(".expandable");
  const $present = $(".presentation-screen");
  let switchtopTopDiscreet = true;
  let switchtopPresent = false;

  $(window).scroll(function () {
    var wt = $(window).scrollTop();
    var wh = $(window).height();
    var etPresent = $("#presentation").offset().top;
    var etDiscreet = $("#discreet").offset().top;
    var etHand = $("#hand").offset().top;
    var ehPresent = $("#presentation").outerHeight();
    var ehDiscreet = $("#discreet").outerHeight();
    var ehHand = $("#handlet").outerHeight();
    var dh = $(document).height();

    if (wt + wh >= etPresent || wh + wt == dh || ehPresent + etPresent < wh) {
      if (deleteFun) {
        changePresentationMob();
        $(".controls-one").trigger("click");
      }
      deleteFun = false;
    }

    if (wt + wh >= etHand || wh + wt == dh || ehHand + etHand < wh) {
      if ($(window).width() < 767) {
        $(".hand__screen").addClass("iphone-anim-mob");
      } else {
        $(".hand__screen").addClass("iphone-anim");
      }
    }

    // scroll to block discreet

    // console.log(wt);
    // console.log(wh);
    // console.log(wt + wh);
    // console.log(etPresent + $present.height());

    // if (wt + wh >= etPresent + $present.height() && switchtopPresent) {
    //   setTimeout(() => {
    //     switchtopTopDiscreet = true;
    //   }, 500);
    //   $("html, body").animate(
    //     {
    //       scrollTop: etPresent,
    //     },
    //     "300"
    //   );
    //   setTimeout(() => {
    //     switchtopPresent = false;
    //   }, 1);
    // }
    // if (wt + wh >= etDiscreet && switchtopTopDiscreet) {
    //   setTimeout(() => {
    //     switchtopPresent = true;
    //   }, 500);
    //   $("html, body").animate(
    //     {
    //       scrollTop: etDiscreet + 2,
    //     },
    //     "300"
    //   );
    //   setTimeout(() => {
    //     switchtopTopDiscreet = false;
    //   }, 1);
    // }
  });

  // video block discreet
  const scrollTop = $(window).scrollTop();
  const vid = $(".vid-discreet video")[0];
  const videoBlockHeight = $("#discreet").height();

  const elementOffset = $("#discreet").offset().top;
  const distance =
    $(window).width() > 1199
      ? elementOffset - scrollTop - 200
      : elementOffset - scrollTop - 1700;
  let lastScrollPosition = 0;
  let videoScrollInterval;
  $(window).scroll(function () {
    const num = window.pageYOffset - distance;
    // vid.pause();
    const documentScrollTop = $(document).scrollTop();
    if (
      documentScrollTop > distance &&
      documentScrollTop < distance + videoBlockHeight
    ) {
      if (!videoScrollInterval) {
        videoScrollInterval = setInterval(function () {
          vid.currentTime = lastScrollPosition;
        }, 60);
      }
      lastScrollPosition = (num / (videoBlockHeight / 200)) * 0.02;
    } else {
      if (videoScrollInterval) {
        clearInterval(videoScrollInterval);
        videoScrollInterval = null;
      }
    }
    if (documentScrollTop < distance) {
      vid.currentTime = 0;
    }
  });

  // block expandable

  const $commonImgAnim = $(".images-animation");
  const $whiteImg = $("#white-boxes");
  const $blackImg = $("#black-boxes");

  $(".change-color p").click(function () {
    $commonImgAnim.css("display", "none");
    if ($(this).hasClass("white-img")) {
      $whiteImg.css("display", "block");
    } else {
      $blackImg.css("display", "block");
    }
    $(".change-color p").removeClass("active-color");
    $(this).addClass("active-color");
  });

  $(".change-color .black-img").trigger("click");

  $(".block-list .block-one").click(function () {
    $(".block-list .block").removeClass("block-active");
    $(this).addClass("block-active");
  });

  $(".block-list .block-one").click(function () {
    $(".block-list .block").removeClass("block-active");
    $(".images-animation img").removeClass("img-block2-animate");
    $(".images-animation img").removeClass("img-block3-animate");
    $(".images-animation img").removeClass("img-block4-animate");

    $(this).addClass("block-active");
  });

  $(".block-list .block-two").click(function () {
    $(".block-list .block").removeClass("block-active");

    $(".images-animation img").removeClass("img-block2-animate");
    $(".images-animation img").removeClass("img-block3-animate");
    $(".images-animation img").removeClass("img-block4-animate");

    $(".block-list").css("pointer-events", "none");
    $(this).addClass("block-active");

    setTimeout(function () {
      $(".images-animation .img-block1").addClass("img-block2-animate");
      $(".block-list").css("pointer-events", "auto");
    }, 500);
  });

  $(".block-list .block-three").click(function () {
    $(".block-list .block").removeClass("block-active");
    $(".images-animation img").removeClass("img-block2-animate");
    $(".images-animation img").removeClass("img-block3-animate");
    $(".images-animation img").removeClass("img-block4-animate");

    $(".block-list").css("pointer-events", "none");
    $(this).addClass("block-active");

    setTimeout(function () {
      $(".images-animation .img-block1").addClass("img-block2-animate");
      setTimeout(function () {
        $(".images-animation .img-block2").addClass("img-block3-animate");
        $(".block-list").css("pointer-events", "auto");
      }, 100);
    }, 500);
  });

  $(".block-list .block-four").click(function () {
    $(".block-list .block").removeClass("block-active");
    $(".images-animation img").removeClass("img-block2-animate");
    $(".images-animation img").removeClass("img-block3-animate");
    $(".images-animation img").removeClass("img-block4-animate");

    $(".block-list").css("pointer-events", "none");
    $(this).addClass("block-active");

    setTimeout(function () {
      $(".images-animation .img-block1").addClass("img-block2-animate");
      setTimeout(function () {
        $(".images-animation .img-block2").addClass("img-block3-animate");
        setTimeout(function () {
          $(".images-animation .img-block3").addClass("img-block4-animate");
          $(".block-list").css("pointer-events", "auto");
        }, 100);
      }, 100);
    }, 500);
  });

  // open div.wpcf7-mail-sent-ok

  document.addEventListener(
    "wpcf7mailsent",
    function (event) {
      setTimeout(function () {
        document.getElementsByClassName("wpcf7-mail-sent-ok")[0].innerHTML =
          "<div class='wpcf7-mail-sent-ok_wrapper'><div class='wpcf7-mail-sent-ok_inner'><p>Thank you for your message. It has been sent successfully.</p><span>One of our team will be in contact with you shortly</span><div class='wpcf7-mail-sent-ok_close'></div></div></div>";
      }, 10);
    },
    false
  );

  // close div.wpcf7-mail-sent-ok

  $(document).on("click", ".wpcf7-mail-sent-ok_close", function () {
    $(".wpcf7-response-output ").css("display", "none");
  });

  document.addEventListener(
    "wpcf7mailsent",
    function (event) {
      setTimeout(function () {
        $(".wpcf7-mail-sent-ok_close").trigger("click");
        $(".modal-inset .close").trigger("click");
      }, 2000);
    },
    false
  );
});

// btn to-top

var btn = $("#to-top");
$(window).scroll(function () {
  if ($(window).scrollTop() > 300) {
    btn.css({
      opacity: "1",
    });
  } else {
    btn.css({
      opacity: "0",
    });
  }
});
btn.on("click", function (e) {
  e.preventDefault();
  $("html, body").animate(
    {
      scrollTop: 0,
    },
    "300"
  );
});
