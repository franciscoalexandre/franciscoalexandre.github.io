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
            desenhaCard(change.doc.data(), change.doc.id);
        }
        if (change.type === 'removed') {
            removeCard(change.doc.id);
        }
    });
});

const form = document.querySelector('form');
form.addEventListener('submit', evt => {
    evt.preventDefault();

    const servico = {
        Titulo: form.serviçoTitulo.value,
        Descricao: form.serviçoDescricao.value,
        Link: form.serviçoLink.value,
        imagem: filePath
    };

    db.collection('barbearia').add(servico)
        .catch(err => console.log(err));

    //reseta o formulario
    form.serviçoTitulo.value = '';
    form.serviçoDescricao.value = '';
    form.serviçoLink.value = '';
    form.serviçoArquivo.value = '';

});

// remove a recipe
const barbearia1 = document.querySelector('.barbearia');
barbearia1.addEventListener('click', evt => {
  if(evt.target.tagName === 'I'){
    const id = evt.target.getAttribute('data-id');
    //console.log(id);
    db.collection('barbearia').doc(id).delete();
  }
})

