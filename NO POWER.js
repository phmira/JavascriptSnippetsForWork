function npv() {
	$("#tabComment").css("display", "block");
	$("#ui-id-2").css("display", "none");
	$('#txtPROBCD3').val('F1A01');
	$('#rbPROBCD3').click();
	$('#txtREPACOMENT').text('no power - reflashed bios/erased eprom');
	$('#cboRESULT option[value=P---P---Y]').prop('selected', 'selected').change();
	$('#cboREASON option[value=R]').prop('selected', 'selected').change();
}

npv();