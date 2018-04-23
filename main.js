document.getElementById("submit").addEventListener("click", function() {
  var name = document.getElementById("name").value;
  var message = document.getElementById("message").value;
  var post = document.createElement("div");
  post.setAttribute("class", "post");
  post.setAttribute("data", 0);
  post.innerHTML += name + " says: <p>" + message + "</p>"
  var buttons = "<button class='btn btn-default upvote'>+1</button><span class='rating'>" + post.getAttribute("data") + "</span><button class='btn btn-default downvote'>-1</button><br><button class='btn btn-default edit'>Edit</button><button class='btn btn-danger delete'>Delete</button>";
  post.innerHTML += buttons;
  addListeners();

  function addListeners() {
    //upvote button
    post.getElementsByClassName("upvote")[0].addEventListener("click", function() {
      post.setAttribute("data", parseInt(post.getAttribute("data")) + 1);
      post.getElementsByClassName("rating")[0].innerHTML = post.getAttribute("data");
    });
    //downvote button
    post.getElementsByClassName("downvote")[0].addEventListener("click", function() {
      post.setAttribute("data", parseInt(post.getAttribute("data")) - 1);
      post.getElementsByClassName("rating")[0].innerHTML = post.getAttribute("data");
    });
    //delete button
    post.getElementsByClassName("delete")[0].addEventListener("click", function() {
      post.remove();
    });
    //edit button
    post.getElementsByClassName("edit")[0].addEventListener("click", function() {
      //make a text area
      post.innerHTML = name + " says: <br> <div class='form-group'> <textarea class='editing form-control'>" + message + "</textarea><button class='btn btn-primary update'>Update</button>";
      //update button
      post.getElementsByClassName("update")[0].addEventListener("click", function() {
        message = post.getElementsByClassName("editing")[0].value;
        post.innerHTML = name + " says: <p>" + message + "</p>";
        post.innerHTML += buttons;
        addListeners();
      });
    });
  }
  document.getElementsByClassName("posts")[0].appendChild(post);
});
