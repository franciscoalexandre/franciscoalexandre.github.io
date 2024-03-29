const barbearia = document.querySelector('.barbearia');
document.addEventListener('DOMContentLoaded', function() {
// menus laterais 
    var elems = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init(elems, {edge:'left'});

	// formulario para adicionar sobremesa
	const forms = document.querySelectorAll('.side-form');
	var instances2 = M.Sidenav.init(forms, {edge:'right'});
});

const desenhaCard = (data, id) => {

    const html = `
  <div class="col s12 m6 l3 servico" data-id="${id}">
	    <div class="card" style="background-color: #A59C94FF;">
		    <div class="card-image servico-imagem">
	            <img src="images/${data.imagem}">
	            <span class="card-title servico-titulo">"${data.Titulo}"</span>
	        </div>
	        <div class="card-content servico-descricao">
	            <p>"${data.Descricao}"</p>
	        </div>
	        <div class="card-action">
		        <a style="color: #AE0E36FF;" class="servico-link" href="${data.Link}">Saiba mais</a>
	        </div>
	        <div class="servico-deletar">
                <i class="material-icons" data-id="${id}">delete_outline</i>
            </div>
	    </div>
   </div>`;
    barbearia.innerHTML += html;

};

// remove recipe
const removeCard = (id) => {
  const servico = document.querySelector(`.servico[data-id=${id}]`);
  servico.remove();
};
