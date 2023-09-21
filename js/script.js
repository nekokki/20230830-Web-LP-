jQuery(window).on("scroll", function () {
  if (100 < jQuery(this).scrollTop()) {
    jQuery(".to-top").addClass("is-show");
  } else {
    jQuery(".to-top").removeClass("is-show");
  }
});

jQuery('a[href^="#"]').on("click", function () {
  var id = jQuery(this).attr("href");
  var position = 0;

  if (id != "#") {
    position = jQuery(id).offset().top;
  }

  var headerHeight = jQuery("header").outerHeight();

  jQuery("html, body").animate(
    {
      scrollTop: position - headerHeight,
    },
    300
  );

  return false;
});

jQuery(".p-drawer-img").on("click", function (e) {
  e.preventDefault();

  jQuery(".p-drawer-menu").toggleClass("is-active");
  jQuery(".p-drawer-img").toggleClass("is-active");

  return false;
});

jQuery(".p-drawer-menu").on("click", function () {
  jQuery(".p-drawer-menu").removeClass("is-active");
  jQuery(".p-drawer-img").removeClass("is-active");
});

jQuery("a.p-drawer-menu__text").on("click", function (e) {
  // もし必要なら、ここでスクロール処理などを行う
  jQuery(".p-drawer-menu").removeClass("is-active");
  jQuery(".p-drawer-img").removeClass("is-active");
});
