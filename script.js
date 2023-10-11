function splatterMsg() {
  var x = document.getElementById("response").value;
  document.getElementById("project").innerHTML = x;

  // changes to splattered tomato background and black input background after message posted
  document.body.style.backgroundImage = "url(splattered-tomato.png)";
  document.getElementById("inputbg").style.backgroundColor = "#000000";

  //fades out dramatically before resetting for next input
  $("#project").delay(3000).fadeOut(1500);

  // auto-resets page
  setTimeout(function () {
    window.location.reload();
  }, 3000);
}
