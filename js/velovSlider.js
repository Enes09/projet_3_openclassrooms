    /* Nous commencons par dévleopper un Prototype */

    var Diapo = function (id, supL, supR, infR, infL, center, right, left, zDex) {
        this.id = id;
        this.supL = supL;
        this.supR = supR;
        this.infR = infR;
        this.infL = infL;
        this.center = center;
        this.right = right;
        this.left = left;
        this.zDex = zDex;
    }

    
    var diapo1 = new Diapo($("#one"), $("#one .supLeftTriangle"), $("#one .supRightTriangle"), $("#one .infRightTriangle"), $("#one .infLeftTriangle"), "true", 0, 0, $("#one"));

    var diapo2 = new Diapo($("#two"), $("#two .supLeftTriangle"), $("#two .supRightTriangle"), $("#two .infRightTriangle"), $("#two .infLeftTriangle"), "false", 0, 0, $("#two"));

    var diapo3 = new Diapo($("#three"), $("#three .supLeftTriangle"), $("#three .supRightTriangle"), $("#three .infRightTriangle"), $("#three .infLeftTriangle"), "false", 0, 0, $("#three"));

    var diapo4 = new Diapo($("#four"), $("#four .supLeftTriangle"), $("#four .supRightTriangle"), $("#four .infRightTriangle"), $("#four .infLeftTriangle"), "false", 0, 0, $("#four"));

    /* Nous dévleoppont maintenant les fonctions */



