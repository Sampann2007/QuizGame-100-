class Quiz{
    getState(){
        var gameStateRef=database.ref('gameState');
        gameStateRef.on("value",function(data){
            gameStateRef=data.val();
        })
    }
    update(state){
        database.ref('/').update({
            gameState:state
        })
    }
    async start(){
        if(gameState===0){
            contestant=new Contestant();
            var contestantCountRef=await database.ref('contestantCount').once('value');
            if(contestantCountRef.exists()){
                contestantCount=contestantCountRef.val();
                contestant.getCount();
            }
            question=new Question();
            question.display();
        }
    }
    play(){
        question.hide();
        background("yellow");
        fill(0);
        textSize(30);
        text("Result Of The Quiz",340,50);
        text("----------------------------",320,65)
        Contestant.getPlayerInfo();
        if(allContestants!==undefined){
            var display_answer=230;
            fill("blue");
            textSize(20);
            text("NOTE: Contestant who answered correct are highlighted in green color!",130,230);
            for(var plr in allContestants){
                var correctAns="1";
                if(correctAns===allContestants[plr].answer)
                fill("Green");
                else
                fill("red");
                

                    display_answer+=30;
                    textSize(30);
                    text(allContestants[plr].name+":"+allContestants[plr].answer,250,display_answer)
                
            }
        }
    }
}