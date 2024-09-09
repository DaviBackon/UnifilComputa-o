var alternativas = document.getElementsByClassName("alternativas");

for(const resposta of alternativas) {
    
    resposta.addEventListener('click', function(e){
        console.log(resposta)
        
    })

}

