"use strict";

$(function () {
	$(".container11").click(function () {
		$(".container22").prop("checked", $(this).prop("checked"));
	});
	$(".container22").click(function () {
		if ($(".container22:checked").length == $(".container22").length) {
			$(".container11").prop("checked", true);
		} else {
			$(".container11").prop("checked", false);
		}
	});
});