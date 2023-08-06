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
        let deleteButton = $('<button id="deleteButton"/>x</button>');
        li.append(deleteButton);

        //crossing out an item from the list:
        $('li').on('dblclick', function () {
            $(this).toggleClass('strike');
        });

        //delete an item from the list:
        $('#deleteButton').on('click', function () {
            $('li').addClass('delete');
        });
    });

    //change the order of the list:
    $('ol').sortable();
});