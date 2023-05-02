function showDescription(descript){
    $("#description").html("Description: " + descript);
    }
function hideDescription(){
    $("#description").html("");
    }

function validate(){
    var txtDob = $("#txtDate").val();
    var dob = new Date(txtDob);
    if(dob >= new Date()){
        alert("Date of Birth is not valid. Date has to be before today.");
        return false;
    }

    var phone = $("#phone").val();
    if(phone.length != 5 || isNaN(phone)) {
        alert("Zipcode needs 5 digits or not is not in a valid format");
        return false;
    }
}
