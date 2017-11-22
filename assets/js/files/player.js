var player = {
          one:false,
          x : 0,
          y : 0,
          width: 30,
          height: 30,
          collisionsBlocks:0,
          collisionsFruits:0,
          preload:function(){      
            if(this.collisionsFruits == 0 || this.collisionsFruits == 0)
            {   
               player.one.changeAnimation('main');    
            }         
            if (this.collisionsFruits <= 5 || this.collisionsFruits >= 50)
            {
               this.one.changeAnimation('move');
            }else if(this.collisionsBlocks <= 5 || this.collisionsBlocks >= 150)
            {
                this.one.changeAnimation('main');
            }
          },
          create_player : function()
          {
            this.one  = createSprite();
            this.one.addAnimation('main','assets/imgs/Monkeybasketclear.png');
            this.one.addAnimation('move','assets/imgs/Monkeybasketfull.png')
            this.preload();
          },
          stopmove:function(){
            this.one.velocity.x = (width - this.one.position.x) - 300;
            this.one.velocity.y = (height - this.one.position.y) - 20;
          },
          move:function(){
            this.one.velocity.x = (mouseX - this.one.position.x) * 0.2;
            this.one.velocity.y = ((height -this.one.position.y) - 58);
            //this.one.attractionPoint(.2,mouseX,mouseY);
          },
         collisions_blocks:function()
         {   
                 for(var i=0;i < blocks.group.length;i++)
                 {
                     if(blocks.group[i].overlap(this.one))
                     {        
                          score.min();
                          this.collisionsBlocks += 1;
                          blocks.group[i].remove(); 
                     }
                 }      
         },
         collisions_fruits:function(){
             for(var i=0;i < fruits.group.length;i++)
             {
                 if(fruits.group[i].overlap(this.one))
                 {
                     score.max();
                     this.collisionsFruits += 1;
                     fruits.group[i].remove();
                     fruits.fruitsaudio();
                     if(fruits.group.length <= 0)
                     { 
                         fruits.create_fruits(1);
                         fruits.x = 0;
                         fruits.y = 0;
                     }
                 }
             }   
         }
     };