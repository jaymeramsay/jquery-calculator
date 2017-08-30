//empty string to manipulate later
let numberString = '';

//click event for my clear button
let notEquals = $('.buttons >*:not(#equals)');
notEquals.click(function (ev) {
  let button = ev.target;
  if ($(button).is('#clear')) {
    $('#screen').empty();
    numberString = '';
  }
  else {
    $('#screen').append(button.innerText);

    if (button.innerText === "x") {
      console.log('multiplation button was hit');
      //replace "x" with "*"
      numberString += "*";
      //how do I push this info into the numberString?
    }
    else if (button.innerText === "÷") {
      console.log('I made it this far!///////')
      numberString += '/';
      //where do I find the ^^^ divide symbol?
      //replace that symbol with '/'
      //how do I push this info into the numberString
    }
    else {
      numberString += button.innerText;
      console.log(numberString);
    }
  }
  //put text recorded from the click into numberString
  //add conditionals that replace multiplication and division operators
})




$('#equals').click(function (ev) {
  // let button = ev.target;
  let expression = numberString;
  let answer = eval(expression);
  $('#screen').text(answer);
  //when we hit equals, it will do math stuff based on screen


  // for (let i = 0; i < spanNumbers.length; i++) {
  //   let numberValues = spanNumbers[i];
  //   console.log(numberValues);

  // }
})
