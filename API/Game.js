class Game{   
    constructor(nom1,nom2){
        //creation plateau
        var plateau = document.getElementById("plateau");
        plateau.id="plateau";
        plateau.style = "background-color: rgb(161, 219, 150); width: 100%; height: 100%; border:black solid 2px";
        plateau.class = "row";

        var players = document.createElement("div");
        players.id="players";
        players.className = "col";

        plateau.appendChild(players);

        var deck = new Deck();
        Deck.shuffle();

        var shop = new Shop();
        shop.remplir_shop();

        var pile = [];

        var player1 = new Player(nom1,1);
        var player2 = new Player(nom2,2);
       
        

        //this.contract = new Contract();
        //this.challenge = new Challenge();

    
    }


}
class Shop{
    static tab_shop = [];
    constructor(){
        var titre = document.createElement("h1");
        titre.textContent = "SHOP";
        titre.className = "text-center"
        var shop = document.createElement("div");
        shop.id = "shop";
        shop.style = "border:black solid 2px;";
        shop.className += "col-3";
        var div = document.createElement("div");
        div.className = "row";
        //creer emplacemment shop
        for(var i = 0; i < 10; i++){
            var emplacement = document.createElement("div");
            emplacement.id = "emplacement" + i;
            emplacement.style = "width:200px; height:150px";
            emplacement.className = "row-auto";
            div.appendChild(emplacement);
        }
        shop.appendChild(titre);
        shop.appendChild(div);
        var plateau = document.getElementById("plateau");
        plateau.appendChild(shop);
    }

    remplir_shop(){
        for(var i = 0; i < 10; i++){
            var carte = Deck.draw();
            Shop.tab_shop.push(carte);
            var emplacement = "emplacement"+i;
            carte.afficher(emplacement);
        }
    }
}

class Player{
    constructor(name,etat){
        var players = document.getElementById("players");

        var player = document.createElement("div");
        var main = document.createElement("div");
        player.id = "player"+etat;
        player.className = "row";
        player.style = "border:black solid 2px; height:50%";
        main.id="main"+etat;
        main.className = "row";
        
        

        this.name=name;
        this.etat = etat;
        this.main=[];
        this.thon = new Thon();
        this.coins = 0;

        player.appendChild(main);
        players.appendChild(player);
        
        this.remplir_main();
        
    }

    remplir_main(){
        for(var i = 0; i < 7; i++){
            var carte = Deck.draw();
            this.main.push(carte);
            carte.afficher("main"+this.etat);
        }
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
    static tab_deck = [];
    constructor(){
        Deck.import_cards();
        Deck.shuffle();
        //Deck.tab_deck = Card.tab_cards;
    }

     //creer toutes les cartes du deck et les ajoute dans un tableau
     static import_cards(){
        //aimant et sort
        for(var i = 0; i < tab_aimant_sort.length; i++){
            for(var j = 0; j < tab_aimant_sort[i]["number"]; j++){
                this.tab_deck.push(new Card(tab_aimant_sort[i]));
            }
        }

        //ekip
        for(var i = 0; i < tab_ekip.length; i++){
                this.tab_deck.push(new Card(tab_ekip[i]));
        }
    }

    static shuffle(){
        this.tab_deck = this.tab_deck.sort(() => Math.random() - 0.5);
    }

    static draw(){
        var carte = Deck.tab_deck.pop();
        return carte;
    }
}
class Contract{

}

class Challenge{

}