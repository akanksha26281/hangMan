function init(){
  gamePlaying = true;

  count = 0; //to count the stage at which the diagram is!

  var word = prompt("Enter the word for your friend to guess!");  //getting the word from the user
  word = word.toUpperCase();
  // console.log(word);
  lst = [];
  len = word.length;

  for (var i=0; i<len; i++){
    lst.push(word[i]);   //storing the leters of word in a array
    $('#dash').after('<b class=temp>&nbsp; __  &nbsp;</b>');    //Creating an html element for the dash
    document.querySelector('.temp').setAttribute('class', word[len-i-1]+'-to r');   //Changing the class of the above html element to the letter which should be present there.
  }

  // '0' is used as a flag to know where to stop iterating when checking an element in 'lst'. See the bellow 'remove' function.
  lst.push(0);
  // console.log(lst);
}


// To remove the words which are clicked from "lst"
function remove(l, x){
  i = 0;
  while(l[i]!=0){
    if (l[i]==x){
      l.splice(i, 1);
    }else{ i += 1; }
  }
  return l;
}

init();

$('.Btn').click(function(event){
  if (gamePlaying){
    if (count>=6){
      alert("Game Over! Reset the game and try Again :)");
      gamePlaying = false;
    }else{
      id = event.target.id;
      // cl = $(event.target).attr('class');
      // console.log(id);
      if (lst.includes(id)){
        $('.' +id+'-to').html('&nbsp; <b style=text-decoration:underline> '+id+' </b> &nbsp;');
        lst = remove(lst, id);
        if (lst.length == 1){
          alert("Congratulation! You guesses the word!!!");
          gamePlaying = false;
        }
      }else{
        count += 1;
        document.querySelector('img').setAttribute('src', 'stage'+count+'.jpg');
      }
    }
  }

});


$('.btn').click(function(event){
  document.querySelector('img').setAttribute('src', 'stage0.jpg');
  $('.r').remove();
  init();
});





// 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
