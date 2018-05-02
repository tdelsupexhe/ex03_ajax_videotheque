$('#search').on('keyup',function() {
    var searchVal = $(this).val();

    $.ajax({
        url: 'requete.php',
        type: 'GET',
        dataType: 'json',
        data: {getSearch : searchVal, getList: 0},
        success: function (data) {
            var listeFilm = '<ul class="list-group">';
            $.each(data, function (key, value) {
                listeFilm += '<li class="list-group-item">'+ value.toLowerCase() +'</li>';
            });
            listeFilm += '</ul>';
            $('#liste').html(listeFilm).slideDown().fadeIn();
        },
        error: function () {
            console.log('erreur_search');
        }
    })
});

$('#liste').on('click','li',function() {
    var searchVal = $(this)[0].textContent;

    $.ajax({
        url: 'requete.php',
        type: 'GET',
        dataType: 'json',
        data: {getSearch : searchVal, getList : 1},
        success: function (data) {
           $('form').children().hide();
           var inputAll = '';
           var buttons = '<div id="buttons"></div><button type="button" id="deleteMovie" class="btn btn-danger float-left">Supprimer</button><button type="button" id="UpdateMovie" class="btn btn-warning float-right">Mettre à jour</button></div>';
           $.each(data, function(key, value){
               inputAll += '<div class="form-group row"><label for="'+key+'" class="col-sm-4 col-form-label">'+key+'</label><div class="col-sm-8"><input type="text" id="'+key+'" value="'+value+'"  class="form-control" ></div></div>';
           });

           inputAll += buttons;

           $('form').html(inputAll);
        },
        error: function () {
            console.log('erreur_list');
        }
    })
});

$('#deleteMovie').on('click',function(){
    /*var searchVal= $(this);*/
    console.log('test');

   /* $.ajax({
        url: 'requete.php',
        type: 'GET',
        dataType: 'json',
        data: {getSearch : searchVal, getList : 2},
        success: function (data) {
            console.log('Film supprimé');
        },
        error: function () {
            console.log('erreur_list');
        }
    })*/
});

$('#uptdateMovie').on('click',function(){
    /*var searchVal= $(this);*/
    console.log('test');

    /* $.ajax({
         url: 'requete.php',
         type: 'GET',
         dataType: 'json',
         data: {getSearch : searchVal, getList : 2},
         success: function (data) {
             console.log('Film supprimé');
         },
         error: function () {
             console.log('erreur_list');
         }
     })*/
});