
function addUser() {
  player1_name = document.getElementById("player1_name_input").value;
  player2_name = document.getElementById("player2_name_input").value;

    //Set "player1_name" using localStorage.setItem() function
    function setItem(){
      player1_name = ocument.getElementById("player1_name_input").value;
    }
	  //Set "player2_name" using localStorage.setItem() function
    function setItem(){
      player2_name = ocument.getElementById("player2_name_input").value;
    }

    window.location = "game_page.html";
}

