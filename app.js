class App

{

    runApplication()

    {

        console.log("hello World!");

        let canvas = document.getElementById("canvasId");



        let g = canvas.getContext("2d");

        g.fillStyle = "green";

        g.beginPath();
        g.fillStyle = "black";
        g.rect(430, 600, 130, 900)
        g.closePath();
        g.fill();

        this.tekenhuis(750,600,g);

        this.tekenhuis(700,520,g);

        this.tekenhuis(650,460,g);

        this.tekenhuis(600,400,g);

        this.tekenhuis(550,340,g);

        this.tekenhuis(500,280,g);

        this.tekenhuis(450,220,g);

        console.log


        this.tekenhuis(160,600,g);

        this.tekenhuis(210,535,g);

        this.tekenhuis(260,475,g);

        this.tekenhuis(310,415,g);

        this.tekenhuis(360,345,g);

        this.tekenhuis(410,280,g);

        this.tekenhuis(550,340,g);




        this.tekenhuis(250,605,g);

        this.tekenhuis(340,606,g);

        this.tekenhuis(550,600,g);

        this.tekenhuis(650,600,g);
        

        



        this.tekenKerstBoom(450, 100, g);

        this.tekenKerstBoom(300, 720, g);

        this.tekenKerstBoom(600, 720, g);


        this.tekentekst("MARRY",450,500,g);
        this.tekentekst("CRISTMAS",430,550,g)

        console.log(canvas);

    }

    tekenKerstBoom(x, y, g){

        this.tekenKerstBoomDriehoek(x, y,g);

        this.tekenKerstBoomDriehoek(x, y+30,g);

        this.tekenKerstBoomDriehoek(x, y+60,g);

        this.ballen(x+50, y+10,g);

        this.ballen(x+35, y+53,g);

        this.ballen(x+20, y+22,g);

        this.ballen(x+35, y+-20,g);

        this.ballen(x+70, y+-10,g);

        this.ballen(x+76, y+46,g);

        this.ballen(x+54, y+34,g);

    }
        

    tekenhuis(x,y,g){

        g.beginPath();

        g.fillStyle = "green";

        g.moveTo(30+x,10+y);

        g.lineTo(70+x,20+y);

        g.lineTo(60+x,40+y);

        g.lineTo(20+x,30+y);

        g.lineTo(30+x,10+y);

        g.fill();

        g.closePath();



        g.beginPath();

        g.fillStyle ="brown";

        g.lineTo(70+x,20+y);

        g.lineTo(80+x,30+y);

        g.lineTo(80+x,50+y);

        g.lineTo(60+x,60+y);

        g.lineTo(60+x,40+y);

        g.lineTo(20+x,30+y);

        g.lineTo(20+x,50+y);

        g.lineTo(60+x,60+y);

        g.lineTo(60+x,40+y);

        g.lineTo(80+x,30+y);

        g.lineTo(70+x,20+y);

        g.lineTo(60+x,40+y);

        g.lineTo(80+x,30+y);

        g.fill();

        g.stroke();

        g.closePath();



        g.beginPath();

        g.fillStyle ="red";

        g.moveTo(35+x,35+y);

        g.lineTo(35+x,45+y);

        g.lineTo(45+x,47+y);

        g.lineTo(45+x,38+y);

        g.moveTo(35+x,35+y);

        g.lineTo(45+x,38+y);

        g.fill();

        g.stroke();

        g.closePath();

    }



    tekenKerstBoomDriehoek(x,y,g){

        g.fillStyle = "green";

        g.beginPath();

        g.moveTo(x, y);

        g.lineTo(50+x,y-50);

        g.lineTo(100+x, 0+y);

        g.fill();

        g.fillStyle = "brown";

        g.fillRect(x+38, y+20, 23, 30);

    }



    ballen(x,y,g){

        for (var i = 0; i < 6; i++)

        g.beginPath();

        if (i%2 == 0)

        g.fillStyle = 'red';

        g.arc(x , y, 5, 0, 2 * Math.PI);

        g.fill();

    }
    
    tekentekst(t,x,y,g){
        g.font = "30px Arial";
        g.fillText(t, x,y);
    }
}



let app = new App();

app.runApplication();
