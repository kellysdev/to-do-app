$(function newItem() {

    //add a new item to the list:
    $('#button').click (function() {
        let li = $('<li></li>');
        let inputValue = $('#input').val();
        $('#list').append(li);
        li.append(inputValue);

        if (inputValue === '') {
            alert("You must write something!");
        }else {
            $('#list').append(li);
        }

        //add the delete button "X":
        let deleteButton = $('<button id="deleteButton"/>X</button>');
        li.append(deleteButton);
    });

    //crossing out an item from the list:
    $('li').dblclick (function() {
        $('li').toggleClass('strike');
    });

    //delete an item from the list:
    $('#deleteButton').click (function() {
        $('li').addClass('delete');
    });

    //change the order of the list:
    $('ol').sortable();
});