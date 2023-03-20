function price_rent(num) {
    if (num == 'month') {
        $("#price_month").css("display", "block");
        $("#price_square_month").css("display", "none");
        $("#price_square_year").css("display", "none");
    }
    if (num == 'square_month') {
        $("#price_month").css("display", "none");
        $("#price_square_month").css("display", "block");
        $("#price_square_year").css("display", "none");
    }
    if (num == 'square_year') {
        $("#price_month").css("display", "none");
        $("#price_square_month").css("display", "none");
        $("#price_square_year").css("display", "block");
    }
}

