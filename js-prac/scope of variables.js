const myConst = 10;
function alpha(){
    const myConst = 11;
    if (true){
        const myConst = 21;
        console.log(myConst)
    }
    console.log(myConst);
}

alpha()


var myVar = 10;
function alpha(){
    var myVar = 11;
    if (true){
        var myVar = 21;
        console.log(myVar)
    }
    console.log(myVar);
}

alpha()


let myLet = 10;
function alpha(){
    let myLet = 11;
    if (true){
        let myLet = 21;
        console.log(myLet)
    }
    console.log(myLet);
}

alpha()