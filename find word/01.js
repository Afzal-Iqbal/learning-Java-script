text = "The sun was setting over the horizon, casting a warm golden glow across the landscape. Birds chirped melodiously as they returned to their nests. The gentle breeze carried the scent of blooming flowers, creating a serene and peaceful atmosphere.";
var count = 0;
for (var i = 0; i < text.length ; i++){
    var item = text.slice(i,i+3);
    if((item.toLowerCase()) === 'the'){
        text = text.slice(0,i) + "THE " + text.slice(i+4);
        count++;
    }
}
console.log(text)
console.log(count)