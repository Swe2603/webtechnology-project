function startTimer()
  {
    window.setInterval( "updateTime()", 1000 );
  } 


  function updateTime()
  {
     ++seconds;
    document.getElementById( "soFar" ).innerHTML = seconds;
   } 
window.addEventListener( "load", startTimer, false );
      function start()
      {
        window.alert("Welcome to AR FASHION");

        document.getElementById("move").addEventListener("mousemove", moveone, false );
        document.getElementById("move").addEventListener("mouseout", leaveone, false );

        document.getElementById("picture").addEventListener("mouseover", over, false );
        document.getElementById("picture").addEventListener("mouseout", out, false );
      } 
      function registerEvents()
 {
 document.getElementById( "bubble" ).addEventListener( "click", bubble, false );
 document.getElementById( "noBubble" ).addEventListener( "click", noBubble, false );
 } 
 function bubble( e )
 {
 alert( "This will bubble." );
e.cancelBubble = false;
 } 

 function noBubble( e )
 {
 alert( "This will not bubble." );
e.cancelBubble = true;
 } 

      function moveone()
      {
        document.getElementById("move").innerHTML ="Trending Fashion Arrivals";
      }

      function leaveone()
      {
        document.getElementById("move").innerHTML ="Shop now hurry up";
      }
      function over(e)
      {
        document.getElementById("picture").setAttribute( "src", "shopping_bags-removebg-preview.png");
      }

        function out(e)
      {
        e.target.setAttribute( "src", "istockphoto-1189158303-612x612-removebg-preview.png");
      }

      window.addEventListener( "load", start,false);
