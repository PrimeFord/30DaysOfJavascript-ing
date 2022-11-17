//1.'Love is the best thing in this world. Some found their love and some are still looking for their love.' Count the number of word love in this sentence.
let phrase =
  "Love is the best thing in this world. Some found their love and some are still looking for their love.";
let word = /love/gi;
console.log(phrase.match(word));

//2.Use match() to count the number of all because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
let phrase2 =
  "You cannot end a sentence with because because because is a conjunction";
let word2 = /because/gi;
console.log(phrase2.match(word2));

//3.Clean the following text and find the most frequent word (hint, use replace and regular expressions).
const text =
  "%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching";
let txt = text.replace(
  "%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching",
  "I am a teacher and i love teaching. there is mothing as more rewarding as educating and empowering people. I found teaching more intresting than anyother jobs. Does this motivate you to be a teacher! This 30Days of Javascript is also the result of love of teaching"
);
console.log(txt);

//4.Calculate the total annual income of the person by extracting the numbers from the following text. 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.'
let statement =
  "He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.";
let income = /\d+/g;
console.log(statement.match(income));
console.log(5000 + 10000 + 15000);
