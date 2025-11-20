$(document).ready(function () {
  // Dark Mode Toggle
  $("#themeToggle").click(function () {
    $("body").toggleClass("dark");
    $(this).text($("body").hasClass("dark") ? "🌞" : "🌙");
  });

  // Smooth Navigation Highlight
  $(window).on("scroll", function () {
    var scrollPos = $(document).scrollTop();
    $("nav a").each(function () {
      var section = $($(this).attr("href"));
      if (
        section.position().top <= scrollPos + 60 &&
        section.position().top + section.height() > scrollPos
      ) {
        $("nav a").removeClass("active");
        $(this).addClass("active");
      }
    });
  });
});
