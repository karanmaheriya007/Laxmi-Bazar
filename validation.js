var $FNameLNameRegEx = /^([a-zA-Z]{2,20})$/;
var $FullNameRegEx = /^([a-zA-Z ]{2,40})$/;
var $BankAccountNameRegEx = /^([a-zA-Z ]{2,60})$/;
var $PasswordRegEx = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[^\w\s]).{8,12}$/;
var $EmailIdRegEx = /^\b[A-Z0-9._%-]+@[A-Z0-9.-]+\.[A-Z]{2,8}\b$/i;
var $ConNoRegEx = /^([0-9]{10})$/;
var $AgeRegEx = /^([0-9]{1,2})$/;
var $AadhaarNoRegEx = /^([0-9]{12})$/;
var $GSTNoRegEx = /^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[1-9A-Z]{1}Z[0-9A-Z]{1}$/;
var $IndianDrivingLicenseNoRegEx = /^([A-Z]{2,3}[-/0-9]{8,13})$/;
var $IndianVehicleRegNoRegEx = /^([A-Z]{2}[0-9]{1,2}[A-Z]{1,3}[0-9]{1,4})$/;
var $PincodeRegEx = /^[1-9][0-9]{5,6}$/;
var $PANNoRegEx = /^[A-Z]{3}[ABCFGHLJPT][A-Z][0-9]{4}[A-Z]$/;
var $IFSCCodeRegEx = /^[A-Za-z]{4}0[A-Z0-9a-z]{6}$/;
var $BankAccountNoRegEx = /^([0-9]{9,18})$/;
var $LatitudeLongitude = /^(-?(?:1[0-7]|[1-9])?\d(?:\.\d{1,8})?|180(?:\.0{1,8})?)$/;

