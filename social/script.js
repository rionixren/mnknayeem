$("document").ready(() => {
  /* $("img").addClass("animated flip");
  */
  $(".pass-button").click(() => {
    alert("Thanks for the feedback, I'll learn more.");
  });

  $("#card").mouseenter(() => {
    $("img").css({ "transition": "3s", "border": "#e0a754 3px solid" });

    $(".color").css({ "transition": "3s", "color": "#e0a754" });

    $(".btn").css({ "transition": "3s", "background": "#e0a754" });

  });
  $("#card").mouseleave(() => {
    $("img").css({ "transition": "3s", "border": "black 3px solid" });

    $(".color").css({ "transition": "3s", "color": "grey" });

    $(".btn").css({ "transition": "3s", "background": "rgba(0,0,0,0)" });

  });

  $(".btn.second").click(() => {
    alert("Ask me anything!");
  });

});