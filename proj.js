console.log('Hi there');

var firstp = "Lakshya";
var secp = "Uddeshya";

firstp = firstp + ": it is your turn, please pick a column to drop your blue chip.";
secp = secp + ": it is your turn, please pick a column to drop your red chip.";

$('h3').text(firstp);
var temp = secp;
$('button').click(function () {
  temp = secp;
  secp = firstp;
  firstp = temp;
  $('h3').text(firstp);

});

var turn = 0;

//color change of the circles


var allbuttons = document.querySelectorAll("button");
var temp2 = 41;

allbuttons.forEach(element => {
  element.setAttribute("id", temp2);
  element.addEventListener('mouseup', () => {
    if (turn % 2 === 0) //blue chip
    {
      for (let i = ((element.id) % 7); i < 42; i += 7) {
        if (allbuttons[41 - i].getAttribute("class") == null) {
          allbuttons[41 - i].setAttribute("class", "turnBlue");
          console.log(i);
          break;
        }
      }
    }
    else { //red Chip
      for (let i = ((element.id) % 7); i < 42; i += 7) {
        if (allbuttons[41 - i].getAttribute("class") == null) {
          allbuttons[41 - i].setAttribute("class", "turnRed");
          console.log(i);
          break;
        }
      }
    }
    turn++;
  });
  temp2--;
})

function check()
{
  
}



