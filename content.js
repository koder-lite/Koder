var api = "https://codeforces.com/api/";
var rank = "";
var rating = 0;
var userHandle = "";

$(document).ready(function () {
    // chrome.storage.local.clear(function () {
    //   var error = chrome.runtime.lastError;
    //   if (error) {
    //     console.error(error);
    //   }
    //   // do something more
    // });
    // chrome.storage.sync.clear();

  chrome.storage.sync.get("username", function (user) {
    console.log(user.username);
    if (user.username) {
      userHandle = user.username;
      $("#search-handle").addClass("hidden");
    } else {
      $("#button-addon2").click(function () {
        userHandle = $("input:text").val();
        chrome.storage.sync.set({ username: userHandle });
         $("#search-handle").addClass("hidden");
      });
    }

    fetch(api + "user.info?handles=" + userHandle)
      .then((response) => response.json())
      .then((data) => {
        rating = data.result[0].rating;
        rank = data.result[0].rank;
        document.getElementById("username").innerHTML = userHandle + " | ";
        document.getElementById("rank").innerHTML = rank;
        document.getElementById("rating").innerHTML = "(" + rating + ")";
        switch (rank) {
          case "newbie":
            $(".user-details").addClass("newbie");
            break;
          case "pupil":
            $(".user-details").addClass("pupil");
            break;
          case "specialist":
            $(".user-details").addClass("specialist");
            break;
          case "expert":
            $(".user-details").addClass("expert");
            break;
          case "candidate master":
            $(".user-details").addClass("cm");
            break;
          case "master":
          case "international grandmaster":
            $(".user-details").addClass("master");
            break;
          case "grandmaster":
          case "legendary grandmaster":
            $(".user-details").addClass("grandmaster");
            break;
        }
      });
  });

});
