
$( document ).ready(function(){
    var Random = Math.floor(Math.random()*60+30);
    
    $("#NumGener").text(Random);
    //
    var num1, num2, num3, num4 = Math.floor(Math.random()*14+1);
    // 
    var userTotal= 0; 
    var wins= 0;
    var losses = 0;
  $("#win-counter").text(wins);
  $("#loss-counter").text(losses);

  //resets
  function reset(){
        Random = Math.floor(Math.random()*101+19);
        console.log(Random)
        $('#NumGener').text(Random);
        num1= Math.floor(Math.random()*14+1);
        num2= Math.floor(Math.random()*14+1);
        num3= Math.floor(Math.random()*14+1);
        num4= Math.floor(Math.random()*14+1);
        userTotal= 0;
        $('#total').text(userTotal);
        } 
  function win(){
    wins++; 
    $("#win-counter").text(wins);
    reset();
  }
  function loser(){
    losses++;
    $('#loss-counter').text(losses);
    reset()
  }
  //crystal counter
    $('#card1').on ('click', function(){
        var crystalValue = ($(this).attr("card1"));
    crystalValue = parseInt(crystalValue);
    userTotal = [30,50,10,5]
      userTotal = userTotal + num1;
      console.log("#card1= " + userTotal);
      $('#total').text(userTotal); 
            //sets win/lose conditions
          if (userTotal == Random){
            win();
          }
          else if ( userTotal > Random){
            loser();
          }   
    })  
    $('#card2').on ('click', function(){
      userTotal = userTotal + num2;
      console.log("New userTotal= " + userTotal);
      $('#total').text(userTotal); 
          if (userTotal === Random){
            win();
          }
          else if ( userTotal > Random){
            loser();
          } 
    });  
    $('#card3').on ('click', function(){
      userTotal = userTotal + num3;
      console.log("New userTotal= " + userTotal);
      $('#total').text(userTotal);

      if (userTotal == Random){
            win();
          }
          else if ( userTotal > Random){
            loser();
          } 
    })  
    $('#card4').on ('click', function(){
      userTotal = userTotal + num4;
      console.log("New userTotal= " + userTotal);
      $("#total").text(userTotal); 
        
            if (userTotal == Random){
            win();
          }
          else if ( userTotal > Random){
            loser();
          }
    });   
  }); 