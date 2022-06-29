function shortestWord(word){
    var sentence =word.split(' ');
    let sum = 5996
    let longest = ' ';
    for (let i =0; i< sentence.length;i++){
      let characters = sentence[i];
    if (characters.length <= sum){
      sum = characters.length;
      longest = characters;
    }
    }return longest;
    }