function jourDeLaSemaine(){
    var date = new Date();
    var jour = date.getDay();
    var jourSemaine;

switch (jour){
    case 0:
        jourSemaine = "Lundi";
        break;
    case 1:
        jourSemaine = "Mardi";
        break;
    case 2:
        jourSemaine = "Mercredi";
        break; 
    case 3:
        jourSemaine = "Jeudi";
        break;
    case 4:
        jourSemaine = "Vendredi";
        break;
    case 5:
        jourSemaine = "Samedi";
        break;
    case 6:
        jourSemaine = "Dimanche";
        break;
    default:
        jourSemaine = "jour invalide";
}
alert("Nous sommes " + jourSemaine);
}