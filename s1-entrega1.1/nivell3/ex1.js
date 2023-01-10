let matriuFunc = []

const count = () => {
    for (let i = 0; i<=9; i++){
        console.log(i)
    }
}

const emplena = (matriu, funcio) => {
   
    for(let a=0;a<=10;a++){
        matriu.push(funcio)
    }

   for(i in matriuFunc){
    matriuFunc[i]()
   }
}

emplena(matriuFunc,count)