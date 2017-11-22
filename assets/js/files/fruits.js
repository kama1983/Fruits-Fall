var fruits = {         
          gravity: gravity.fruits,
          group:false,
          width: 30,
          height: 30,
          x : 0,
          y : 0,
          addImage:function(image,x,y,width,height){
               var ols = loadImage(image);
               ols.resize(width,height);
               var aa = createSprite(x,y,30,30);
               aa.addImage(ols);
               return aa;                            
          },
            fruitsound:function(){
               soundFormats('mp3','ogg','wav');
               this.coins = loadSound(['assets/audio/Eating.mp3','assets/audio/Eating.ogg','assets/audio/Eating.wav']);
            },
            fruitsaudio:function(){
                this.coins.setVolume(0.1);
                this.coins.play();
            },
          create_fruits : function($i)
          {
                 this.group = new Group();
                 this.x = this.width * Math.random();
                 this.y = speed * Math.random();
                 var fruits = ['a','b','c','d','f','g','h','i'];
                 for(var i = 0;i < $i;i++){
                   // var c = createSprite(
                       // random(width), random(height * Math.random()),
                       // this.width,this.height);
                    //  c.shapeColor = color(random(200, 255));
                    for(var a = 0; a < fruits.length;a++) {
                      if(a == 7 || a ==5 || a == 3 || a == 1)
                      {
                        var c = this.addImage('assets/imgs/'+fruits[a - 1]+'.png',random(width), random(height * Math.random()),30,30);
                        this.group.add(c);
                      }
                    }
                 }
          },
         gravity_fruits:function()
         {
             for(var i = 0; i < this.group.length;i++)
             {
                   this.group[i].position.y += this.group[i].height * this.gravity;
                     if(frameCount == 0)
                     {
                        this.group[i].poistion.y = 0;
                     }
                     if (this.group[i].position.y > height) {
                        this.group[i].position.y = 0
                     }
             }
         },
         clear_fruits:function()
         {
             this.group.clear();
             this.x = 0;
             this.y = 0;
             this.width = 0;
             this.height = 0;
             this.gravity = 0;
         }
      };