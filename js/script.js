$(function newItem() {

    //add a new item to the list:
    $('#button').click (function() {
        let list = $('#list');
        let li = $('<li></li>');
        let inputValue = $('#input').val();
        li.addClass('list-item');
        list.append(li);
        li.append(inputValue);

        if (inputValue === '') {
            alert("You must write something!");
        }else {
            list.append(li);
        }

        //add the delete button "X":
        let deleteButton = $('<input type="button" id="deleteButton"/>');
        deleteButton.append(document.createTextNode('X'));
        li.append(deleteButton);
    });

    //crossing out an item from the list:
    $('.list-item').on("dblclick", function() {
        $('.list-item').toggleClass("strike");
    });

    //delete an item from the list:
    $('#deleteButton.on').on("click", function() {
        $('list-item').addClass("delete");
    });

    //change the order of the list:
    $('ol').sortable();
});