$(function(){
    $(document).on('click', '.delete-button', function(){
        $(this).parents('.todo').remove();

        if ($('.todo').length === 0) {
            $('#no-todo').show();
        }
    });

     $(document).on('click','.minimize-button', function(){
        let text = $(this).parents('.todo').children('.todo-text');
        text.toggle(500);

        //поворот галочки
        console.log($(this).css('transform'));
        if ($(this).css('transform') !== 'none') {
            $(this).css({transform: 'none'});
        }
        else $(this).css({transform: 'rotate(90deg)'});
    });

    $('#add-form').on('submit', function(){
        let form = $(this);
        let name = form.children('input').val();
        let text = form.children('textarea').val();
        form.children('input').val('');
        form.children('textarea').val('');

        let new_todo = $(`<div class="todo">
                            <div class="todo-header">
                                <span>${name}</span>
                                <div class="delete-button"></div> 
                                <div class="minimize-button"></div>
                            </div>
                            <div class="todo-text">${text}</div>
                          </div>`);
        $('#list-container').append(new_todo);

        if (!$('#no-todo').hidden) {
            $('#no-todo').hide();
        }

        return false;
    });
});