$('#cosas').on('click','button.btn-danger', borrarParrafo);

function borrarParrafo(){
    $(this).closest('div').remove();
}

function guardarParrafo(){
    var ultimo = $('#cosas').children().last();
    var cantidad = $('#cosas').children().size();
    if(cantidad % 4 == 0){
        if(ultimo.hasClass('azul-y-blanco')){
            var html = '<div class="azul-y-blanco col-xs-12 col-sm-6 col-md-3"> <h4>';
        }
        else{
            var html = '<div class=" col-xs-12 col-sm-6 col-md-3"> <h4>';
        }
    }
    else{
        if(ultimo.hasClass('azul-y-blanco')){
            var html = '<div class="col-xs-12 col-sm-6 col-md-3"> <h4>';
        }
        else{
            var html = '<div class="azul-y-blanco col-xs-12 col-sm-6 col-md-3"> <h4>';
        }
    }
    
    html = html + $('#txtTitulo').val() + '</h4><p>' + $('#txtPrincipal').val() + '</p> <button class="btn btn-danger">></button></div>';
    
    $('#cosas').append(html);
    
    $('#txtTitulo').val('');
    $('#txtPrincipal').val('');
    
    
    
    
    
    
    
    
    
    
    
    
}