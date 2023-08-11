$(function () {
    let deleteButton = $('<button id="deleteButton"/>x</button>');
    let li = $('<li class="listItem"></li>');

    //add a new item to the list:
    $('#button').click (function () {
        let inputValue = $('#input').val();
        if (inputValue === '') {
            alert("You must write something!");
        }else {
            $('#list').append(li);
            $('.listItem').append(inputValue);
        }

        //add the delete button "X":
        $('li').append(deleteButton);

        //clear the input field after adding an item to the list:
        $('#input').val('');
    });

    //crossing out an item from the list:
    $('li').on('dblclick', function () {
        $(this).toggleClass('strike');
        
    });

    //delete an item from the list:
    $('#deleteButton').on('click', function () {
        $(this).parent().addClass('delete');
    });

    //change the order of the list:
    $('ol').sortable();

});