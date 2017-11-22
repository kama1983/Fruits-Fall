var gravity = {blocks:0.07,fruits:0.04,coins:0.05};
var speed = 1;  
var game = {
        started:false,
        reseted:false,
        mover:false,
        ground:false,
        bgaudio : false,
        loop:false,
        audio:function()
        {
             soundFormats('mp3','ogg','wav');
             this.bgaudio = loadSound(['assets/audio/music.mp3','assets/audio/music.ogg','assets/audio/music.wav']);
        },
        audiorun:function(){
            this.bgaudio.setVolume(0.1);
            this.bgaudio.loop();
            this.bgaudio.play();
        },
        stopaudio:function(){
           document.getElementById().value = '';      
        },
        startaudio:function(){
           document.getElementById().value = '';      
        },
        stop:function(){
           this.started = false;
        },
        rand:function(min, max)  
        { 
            return Math.random() * (max-min) + min; 
        },
        start:function(){ 
            if(game.started == true)
            {
               this.hiddenstart();  
            }else{
               this.startGame();
               blocks.create_Blocks(2);
               fruits.create_fruits(1);
               player.create_player();
            }
        },
        overscore:function(){       
          if(score.score > 10000)
          {
             setTimeout(function(){  
                 document.getElementById('win').style.display = 'block';                             
             },200); 
             setTimeout(function(){
                 this.started = false;
                 document.location.reload();
                 score.lives = 3;   
             },3000);
          }
        },
        reset:function(){         
            if(game.reseted == true)
            {
               this.started = true;
               this.hiddenstart();
               game.reseted = false;
            }else{
               blocks.clear_blocks();
               fruits.clear_fruits();
               coins.clear_coins();
            }
        },
        hiddenstart:function(){
            document.getElementById('screen').style.display = 'none';
            document.getElementById('gameover').style.display = 'none';  
        },
        startGame:function()
        {   
            this.loop = true;
            this.started = true;
            document.getElementById('win').style.display = 'none';
            document.getElementById('screen').style.display = 'block';
            document.getElementById('gameover').style.display = 'none';  
        },
        over:function(){
             this.hiddenstart();
             document.getElementById('gameover').style.display = 'block';
             setTimeout(function(){  
                 this.started = false;
                 if(score.lives <= 0)
                 {
                    document.location.reload();
                    score.lives = 3;
                 } 
             }, 3000);  
        },
        drawAnimation:function(){ 
            player.preload();
        },
        draw:function(){
            if(game.started)
            {
              player.move();
              blocks.gravity_blocks();
              fruits.gravity_fruits();
              player.collisions_fruits();
              player.collisions_blocks();               
              drawSprites();
              coins.gravity_coins();
              score.create_score();
              score.create_lives();
              coins.colloinscoins();
              game.overscore();
            }
            else{
               this.started = false;
            }
        }
     }  