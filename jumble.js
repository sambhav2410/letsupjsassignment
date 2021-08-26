let words=[
    {
        jumbled:"papel",
        correct:"apple"
    },
    {
        jumbled:"bilemo",
        correct:"mobile"
    },
    {
        jumbled:"oiln",
        correct:"lion"
    },
    {
        jumbled:"oppeel",
        correct:"people"
    },
    {
        jumbled:"ocnuryt",
        correct: 'country'
    },
]

let curword = 0;
let score=0;

function displayWords(){
  document.querySelector("#jword").innerText=
   words[curword].jumbled;

   document.querySelector("#score").innerText=score;
} 

displayWords();


function checkans(){

    

    let answer = document.querySelector('#inp').value;

    if(answer.toLowerCase()===words[curword].correct.toLowerCase()){
       score++;

    }

    if(curword==words.length-1){

        let msg="";

        if(score===5){
            msg="Amazing "+score
        }
        else if(score===4){
            msg="Well Done "+score
        }
        else if(score<4){
            msg="Do hard work "+score
        }
         
        alert(msg);
        location.reload();
    }
    else{
    curword++;
    }

    displayWords();
    document.querySelector('#inp').value="";

    
}

 