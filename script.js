$(document).ready(function(){
    $(document).on('submit', 'form', function(event){
        event.preventDefault();
        $.ajax('/record', {
            type: 'POST',
            data: $('form').serialize(),
            success: function(result){
                this.closest('#inputStatement').find('#confirmation').show();
            },
            error: function(){
                alert('Error');   
            }
        });
    });
    });