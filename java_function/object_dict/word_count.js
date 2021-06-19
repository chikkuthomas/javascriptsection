var text="hai hello how are you hello"; // we need to find the count of each new word and repeated wors
var words=text.split(" ")  // the line is splited with space so that we will get each word separate
var dict={}                // iniial we set an empty dictionary
for(let word of words){    // iterating each word from the list of words
    console.log(word);     // to print each word
    if(!(word in dict)){   // to check whether each word is already preset in the dictionary
        dict[word]=1       // if not add 1 to the value with keyword: "word"
    }
    else{
        dict[word]+=1       // else if thw word is already in the dictionary, increment the word count
    }
  
}
console.log(dict);         // print the dictionary with word and  word count