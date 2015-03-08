// include save_data.js;

function makelist(o){

  var team_players = [];
  var items = o.query.results.TeamProfile.Players.Player;
  var no_items = items.length;
  for(var i = 0; i < no_items; i++){
    if (items[i].LastName != null){
    team_players[team_players.length] = items[i].FirstName + " " + items[i].LastName;
  }
    else{
    team_players[team_players.length] = items[i].FirstName
    }
  }
  // window.alert('h');
  var listContainer = document.createElement("div");
  document.getElementsByTagName("body")[0].appendChild(listContainer);
  var listElement = document.createElement("ul");
  listContainer.appendChild(listElement);

  for (var j = 0; j < no_items; j++){
    var listItem = document.createElement("li");
    listItem.setAttribute("id", "zim" + j);

    var listText = document.createTextNode(team_players[j]);

    // listItem.innerHTML = team_players[i];
    var temp = team_players[j];


    var anchor = document.createElement("a");
    anchor.setAttribute('href', '#');
    // anchor.innerHTML = j + '';

    anchor.onclick = function(a) {
      return function() {
        save_data.call(this, team_players[a], "zim" + a);
        };
      }(j);



    anchor.appendChild(listText);
    listItem.appendChild(anchor);
    listElement.appendChild(listItem);

    checkFav(team_players[j], "zim" + j);

  }


}
