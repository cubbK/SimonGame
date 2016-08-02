var sound1 = new Audio('sound/simonSound1.mp3');
var sound2 = new Audio('sound/simonSound2.mp3');
var sound3 = new Audio('sound/simonSound3.mp3');
var sound4 = new Audio('sound/simonSound4.mp3');
var soundWrong = new Audio('sound/wrong.mp3');
soundWrong.volume = 0.2;
var sounds = [sound1,sound2,sound3,sound4];
$( document ).ready(function() {


    var proggression = [];
    //proggression.push(randomIntFromInterval(1,4));
    var speed = 1000;
    var count = 0;
    var strict;
    $('#start').click(function () {
      startAgain();
      deactivateAll(true);
      strict =$('#strict').is(":checked");

    });

    function start() {

      proggression.push(randomIntFromInterval(1,4));
      deselectAll();

      interval = setInterval(showMove, speed);

    }
    function startAgain() {
      apasariCorecte = 0;
      proggression = [];
      speed = 1000;

      proggression.push(randomIntFromInterval(1,4));
      deselectAll();
      interval = setInterval(showMove, speed);
    }
    function showMove() {
      if (count ==proggression.length){
        clearInterval(interval);
        deselectAll();
        count =0;
        deactivateAll(false);
        return;
      }
      deselectAll();
      $('#'+proggression[count]).addClass('active');
      sounds[proggression[count] -1].play();
      count++;


    }
    function deselectAll(){
      for (var i = 1 ; i <= 4;i++ ){
        $('#'+i).removeClass('active');
      }
    }
    function deactivateAll(bool){
      for (var i = 1 ; i <= 4;i++ ){
        $('#'+i).prop('disabled' , bool);
      }
    }

    var apasariCorecte = 0;
    $('.btn-simon').click(function () {
      strict =$('#strict').is(":checked");
      var id = this.id;
      if (proggression.length != 0 ){
        //daca playerul a apasat pe play
        if (id == proggression[apasariCorecte]){
          //daca a apasat corect butonul
          sounds[id-1].play();
          apasariCorecte++;
          if (apasariCorecte !=0 && apasariCorecte == proggression.length  ){
            //daca a apasat toate butoanele corecte
            $('#count').text(proggression.length +1);
            apasariCorecte = 0;
            if ([5,9,13].indexOf(proggression.length) > -1){
              speed /=2;
            }
            if (proggression.length == 20){
              alert('You Are The Best! You Win');
              startAgain();
            }
            start();

          }
        }else {
          //daca a gresit butonul
          if (strict){
            $('#count').text(1);
            soundWrong.play();
            startAgain();

          }else {
            soundWrong.play();
            showAgain();
          }

        }
      }

    });


    function showAgain() {
      apasariCorecte = 0;
      deselectAll();
      interval = setInterval(showMove, speed);

      //resetam tot
    }
});

function randomIntFromInterval(min,max){
    return Math.floor(Math.random()*(max-min+1)+min);
}
