recuperar=()=>{
    let frutas=["pera","manzana","sandia"];
    frutas.push("banana");
    return frutas;
}

testRecuperar=()=>{
    let misFrutas=recuperar();
    let frutasPrimera=misFrutas[0];
    let otraFruta=misFrutas[1];

    console.log("1>>>>>"+frutasPrimera);
    console.log("2>>>>>"+otraFruta);
}

testRecuperarDes=()=>{
    let [frutasPrimera,frutaSegunda,frutaTercera] =recuperar();
    console.log("1>>>>"+frutasPrimera);
    console.log("2>>>>"+frutaSegunda);
    console.log("3>>>>"+frutaTercera);
}