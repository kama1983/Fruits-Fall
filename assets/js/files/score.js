 var score = {
    score:0,
    lives:3,
    create_score:function(){
       fill(255);
       textSize(30);
       textAlign(LEFT);
       text('Score : '+ this.score,0,30); 
    },
    coins:function(){
       this.score += 200;
    },
    create_lives:function(){
        textSize(30);
        textAlign(RIGHT);
        text("Lives:" + this.lives,width-20,30);
    },
    min:function(){
       if(this.lives <= 0)
       {
         game.over();
       }else{
         this.score = this.score - 5;
         if (this.score <= 0) {
             this.lives -= 1;
         }
       }
    },
    max:function(){             
       this.score += 5;                   
    }
}