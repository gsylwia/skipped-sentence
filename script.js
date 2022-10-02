let sentence = "ALa ma kota";
let skip = 2;

const getSkippedSentence = (sentence, skip) => {

 /*    if (typeof(sentence) == 'string' &&  typeof(skip) == 'number') {
        console.log("OK")
    } else {
        console.log("Not OK");
    } */
    let newSentence = [];
    let arrSentence = sentence.split('');
    
    arrSentence.forEach(function(e) {
        newSentence.push(e);
    });
		
    console.log(newSentence);
    
/*    	let skippedLetter = newSentence.filter( function(letter) {
   	        let word = letter[0] += skip;
   	        console.log(word);
   	    });
   	    
   	    console.log(skippedLetter); */
    
    
		let newString = newSentence.join("");
		console.log(newString);
  /*   for (let i=0; i<sentence.length; i+= skip) {
        let letter = console.log(sentence[i]);    
    } */
 		
}; 

getSkippedSentence(sentence, skip);