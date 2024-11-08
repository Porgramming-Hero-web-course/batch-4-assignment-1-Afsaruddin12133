{
    //

    function countWordOccurrences (sentence : string , word : string) : number{

        let wordOccured : number = 0;
        let sentenceArray : string[] = sentence.split(" ");
        
        sentenceArray.forEach((item : string) => (item.toLocaleLowerCase() === word.toLocaleLowerCase())? wordOccured++ : item)
        
        return wordOccured;
    }

    const output = countWordOccurrences('I love typescript','typescript');
    console.log(output);
    


    //
}