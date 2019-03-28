var CardSystem = function () {

    this.card2 = function () {

        $('.all').css("display", "block");
        $(".twice").css("display", "block");
        $(".third").css("display", "none");
        $("#canvas").css("opacity", "0");

        $("#name").html("Station : " + bikeSystem.bike.station);


        if (bikeSystem.status === "OPEN" && bikeSystem.bikes > 0) {
            $("#status").html("Ouvert");
            $("#reserve").css("display", "block");
        } else {
            $("#status").html("Fermé");
            $("#reserve").css("display", "none");
        }

        $("#adress").html("Adresse : " + bikeSystem.bike.address.toLowerCase());
        $("#availableBikes").html("Vélo disponible : " + bikeSystem.bikes);
        $("#availableBikeStands").html("Support de vélo disponible : " + bikeSystem.bikesStand);


        if (bikeSystem.banking === true) {
            $("#banking").html("Terminal de paiement : oui");
        } else {
            $("#banking").html("Terminal de paiement : non");
        }

        clear(); //canvas

        $("#indicateur").css("display", "none");

    };

    this.card3 = function () {

        $('.all').css("display", "block");
        $('.twice').css("display", "none");
        $('#canvas').css("opacity", "1");
        $("#reserve").css("display", "none");
        $(".third").css("display", "block");

        if (canvasElement.canvasController === true) {
            $("#reserveTheBike").css("display", "block");
        }

    }

    this.card4 = function () {
        $('.all').css("display", "block");
        $('.twice').css("display", "none");
        $('#canvas').css("opacity", "0");
        $("#reserve").css("display", "none");
        $(".third").css("display", "none");
        $("#reserveTheBike").css("display", "none");
    }
}

var Canvas = function(){
    this.canvasController = false;
}
var canvasElement = new Canvas();

var cardSystem = new CardSystem();
$("#reserve").click(cardSystem.card3);
$("#reserveTheBike").click(cardSystem.card4);


//var canvasController = false;

/*
var Canvas = function (){

    
    this.canvas = document.getElementById("canvas");
    this.ctx = this.canvas.getContext("2d");
    this.pos = {x: 0,y: 0};
    this.canvasW = $("#canvas").css("width");
    this.canvasH = $("#canvas").css("height");
    this.canvasOff = $("#canvas").offset();
    this.canvasx = this.canvasOff.left;
    this.canvasy = this.canvasOff.top;
    this.controller = false;
    
    this.draw = function(e){
        if (e.buttons !== 1) return;
         this.ctx.beginPath();
         this.ctx.moveTo(this.pos.x, this.pos.y);
         this.sPos();
         this.ctx.lineTo(this.pos.x, this.pos.y);
         this.ctx.strokeStyle = 'black';
         this.ctx.lineWidth = 8;
         this.ctx.lineCap = "round";
         this.ctx.stroke();
         this.controller = true;
         cardSystem.card2();
    }
    this.sPos = function(e){
         this.pos.x = e.pageX - this.canvasx;
         this.pos.y = e.pageY - this.canvasy;
    }
    
    this.init = function(){
         this.canvas.addEventListener("mousemove", canvasElement.draw());
         this.canvas.addEventListener("mousemove", canvasElement.sPos());
         this.canvas.addEventListener("mouseenter", canvasElement.sPos());
    };
    
    
    this.clear = function(){
        document.getElementById("canvas").getContext("2d").clearRect(0, 0, 300, 150);
        this.controller = false;
        document.getElementById("reserveTheBike").style.display = "none";
    }
    
}

var canvasElement = new Canvas();
window.onload = canvasElement.init;
$("#clear").click(canvasElement.clear());*/


var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
var pos = {
    x: 0,
    y: 0
};

var canvasW = $("#canvas").css("width");
var canvasH = $("#canvas").css("height");

var canvasOff = $("#canvas").offset();
var canvasx = canvasOff.left;
var canvasy = canvasOff.top;


window.onload = init;

function init() {
    canvas.addEventListener("mousemove", draw);
    canvas.addEventListener("mousemove", sPos);
    canvas.addEventListener("mouseenter", sPos);
};

function draw(e) {
    if (e.buttons !== 1) return;
    ctx.beginPath();
    ctx.moveTo(pos.x, pos.y);
    sPos(e);
    ctx.lineTo(pos.x, pos.y);
    ctx.strokeStyle = 'black';
    ctx.lineWidth = 8;
    ctx.lineCap = "round";
    ctx.stroke();
    canvasElement.canvasController = true;
    cardSystem.card3();
};

function sPos(e) {
    pos.x = e.pageX - canvasx;
    pos.y = e.pageY - canvasy;
};

$("#clear").click(clear);

function clear(canvasController) {
    document.getElementById("canvas").getContext("2d").clearRect(0, 0, 300, 150);
    canvasElement.canvasController = false;
    document.getElementById("reserveTheBike").style.display = "none";
};
