var myScore = 80;
var friendScore = 40;

if(myScore >= 80){
    if(friendScore >= 80){
        console.log("go to lunch :)");
    }
    else if(friendScore >= 60 && friendScore < 80){
        console.log("good luck next time :)");
    }
    else if(friendScore >= 40 && friendScore < 60){
        console.log("message left unseen!");
    }
    else if(friendScore < 40){
        console.log("block your friend");
    }
}
else{
    console.log("go home, act sad and sleep :(");
}