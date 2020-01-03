$(function () {

    // $("#inputOTP").addClass("hidden");
    // $("#signBtn").addClass("hidden");
    $("#inputOTP").hide();
    $("#signBtn").hide();


    $("#getOTP").click(function (e) {
        // e.preventDefault();
        // $("#usrnm").addClass('error');
        if ($("#usrnm").val() == "") {
            $.toast({
                heading: 'Required',
                text: 'Please Enter The Phone Number',
                position: 'top-right',
                stack: false
            })
        } else {
            // $("#getOTP").addClass("hidden");
            // $("#inputOTP").removeClass("hidden");
            // $("#signBtn").removeClass("hidden");
            $("#getOTP").hide();
            $("#inputOTP").show();
            $("#signBtn").show();

        }

    });

    $('#sign_in').validate({
        highlight: function (input) {
            // console.log(input);
            $(input).parents('.form-line').addClass('error');
        },
        unhighlight: function (input) {
            $(input).parents('.form-line').removeClass('error');
        },
        errorPlacement: function (error, element) {
            $(element).parents('.input-group').append(error);
        },
        submitHandler: function (form, e) {
            e.preventDefault();
            console.log(e);
            window.location.href = "./dashboard.html";
            return false;
        }
    });
});