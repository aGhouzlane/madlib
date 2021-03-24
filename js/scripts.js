$(document).ready(function () {

  $("button#first").click(function () {
    var text = $("button#first").text();
    $("span#output").html(text).css('color', 'green');
  });

  $("button#second").click(function () {
    var text = $("button#second").text();
    $("span#output").html(text).css('color', 'blue');
  });

  $("button#third").click(function () {
    var text = $("button#third").text();
    $("span#output").html(text).css('color', 'yellow');
  });

});