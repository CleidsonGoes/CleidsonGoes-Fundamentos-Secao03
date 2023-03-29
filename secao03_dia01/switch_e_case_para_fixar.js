let statusCandidato = "gato";

switch (statusCandidato) {
    case 'aprovada':
        console.log ("Parabéns, você está no grupo de pessoas aprovadas!");
        break;

    case 'lista':
        console.log ("Você está no grupo de pessoas aprovadas!");
        break;

    case 'reprovada':
        console.log ("Infelizmente, você reprovou.");
        break;
    
    default:
    console.log ("Informação incorreta.")
    
}