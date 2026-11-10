document.getElementById("details1").addEventListener("click", myFunction1);
document.getElementById("details2").addEventListener("click", myFunction2);
document.getElementById("details3").addEventListener("click", myFunction3);
document.getElementById("details4").addEventListener("click", myFunction4);
document.getElementById("details5").addEventListener("click", myFunction5);

function myFunction1() {
  document.getElementById("detailsText").innerHTML = "Open to brand new players or experts.<br><br>Bridge is a complicated game so join up with local players to learn or compete!<br><br>The club meets once a month on the second Thursday after a full moon.<br><br>Bring your own cards or you can use our eclectic collection!<br><br><br><br><br>For more info contact Jeremy at (222)222-2222 or Jeremy@jere.my.<br>";
  document.getElementById("progName").selectedIndex = 0;
}

function myFunction2() {
  document.getElementById("detailsText").innerHTML = "Wholesome stories for your children!<br><br>Come in for some fun and adventure as your child hears fantastic stories told by our expert storytellers.<br><br>Twice a month our library holds a storytime for kids and parents.<br><br>The theme this time is fairies and dragons!<br><br><br><br><br>For more info register for the event or contact Teddie at (123)456-7890 or Teddie@library.org.<br>";
  document.getElementById("progName").selectedIndex = 1;
}

function myFunction3() {
  document.getElementById("detailsText").innerHTML = "Have you ever been curious about your roots?<br><br>Family history is important but it can be difficult to track down information on.<br><br>This is a special event hosted by experts in the genealogical field to help people find history about their family.<br><br>Dr. Gene Logical comes to us from North South University for this 2 hour workshop. <br><br><br><br><br>For more info register or contact Me at (865)097-9766 or me@me.me.<br>";
  document.getElementById("progName").selectedIndex = 2;
}

function myFunction4() {
  document.getElementById("detailsText").innerHTML = "What is the 3rd Dimension? And how do you print it?<br><br>These are some of the questions we'll answer for you in this introduction to 3D printing.<br><br>There are some plastic things that you want to have made for you instead of giving money to some dumb corporation.<br><br>Use your tax dollars to make the things that you need, collectivism above all brothers, sisters, and siblings.<br><br><br><br><br>For more info contact This at (019)283-4756 or This@guy.gov.<br>";
  document.getElementById("progName").selectedIndex = 3;
}

function myFunction5() {
  document.getElementById("detailsText").innerHTML = "What happened? Where are we right now? Can someone help?<br><br>We can help. At the local history talk we will talk with local about his tory.<br><br>Talking is how we convey information to each other and at this talk we will convey history of what happened here to you.<br><br>Do not worry about knowing things about here, just show up ready to listen and learn and our expert team will talk local history. <br><br><br><br><br>For contact more info at (abc)def-ghij or at local@history@talk.now or at AAAAAAAAAAAAA.<br>";
  document.getElementById("progName").selectedIndex = 4;
}
