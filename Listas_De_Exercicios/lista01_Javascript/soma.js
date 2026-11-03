function somar(array){
    var soma = 0;
    array.forEach(element => {
        soma+= element;
    });
    return soma;
}

function media(array){
    var media =0;
    array.forEach(element => {
        media += element;
    });
    return media / array.length;
    
}

function menor(array){
    var menor = array[0];
    array.forEach(element => {
        if(element < menor){
            menor = element;
        }
        
    });
    return menor;
}


function segundoMenor(array){
    var menor
    var segMenor;

    array.forEach(element => {
        
        if(element <= menor || menor == null){
            segMenor = menor;
            menor = element;
            
        }
        else if(element < segMenor || segMenor == null){
            segMenor = element;
        }
        
    });
    return segMenor;
}



function filtroImpar(array){
    const arrayImpar = [];

    array.forEach(element => {
        
        if(element %2 ==1){
            arrayImpar.push(element);
            
        }
       
    });
    return arrayImpar;
}

function inverter(array){
    const arrayInvertido = [];
    
    for (let i = array.length-1; i >= 0; i--) {
       arrayInvertido.push(array[i]);
        
    }
    return arrayInvertido;
}





console.log(somar([1, 2, 3]));
console.log(media([6, 5,3, 7.5, 8.7]));
console.log(menor([6, 5,3, 7.5, 8.7]));
console.log(segundoMenor([3, 4, 7.5, 5, 8.7]));
console.log(filtroImpar([1, 2, 3,4,6,5,8,9,11,14,15]));
console.log(inverter([1, 2, 3]));

