$(document).ready(function(){
    var url = 'https://api.bintray.com';
    var username ='vishnuraom';
    var password ='';
   $.ajax
    ({
        type: "GET",
        url: url,
        dataType: 'json',
        async: false,
        headers: {
            "Authorization": "Basic " + btoa(username + ":" + password)
        },
        success: function (){
            url = url + '/repos/vishnuraom/omod/packages'
            $.getJSON(url, data, function (data, status) {
                alert(data);
            });
        }
    });
});
