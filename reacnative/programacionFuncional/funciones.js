ejecutarSumar=()=>{
    /*let valor1=recuperarEntero("txtValor1");
    let valor2=recuperarEntero("txtValor2");
    let resultadoSuma;
    console.log("VALOR 1>>>>" + valor1+" VALOR 2>>>>"+valor2)
    resultadoSuma=sumar(valor1,valor2);
    console.log("SUMA="+resultadoSuma);*/

    ejecutarOperacion(sumar);
}

ejecutarResta=()=>{
    /*let valor1=recuperarFloat("txtValor1");
    let valor2=recuperarFloat("txtValor2");
    let resultadoResta;
    console.log("VALOR 1>>>>" + valor1+" VALOR 2>>>>"+valor2);
    resultadoResta=restar(valor1,valor2);
    console.log("RESTA="+resultadoResta);*/
}

ejecutarOperacion=(operar)=>{
    let valor1=recuperarEntero("txtValor1");
    let valor2=recuperarEntero("txtValor2");
    let resultado;
    resultado=operar(valor1,valor2);
    console.log(resultado);
}

sumar=(sum1,sum2)=>{
    let resultado;
    resultado=sum1+sum2;
    return resultado;
}

restar=(rest1,rest2)=>{
    let resultado;
    resultado=rest1-rest2;
    return resultado;
}

ejecutar=(fn)=>{
    console.log("estoy ejecutando funciones...")
    fn();
}

imprimir=()=>{
    console.log("estoy imprimiendo");
}

saludar=()=>{
    alert("APRENDIENDO PROGRAMACION FUNCIONAL")
}

testEjecutar=()=>{
    ejecutar(imprimir);
    ejecutar(saludar);
    ejecutar(()=>{
        alert("soy una funcion sin nombre(ANONIMA)")
    });
}