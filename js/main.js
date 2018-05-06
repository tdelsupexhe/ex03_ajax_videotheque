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
           var buttons = '<div>' +
               '<button type="button" id="deleteMovie" class="btn btn-danger float-left" data_id="'+data.film_id+'">Supprimer</button>' +
               '<button type="button" id="updateMovie" class="btn btn-warning float-right" data_id="'+data.film_id+'">Mettre à jour</button>' +
               '</div>';
           $.each(data, function(key, value){
               inputAll += '<div class="form-group row">' +
                   '<label for="'+key+'" class="col-sm-4 col-form-label">'+key+'</label>' +
                   '<div class="col-sm-8"><input type="text" id="'+key+'" value="'+value+'"  class="form-control" ></div>' +
                   '</div>';
           });

           inputAll += buttons;

           $('form').html(inputAll);

           $('form #film_id').attr('readonly','true');
           $('form #last_update').attr('readonly','true');
        },
        error: function () {
            console.log('erreur_list');
        }
    })
});

$('form').on('click','#deleteMovie',function() {
    var get_id = $(this).attr('data_id');

    $.ajax({
         url: 'requete.php',
         type: 'GET',
         data: {getId : get_id, getList : 2},
         success: function () {
             console.log('Film supprimé');
         },
         error: function () {
             console.log('erreur_delete');
         }
     })

});

$('form').on('click','#updateMovie',function(){
    var get_id = $(this).attr('data_id');
    var get_title = $('#title').val();
    var get_description = $('#description').val();
    var get_release_year = $('#release_year').val();
    var get_language_id = $('#language_id').val();
    var get_original_language_id = $('#original_language_id').val();
    var get_rental_duration = $('#rental_duration').val();
    var get_rental_rate = $('#rental_rate').val();
    var get_length = $('#length').val();
    var get_replacement_cost = $('#replacement_cost').val();
    var get_rating = $('#rating').val();
    var get_special_features = $('#special_features').val();

    $.ajax({
         url: 'requete.php',
         type: 'GET',
         data: {
             getId : get_id,
             getTitle : get_title,
             getDescription : get_description,
             getReleaseYear : get_release_year,
             getLanguageId : get_language_id,
             getOriginalLanguageId : get_original_language_id,
             getRentalDuration : get_rental_duration,
             getRentalRate : get_rental_rate,
             getLength : get_length,
             getReplacementCost : get_replacement_cost,
             getRating : get_rating,
             getSpecialFeatures : get_special_features,
             getList : 3
         },
         success: function (data) {
             console.log('film mis à jour');
             document.location.reload(true);
         },
         error: function () {
             console.log('erreur_update');
         }
     })
});
