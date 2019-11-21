document.addEventListener('DOMContentLoaded', function() {
// menus laterais 
    var elems = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init(elems, {edge:'left'});

	// formulario para adicionar sobremesa
	const forms = document.querySelectorAll('.side-form');
	var instances2 = M.Sidenav.init(forms, {edge:'right'});
});
