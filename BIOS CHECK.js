/* Variables */
var boardModel = document.getElementById("hidSPIS").value;
console.log(boardModel);

var boardPartNumber = document.getElementById("txtPN").value;
console.log(boardPartNumber);

/* Functions */

function bios() {
    console.log("Board not in Database!");
}

function biosBase() {
	console.log("Bios Base");
	$('#txtSMSRepairAction').val('3a13');
	$('#drpResult option[value=P]').prop('selected', 'selected').change();
	$('#drpReason option[value=1O]').prop('selected', 'selected').change();
}

function bios256U365() {
	console.log("Bios 256 Location U365");
	$('#txtLocation').val('U365');
	$('#txtDefectPN').val('072.25256.0N01');
	$('#txtReplacePN').val('072.25256.0N01');
	$('#txtDefectPNDESCR').val('IC FEROM W25Q256JVEIQ WSON-8 32M-BYTE');
	biosBase();
}

function bios256U3652() {
	console.log("Bios 256 Location U365 Type 2");
	$('#txtLocation').val('U365');
	$('#txtDefectPN').val('072.25128.0C71');
	$('#txtReplacePN').val('072.25128.0C71');
	$('#txtDefectPNDESCR').val('IC NOR FLASH DUAL W25Q128JVPIQ WSON-8');
	biosBase();
}

function bios256UH2() {
	console.log("Bios 256 Location UH2");
	$('#txtLocation').val('UH2');
	$('#txtDefectPN').val('072.25256.0B03');
	$('#txtReplacePN').val('072.25256.0B03');
	$('#txtDefectPNDESCR').val('IC FRROM GD25B256DYIGR 256M WSON8*6 8P');
	biosBase();
}

function bios128() {
	console.log("Bios 128");
	$('#txtLocation').val('U365');
	$('#txtDefectPN').val('72.12873.003');
	$('#txtReplacePN').val('72.12873.003');
	$('#txtDefectPNDESCR').val('IC FEROM MX25L12873FZNI-10G WSON 8P');
	biosBase();
}

function CheckPNUH2() {

	switch(boardPartNumber) {
	case "M17456-601": /* Hickory 14 Problematic */
		biosBase();
		$('#txtDefectPNDESCR').val('IC FEROM W25Q256JVEIQ WSON8 (VPRO)');
		$('#txtLocation').val('UH2');
		$('#txtDefectPN').val('072.25256.0S01');
		$('#txtReplacePN').val('072.25256.0S01');
	break;
	default:
		bios256UH2();
	break;
	}

}

switch(boardModel) {
case "HP COS_Catalonia 1.X":
	bios256U3652();
break;
case "HP COS_Flamenco 1.X":
	bios256U365();
break;
case "HP COS_CrescentW14 1.X":
	bios256U365();
break;
case "HP COS_SKYFIRE 1.0":
	bios256U365();
break;
case "HP COS_FirstAid 1.X":
	bios256U365();
break;
case "HP_Sands 1.0":
	bios128();
break;
case "HP COS_Sands 1.0":
	bios128();
break;
case "HP-OLDMAN":
	bios128();
break;
case "HP_Oldman 1.0":
	bios128();
break;
case "HP COS_Oldman 1.0":
	bios128();
break;
case "HP COS_Hickory13 1.X":
	bios256UH2();
break;
case "HP COS_Hickory14 1.X":
	CheckPNUH2();
break;
default:
	bios();
break;
}
