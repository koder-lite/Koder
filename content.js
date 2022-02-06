let username = "";
$(document).ready(function () {
  $("#button-addon2").click(function () {
    username = $("input:text").val();
    document.getElementById("username").innerHTML = username;

    //alert(username);
    fetch(`https://codeforces.com/api/user.info?handles=${username}`)
      .then((res) => res.json())
      .then((data) => console.log(data));
  });

  
});
