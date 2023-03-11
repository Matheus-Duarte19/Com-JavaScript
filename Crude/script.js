$(document).ready(function() {
    // Array de contatos
    var contatos = [];

    // Função para adicionar novo contato
    function adicionarContato(nome, email, telefone) {
        var novoContato = {
            nome: nome,
            email: email,
            telefone: telefone
        };

        contatos.push(novoContato);
    }

    // Função para exibir todos os contatos
    function exibirContatos() {
        $('#tabela-contatos tbody').empty();

        contatos.forEach(function(contato) {
            var linha = '<tr>' +
                            '<td>' + contato.nome + '</td>' +
                            '<td>' + contato.email + '</td>' +
                            '<td>' + contato.telefone + '</td>' +
                            '<td>' +
                                '<button class="btn-editar" data-id="' + contatos.indexOf(contato) + '">Editar</button>' +
                                '<button class="btn-excluir" data-id="' + contatos.indexOf(contato) + '">Excluir</button>' +
                            '</td>' +
                        '</tr>';

            $('#tabela-contatos tbody').append(linha);
        });
    }

    // Função para editar um contato existente
    function editarContato(id, nome, email, telefone) {
        contatos[id].nome = nome;
        contatos[id].email = email;
        contatos[id].telefone = telefone;
    }

    // Função para excluir um contato existente
    function excluirContato(id) {
        contatos.splice(id, 1);
    }

    // Evento de submissão do formulário
    $('form').submit(function(event) {
        event.preventDefault();

        var nome = $('#nome').val();
        var email = $('#email').val();
        var telefone = $('#telefone').val();

        adicionarContato(nome, email, telefone);

        exibirContatos();
    });

    // Evento de clique no botão "Editar"
    $(document).on('click', '.btn-editar', function() {
        var id = $(this).data('id');
        var nome = prompt('Digite o novo nome:');
        var email = prompt('Digite o novo e-mail:');
        var telefone = prompt('Digite o novo telefone:');

        editarContato(id, nome, email, telefone);

        exibirContatos();
    });

    // Evento de clique no botão "Excluir"
    $(document).on('click', '.btn-excluir', function() {
        var id = $(this).data('id');

        excluirContato(id);

        exibirContatos();
    });
});