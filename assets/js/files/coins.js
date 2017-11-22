var coins = {	 
      group:false,  
      coins:false,   
      frame:0,
      gravity:gravity.coins,
      crashCoins:0,
      coinstext:function(){
  	     setTimeout(function(){
             document.getElementById('collectcoins').style.display = 'block';
         },10);
         document.getElementById('collectcoins').style.display = 'none';
  	  },
      addImage:function(image,x,y,width,height){
           var ols = loadImage(image);
           ols.resize(width,height);
           var aa = createSprite(x,y,30,30);
           aa.addImage(ols);
           return aa;                            
      },
      coinsound:function(){
		     soundFormats('mp3','ogg','wav');
         this.coins = loadSound(['assets/audio/coins.mp3','assets/audio/coins.ogg','assets/audio/coins.wav']);
      },
      coinsaudio:function(){
          this.coins.setVolume(0.1);
          this.coins.play();
      },
      colloinscoins:function()
      {
             for(var i=0;i < this.group.length;i++)
             {
                 if(this.group[i].overlap(player.one))
                 {                                   
                      this.group[i].remove(); 
                      this.crashCoins++;        
                      coins.coinsaudio();
                      score.coins();
                      coins.coinstext();
                 }
             }      
      },
     gravity_coins:function()
     {
         for(var i = 0; i < this.group.length;i++)
         {
             this.group[i].position.y += this.group[i].height * this.gravity;             
             if (this.group[i].position.y > height) {
                this.group[i].position.y = 0
                this.group[i].remove();
             }
         }
     },
     clear_coins:function(){
         this.group.clear();
         this.x = 0;
         this.y = 0;
         this.width = 0;
         this.height = 0;
         this.gravity = 0; 
     },
     createCoins:function($i){
             this.group = new Group();
             for(var i = 0;i <= $i;i++){
                var c = this.addImage('assets/imgs/coins.png',random(width),random(height * Math.random()),30,30);
                this.group.add(c);                
             }
      },
      drawTime:function()
      {
       	coins.createCoins(1);
      }
}