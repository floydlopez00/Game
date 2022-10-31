// Card Js by James Pickering
delay = 500; //delay the effect
fadetime = 500; // fade in time
// var clicked = false; // set flag for clicked state
//lastClicked = ""; // last card clicked
suit = ["Question mark Blue", "Chest", "Free Parking", "Question MArk read"];
deck = [];

// Modified Shuffle by Chris Coyier
// https://css-tricks.com/snippets/javascript/shuffle-array/
function shuffle(o) {
	for(var j, x, i = o.length; i; j = parseInt(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
	return o;
};

// Random suit
function getSuit() {
  var x = parseInt(Math.random() * 4);
  return suit[x];
}

// Deal new card from deck
function getCards() {
  for(var i=0; i<=deck.length; i++) {
    var str = ".card" + i;
    var str2 = " .back";
    var el = str.concat(str2);
    var output = deck[i] + " of " +getSuit(); 
    $(el).text(output);
  }
}

// Deal cards in sequence
function deal(){
  $('.card').hide();
  clicked = false; // set flag for clicked state
  shuffle(deck);
  getCards();
  $('.card1').delay(delay).fadeIn(fadetime);
  $('.card2').delay(delay*2).fadeIn(fadetime);
  $('.card3').delay(delay*3).fadeIn(fadetime);
  $('.card4').delay(delay*4).fadeIn(fadetime);
  $('.card5').delay(delay*5).fadeIn(fadetime);
   $('.card6').delay(delay*6).fadeIn(fadetime);
     $('.card7').delay(delay*7).fadeIn(fadetime);
       $('.card8').delay(delay*8).fadeIn(fadetime);
         $('.card9').delay(delay*9).fadeIn(fadetime);
  $('.card10').delay(delay*10).fadeIn(fadetime);
  $('.card11').delay(delay*11).fadeIn(fadetime);
  $('.card12').delay(delay*12).fadeIn(fadetime);
  $('.card13').delay(delay*13).fadeIn(fadetime);
   $('.card14').delay(delay*14).fadeIn(fadetime);
     $('.card15').delay(delay*15).fadeIn(fadetime);
       $('.card16').delay(delay*16).fadeIn(fadetime);
         $('.card17').delay(delay*17).fadeIn(fadetime);
  $('.card18').delay(delay*18).fadeIn(fadetime);
  $('.card19').delay(delay*19).fadeIn(fadetime);
  $('.card20').delay(delay*20).fadeIn(fadetime);
  $('.card21').delay(delay*21).fadeIn(fadetime);
   $('.card22').delay(delay*22).fadeIn(fadetime);
     $('.card23').delay(delay*23).fadeIn(fadetime);
       $('.card24').delay(delay*24).fadeIn(fadetime);
         $('.card25').delay(delay*25).fadeIn(fadetime);
  $('.card26').delay(delay*26).fadeIn(fadetime);
  $('.card27').delay(delay*27).fadeIn(fadetime);
  $('.card28').delay(delay*28).fadeIn(fadetime);
  $('.card29').delay(delay*29).fadeIn(fadetime);
   $('.card30').delay(delay*30).fadeIn(fadetime);
     $('.card31').delay(delay*31).fadeIn(fadetime);
       $('.card32').delay(delay*32).fadeIn(fadetime);
         $('.card33').delay(delay*33).fadeIn(fadetime);
  $('.card34').delay(delay*34).fadeIn(fadetime);
  $('.card35').delay(delay*35).fadeIn(fadetime);
  $('.card36').delay(delay*36).fadeIn(fadetime);
  $('.card37').delay(delay*37).fadeIn(fadetime);
   $('.card38').delay(delay*38).fadeIn(fadetime);
     $('.card39').delay(delay*39).fadeIn(fadetime);
       $('.card40').delay(delay*40).fadeIn(fadetime);
         $('.card41').delay(delay*41).fadeIn(fadetime);
  $('.card42').delay(delay*42).fadeIn(fadetime);
  $('.card43').delay(delay*43).fadeIn(fadetime);
  $('.card44').delay(delay*44).fadeIn(fadetime);
  $('.card45').delay(delay*45).fadeIn(fadetime);
   $('.card46').delay(delay*46).fadeIn(fadetime);
     $('.card47').delay(delay*47).fadeIn(fadetime);
       $('.card48').delay(delay*48).fadeIn(fadetime);
         $('.card49').delay(delay*49).fadeIn(fadetime);
  $('.card50').delay(delay*50).fadeIn(fadetime);
  $('.card51').delay(delay*51).fadeIn(fadetime);
  $('.card52').delay(delay*52).fadeIn(fadetime);
  $('.card53').delay(delay*53).fadeIn(fadetime);
   $('.card54').delay(delay*54).fadeIn(fadetime);
     $('.card55').delay(delay*55).fadeIn(fadetime);
       $('.card56').delay(delay*56).fadeIn(fadetime);
        $('.card57').delay(delay*57).fadeIn(fadetime);
   $('.card58').delay(delay*58).fadeIn(fadetime);
     $('.card59').delay(delay*59).fadeIn(fadetime);
       $('.card60').delay(delay*60).fadeIn(fadetime);
}
deal();

$('.deal').click(function(){
	deal();
});

$('.card').click(function(){
  $(this).toggleClass('flip');
});
//light
      $('button').on('click', function(){  
  function random(max){
      return Math.random() * (max - 0) + 0;
  }

  var c = document.createDocumentFragment();
  for (var i=0; i<100; i++) {
    var styles = 'transform: translate3d(' + (random(500) - 250) + 'px, ' + (random(200) - 150) + 'px, 0) rotate(' + random(360) + 'deg);\
                  background: hsla('+random(360)+',100%,50%,1);\
                  animation: bang 700ms ease-out forwards;\
                  opacity: 0';
      
    var e = document.createElement("i");
    e.style.cssText = styles.toString();
    c.appendChild(e);
}
// document.body.appendChild(c);
  $(this).append(c);
})



