let sentence = "ALa ma kota";
let skip = 2;

const getSkippedSentence = (sentence, skip) => {

    if (typeof(sentence) == 'string' &&  typeof(skip) == 'number') {
        const newSentence = sentence.split("").filter((el, index) => index % skip === 0);
    
		let newString = newSentence.join("");
		console.log(newString);
    } 
    
    return [];		
}; 

getSkippedSentence(sentence, skip);