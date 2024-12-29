$(document).ready(function () {
    // submissão do formulário
    $('#task-form').submit(function (event) {
      event.preventDefault(); // Previne o comportamento padrão

      const task = $('#task-input').val().trim(); // Obtém o valor do input e remove espaços extras

      // Adiciona a tarefa à lista
    if (task) {
        $('#task-list').append(`<li>${task}</li>`);
        $('#task-input').val(''); // Limpa o campo de entrada
    }
    });

    //clique nos itens da lista para riscar (linha sobre o texto)
    $('#task-list').on('click', 'li', function () {
    $(this).toggleClass('completed');
    });
});
