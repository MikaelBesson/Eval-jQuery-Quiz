let questions =
    [{
    question: "L’ordre des épisodes 1, 2 et 3 est le suivant :",
    choix:
            ["1-Un Nouvel espoir 2-L’Empire contre-attaque 3-Le Retour du Jedi" ,
            " 1-La Menace fantôme 2-L’Empire contre-attaque  3-La Revanche des Sith",
            " 1-La Menace fantôme 2-L’Attaque des clones 3-La Revanche des Sith"],
    bonneReponse: "1-Un Nouvel espoir 2-L’Empire contre-attaque 3-Le Retour du Jedi"
},
    {
        question: "Dans la saga, Luke Skywalker et la princesse Leia sont :",
        choix:
                ["En couple",
                "Frère et sœur",
                "Père et fille"],
        bonneReponse: "Frère et sœur"
    },
    {
        question: "Quel est l’ordre 66 ?",
        choix:
                ["L’ordre donné aux clones de tuer tous les Jedi",
                "L’ordre donné aux clones de libérer Anakin et Padmé sur la planète Géonosis",
                "L’ordre donné aux rebelles de détruire l’Étoile Noire\n"],
        bonneReponse: "L’ordre donné aux clones de tuer tous les Jedi"
    },
    {
        question: "Sur quelle planète Luke Skywalker rencontre-t-il Yoda pour la première fois ?",
        choix:
                ["Coruscant",
                "Dagobah",
                "Yavin IV"],
        bonneReponse: "Dagobah"
    },
    {
        question: "Quel acteur joue le rôle de Mace Windu ?",
        choix:
                ["Harrison Ford",
                "Laurence Fishburne",
                "Samuel L. Jackson"],
        bonneReponse: "Samuel L. Jackson"
    },
    {
        question: "Les sabres lasers fonctionnent grâce à :",
        choix:
                ["Un diamant",
                "Un cristal",
                "La Force"],
        bonneReponse: "Un cristal"
    },
    {
        question: "Quel est le célèbre vaisseau chasseur de l'Alliance rebelle ?",
        choix:
                ["Le F-Wing",
                "Le X-Wing",
                "Le A-Wing"],
        bonneReponse: "Le X-Wing"
    },
    {
        question: "Quel est le vaisseau mythique piloté par Han Solo ?",
        choix:
                ["Le Corbeau millénium",
                "L’Aigle millénium",
                "Le Faucon millénium"],
        bonneReponse: "Le Faucon millénium"
    },
    {
        question: "Le personnage de Jar Jar Binks appartient à l’espèce des :",
        choix:
                ["Gungans",
                "Ewoks",
                "Wookiees"],
        bonneReponse: "Gungans"
    },
    {
        question: "Qui est le premier propriétaire du Faucon Millénium ?",
        choix:
                ["Han Solo",
                "Lando Calrissian",
                "Jabba le Hutt"],
        bonneReponse: "Lando Calrissian"
    },
];
let score = 0;
let index = 0;
// lacement de la partie

$("#start").click(function (){
    index=0;
    $("#question").html(questions[0].question);
    $("#r1").html(questions[0].choix[0]);
    $("#r2").html(questions[0].choix[1]);
    $("#r3").html(questions[0].choix[2]);
})

//passez a la question suivante

$("#valid").click(function (){
    if(index > questions.length - 1){
        return;
    }
    $("#question").html((questions[index]).question);
    $("#r1").html((questions[index]).choix[0]);
    $("#r2").html((questions[index]).choix[1]);
    $("#r3").html((questions[index]).choix[2]);
    index++;
})

//verification de la reponse choisi et verrification si c'est la bonne

let choix = $("#reponseBox").ready(function(){
    $("#reponseBox > button").click(function(){
        choix = $(this).html();
        alert(choix)
    });
});
console.log(choix.innerHTML)
















//function check(){
//     if(choixJoueur === questions[index].bonneReponse){
//         return true;
//     }
// }


