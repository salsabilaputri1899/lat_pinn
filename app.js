x = 50;
var x;

let z;
z = 50;

const y = 60;

function regularFunction(){
    //return 0;
    console.log(this);
}

//var result = regularFunction();

arrowFunction = () => {return 'arrow function'};
var result2 = arrowFunction();
//console.log(result2);

document.getElementById('regular').addEventListener('click', regularFunction);
document.getElementById('arrow').addEventListener('click', arrowFunction);