$(document).ready(function(){
	// find OP and add a class to anchors
	var op = $('.subtext:first a:first');
	$('a[href="'+op.attr('href')+'"]').addClass('nh-op');
});