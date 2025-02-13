$(document).ready(() => {
    $("#btnlogin").click(() => {
        let email = $("#email").val();
        let password = $("#password").val();

        if (validate(email, password)) {
            $("#message").html("Welcome Lakhan").css("color", "green");
        } else {
            $("#message").html("Invalid email or password").css("color", "red");
        }
    });
});
