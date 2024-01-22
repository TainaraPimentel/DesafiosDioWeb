
function calculadoraPartidas (vitorias, derrotas) {
    let saldo = vitorias - derrotas
    return saldo
}

let resultadoPartidas = calculadoraPartidas(142, 40)

switch (true) {
    case (resultadoPartidas<10):
        console.log(`O Herói tem de saldo de ${resultadoPartidas} está no nível Ferro`)
        break;
    
    case (resultadoPartidas>=11 && resultadoPartidas<=20):
        console.log(`O Herói tem de saldo de ${resultadoPartidas} está no nível bronze`)
        break;

    case (resultadoPartidas>=21 && resultadoPartidas<=50):
        console.log(`O Herói tem de saldo de ${resultadoPartidas} está no nível Prata`)
        break;
    case (resultadoPartidas>=51 && resultadoPartidas<=80):
        console.log(`O Herói tem de saldo de ${resultadoPartidas} está no nível Ouro`)
        break;

    case (resultadoPartidas>=81 && resultadoPartidas<=90):
        console.log(`O Herói tem de saldo de ${resultadoPartidas} está no nível Diamante`)
        break;     
        
    case (resultadoPartidas>=91 && resultadoPartidas<=100):
        console.log(`O Herói tem de saldo de ${resultadoPartidas} está no nível Lendário`)
        break;
            
    case (resultadoPartidas>=101):
        console.log(`O Herói tem de saldo de ${resultadoPartidas} está no nível Imortal`)
        break;

    default:
        console.log("tente novamente, nível não encontrado!")  
        break;
}


