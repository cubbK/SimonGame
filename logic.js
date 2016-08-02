var sound1 = new Audio('sound/simonSound1.mp3');
var sound2 = new Audio('sound/simonSound2.mp3');
var sound3 = new Audio('sound/simonSound3.mp3');
var sound4 = new Audio('sound/simonSound4.mp3');
var sounds = [sound1,sound2,sound3,sound4];
$( document ).ready(function() {


    var proggression = [];
    //proggression.push(randomIntFromInterval(1,4));
    proggression.push(1);
    proggression.push(2);
    proggression.push(3);
    proggression.push(4);
    var count = 0;

    $('#start').click(function () {
      start();
      deactivateAll();
    });

    function start() {
      var strict =$('#strict').is(":checked");
      showMove();
      interval = setInterval(showMove, 1000);
    }
    function showMove() {
      if (count ==proggression.length){
        clearInterval(interval);
        deselectAll();
        count =0;
        return;
      }
      deselectAll();
      $('#'+proggression[count]).addClass('active');
      console.log(proggression[count] -1);
      sounds[proggression[count] -1].play();
      count++;


    }
    function deselectAll(){
      for (var i = 1 ; i <= 4;i++ ){
        $('#'+i).removeClass('active');
      }
    }
    function deactivateAll(){
      for (var i = 1 ; i <= 4;i++ ){
        $('#'+i).prop('disabled' , true);
      }
    }
});

function randomIntFromInterval(min,max){
    return Math.floor(Math.random()*(max-min+1)+min);
}
