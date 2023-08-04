function newItem() {
    //add a new item to the list:
    let list = $('#list');
    let li = $('<li></li>');
    let inputValue = $('#input').val();
    list.append(li);
    li.append(inputValue);

    if (inputValue === '') {
        alert("You must write something!");
    }else {
        list.append(li);
    }

    //add the delete button "X":
    let deleteButton = $(<input type="button" id="deleteButton"/>);
    deleteButton.append(document.createTextNode('X'));
    li.append(deleteButton);

    //crossing out an item from the list:
    li.on("dblclick", function() {
        li.toggleClass("strike");
    });

    //delete an item from the list:
    deleteButton.on("click", function() {
        li.addClass("delete");
    });

    //change the order of the list:
    list.sortable();
}