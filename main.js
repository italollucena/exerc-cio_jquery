$(document).ready(function() {
    $('#form-tarefa').submit(function(event) {
        event.preventDefault(); 
        var nomeTarefa = $('#nome-tarefa').val();

        if (nomeTarefa !== '') {
            $('#lista-tarefa').append('<li>' + nomeTarefa + '</li>');
            $('#nome-tarefa').val(''); 
        }
    });

    $('#lista-tarefa').on('click', 'li', function() {
        $(this).toggleClass('completed');
    });
});