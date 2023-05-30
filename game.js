let question = document.getElementById("question");
let response = document.getElementById("response");
let bouttonvalider = document.getElementById("bouttonvalider");
let juste = document.getElementById("juste");
let faux = document.getElementById("faux");
let nbjuste = 0;
let nbfaux = 0;
let n = 0;

// |||||||||||||||||||||||||||||||||||||||||||||||||||||||||

let questResp = [
    {
        quest:"de quelle couleur est le ciel?",
        resp:"blue"
    },
    {
        quest:"quelle est la couleur du soleil?",
        resp:"jaune"
    },
    {
        quest:"quelle est la capitale du cameroun?",
        resp:"yaounde"
    }
]

// |||||||||||||||||||||||||||||||||||||||||||||||||||||||||

function resetGame(){
    n = 0 ;
    nbfaux = 0 ;
    nbjuste = 0 ;
    question.textContent = questResp[n].quest;
    juste.textContent = nbjuste;
    faux.textContent = nbfaux;
    response.value = "";
    resetResponse();
}
resetGame(); 

// |||||||||||||||||||||||||||||||||||||||||||||||||||||||

function resetResponse(){
    bouttonvalider.addEventListener('click', valider);
    response.addEventListener('keydown', validationEnter);
    response.removeAttribute('readonly');
    response.value="";
}

// |||||||||||||||||||||||||||||||||||||||||||||||||||||||

function questionSuivante(){
    if (n < (questResp.length-1)){
        n += 1;
        question.textContent = questResp[n].quest;

    }else{
    response.value = "gagnééé!!!";
    response.setAttribute('readonly', true);
    question.textContent = "";
        }
}

    function valider(){
        
    if(response.value  === questResp[n].resp){
        response.value="bravo !!!";
        setTimeout (questionSuivante, 2200);
        nbjuste += 1;
        juste.textContent = nbjuste;
    }
            else if (response.value === "gagnééé!!!"){
                setTimeout(resetGame, 1000);
            }
    else{
        response.value= "ECHEC";
        nbfaux += 1;
        faux.textContent = nbfaux;
    }

bouttonvalider.removeEventListener('click', valider);
response.removeEventListener('keydown', validationEnter);
response.setAttribute('readonly', true);
setTimeout(resetResponse, 2000);
}

function validationEnter(e){
    // if (e.key === "Enter") {bouttonvalider.onclick()}
    if (e.key === "enter") {valider ()}
}

response.addEventListener('keydown', function (e){
    console.log(e);
})

response.addEventListener('keydown', function (e){
    if(e.key ==='Enter'){bouttonvalider.onclick()}
})