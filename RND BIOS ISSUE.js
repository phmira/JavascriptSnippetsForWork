var r = Math.floor(Math.random() * 5);

switch(r) {
case 0:
    console.log("0 novideo");
    novideo();
break;
case 1:
    console.log("1 novideo");
    novideo();
break;
case 2:
    console.log("2 nopower");
    nopower();
break;
case 3:
    console.log("3 nopower");
    nopower();
break;
case 4:
    console.log("4 bios password");
    biospass();
break;
}

function novideo() {
    $("#tabComment").css("display", "block");
    $("#ui-id-2").css("display", "none");
    $('#txtPROBCD3').val('F1A02');
    $('#rbPROBCD3').click();
    $('#txtREPACOMENT').text('no video - reflashed bios/erased eprom');
    $('#cboRESULT option[value=P---P---Y]').prop('selected', 'selected').change();
    $('#cboREASON option[value=R]').prop('selected', 'selected').change();
}

function nopower() {
    $("#tabComment").css("display", "block");
    $("#ui-id-2").css("display", "none");
    $('#txtPROBCD3').val('F1A01');
    $('#rbPROBCD3').click();
    $('#txtREPACOMENT').text('no power - reflashed bios/erased eprom');
    $('#cboRESULT option[value=P---P---Y]').prop('selected', 'selected').change();
    $('#cboREASON option[value=R]').prop('selected', 'selected').change();
}

function biospass() {
    $("#tabComment").css("display", "block");
    $("#ui-id-2").css("display", "none");
    $('#txtPROBCD3').val('F1K16');
    $('#rbPROBCD3').click();
    $('#txtREPACOMENT').text('bios password - reflashed bios/erased eprom');
    $('#cboRESULT option[value=P---P---Y]').prop('selected', 'selected').change();
    $('#cboREASON option[value=R]').prop('selected', 'selected').change();
}
