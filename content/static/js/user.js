async function filter_user_null() {
    $('#first_name').val('');
    $('#last_name').val('');
    $('#company').val('');
    $('#number_phone').val('');
    $('#email').val('');
    $.ajax(
    {
        type:"GET",
        url: "filter/",
        data: {
            first_name : '',
            last_name: '',
            company: '',
            number_phone: '',
            email: ''
        },
        success: function( data )
        {
            document.getElementById("user_list").innerHTML = "";
            $("#user_list").append(data)
        }
     });
}

$(document).ready(function () {
  $("form").submit(function (event) {
    $.ajax(
    {
        type:"GET",
        url: "filter/",
        data: {
            first_name : $('#first_name').val(),
            last_name : $('#last_name').val(),
            company : $('#company').val(),
            number_phone : $('#number_phone').val(),
            email : $('#email').val(),
        },
        success: function( data )
        {
            document.getElementById("user_list").innerHTML = "";
            $("#user_list").append(data)
        }
     });

    event.preventDefault();
  });
});

$('.delete_user_button').click(function(){
    var catid;
    catid = $(this).attr("data-catid");
    console.log(catid)
    $.ajax(
    {
        type:"GET",
        url: "delete_user",
        data:{
                 user_id: catid
        },
        success: function( data )
        {
            $( '#user-'+ catid ).remove();
        }
     })
});
async function status_user(id) {
    var userid;
    var status;
    userid = $('#user_status' + id).attr("data-userid");
    status = $('#user_status' + id).attr("data-status");
    console.log(userid, status)
    $.ajax(
    {
        type:"GET",
        url: "user_update_status",
        cache: false,
        async: true,
        data:{
                 user_id: userid,
                 status: status,
                 mob : 'pc',
        },
        success: function( data )
        {
            $( '#user_status'+ id ).remove();
            $("#status" + id ).append(data);
        }
     })
}

async function status_user_mob(id) {
    var userid;
    var status;
    userid = $('#user_status_mob' + id).attr("data-userid");
    status = $('#user_status_mob' + id).attr("data-status");
    console.log(userid, status)
    $.ajax(
    {
        type:"GET",
        url: "user_update_status",
        cache: false,
        async: true,
        data:{
                 user_id: userid,
                 status: status,
                 mob : 'mob',
        },
        success: function( data )
        {
            $( '#user_status_mob'+ id ).remove();
            $("#status_mob" + id ).append(data);
        }
     })
}