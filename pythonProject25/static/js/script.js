$('.select-wrapper > .select-swap').click(function() {
	var $departures = $('.airport-select__departure option');
	var $arrivals = $('.airport-select__arrival option');
	var departure = $('.airport-select__departure option:checked').text();
	var arrival = $('.airport-select__arrival option:checked').text();

	$('.airport-select__arrival').append($departures);
	$('.airport-select__departure').append($arrivals);
	$('.airport-select__arrival option:contains(' + departure + ')').prop('selected', true);
	$('.airport-select__departure option:contains(' + arrival + ')').prop('selected', true);
});