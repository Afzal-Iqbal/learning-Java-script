var count = 0;

function Timer(){
    count++;
    console.log(count);
    if(count === 5){
        clearInterval(my_interval)
    }
}
var my_interval = setInterval(Timer,1000);