let puntaje =0;
const numeroVidas=5;
const iva=0.12;

ganarPuntos=()=>{
    puntaje=8;
    puntaje=puntaje+10;
}

perderVidas=()=>{
    //no se puede cambiar ya que es una constante
    numeroVidas=numeroVidas-1;
}