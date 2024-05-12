ejecutarSumar=()=>{
    let valor1=recuperarEntero("txtValor1");
    let valor2=recuperarEntero("txtValor2");
    let resultadoSuma;
    console.log("VALOR 1>>>>" + valor1+" VALOR 2>>>>"+valor2)
    resultadoSuma=sumar(valor1,valor2);
    console.log("SUMA="+resultadoSuma);
}

sumar=(sum1,sum2)=>{
    let resultado;
    resultado=sum1+sum2;
    return resultado;
}

ejecutarResta=()=>{
    let valor1=recuperarFloat("txtValor1");
    let valor2=recuperarFloat("txtValor2");
    let resultadoResta;
    console.log("VALOR 1>>>>" + valor1+" VALOR 2>>>>"+valor2);
    resultadoResta=restar(valor1,valor2);
    console.log("RESTA="+resultadoResta);
}

restar=(rest1,rest2)=>{
    let resultado;
    resultado=rest1-rest2;
    return resultado;
}