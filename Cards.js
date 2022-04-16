class Card{
    tab_cards = [];
    constructor(tab){
        this.id = tab["id"];
        this.description = tab["description"];
        this.achat = tab["achat"];
        this.vente = tab["vente"];
    }
    static import_cards(){
        for(var i = 0; i < tab_aimant_sort.length; i++){
            for(var j = 0; j < tab_aimant_sort[i]["number"]; j++){
                new Card(tab_aimant_sort[i]);
            }
        }
    }
    effect(id){
        switch(id){
            case S1: //prendre dans shop gratuitement
            case S2: //+1 force
            case S3: //+4 endurance
            case S4: //prendre dans le deck une carte set deja équipé
            case S5: //renouveller le shop
            case S6: //+ 3 coins 
            case S7: //+4 coins
            case S8: //+6 coins
            case S9: //+9 coins
            case S10: //+12 coins 
            case S11: //+15 coins 
            case S12: //Destroy an aimant 
            case A1: //if no card played draw 2
            case A2: //change type of a 'THON'
            case A3: //+2 coins per turn
            case A4: //+3 coins per turn.
            case A5: //+4 per turn 
            case A6: //+5 coins per turn 
            case A7: //+1 card per turn

        }
    }
}