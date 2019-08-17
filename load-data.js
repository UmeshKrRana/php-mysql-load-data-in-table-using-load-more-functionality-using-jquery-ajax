$(document).ready(function() {
    var recordCount         =       2;
    $("#loadBtn").click(function() {
        
        recordCount = recordCount + 2;
        $.ajax({
                    type: "GET",
                    url: "./load-data.php?count="+recordCount,
                    data: {},
                    contentType: "application/json; charset=utf-8",
                    dataType: "json",
                    
                    cache: false,
                       
                    success: function(response) {                           

                        var trHTML = '';
                            $.each(response, function (i, item) {
                                trHTML +=    '<tr><td>' + item.first_name + '</td><td>' + item.last_name +
                               '</td><td>' + item.email + '</td><td>' + item.address + '</td><td>' + item.city +
                               '</td><td>' + item.state + '</td><td>' + item.zip_code + '</td></tr>';
                            });
                            $('#firstTable').append(trHTML);
                    },
                    error: function (e) {
                        console.log(response);
                    }
            });  
    });        
});