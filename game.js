



var gameState = {
      targetNumber : randomNumberGenerate(19, 120),
      wins : 0,
      losses : 0,
      resultNumber : 0, 
      // update resultNumber with clickValue
      updateResult: function(num){
        this.resultNumber += num;
        // console.log("result number: " + this.resultNumber);
        // display resultNum in page
        $("#result").html("Total: " +this.resultNumber);
        // if target number is  === result number then win goes up by 1 
        // display winning text on page
        // if result number is greater than > target number than lose increases by 1
        // display losing text on page
        
          if(this.resultNumber > this.targetNumber ){
            this.losses++;
            $("#losses").html("Losses: " + this.losses);
            // console.log("losses " + this.losses); 
            this.gameReset();    
          
          } else if(this.resultNumber === this.targetNumber) {
            this.wins++;
            $("#wins").html("Wins: " + this.wins);
            // console.log("wins " + this.wins);
            this.gameReset();
          } else {
            return;
          }
        },
        gameReset: function(){
          // call function again, generate new num display new number
          gameState.targetNumber = randomNumberGenerate(19, 120);
          $("#number-to-guess").text(gameState.targetNumber);
          
          // set resultnum to 0, display reset value
          this.resultNumber = 0;
          $("#result").html("Total: " + gameState.resultNumber);
          // give buttons new values
          gemsValue.resetRandomValue();
          // gemsValue.assignNumber();
          // gemsValue.assignValueToHtml();
        }
    };
    // create a random number - tested.
    function randomNumberGenerate(min, max){
       return Math.floor(Math.random()*(max-min+1)+ min);
       //0.1 - 0.9
       //0.1 * (12 - 2 + 1) + 2 =
    }
    // create gems and assign random value 
    var gemsValue = {
      gems: [],
      //until array equal 4, generate numbers and add to array, if not already in array, push to array. create seperate function for randomizing the array order.... call r
      // replace a randon index in gems with a 1. max is gem length (3)
      replaceOne : function(max) {
          //takes the gems array and selects a random index
          var gemNumIndex = Math.floor(Math.random()*(max));
          // console.log("random index: " + gemNumIndex);
          // at random index replace value with 1
          this.gems.splice(gemNumIndex, 1, 1);
      },
      // run randomnumbgenerate function 4 times using a for loop. add those values to array
      assignNumber : function(){
        // run until gems is length of 4
        while(this.gems.length < 4){
          var num = randomNumberGenerate(2,12)
          // gems arrray doesn't aleady have num add num
          if(!this.gems.includes(num)){
            gemsValue.gems.push(num);
          } 
        }
        // console.log("gem array: " + this.gems);
        this.replaceOne(this.gems.length);
      },
      // assign each button a value from gems array
      assignValueToHtml : function(){
        // each  gem item === a button there are 4 buttons and 4 array items.
          // all buttons have btn call and a unique class of btn1-4
          $('.btn1').val(this.gems[0]);
          $('.btn2').val(this.gems[1]);
          $('.btn3').val(this.gems[2]);
          $('.btn4').val(this.gems[3]);
      },
      //Function to reset data
      resetRandomValue : function() {
        this.gems = [];
        // console.log(this.gems);
        this.assignNumber();
        // console.log(this.gems);
        this.assignValueToHtml();
      },
    };
    // click to start the game
    $(document).ready(function(){
      randomNumberGenerate(19, 120);
      // $("#crystals").html(gameState.resultNumber);
      //subject ot relocation 
      $("#number-to-guess").text(gameState.targetNumber);
      $("#wins").html("Wins: " + gameState.wins);
      $("#losses").html("Losses: " + gameState.losses);
      $("#result").html("Total: " + gameState.resultNumber);
      gemsValue.assignNumber(); //on ready assign gem value
      gemsValue.assignValueToHtml(); // give buttons value
      //if button (this) is clicked the value assigned is add to a counter array
      // bind function to click of buttons
      $(".btn").on("click", function(){ 
        var clickValue = parseInt($(this).val());
        gameState.updateResult(clickValue);
      });
      console.log("button value: " + gemsValue.gems);
    });




// BUTTON STUFF

$(function() {  
  $('.btn-3')
    .on('mouseenter', function(e) {
      var parentOffset = $(this).offset(),
          relX = e.pageX - parentOffset.left,
          relY = e.pageY - parentOffset.top;
      $(this).find('span').css({top:relY, left:relX})
    })
    .on('mouseout', function(e) {
      var parentOffset = $(this).offset(),
          relX = e.pageX - parentOffset.left,
          relY = e.pageY - parentOffset.top;
      $(this).find('span').css({top:relY, left:relX})
    });
  $('[href=#]').click(function(){return false});
});


//

