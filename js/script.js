//-----онреди-начальная------//
$(document).ready(function() {
	$('#button_submit').addClass('button-submit-disabled');
	$('#submit_for_feedback').addClass('button-submit-disabled');
	
//-----кнопочки-категорий-----//
$('.prod-sort-item').click(function() {
	var get_id = this.id;
	var get_current = $('.prod-samples .'+get_id);
	if (get_id == 'all') {
		$('.example-item').show(300);
	} else {
		$('.example-item').not(get_current).hide(300);
		get_current.show(300);
	}
});

//-----проверка-полей-----//
//-----для-сенд-месседжа-----//
function check(event) {
	//alert($(this).hasClass('input-mail'));
if (!$('.input-name').val() || !$('.input-mail').val() || 
		!$('.input-message').val()) {
	$('#button_submit').addClass('button-submit-disabled');
	if ($(this).hasClass('input-name') || 
			$(this).hasClass('input-mail')) {
		if (event.key == 'Enter') {
			alert('Необходимо ввести все данные!');
			event.preventDefault();
		}
	}
	$('#button_submit').attr('disabled');
	//document.querySelector('#button_submit')
	//.setAttribute('disabled', 'disabled');
} else {
		$('#button_submit').removeClass('button-submit-disabled');
		$('#button_submit').removeAttr('disabled');
	}
}

//-----для-сабскрайба-----//
function checkSubscribe(event) {
	if (!$('#feedback_mail').val()) {
		$('#submit_for_feedback').addClass('button-submit-disabled');
		if (event.key == 'Enter') {
			alert('Введите e-mail!');
			event.preventDefault();
		}
		$('#submit_for_feedback').attr('disabled');
	} else {
		$('#submit_for_feedback').removeClass('button-submit-disabled');
		$('#submit_for_feedback').removeAttr('disabled');
	}
}

//-----вызовы-----//
$('#feedback_mail').on('input',checkSubscribe);
$('#feedback_mail').on('keypress',checkSubscribe);
$('.input-name').on('input',check);
$('.input-name').on('keypress',check);
$('.input-mail').on('input',check);
$('.input-mail').on('keypress',check);
$('.input-message').on('input',check);


});