var DiapoSystem = function (){
    
    
    
    this.slideDroit = function(){
        clearInterval(auto);
        auto =  setInterval(this.slideDroit.bind(this), 4000); 

        this.centerTable =  [diapo1.center, diapo2.center, diapo3.center, diapo4.center];

        this.center = 0;
        
        for (var i = 0; i < this.centerTable.length; i++) {
            if (this.centerTable[i] === "true") {
                this.center = i;
            };
        };

        switch (this.center) {
            case 0:

                /* On augemente le z-index de la nouvelle diapo centrale */

                diapo2.zDex.animate({zIndex: "1000"}, 0);

                /* la diapo devient centrale sans les triangles qui donne l'effet trapeze  */

                diapo2.supL.animate({borderTopWidth: "0px"}, 500);
                diapo2.supR.animate({ borderTopWidth: "0px" }, 500);
                diapo2.infR.animate({borderBottomWidth: "0px" }, 500);
                diapo2.infL.animate({borderBottomWidth: "0px"}, 500);

                diapo1.supR.animate({ borderTopWidth: "70px"}, 500);
                diapo1.infR.animate({borderBottomWidth: "70px"}, 500);

                /* déplacement des diapo */
                diapo1.id.animate({left: "-250px"}, 500);
                diapo2.id.animate({left: "-125px"}, 500);

                /* On determine la nouvelle diapo centrale */

                diapo2.center = "true";
                diapo2.right = 0;
                diapo2.left = 0;

                /* On enlève le true de l'ancienne diapo centrale */

                diapo1.center = "false";
                diapo1.right = 0;
                diapo1.left = 1;
                diapo1.zDex.css("z-index", "3");

                /*On modifie l'opacité */

                diapo2.id.animate({ opacity: "1"}, 100);

                diapo1.id.animate({opacity: "0.6"}, 100);

                break;

            case 1:

                /* On augemente le z-index de la nouvelle diapo centrale */

                diapo3.zDex.animate({zIndex: "1000"}, 0);

                /* la diapo devient centrale sans les triangles qui donne l'effet trapeze  */

                diapo3.supL.animate({borderTopWidth: "0px"}, 500);
                diapo3.supR.animate({ borderTopWidth: "0px"}, 500);
                diapo3.infR.animate({ borderBottomWidth: "0px" }, 500);
                diapo3.infL.animate({ borderBottomWidth: "0px" }, 500);

                diapo2.supR.animate({ borderTopWidth: "70px"}, 500);
                diapo2.infR.animate({ borderBottomWidth: "70px"}, 500);

                /* déplacement des diapo */
                diapo2.id.animate({left: "-250px"}, 500);
                diapo3.id.animate({ left: "-125px" }, 500);

                /* On determine la nouvelle diapo centrale */

                diapo3.center = "true";
                diapo3.right = 0;
                diapo3.left = 0;

                /* On enlève le true de l'ancienne diapo centrale */

                diapo2.center = "false";
                diapo2.right = 0;
                diapo2.left = 1;
                diapo2.zDex.css("z-index", "3");

                /*On modifie l'opacité */

                diapo3.id.animate({opacity: "1"}, 100);

                diapo2.id.animate({ opacity: "0.6"}, 100);

                break;

            case 2:

                /* On augemente le z-index de la nouvelle diapo centrale */

                diapo4.zDex.animate({zIndex: "1000"}, 0);

                /* la diapo devient centrale sans les triangles qui donne l'effet trapeze  */

                diapo4.supL.animate({borderTopWidth: "0px" }, 500);
                diapo4.supR.animate({ borderTopWidth: "0px"}, 500);
                diapo4.infR.animate({ borderBottomWidth: "0px"}, 500);
                diapo4.infL.animate({ borderBottomWidth: "0px"}, 500);

                diapo3.supR.animate({borderTopWidth: "70px"}, 500);
                diapo3.infR.animate({ borderBottomWidth: "70px"}, 500);

                /* déplacement des diapo */
                diapo3.id.animate({left: "-250px"}, 500);
                diapo4.id.animate({left: "-125px"}, 500);

                /* On determine la nouvelle diapo centrale */

                diapo4.center = "true";
                diapo4.right = 0;
                diapo4.left = 0;

                /* On enlève le true de l'ancienne diapo centrale */

                diapo3.center = "false";
                diapo3.right = 0;
                diapo3.left = 1;
                diapo3.zDex.css("z-index", "3");

                /*On modifie l'opacité */

                diapo4.id.animate({opacity: "1"}, 100);

                diapo3.id.animate({opacity: "0.6" }, 100);

                break;

            case 3:
                /* Etant donnée que c'est la dernière diapo on recommence du début*/
                diapo1.zDex.animate({zIndex: "1000"}, 0);
                diapo2.zDex.animate({zIndex: "3" }, 0);
                diapo3.zDex.animate({ zIndex: "2"}, 0);
                diapo4.zDex.animate({zIndex: "1"}, 0);

                diapo1.id.animate({opacity: "1"}, 500);
                diapo4.id.animate({opacity: "0.6"}, 500);

                /* On réinitialise les  données  */
                diapo1.supL.animate({ borderTopWidth: "0px"}, 500);
                diapo1.supR.animate({ borderTopWidth: "0px"}, 500);
                diapo1.infR.animate({borderBottomWidth: "0px"}, 500);
                diapo1.infL.animate({borderBottomWidth: "0px"}, 500);

                diapo2.supL.animate({borderTopWidth: "70px"}, 500);
                diapo2.supR.animate({borderTopWidth: "0px"}, 500);
                diapo2.infR.animate({borderBottomWidth: "0px" }, 500);
                diapo2.infL.animate({ borderBottomWidth: "70px"}, 500);

                diapo3.supL.animate({borderTopWidth: "70px"}, 500);
                diapo3.supR.animate({borderTopWidth: "0px"}, 500);
                diapo3.infR.animate({ borderBottomWidth: "0px"}, 500);
                diapo3.infL.animate({borderBottomWidth: "70px" }, 500);

                diapo4.supL.animate({ borderTopWidth: "70px" }, 500);
                diapo4.supR.animate({borderTopWidth: "0px"}, 500);
                diapo4.infR.animate({borderBottomWidth: "0px"}, 500);
                diapo4.infL.animate({borderBottomWidth: "70px"}, 500);


                diapo1.center = "true";
                diapo4.center = "false"

                /* On remet tous comme au début */
                diapo1.id.animate({left: "0px"}, 500);
                diapo2.id.animate({left: "0px"}, 500);
                diapo3.id.animate({left: "0px" }, 500);
                diapo4.id.animate({left: "0px"}, 500);

                break;

            default:
                console.log("nous n'avons pas trouver lequel est au centre");
        }

    }
    
    this.sildeGauche = function(){
        
        clearInterval(auto);
        auto = setInterval(this.slideDroit.bind(this), 4000);

        /* On détermine qui est au centre */
        this.centerTable =  [diapo1.center, diapo2.center, diapo3.center, diapo4.center];
        this.center = 0;

        for (var i = 0; i < this.centerTable.length; i++) {
            if (this.centerTable[i] === "true") {
                this.center = i;
            };
        };


        switch (this.center) {
            case 0:

                /* Etenat donnée que c'est la première diapo on va tout à la fin*/
                diapo4.zDex.animate({zIndex: "1000"}, 0);
                diapo1.zDex.animate({zIndex: "1"}, 0);
                diapo2.zDex.animate({zIndex: "2"}, 0);
                diapo3.zDex.animate({ zIndex: "3"}, 0);


                diapo4.id.animate({opacity: "1" }, 500);
                diapo2.id.animate({opacity: "0.6" }, 500);
                diapo3.id.animate({opacity: "0.6"}, 500);
                diapo1.id.animate({opacity: "0.6"}, 500);

                /* On réinitialise les  données  */
                diapo4.supL.animate({borderTopWidth: "0px"}, 500);
                diapo4.supR.animate({borderTopWidth: "0px"}, 500);
                diapo4.infR.animate({borderBottomWidth: "0px"}, 500);
                diapo4.infL.animate({borderBottomWidth: "0px"}, 500);

                diapo1.supL.animate({borderTopWidth: "0px"}, 500);
                diapo1.supR.animate({borderTopWidth: "70px"}, 500);
                diapo1.infR.animate({ borderBottomWidth: "70px"}, 500);
                diapo1.infL.animate({borderBottomWidth: "0px"}, 500);

                diapo2.supL.animate({borderTopWidth: "0px"}, 500);
                diapo2.supR.animate({borderTopWidth: "70px"}, 500);
                diapo2.infR.animate({ borderBottomWidth: "70px"}, 500);
                diapo2.infL.animate({ borderBottomWidth: "0px"}, 500);

                diapo3.supL.animate({borderTopWidth: "0px"}, 500);
                diapo3.supR.animate({borderTopWidth: "70px"}, 500);
                diapo3.infR.animate({borderBottomWidth: "70px"}, 500);
                diapo3.infL.animate({borderBottomWidth: "0px"}, 500);


                diapo4.center = "true";
                diapo1.center = "false"

                /* On remet tous comme au début */
                diapo1.id.animate({left: "-250px"}, 500);
                diapo2.id.animate({left: "-250px"}, 500);
                diapo3.id.animate({left: "-250px"}, 500);
                diapo4.id.animate({left: "-125px"}, 500);

                break;

            case 1:

                /* On augemente le z-index de la nouvelle diapo centrale */

                diapo1.zDex.animate({zIndex: "1000"}, 0);

                /* la diapo devient centrale sans les triangles qui donne l'effet trapeze  */

                diapo1.supL.animate({borderTopWidth: "0px"}, 500);
                diapo1.supR.animate({ borderTopWidth: "0px"}, 500);
                diapo1.infR.animate({borderBottomWidth: "0px"}, 500);
                diapo1.infL.animate({ borderBottomWidth: "0px"}, 500);

                diapo2.supL.animate({ borderTopWidth: "70px"}, 500);
                diapo2.infL.animate({ borderBottomWidth: "70px"}, 500);

                /* déplacement des diapo */
                diapo2.id.animate({left: "0px"}, 500);
                diapo1.id.animate({ left: "0px" }, 500);

                /* On determine la nouvelle diapo centrale */

                diapo1.center = "true";
                diapo1.right = 0;
                diapo1.left = 0;

                /* On enlève le true de l'ancienne diapo centrale */

                diapo2.center = "false";

                diapo2.right = 1;
                diapo3.right = 2;
                diapo4.right = 3;

                diapo2.left = 0;

                diapo2.zDex.css("z-index", "5");

                /*On modifie l'opacité */

                diapo1.id.animate({opacity: "1" }, 100);

                diapo2.id.animate({ opacity: "0.6"}, 100);

                break;

            case 2:

                /* On augemente le z-index de la nouvelle diapo centrale */

                diapo2.zDex.animate({ zIndex: "1000"}, 0);

                /* la diapo devient centrale sans les triangles qui donne l'effet trapeze  */

                diapo2.supL.animate({borderTopWidth: "0px"}, 500);
                diapo2.supR.animate({ borderTopWidth: "0px"}, 500);
                diapo2.infR.animate({borderBottomWidth: "0px" }, 500);
                diapo2.infL.animate({ borderBottomWidth: "0px"}, 500);

                diapo3.supL.animate({borderTopWidth: "70px"}, 500);
                diapo3.infL.animate({borderBottomWidth: "70px" }, 500);

                /* déplacement des diapo */
                diapo2.id.animate({ left: "0px" }, 500);
                diapo3.id.animate({left: "0px" }, 500);

                /* On determine la nouvelle diapo centrale */

                diapo2.center = "true";
                diapo2.right = 0;
                diapo2.left = 0;

                /* On enlève le true de l'ancienne diapo centrale */

                diapo3.center = "false";
                diapo3.right = 1;
                diapo4.right = 2;

                diapo3.left = 0;

                diapo3.zDex.css("z-index", "4");

                /*On modifie l'opacité */

                diapo2.id.animate({opacity: "1"}, 100);

                diapo3.id.animate({opacity: "0.6" }, 100);


                break;

            case 3:

                /* On augemente le z-index de la nouvelle diapo centrale */

                diapo3.zDex.animate({zIndex: "1000"}, 0);

                /* la diapo devient centrale sans les triangles qui donne l'effet trapeze  */

                diapo3.supL.animate({borderTopWidth: "0px"}, 500);
                diapo3.supR.animate({borderTopWidth: "0px"}, 500);
                diapo3.infR.animate({ borderBottomWidth: "0px"}, 500);
                diapo3.infL.animate({borderBottomWidth: "0px"}, 500);

                diapo4.supL.animate({ borderTopWidth: "70px"}, 500);
                diapo4.infL.animate({borderBottomWidth: "70px" }, 500);

                /* déplacement des diapo */
                diapo3.id.animate({left: "0px"}, 500);
                diapo4.id.animate({ left: "0%" }, 500);

                /* On determine la nouvelle diapo centrale */

                diapo3.center = "true";
                diapo3.right = 0;
                diapo3.left = 0;

                /* On enlève le true de l'ancienne diapo centrale */

                diapo4.center = "false";
                diapo4.right = 1;
                diapo4.left = 0;
                diapo4.zDex.css("z-index", "3");

                /*On modifie l'opacité */

                diapo3.id.animate({opacity: "1"}, 100);

                diapo4.id.animate({opacity: "0.6"}, 100);

                break;

            default:
                console.log("nous n'avons pas trouver lequel est au centre");
        }

    }
    
}

var diapoSystem = new DiapoSystem();
var auto = setInterval(diapoSystem.slideDroit.bind(diapoSystem), 4000);


    $("#rightButton").click(function(){diapoSystem.slideDroit()});

    $("#leftButton").click(function(){diapoSystem.sildeGauche()});

    

    document.onkeydown = function (e) {
        switch (e.keyCode) {
            case 37:
                diapoSystem.sildeGauche();
                break;
            case 39:
                diapoSystem.slideDroit();
                break;
        }
    };
