$(function () {
    let deleteButton = $('<button id="deleteButton"/>x</button>');

    //add a new item to the list:
    $('#button').click (function newItem() {
        let inputValue = $('#input').val();
        if (inputValue === '') {
            alert("You must write something!");
        }else {
            $('#list').append($('<li>' + inputValue + '</li>'));
        }

        //add the delete button "X":
        $('li').append(deleteButton);

        //clear the input field after adding an item to the list:
        $('#input').val('');
    });

    //crossing out an item from the list:
    $('li').on('dblclick', function crossOut() {
        $(this).toggleClass('strike');
    });

    //delete an item from the list:
    $('#deleteButton').on('click', function deleteItem() {
        $(this).parent().addClass('delete');
    });

    //change the order of the list:
    $('ol').sortable();

});