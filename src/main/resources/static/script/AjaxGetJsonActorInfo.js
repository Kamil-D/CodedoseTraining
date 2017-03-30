/**
 * Created by Kamil on 2017-03-29.
 */

$(document).ready(function() {

    //after button is clicked we download the data
    $('.getInfoFromServerButton').click(function(){

        //start ajax request
        $.ajax({
            url: "http://localhost:8080/getAjax",
            //force to handle it as text
            dataType: "text",
            success: function(data) {

                $('.containerAjax').append(data);

            }
        });
    });
});

//		// Funkcja wywoływana, gdy dokument HTML zostanie w pełni załadowany
//		$( document ).ready(function() {
//
//            // Chwyta element o klasie "zaladujTresc" i sprawia, że po kliknięciu na niego wywołana zostanie funkcja "getData".
//			$('.getInfoFromServerButton').click(getData);
//		});
//
//
//		// Funkcja wykonujca zapytanie JSON i przetwarzajca odpowiedź.
//		function getData() {
//
//			$.ajax({
//				url: "http://localhost:8080/getAjax"
//			}).then(function(data) {
//				$('.containerAjax').append(data);
//			});
//
//		}