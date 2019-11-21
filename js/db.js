db.enablePersistence()
    .catch(function(err) {
        if (err.code == 'failed-precondition') {
            console.log('persistance failed');
        } else if (err.code == 'unimplemented') {
            console.log('persistance not available');                        
        }
    });

db.collection('barbearia').onSnapshot(snapshot => {
    snapshot.docChanges().forEach(change => {
        if (change.type === 'added') {
            renderRecipe(change.doc.data(), change.doc.id);
        }
        if (change.type === 'removed') {
        }
    });
});

const form = document.querySelector('form');
form.addEventListener('submit', evt => {
    evt.preventDefault();

    const servico = {
        nome: form.servicoTitulo.value,
        descricao: form.servicoDescricao.value,
        link: form.servicoLink.value,
        endereco_imagem: form.servicoArquivo.value
    };

    db.collection('servicos').add(servico)
        .catch(err => console.log(err));

    //reseta o formulario
    form.servicoTitulo.value = '';
    form.servicoDescricao.value = '';
    form.servicoLink.value = '';
    form.servicoArquivo.value = '';

});

