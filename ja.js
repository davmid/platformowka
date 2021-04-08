var can = document.getElementById('gra');
        var ctx = can.getContext('2d');
        var GrafikaPlatformy = new Image();
        GrafikaPlatformy.src = 'platforma.png'
        var plat = [];
        plat[0] = new Platforma(0, 500,750, 80);
        plat[1] = new Platforma(730, 500,750, 80);
        plat[2] = new Platforma(100, 250,750, 40);
        plat[3] = new Platforma(240, 360,100, 40);
        plat[4] = new Platforma(500, 430,100, 40);
        plat[5] = new Platforma(380, 180,100, 40);
        plat[6] = new Platforma(730, 300,100, 40);
        plat[7] = new Platforma(670, 100,100, 40);
        plat[8] = new Platforma(1000, 390,100, 40);
        plat[9] = new Platforma(200, 70,100, 40);
        plat[10] = new Platforma(1140, 320,100, 40);
        plat[11] = new Platforma(910, 160,100, 40);
        /*var GrafikaMonety = new Image();
        GrafikaMonety.src = 'moneta.png';
        var mon = [];
        mon[0] = new Moneta(130, 190, 35, 35);*/
        
        
        function Platforma(px, py, pszer, pwys)
        {
            this.x = px;
            this.y = py;
            this.pszer = pszer;
            this.pwys = pwys;
        }
        
      /*  function rysujmonety()
        {
            
        }*/
        
        function rysujplatformy()
        {
            for(var i = 0;i<plat.length;i++)
            {
                ctx.drawImage(GrafikaPlatformy, plat[i].x, plat[i].y, plat[i].szer, plat[i].wys)
            }
        }
        
        
        
       /* function Moneta(x, y, pszer, pwys)
        {
            this.x = px;
            this.y = py;
            this.pszer = pszer;
            this.pwys = pwys;
            this.czywidoczna = true;
        }*/
        
        function rysuj()
        {
            ctx.clearRect(0,0,can.width,can.height)
            rysujplatformy();
        }
        
        setInterval(rysuj,10);