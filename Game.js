class Game{
    constructor(nom1,nom2){
        this.deck = new Deck();
        this.pile = [];
        this.contract = new Contract();
        this.challenge = new Challenge();
        this.player1 = new Player();
        this.shop = new Shop();
    }

    static creation_plateau(){

    }
}

class Player{
    constructor(name,etat){
        this.name=name;
        this.etat = etat;
        this.deck=[];
        this.thon = new Thon();
    }
}

class Thon{
    constructor(){
        this.strength = 2;
        this.toughness = 8;
        this.body = null;
        this.hat = null;
        this.accessory = null;
        this.left_leg = null;
        this.right_leg = null;
        this.left_arm = null;
        this.right_arm = null;
    }
}

class Deck{
    static tab_cartes = [];
    constructor(){
        
    }

    static import_deck(){
        for(var i = 0; i < tab_ekip.length; i++){
            this.tab_cartes.push(tab_ekip[i]);
        }
    }

    static shuffle(){
        this.tab_cartes = this.tab_cartes.sort(() => Math.random() - 0.5);
    }

    static draw(){
        carte = tab_cartes.pop();
        return carte;
    }
}
class Contract{
    
}

class Challenge{

}