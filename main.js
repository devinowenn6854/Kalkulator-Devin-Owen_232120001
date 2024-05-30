function insert(num) {
	$('.output').val($('.output').val() + num);
}
function equal() {
	$('.output').val(eval($('.output').val()));
}
function c() {
	$('.output').val('');
}
function del() {
	value = $('.output').val();
	$('.output').val(value.substring(0, value.length - 1));
}
function pangkat() {
	var nilai = $('.output').val();
    var result = Math.pow(nilai, 2);
    $('.output').val(result);
}
function akar() {
	var nilai = $('.output').val();
    var result = Math.sqrt(nilai);
    $('.output').val(result);
}
