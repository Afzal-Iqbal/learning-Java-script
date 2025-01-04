text = "In the bustling city, people hurried along the crowded streets, each lost in their own thoughts. The aroma of freshly baked bread wafted from a nearby bakery, enticing passersby. Street performers entertained the crowd with their lively music and impressive acrobatics.";

count = 0;
for(var i = 0; i < text.length;i++){
    var item = text.slice(i,i+3);
    if(item.toLowerCase() === 'the'){
        text = text.slice(0,i) + "THE" + text.slice(i+3);
        count++;
    }
}
console.log(count);
console.log(text);