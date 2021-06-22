SCanvasVar = new fabric.Canvas("SCanvas");
player_x = 200;

 player_y = 200;

 block_image_width = 30; 

block_image_height = 30; 

var player_object= "";

 var block_image_object= "";
  
 function superhero(){
     fabric.Image.fromURL("player.png", function(img){
         player_object=img;
         player_object.scaleToHeight(150);
         player_object.scaleToWidth(150);
         player_object.set({
             top:player_y,
             left:player_x
       });
       SCanvasVar.add(player_object);
     });
     
 }
 function superblock(get_img){
    fabric.Image.fromURL(get_img, function(img){
        block_object=img;
        block_object.scaleToHeight(block_image_height);
        block_object.scaleToWidth(block_image_width);
        block_object.set({
            top:player_y,
            left:player_x
      });
      SCanvasVar.add(block_object);
    });
    
};

window.addEventListener("keydown", my_keydown);
function my_keydown(e){ 
     keydown = e.keyCode;
    if(e.shiftKey ==  true &&  keydown == "80"){
       block_image_height = block_image_height + 10;
       block_image_width = block_image_width + 10;
       console.log("Shift & P Pressed");
       document.getElementById("CurrentWidth").innerHTML = block_image_width;
       document.getElementById("CurrentHeight").innerHTML = block_image_height;
    }
    if(e.shiftKey ==  true &&  keydown == "77"){
        block_image_height = block_image_height - 10;
        block_image_width = block_image_width - 10;
        console.log("Shift & M Pressed");
        document.getElementById("CurrentWidth").innerHTML = block_image_width;
        document.getElementById("CurrentHeight").innerHTML = block_image_height;
}

if(keydown == "69"){
    superblock("spiderman_body.png");
    console.log("ePressed");}

    if(keydown == "68"){
        superblock("ironman_face.png");
        console.log("dPressed");}
    

    if(keydown == "85"){
        superblock("thor_right_hand.png");
        console.log("uPressed");}

        if(keydown == " 88"){
            superblock("captain_america_left_hand.png");
            console.log("xPressed");}

            if(keydown == "79"){
                superblock("hulk_legs.png");
                console.log("oPressed");}

                if(keydown == "38"){
                    up();
                    console.log("upPressed");
                    }
                    
                    if(keydown == "40"){
                        down();
                        console.log("downPressed");
                        }

                        if(keydown == "37"){
                            left();
                            console.log("leftPressed");
                            }

                            if(keydown == "39"){
                                right();
                                console.log("rightPressed");
                                }
        }

        function up() {
            if(player_y  >= 0){
                player_y = player_y - block_image_height;
                SCanvasVar.remove(player_object);
                superhero();
        }
        }
        
        function down() {
            if(player_y  < 450){
                player_y = player_y + block_image_height;
                SCanvasVar.remove(player_object);
                superhero();
        }
        }
        
        function left() {
            if(player_x  >= 0){
                player_x = player_x - block_image_width;
                SCanvasVar.remove(player_object);
                superhero();
        }
        }
        
        function right() {
            if(player_x < 950){
                player_x = player_x + block_image_width;
                SCanvasVar.remove(player_object);
                superhero();
        }
        }
        