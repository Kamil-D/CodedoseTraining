// // Funkcja wywoływana, gdy dokument HTML zostanie w pełni załadowany
// $( document ).ready(function() {
//
//     // Chwyta element o klasie "zaladujTresc" i sprawia, że po kliknięciu na niego wywołana zostanie funkcja "getData".
//     $('.zaladujTresc').click(getData);
// });
//
//
// // Funkcja wykonujca zapytanie JSON i przetwarzajca odpowiedź.
// function getData() {
//
// 	// Pobranie danych z pliku JSON i przekazanie ich do funkcji wewnątrz zmiennej "data".
// 	$.getJSON( "http://localhost:8080/getAjax.json", function( data ) {
//
// 		// Utworzenie zmiennej z pustym cigiem znaków.
//     	var content = '';
//
//     	// Wywołanie funkcji, która przetworzy z osobna każdy obiekt przechowywany w zmiennej data. Indeks obiektu w tablicy to klucz, a sam obiekt to wartość.
//     	$.each(data, function (key, val){
//
// 			// Dodanie do cigu znaków wybranych właściwości obiektu. (+ to znak konkatenacji).
//     		content += key + '. ' + val.name + ' w cenie ' + val.price + '<br>';
//     	});
//
//     	// Chwycenie elementu o klasie "container" i wstatienie w jego wnętrze zawartości zmiennej "content" jako kodu html. (istnieje analogiczna metoda .text(), która wstawi zawartość "content" jako tekst).
//     	$('.containerAjax').html(content);
//     });
// }

// $("zaladujTresc").click(function(){
// 	$.getJSON("http://localhost:8080/getAjax", function(result){
// 		$.each(result, function(i, field){
// 			$("containerAjax").append(field + " ");
// 		});
// 	});
// });



// $.ajax({
//
// 	type: "POST",
// 	contentType: "application/json; charset=utf-8",
// 	url: "http://localhost:8080/getAjax",
// 	data: "{}",
// 	dataType: "json",
// 	success: function (data) {
// 		alert(data);
// 	},
// 	error: function (result) {
// 		alert("Error");
// 	}
// });


console.log('aaa');
// Funkcja wywoływana, gdy dokument HTML zostanie w pełni załadowany
$( document ).ready(function() {

	// Chwyta element o klasie "zaladujTresc" i sprawia, że po kliknięciu na niego wywołana zostanie funkcja "getData".
	$('.zaladujTresc').click(getData);
});


// Funkcja wykonujca zapytanie JSON i przetwarzajca odpowiedź.
function getData() {
	console.log('bbb');
	// Pobranie danych z pliku JSON i przekazanie ich do funkcji wewnątrz zmiennej "data".
	$.getJSON( "http://localhost:8080/getAjax", function( data ) {

		console.log(data);

		// Utworzenie zmiennej z pustym cigiem znaków.
		var content = '';

		// Wywołanie funkcji, która przetworzy z osobna każdy obiekt przechowywany w zmiennej data. Indeks obiektu w tablicy to klucz, a sam obiekt to wartość.
		$.each(data, function (key, val){

			// Dodanie do cigu znaków wybranych właściwości obiektu. (+ to znak konkatenacji).
			content += key + val + '<br>';
		});

		// Chwycenie elementu o klasie "container" i wstatienie w jego wnętrze zawartości zmiennej "content" jako kodu html. (istnieje analogiczna metoda .text(), która wstawi zawartość "content" jako tekst).
		$('.containerAjax').html(content);
	});
}



















