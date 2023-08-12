$("#button").click(function newItem() {
    let deleteButton = $('<button id="deleteButton">x</button>');
    let li = $("<li></li>");
    let inputValue = $("#input").val();

    if (inputValue === "") {
      alert("You must write something!");
    } else {
      $("#list").append(li);
    }
  
    li.append(inputValue);
    li.append(deleteButton);

    li.on("dblclick", function () {
      $(this).toggleClass("strike");
    });

    function deleteItem() {
      $(this).parent().addClass("delete");
    }

    deleteButton.on("click", deleteItem);
  
    $("ol").sortable();
  });