 var blocks = {        
          gravity:gravity.blocks,
          group:false,
          x : 0,
          y : 0,
          width: 30,
          height: 30,   
          addImage:function(image,x,y,width,height){
               var ols = loadImage(image);
               ols.resize(30,30);
               var aa = createSprite(x,y,width,height);
               aa.addImage(ols);
               return aa;                            
          },
          drawtime:function()   
          {
             if (frameCount % 100 == 75) {            
               if(blocks.group.length <= 5)
               {
                  var x = this.addImage('assets/imgs/rocks1.png',random(width),random(height * Math.random()));
                  this.group.add(x); 
               }
             }
          },
          create_Blocks : function($i)
          {
                 this.group = new Group();
                 for (var i = 0; i < $i; i++) { 
                    var x = this.addImage('assets/imgs/rocks1.png',random(width),random(height * Math.random()));
                    this.group.add(x);                     
                 }
          },
         gravity_blocks:function()
         {  
             for(var i = 0; i < this.group.length;i++)
             {
                   this.group[i].position.y += this.group[i].height * this.gravity;
                   if (this.group[i].position.y > height) {
                       this.group[i].position.y = 0
                   }      
             }
         },
         clear_blocks:function()
         {
             this.group.clear();
             this.x = 0;
             this.y = 0;
             this.width = 0;
             this.height = 0;
             this.gravity = 0;
         }
     };