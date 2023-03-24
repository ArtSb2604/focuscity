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