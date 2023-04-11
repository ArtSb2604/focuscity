function price_rent(num) {
    console.log(num)
    if (num == 'month') {
        $("#price_month").css("display", "block");
        $("#price_square_month").css("display", "none");
        $("#price_square_year").css("display", "none");
        $("#price_month_mob").css("display", "block");
        $("#price_square_month_mob").css("display", "none");
        $("#price_square_year_mob").css("display", "none");
    }
    if (num == 'square_month') {
        $("#price_month").css("display", "none");
        $("#price_square_month").css("display", "block");
        $("#price_square_year").css("display", "none");
        $("#price_month_mob").css("display", "none");
        $("#price_square_month_mob").css("display", "block");
        $("#price_square_year_mob").css("display", "none");
    }
    if (num == 'square_year') {
        $("#price_month").css("display", "none");
        $("#price_square_month").css("display", "none");
        $("#price_square_year").css("display", "block");
        $("#price_month_mob").css("display", "none");
        $("#price_square_month_mob").css("display", "none");
        $("#price_square_year_mob").css("display", "block");
    }
}

function NextSlide_ind() {
    var Menu = document.querySelectorAll('#carousel-in-1 .carousel-item');
    a = 0
    for (let el of Menu) {
        a += 1
        if (el.className.indexOf('active') > -1) {
            if (a == Menu.length) {
                $('#tek_slide').text(1)
            } else {
                $('#tek_slide').text(a+1)
            }
        }
    }
}
function BackSlide_ind() {
    var Menu = document.querySelectorAll('#carousel-in-1 .carousel-item');
    a = 0
    for (let el of Menu) {
        a += 1
        if (el.className.indexOf('active') > -1) {
            if (a-1 == 0) {
                $('#tek_slide').text(Menu.length)
            } else {
                $('#tek_slide').text(a-1)
            }
        }
    }
}

function NextSlide_mob() {
    var Menu = document.querySelectorAll('#carousel-inner_mob .carousel-item');
    a = 0
    for (let el of Menu) {
        a += 1
        if (el.className.indexOf('active') > -1) {
            if (a == Menu.length) {
                $('#tek_slide_mob').text(1)
            } else {
                $('#tek_slide_mob').text(a+1)
            }
        }
    }
}
function BackSlide_mob() {
    var Menu = document.querySelectorAll('#carousel-inner_mob .carousel-item');
    a = 0
    for (let el of Menu) {
        a += 1
        if (el.className.indexOf('active') > -1) {
            if (a-1 == 0) {
                $('#tek_slide_mob').text(Menu.length)
            } else {
                $('#tek_slide_mob').text(a-1)
            }
        }
    }
}

function NextSlide(num) {
    var Menu = document.querySelectorAll('#inner-'+num+' .carousel-item');
    a = 0
    for (let el of Menu) {
        a += 1
        if (el.className.indexOf('active') > -1) {
            if (a == Menu.length) {
                $('#tek_slide-'+num).text(1)
            } else {
                $('#tek_slide-'+num).text(a+1)
            }
        }
    }
}
function BackSlide(num) {
    var Menu = document.querySelectorAll('#inner-'+num+' .carousel-item');
    a = 0
    for (let el of Menu) {
        a += 1
        if (el.className.indexOf('active') > -1) {
            if (a-1 == 0) {
                $('#tek_slide-'+num).text(Menu.length)
            } else {
                $('#tek_slide-'+num).text(a-1)
            }
        }
    }
}

function modal(num, pk) {
    $('#number_broker').text(num)
    $('#modal_pk').val(pk)
}

function modal_form() {
    if ($('.modal_checkbox').is(":checked")) {
        $.ajax(
            {
                type:"GET",
                url: "http://194.67.125.24/admin-panel/callback/save/",
                data: {
                    number : $('#modal_number').val(),
                    name : $('#modal_name').val(),
                    user : $('#modal_pk').val(),
                },
                success: function( data ) {}
            });
    }
}

function wishlist(num, user) {
    $.ajax(
            {
                type:"GET",
                url: "http://194.67.125.24/objects/add_wishlist/",
                data: {
                    num : num,
                    user : user,
                },
                success: function( data ) {}
            });
}

function wishlist_mob(num, user) {
    $.ajax(
            {
                type:"GET",
                url: "http://194.67.125.24/objects/add_wishlist/",
                data: {
                    num : num,
                    user : user,
                },
                success: function( data ) {}
            });
}

function down_photo(num) {
    if (num == '0') {
        $('#type_photo').val('0')
    } else {
        $('#type_photo').val('1')
    }
}

function edit_status(num, pk, type) {
    $.ajax(
        {
            type:"GET",
            url: "http://194.67.125.24/objects/edit_status_ind",
            data: {status : num, pk : pk, type : type},
            success: function( data )
            {
                document.getElementById("status_b").innerHTML = "";
                $("#status_b").append(data)
            }
        });
}