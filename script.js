const getSkippedSentence = (sentence, skip) => {

    if (typeof(sentence) == 'string' &&  typeof(skip) == 'number') {
        console.log("OK")
    } else {
        console.log("Not OK");
    }

    for (let i=0; i<sentence.length; i+= skip) {
        let letter = console.log(sentence[i]);    
    }
}; 

getSkippedSentence("Ala ma kota" , 2);