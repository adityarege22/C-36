class Form{
    constructor(){
        
    }
    display(){
        var title = createElement("h2")
        title.html("Car Racing Game by A.S.Rege")
        title.position(130,0);
        var input = createInput("WHAT'S UR NAME")
        var button = createButton("START UR RACING")
        var greeting = createElement("h3")
        input.position(130,160)
        button.position(250,200)
        
        button.mousePressed(function(){
            input.hide();
            button.hide();

            var name = input.value()
            playerCount += 1
            player.update(name)
            player.updateCount(playerCount)
            greeting.html("HELLO RIDER"+ name)
            greeting.position(130,160)

        })
    }
}