$(document).ready(function () {

    $("#TxtFirstName").blur(function () {
        $("#TxtFirstNameValidation").empty();
        if ($(this).val() == "" || $(this).val() == null) {
            $("#TxtFirstNameValidation").html("(*) First Name Required..!!");
        }
        else {
            if (!$(this).val().match($FullNameRegEx)) {
                $("#TxtFirstNameValidation").html("(*) Invalid name..!!");
            }
        }
    });

    $("#TxtFirstName").keypress(function (e) {
        $("#TxtFirstNameValidation").empty();
        var Flag = ((e.which >= 65 && e.which <= 90) || (e.which >= 97 && e.which <= 121));
        if (Flag == false) {
            $("#TxtFirstNameValidation").html("Invalid Input..!!");
        }
        return Flag;
    });

    $("#TxtLastName").blur(function () {
        $("#TxtLastNameValidation").empty();
        if ($(this).val() == "" || $(this).val() == null) {
            $("#TxtLastNameValidation").html("(*) Last Name Required..!!");
        }
        else {
            if (!$(this).val().match($FullNameRegEx)) {
                $("#TxtLastNameValidation").html("(*) Invalid name..!!");
            }
        }
    });

    $("#TxtLastName").keypress(function (e) {
        $("#TxtLastNameValidation").empty();
        var Flag = ((e.which >= 65 && e.which <= 90) || (e.which >= 97 && e.which <= 121));
        if (Flag == false) {
            $("#TxtLastNameValidation").html("Invalid Input..!!");
        }
        return Flag;
    });

    $("#TxtContactNo").blur(function () {
        $("#TxtContactNoValidation").empty();
        if ($(this).val() == "" || $(this).val() == null) {
            $("#TxtContactNoValidation").html("(*) Contact no...!!");
        }
        else {
            if (!$(this).val().match($ConNoRegEx)) {
                $("#TxtContactNoValidation").html("(*) Invalid contact no..!!");
            }
        }
    });

    $("#TxtContactNo").keypress(function (e) {
        $("#TxtContactNoValidation").empty();
        var Flag = (e.which >= 48 && e.which <= 57);
        if (Flag == false) {
            $("#TxtContactNoValidation").html("Invalid Input..!!");
        }
        return Flag;
    });


    $("#TxtEmailId").blur(function () {
        $("#TxtEmailIdValidation").empty();
        if ($(this).val() == "" || $(this).val() == null) {
            $("#TxtEmailIdValidation").html("(*) Email id..!!");
        }
        else {
            if (!$(this).val().match($EmailIdRegEx)) {
                $("#TxtEmailIdValidation").html("(*) Invalid email id..!!");
            }
        }
    });

    $("#TxtMsg").blur(function () {
        $("#TxtMsgValidation").empty();
        if ($(this).val() == "" || $(this).val() == null) {
            $("#TxtMsgValidation").html("(*) feedback message..!!");
        }
        else {
            if ($("#TxtMsg").val().length > 300) {
                $("#TxtMsgValidation").html("(*) Invalid feedback message..!!");
            }
        }
    });

    var TxtFirstNameFlag = false, TxtLastNameFlag = false, TxtContactNoFlag = false, TxtEmailIdFlag = false, TxtMsgFlag = false, DobFlag = false, countryFlag = false, stateFlag = false, cityFlag = false;

    $("#add").click(function (e) {
        $("#TxtFirstNameValidation").empty();
        if ($("#TxtFirstName").val() == "" || $("#TxtFirstName").val() == null) {
            $("#TxtFirstNameValidation").html("(*) First Name Required..!!");
            TxtFirstNameFlag = false;
        }
        else {
            if (!$("#TxtFirstName").val().match($FullNameRegEx)) {
                $("#TxtFirstNameValidation").html("(*) Invalid name..!!");
                TxtFirstNameFlag = false;
            }
            else {
                TxtFirstNameFlag = true;
            }
        }
        $("#TxtLastNameValidation").empty();
        if ($("#TxtLastName").val() == "" || $("#TxtLastName").val() == null) {
            $("#TxtLastNameValidation").html("(*) Last Name Required..!!");
            TxtLastNameFlag = false;
        }
        else {
            if (!$("#TxtLastName").val().match($FullNameRegEx)) {
                $("#TxtLastNameValidation").html("(*) Invalid name..!!");
                TxtLastNameFlag = false;
            }
            else {
                TxtLastNameFlag = true;
            }
        }
        $("#TxtContactNoValidation").empty();
        if ($("#TxtContactNo").val() == "" || $("#TxtContactNo").val() == null) {
            $("#TxtContactNoValidation").html("(*) Contact no...!!");
            TxtContactNoFlag = false;
        }
        else {
            if (!$("#TxtContactNo").val().match($ConNoRegEx)) {
                $("#TxtContactNoValidation").html("(*) Invalid contact no..!!");
                TxtContactNoFlag = false;
            }
            else {
                TxtContactNoFlag = true;
            }
        }
        $("#TxtEmailIdValidation").empty();
        if ($("#TxtEmailId").val() == "" || $("#TxtEmailId").val() == null) {
            $("#TxtEmailIdValidation").html("(*) Email id..!!");
            TxtEmailIdFlag = false;
        }
        else {
            if (!$("#TxtEmailId").val().match($EmailIdRegEx)) {
                $("#TxtEmailIdValidation").html("(*) Invalid email id..!!");
                TxtEmailIdFlag = false;
            }
            else {
                TxtEmailIdFlag = true;
            }
        }
        $("#TxtMsgValidation").empty();
        if ($("#TxtMsg").val() == "" || $("#TxtMsg").val() == null) {
            $("#TxtMsgValidation").html("(*) feedback message..!!");
            TxtMsgFlag = false;
        }
        else {
            if ($("#TxtMsg").val().length > 300) {
                $("#TxtMsgValidation").html("(*) Invalid feedback message..!!");
                TxtMsgFlag = false;
            }
            else {
                TxtMsgFlag = true;
            }
        }
        $("#DobValidation").empty();
        if ($("#DOB").val() == "" || $("#DOB").val() == null) {
            $("#DobValidation").html("(*) date is required..!!");
            DobFlag = false;
        }
        else {
            DobFlag = true;
        }
        $("#stateValidation").empty();
        if ($("#state").val() == "" || $("#state").val() == null) {
            $("#stateValidation").html("(*) please select the state..!!");
            stateFlag = false;
        }
        else {
            stateFlag = true;
        }
        if (TxtFirstNameFlag == true && TxtLastNameFlag == true && TxtContactNoFlag == true && TxtEmailIdFlag == true && TxtMsgFlag == true && DobFlag == true && stateFlag == true) {
            $("input,textarea,select").val("");
            alert("Form submitted successfully..!!");
            location.reload();
        }
        else {
            alert("Invalid Input..!!");
            e.preventDefault(); // Prevent the default form submission if validation fails
        }

    });

});
