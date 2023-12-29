function moduleProject1() {
  const footer = document.querySelector('footer')
  const currentYear = new Date().getFullYear()
  footer.textContent = `© BLOOM INSTITUTE OF TECHNOLOGY ${currentYear}`

  // 👇 WORK WORK BELOW THIS LINE 👇

 

  // 👉 TASK 1 - Add a "widget" class name to widgets so CSS kicks in
  
  const widgetClass = document.querySelectorAll('section div');
  widgetClass.forEach(widget => widget.classList.add('widget'));
  


  // 👉 TASK 2 - Build a "Quote of the Day" widget

const quoteOftheDayClass = document.querySelector ('.quoteoftheday');
const dailyQuoteDiv = document.createElement('div');
quoteOftheDayClass.appendChild(dailyQuoteDiv);
const randoQuote = quotes[Math.floor(Math.random() * quotes.length)]
dailyQuoteDiv.textContent = `${randoQuote.quote}`

const dailyQuoteAuthr = document.createElement('div');
quoteOftheDayClass.appendChild(dailyQuoteAuthr);
if (randoQuote.quote && randoQuote.date){dailyQuoteAuthr.textContent = `${randoQuote.author} in ${randoQuote.date}`};
if (randoQuote.quote && !(randoQuote.date)) {dailyQuoteAuthr.textContent = `${randoQuote.author} in unknown date`};
  


  // 👉 TASK 3 - Build a "Corporate Speak" widget
  

const corporateSpeakClass = document.querySelector ('.corporatespeak');
const corporateSpeakPara = document.createElement('p');
corporateSpeakClass.appendChild(corporateSpeakPara);

const randoNoun = nouns[Math.floor(Math.random() * nouns.length)];
const randoNoun2 = nouns[Math.floor(Math.random() * nouns.length)];

const randoAdverb = adverbs[Math.floor(Math.random() * adverbs.length)];
const randoAdverb2 = adverbs[Math.floor(Math.random() * adverbs.length)];

const randoVerb = verbs[Math.floor(Math.random() * verbs.length)]
const randoVerb2 = verbs[Math.floor(Math.random() * verbs.length)]

corporateSpeakPara.textContent = `We need to ${randoVerb} our ${randoNoun} ${randoAdverb} in order to ${randoVerb2} our ${randoNoun2} ${randoAdverb2}.`


  // 👉 TASK 4 - Build a "Countdown" widget
 
  const countdownClass = document.querySelector ('.countdown');
  const countdownPara = document.createElement('p');
  countdownClass.appendChild(countdownPara);


  let count = 5;
  countdownPara.textContent = `T-minus ${count}...`
  let counter = setInterval(timer, 1000);

  function timer(){
    count -= 1;
    if(count <= 0){countdownPara.textContent = 'Liftoff! 🚀'}
    else countdownPara.textContent = `T-minus ${count}...`
  }

  // 👉 TASK 5 - Build a "Friends" widget

  const friendsClass = document.querySelector('.friends');
  const friendsPara = document.createElement('p');
  friendsClass.appendChild(friendsPara);

  const randoPerson = people[Math.floor(Math.random() * people.length)];
  console.log(randoPerson)

  let randoPersonFriendsID = randoPerson.friends
  let friends = []
  
  
  for (i = 0; i < randoPersonFriendsID.length; i++){
    let friendIDMatch = randoPersonFriendsID[i];
    

    people.forEach((person) => {
      if (person.id === friendIDMatch)
        {friends.push(person)}
      }
    )  
  }

  let friendsPhrase = 'is friends with '
 if (friends.length === 0){ friendsPhrase = " has no friends."}

 else {
  for (p = 0 ; p < friends.length; p++){
    let friend = friends[p]
    const friendIndex = friends.indexOf(friend)
    console.log(friendIndex)
    if (friends.length === 1){friendsPhrase += `${friend.fname} ${friend.lname}.`}
    if (friends.length === 2){
          if  (friendIndex === friends.length-1){friendsPhrase += ` and ${friend.fname} ${friend.lname}.`}
          else {friendsPhrase += `${friend.fname} ${friend.lname}`}
    };
    if (friends.length > 2){
      if (friendIndex <= friends.length -3) {friendsPhrase += `${friend.fname} ${friend.lname},`}
      if  (friendIndex === friends.length-1){friendsPhrase += ` and ${friend.fname} ${friend.lname}.`}
      if (friendIndex === friends.length-2) {friendsPhrase += ` ${friend.fname} ${friend.lname}`}
     
    }


  }
}



console.log(friendsPhrase)


friendsPara.textContent = `${randoPerson.fname} ${randoPerson.lname} was born in ${randoPerson.dateOfBirth.slice(0,4)} and ${friendsPhrase}`

  

 

  // 👉 TASK 6 - Make it so user can tab through the widgets
  
  let widgetTabIndex = 0
  
  widgetClass.forEach(widget => widget.setAttribute('tabindex', widgetTabIndex += 1));



  // 👆 WORK WORK ABOVE THIS LINE 👆
}

// ❗ DO NOT WORK BELOW THIS LINE
// ❗ DO NOT WORK BELOW THIS LINE
// ❗ DO NOT WORK BELOW THIS LINE
if (typeof module !== 'undefined' && module.exports) module.exports = { moduleProject1 }
else moduleProject1()
