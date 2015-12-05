

// if (JSON.parse(localStorage.getItem("favList")).length == (null||undefined))
if (localStorage["favList"] === undefined)

  {
  var tempOne = [];
  localStorage.setItem("favList1", JSON.stringify(tempOne));
  var retrieveData = localStorage.getItem("favList1");
  var temp = JSON.parse(retrieveData);
}
else{
  temp = JSON.parse(localStorage.getItem("favList"));
}


function checkFav(player_name, id){
  if (temp.indexOf(player_name) != -1){
    document.getElementById(id).style.background='#ffffff';

  }
  else{
    document.getElementById(id).style.background='transparent';
    var css_mini = 'li:hover {background: #000000}';
    document.getElementById(id).style.cssText=css_mini;
  }

// for (var i = 0; i++; i < temp.length){
//
// }
}

function save_data(player_name, id){

  // window.alert(id);
  if (temp.indexOf(player_name) == -1){
    temp[temp.length] = player_name;
    document.getElementById(id).style.background='#ffffff';
    var mini = 'li a {color: #000000}';
    document.getElementById(id).style=mini;

    // window.alert("Added");
  }
  else {
    var remove_index = temp.indexOf(player_name);
    temp.splice(remove_index, 1);

    document.getElementById(id).style.background='transparent';
    var css_mini = 'li:hover {background: #ffffff}';
    document.getElementById(id).style.cssText=css_mini;

    // window.alert("Removed");
  }

  localStorage.setItem("favList", JSON.stringify(temp));
  var retrieveData2 = localStorage.getItem("favList");
  temp = JSON.parse(retrieveData2);

}
if (localStorage["timer"] === undefined) {
  localStorage["timer"] = [];
}


function main_game(o){
  
  var num_matches = o.query.count;

  //when only 1 live match is played
  if (num_matches == 1){

    var inn_check = o.query.results.Scorecard.past_ings;
    if (inn_check.length){
    }
    else{
      var batsman0 =  o.query.results.Scorecard.past_ings.d.a.t[0].name;
      var batsman1 =  o.query.results.Scorecard.past_ings.d.a.t[1].name;
    }


    if (inn_check.length == 2){
      var batsman0 =  o.query.results.Scorecard.past_ings[0].d.a.t[0].name;
      var batsman1 =  o.query.results.Scorecard.past_ings[0].d.a.t[1].name;
    }

    // alert(batsman1);

    if (temp.indexOf(batsman0) != -1 && localStorage.timer.indexOf(batsman0) == -1 ){

      var notification = new Notification('A Call from Cricket', {
        icon: 'icon.png',
        body: batsman0 + " is on the crease!",
      });


      localStorage.timer = localStorage.timer + " " + [batsman0];
    }
    if (temp.indexOf(batsman1) != -1 && localStorage.timer.indexOf(batsman1) == -1){
      var notification = new Notification('A Call from Cricket', {
        icon: 'icon.png',
        body: batsman1 + " is on the crease!",
      });

      localStorage.timer = localStorage.timer + " " + [batsman1];
    }

    else {
      output = "BURRRAAAHHH " + batsman0 + " " + batsman1;
    }
  document.getElementById('results').innerHTML = output;
  }

  //when 2 live matches are being played

  else if (num_matches == 2){



    //for match 1 represented by a

    var inn_check = o.query.results.Scorecard[0].past_ings;
    if (inn_check.length){}
    else{
      var batsman0_a =  o.query.results.Scorecard[0].past_ings.d.a.t[0].name;
      var batsman1_a =  o.query.results.Scorecard[0].past_ings.d.a.t[1].name;
    }
    if (inn_check.length == 2){
      var batsman0_a =  o.query.results.Scorecard[0].past_ings[0].d.a.t[0].name;
      var batsman1_a =  o.query.results.Scorecard[0].past_ings[0].d.a.t[1].name;
    }

    //for match 2 represented by b

    var inn_check = o.query.results.Scorecard[1].past_ings;
    if (inn_check.length){}
      else{
        var batsman0_b =  o.query.results.Scorecard[1].past_ings.d.a.t[0].name;
        var batsman1_b =  o.query.results.Scorecard[1].past_ings.d.a.t[1].name;
      }
      if (inn_check.length == 2){
        var batsman0_b =  o.query.results.Scorecard[1].past_ings[0].d.a.t[0].name;
        var batsman1_b =  o.query.results.Scorecard[1].past_ings[0].d.a.t[1].name;
      }

    //checking if your player is on crease

    if (temp.indexOf(batsman0_a) != -1 && localStorage.timer.indexOf(batsman0_a) == -1){
      var notification = new Notification('A Call from Cricket', {
        icon: 'icon.png',
        body: batsman0_a + " is on the crease!",
      });
      localStorage.timer = localStorage.timer + " " + [batsman0_a];
    }

    else if (temp.indexOf(batsman1_a) != -1 && localStorage.timer.indexOf(batsman1_a) == -1){
      var notification = new Notification('A Call from Cricket', {
        icon: 'icon.png',
        body: batsman1_a + " is on the crease!",
      });
      localStorage.timer = localStorage.timer + " " + [batsman1_a];
    }

    else if (temp.indexOf(batsman0_b) != -1 && localStorage.timer.indexOf(batsman0_b) == -1){
      var notification = new Notification('A Call from Cricket', {
        icon: 'icon.png',
        body: batsman0_b + " is on the crease!",
      });
      localStorage.timer = localStorage.timer + " " + [batsman0_b];
    }

    else if (temp.indexOf(batsman1_b) != -1 && localStorage.timer.indexOf(batsman1_b) == -1){
      var notification = new Notification('A Call from Cricket', {
        icon: 'icon.png',
        body: batsman1_b + " is on the crease!",
      });
      localStorage.timer = localStorage.timer + " " + [batsman1_b];
    }

    //test_case
    else {
      output = "BURRRAAAHHH";
    }
    document.getElementById('results').innerHTML = output;
  }

    if (o.query.results == null){
      localStorage.removeItem("timer");
    }
}
