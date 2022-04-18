class Card{
    static tab_cards = [];

    constructor(tab){
        //sortiliege
        if(tab["id"].split("")[0] == "S"){
            this.titre = "Sortiliège";
            this.id = tab["id"];
            this.description = tab["description"];
            this.achat = tab["achat"];
            this.vente = tab["vente"];
        //aimant
        }else if(tab["id"].split("")[0] == "A"){
            this.titre = "Aimant";
            this.id = tab["id"];
            this.description = tab["description"];
            this.achat = tab["achat"];
            this.vente = tab["vente"];
        //ekip
        }else{
            this.titre = "Ekip";
            this.id = tab["id"];
            this.description = tab["description"];
            this.achat = tab["achat"];
            this.vente = tab["vente"];
            this.type = tab["type"];
            this.part = tab["part"];
        }
        
    }

    //effet de la carte
    effect(){
        //effet aimant et sort
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
            default: //equipement
        }

    }

    //afficher une carte et a quel emplacement
    afficher(endroit){
        var X = document.getElementById(endroit);

        
        if(this.titre == "Sortiliège" || this.titre == "Aimant"){
            var carte = document.createElement("div");
            
            var titre = document.createElement("h5");
            titre.className = "row text-center";
            var image = document.createElement("img");
            var description = document.createElement("p");
            var prix = document.createElement("p");
    
            titre.textContent = this.titre;
           
            image.src = "images/lin.png";
            image.style = "width:100px"
            description.textContent = this.description;
            prix.textContent = this.achat + "/" + this.vente;
    
            carte.appendChild(titre);
            carte.appendChild(image);
            carte.appendChild(description);
            carte.appendChild(prix);

        }else{
            var row = document.createElement("div");
            var carte = document.createElement("div");
            var titre = document.createElement("h5");
            var image = document.createElement("img");
            var description = document.createElement("p");
            var prix = document.createElement("p");
            var part = document.createElement("p");
            var type = document.createElement("p");//TODO: changer en image
    
            titre.textContent = this.titre;
            image.src = "images/lin.png";
            image.style = "width:100px"
            description.textContent = this.description;
            prix.textContent = this.achat + "/" + this.vente;
            part.textContent = this.part;
            type.textContent = this.type;
            type.className = "col";
            part.className = "col-auto";
            row.className = "row"
    
            
            row.appendChild(part);
            row.appendChild(type);
            carte.appendChild(titre);
            carte.appendChild(row);
            carte.appendChild(image);
            carte.appendChild(description);
            carte.appendChild(prix);
    
            
        }
        //si emplacement shop
        if(endroit.split("")[0] == "e"){
            carte.style = "position:relative;  width:150px; height:210px; top:0; z-index:2; background-color:white; border:1px solid; transform: rotate(90deg)";
        }else{
            carte.style = "position:relative;  width:150px; height:210px; top:0; z-index:2; background-color:white; border:1px solid";
        }
        carte.className+="col";
        carte.id = this.id;

        X.appendChild(carte);
       
    }
}