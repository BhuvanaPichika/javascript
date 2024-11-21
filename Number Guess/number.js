let random_num=Math.floor(Math.random()*100);
console.log("random:",random_num)
let guess=10;
let score="";
function check(){
    var val=document.getElementById("num").value;
    var result="";
    if(val==random_num){
        // console.log(val,random_num)
        result="Congratulations... You Guess the correct Number";
        document.getElementById("result").style.color="green";
        // result.style.color="green";
        document.getElementById("num").disabled=true;
        document.getElementById("che").disabled=true;
        
        

    }else if(val>random_num){
        result="Your Guess is High";
        guess--;
        score= guess + " " + "Chances Left";
        
    }
    else if(val<random_num){
        result="Your Guess is Low";
        guess--;
        score= guess +" " + "Chances Left";
    }
    if(guess==0){
        result="You Lost !! Try Next Time";
        document.getElementById("num").disabled=true;
        document.getElementById("che").disabled=true;
        
    }
    if(!val){
        // console.log(val)
        result="Enter the Number";
        document.getElementById("result").style.color="red";
        score="";
    }
    document.getElementById("result").innerHTML=result;
    document.getElementById("score").innerHTML=score;
};
function reset(){
    guess=10;
    document.getElementById("result").innerHTML=" ";
    document.getElementById("score").innerHTML=" ";
    document.getElementById("num").value=" ";
    document.getElementById("num").disabled=false;
    document.getElementById("che").disabled=false;
}