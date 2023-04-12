var myMap;

ymaps.ready(init)
function init() {
    myMap = new ymaps.Map("map", {center: [55.7498682028503,37.53772679764558], zoom: 14}, {searchControlProvider: 'yandex#search'});
    myMap.geoObjects.add(new ymaps.Placemark([55.7498682028503,37.53772679764558], {balloonContent: 'цвет <strong>красный</strong>',
        iconCaption: 'Башня “Федерация” Восток'}, {preset: 'islands#redDotIconWithCaption'}))
}

function pu(num) {
    if ($('#info_con-'+num).css("display") == 'none') {
        $("#info_con-"+num).css("display", "block");
        $(".cs-"+num).css("display", "none");
        $("#maps-"+num).css("display", "none");
        $('#text_photo'+num).addClass('btn-picture-text-2').removeClass('btn-picture-text-1');
        $('#text_udob'+num).addClass('btn-picture-text-1').removeClass('btn-picture-text-2');
    } else {
       $("#info_con-"+num).css("display", "none");
       $(".cs-"+num).css("display", "block");
       $("#maps-"+num).css("display", "none");
       $('#text_photo'+num).addClass('btn-picture-text-1').removeClass('btn-picture-text-2');
       $('#text_udob'+num).addClass('btn-picture-text-2').removeClass('btn-picture-text-1');
    }
}

function pu_maps(num, x, y, tower, subtower) {
    console.log(myMap)
    var ls = myMap.container._parentElement.id
    if (myMap.container._parentElement.id.indexOf('-') > -1) {
        console.log(ls.substr(ls.indexOf("-") + 1))
        $("#carouselExample-"+ls.substr(ls.indexOf("-") + 1)).css("display", "block");
        $("#maps-"+ls.substr(ls.indexOf("-") + 1)).css("display", "none");
        $("#info_con-"+ls.substr(ls.indexOf("-") + 1)).css("display", "none");
    }
    myMap.destroy();
    ymaps.ready(init)
    function init() {
    var x1 = parseFloat(x.replace(",", "."));
    var y1 = parseFloat(y.replace(",", "."));
    myMap = new ymaps.Map("map-"+num, {center: [x1,y1], zoom: 14}, {searchControlProvider: 'yandex#search'});
    myMap.geoObjects.add(new ymaps.Placemark([x1,y1], {balloonContent: 'цвет <strong>красный</strong>',
        iconCaption: tower+' '+subtower}, {preset: 'islands#redDotIconWithCaption'}))
    }
    if ($('#maps-'+num).css("display") == 'none') {
        $("#info_con-"+num).css("display", "none");
        $("#carouselExample-"+num).css("display", "none");
        $("#maps-"+num).css("display", "block");
    } else {
       $("#info_con-"+num).css("display", "none");
       $("#carouselExample-"+num).css("display", "block");
       $("#maps-"+num).css("display", "none");
    }
}

function price_rent(num, id) {
    if (num == 'month') {
        $("#price_month-"+id).css("display", "block");
        $("#price_square_month-"+id).css("display", "none");
        $("#price_square_year-"+id).css("display", "none");
    }
    if (num == 'square_month') {
        $("#price_month-"+id).css("display", "none");
        $("#price_square_month-"+id).css("display", "block");
        $("#price_square_year-"+id).css("display", "none");
    }
    if (num == 'square_year') {
        $("#price_month-"+id).css("display", "none");
        $("#price_square_month-"+id).css("display", "none");
        $("#price_square_year-"+id).css("display", "block");
    }
}

function price_rent_mob(num, id) {
    if (num == '1') {
        $("#mob1-"+id).css("display", "block");
        $("#mob2-"+id).css("display", "none");
        $("#mob3-"+id).css("display", "none");
    }
    if (num == '2') {
        $("#mob1-"+id).css("display", "none");
        $("#mob2-"+id).css("display", "block");
        $("#mob3-"+id).css("display", "none");
    }
    if (num == '3') {
        $("#mob1-"+id).css("display", "none");
        $("#mob2-"+id).css("display", "none");
        $("#mob3-"+id).css("display", "block");
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
    $('#inner-'+num).css("display", "block");
    $('#slider-chet-'+num).css("display", "block");
    $('#plan_img_'+num).css("display", "none");
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
    $('#inner-'+num).css("display", "block");
    $('#slider-chet-'+num).css("display", "block");
    $('#plan_img_'+num).css("display", "none");
}

function tristate(control) {
    switch ($(control).data("type")) {
        case "":
            $(control).data("type", 1);
            $(control).css("background-color", "#27CC8C");
            $(control).css("color", "#ffffff");
            break;
        case 1:
             $(control).data("type", 0);
             $(control).css("background-color", "#FF693B");
             $(control).css("color", "#ffffff");
             break;
        case 0:
            $(control).data("type", "");
            $(control).css("background-color", "#ffffff");
            $(control).css("color", "#A1A0A0");
            break;
    }
}

function sr_b(num) {
    if (num == 'rent_filt') {
        $("#sale_filt").removeClass('button-admin-11');
        $("#sale_filt").addClass('button-admin-10');
        $("#rent_filt").removeClass('button-admin-10');
        $("#rent_filt").addClass('button-admin-11');
        $('#price_filter').empty();
        $('#price_filter').append(`<p class="text-apart-2">Диапазон цен</p><div class="price_choices"><input type="radio" id="pricemobChoice1" class="radio-custom" name="price-filter" value="3" checked><label for="pricemobChoice1" class="container-222-block-2-text-1">в месяц</label></div><div class="price_choices"><input type="radio" id="pricemobChoice2" class="radio-custom" name="price-filter" value="4"><label for="pricemobChoice2" class="container-222-block-2-text-2">м²/мес</label></div><div class="price_choices"><input type="radio" id="pricemobChoice3" class="radio-custom" name="price-filter" value="5"><label for="pricemobChoice3" class="container-222-block-2-text-3">м²/год</label></div>`)
    } else {
        $("#sale_filt").removeClass('button-admin-10');
        $("#sale_filt").addClass('button-admin-11');
        $("#rent_filt").removeClass('button-admin-11');
        $("#rent_filt").addClass('button-admin-10');
        $('#price_filter').empty();
        $('#price_filter').append(`<p class="text-apart-new">Диапазон цен</p><div class="price_choices"><input type="radio" id="pricemobChoice1" class="radio-custom" name="price-filter" value="1" checked><label for="pricemobChoice1" class="container-222-block-2-text-3">за все</label></div><div class="price_choices"><input type="radio" id="pricemobChoice2" class="radio-custom" name="price-filter" value="2"><label for="pricemobChoice2" class="container-222-block-2-text-3">за м²</label></div>`)
    }
}

function sr_b_mob(num) {
    if (num == 'rent_filt') {
        $("#sale_filt_mob").addClass('button-admin-11-mob');
        $("#sale_filt_mob").removeClass('button-admin-10-mob');
        $("#rent_filt_mob").addClass('button-admin-10-mob');
        $("#rent_filt_mob").removeClass('button-admin-11-mob');
        $('#type_prop_mob').empty();
        $('#type_prop_mob').append(`<input type="radio" class="btn-check button-apart-mob-1" name="type_prop_mob" id="option2" onclick="prop_mob('Апартамент')" value="Апартамент" autocomplete="off"><label class="btn btn-secondary button-apart-mob-1" for="option2">Апартамент</label><input type="radio" class="btn-check button-apart-mob-2" name="type_prop_mob" id="option3" onclick="prop_mob('Квартира')" value="Квартира" autocomplete="off"><label class="btn btn-secondary button-apart-mob-2" for="option3">Квартира</label><input type="radio" class="btn-check button-apart-mob-3" name="type_prop_mob" id="option4" onclick="prop_mob('Офис')" value="Офис" autocomplete="off"><label class="btn btn-secondary button-apart-mob-3" for="option4">Офис</label><input type="radio" class="btn-check button-apart-mob-4" name="type_prop_mob" id="option5" onclick="prop_mob('Торговая площадь')" value="Торговая площадь" autocomplete="off"><label class="btn btn-secondary button-apart-mob-4" for="option5">Торговая площадь</label><input type="radio" class="btn-check button-apart-mob-5" name="type_prop_mob" id="option6" onclick="prop_mob('Паркинг')" value="Паркинг" autocomplete="off"><label class="btn btn-secondary button-apart-mob-5" for="option6">Паркинг</label><input type="radio" class="btn-check button-apart-mob-6" name="type_prop_mob" id="option7" onclick="prop_mob('Свободного назначения')" value="Свободного назначения" autocomplete="off"><label class="btn btn-secondary button-apart-mob-6" for="option7">Свободного назначения</label><input type="radio" class="btn-check button-apart-mob-1" name="type_prop_mob" id="option8"onclick="prop_mob('Коворкинг')"  value="Коворкинг" autocomplete="off"><label class="btn btn-secondary button-apart-mob-1" for="option8">Коворкинг</label>`)
        $('#price_filter').append(`<p class="text-apart-2">Диапазон цен</p><div class="price_choices"><input type="radio" id="pricemobChoice1_mob" class="radio-custom" name="price-filter_mob" value="3" checked><label for="pricemobChoice1_mob">в месяц</label></div><div class="price_choices"><input type="radio" id="pricemobChoice2_mob" class="radio-custom" name="price-filter_mob" value="4"><label for="pricemobChoice2_mob">м²/мес</label></div><div class="price_choices"><input type="radio" id="pricemobChoice3_mob" class="radio-custom" name="price-filter_mob" value="5"><label for="pricemobChoice3_mob">м²/год</label></div>`)
    } else {
        $("#sale_filt_mob").addClass('button-admin-10-mob');
        $("#sale_filt_mob").removeClass('button-admin-11-mob');
        $("#rent_filt_mob").addClass('button-admin-11-mob');
        $("#rent_filt_mob").removeClass('button-admin-10-mob');
        $('#type_prop_mob').empty();
        $('#type_prop_mob').append(`<input type="radio" class="btn-check button-apart-mob-1" name="type_prop_mob" id="option2" onclick="prop_mob('Апартамент')" value="Апартамент" autocomplete="off"><label class="btn btn-secondary button-apart-mob-1" for="option2">Апартамент</label><input type="radio" class="btn-check button-apart-mob-2" name="type_prop_mob" id="option3" onclick="prop_mob('Квартира')" value="Квартира" autocomplete="off"><label class="btn btn-secondary button-apart-mob-2" for="option3">Квартира</label><input type="radio" class="btn-check button-apart-mob-3" name="type_prop_mob" id="option4" onclick="prop_mob('Офис')" value="Офис" autocomplete="off"><label class="btn btn-secondary button-apart-mob-3" for="option4">Офис</label><input type="radio" class="btn-check button-apart-mob-4" name="type_prop_mob" id="option5" onclick="prop_mob('Торговая площадь')" value="Торговая площадь" autocomplete="off"><label class="btn btn-secondary button-apart-mob-4" for="option5">Торговая площадь</label><input type="radio" class="btn-check button-apart-mob-5" name="type_prop_mob" id="option6" onclick="prop_mob('Паркинг')" value="Паркинг" autocomplete="off"><label class="btn btn-secondary button-apart-mob-5" for="option6">Паркинг</label><input type="radio" class="btn-check button-apart-mob-6" name="type_prop_mob" id="option7" onclick="prop_mob('Свободного назначения')" value="Свободного назначения" autocomplete="off"><label class="btn btn-secondary button-apart-mob-6" for="option7">Свободного назначения</label>`)
        $('#price_filter').append(`<p class="text-apart-new">Диапазон цен</p><div class="price_choices"><input type="radio" id="pricemobChoice1_mob" class="radio-custom" name="price-filter_mob" value="1" checked><label for="pricemobChoice1_mob">за все</label></div><div class="price_choices"><input type="radio" id="pricemobChoice2_mob" class="radio-custom" name="price-filter_mob" value="2"><label for="pricemobChoice2_mob">за м²</label></div>`)
    }
}

function input_number_phone(num) {
    $(num).val('+'+$('#number_phone').val().replace('+',''));
}

function input_number_phone_mob(num) {
    $(num).val('+'+$('#number_phone').val().replace('+',''));
}


function input_price(num) {
    $(num).val(String($(num).val().replace(/[^0-9.]/g,'')).replace(/\B(?=(\d{3})+(?!\d))/g, " "));
}

$("#type_prop").change( function() {
    switch ($("#type_prop option:selected").val()) {
        case "Апартамент":
            $("#text_filter").text("Спален");
            $("#filter_var").empty();
            $("#filter_var").append(`<option class="apart-list-2" value="" selected>Выбрать</option>
                                <option class="apart-list-1" value="Студия">Студия</option>
                                <option class="apart-list-1" value="1">1</option>
                                <option class="apart-list-1" value="2">2</option>
                                <option class="apart-list-1" value="3">3</option>
                                <option class="apart-list-1" value="4">4</option>
                                <option class="apart-list-1" value="5+">5+</option>`);
            $('#udobstva_ap_kv').attr("style", "display: flex");
            $('#udobstva_ost').attr("style", "display: none !important");
            break;
        case "Квартира":
            $("#text_filter").text("Спален");
            $("#filter_var").empty();
            $("#filter_var").append(`<option class="apart-list-2" value="" selected>Выбрать</option>
                                <option class="apart-list-1" value="Студия">Студия</option>
                                <option class="apart-list-1" value="1">1</option>
                                <option class="apart-list-1" value="2">2</option>
                                <option class="apart-list-1" value="3">3</option>
                                <option class="apart-list-1" value="4">4</option>
                                <option class="apart-list-1" value="5+">5+</option>`);
            $('#udobstva_ap_kv').attr("style", "display: flex");
            $('#udobstva_ost').attr("style", "display: none !important");
            break;
        case "Офис":
            $("#text_filter").text("Комнат");
            $("#filter_var").empty();
            $("#filter_var").append(`<option class="apart-list-2" value="" selected>Выбрать</option>
                                <option class="apart-list-1" value="openspace">openspace</option>
                                <option class="apart-list-1" value="1">1</option>
                                <option class="apart-list-1" value="2">2</option>
                                <option class="apart-list-1" value="3">3</option>
                                <option class="apart-list-1" value="4">4</option>
                                <option class="apart-list-1" value="5+">5+</option>`);
            $('#udobstva_ap_kv').attr("style", "display: none !important");
            $('#udobstva_ost').attr("style", "display: flex");
            break;
        case "Торговая площадь":
            $("#text_filter").text("Комнат");
            $("#filter_var").empty();
            $("#filter_var").append(`<option class="apart-list-2" value="" selected>Выбрать</option>
                                <option class="apart-list-1" value="openspace">openspace</option>
                                <option class="apart-list-1" value="1">1</option>
                                <option class="apart-list-1" value="2">2</option>
                                <option class="apart-list-1" value="3">3</option>
                                <option class="apart-list-1" value="4">4</option>
                                <option class="apart-list-1" value="5+">5+</option>`);
            $('#udobstva_ap_kv').attr("style", "display: none !important");
            $('#udobstva_ost').attr("style", "display: flex");
            break;
        case "Свободного назначения":
            $("#text_filter").text("Комнат");
            $("#filter_var").empty();
            $("#filter_var").append(`<option class="apart-list-2" value="" selected>Выбрать</option>
                                <option class="apart-list-1" value="openspace">openspace</option>
                                <option class="apart-list-1" value="1">1</option>
                                <option class="apart-list-1" value="2">2</option>
                                <option class="apart-list-1" value="3">3</option>
                                <option class="apart-list-1" value="4">4</option>
                                <option class="apart-list-1" value="5+">5+</option>`);
            $('#udobstva_ap_kv').attr("style", "display: none !important");
            $('#udobstva_ost').attr("style", "display: flex");
            break;
        case "Паркинг":
            $("#text_filter").text("Обременение");
            $("#filter_var").empty();
            $("#filter_var").append(`<option class="apart-list-2" value="" selected>Выбрать</option>
                                <option class="apart-list-1" value="Без обременений">Без обременений</option>
                                <option class="apart-list-1" value="Аренда (субаренда)">Аренда (субаренда)</option>
                                <option class="apart-list-1" value="Ипотека (залог недвижимости)">Ипотека (залог недвижимости)</option>
                                <option class="apart-list-1" value="Арест">Арест</option>`);
            $('#udobstva_ap_kv').attr("style", "display: none !important");
            $('#udobstva_ost').attr("style", "display: none !important");
            break;
        case "Коворкинг":
            $("#text_filter").text("Комнат");
            $("#filter_var").empty();
            $("#filter_var").append(`<option class="apart-list-2" value="" selected>Выбрать</option>
                                <option class="apart-list-1" value="openspace">openspace</option>
                                <option class="apart-list-1" value="1">1</option>
                                <option class="apart-list-1" value="2">2</option>
                                <option class="apart-list-1" value="3">3</option>
                                <option class="apart-list-1" value="4">4</option>
                                <option class="apart-list-1" value="5+">5+</option>`);
            $('#udobstva_ap_kv').attr("style", "display: none !important");
            $('#udobstva_ost').attr("style", "display: flex");
            break;
    }
});

function prop_filter(prop) {
    switch (prop) {
        case "Апартамент":
            $("#text_filter").text("Спален");
            $("#filter_var").empty();
            $("#filter_var").append(`<option class="apart-list-2" value="" selected>Выбрать</option>
                                <option class="apart-list-1" value="Студия">Студия</option>
                                <option class="apart-list-1" value="1">1</option>
                                <option class="apart-list-1" value="2">2</option>
                                <option class="apart-list-1" value="3">3</option>
                                <option class="apart-list-1" value="4">4</option>
                                <option class="apart-list-1" value="5+">5+</option>`);
            $('#udobstva_ap_kv').attr("style", "display: flex");
            $('#udobstva_ost').attr("style", "display: none !important");
            break;
        case "Квартира":
            $("#text_filter").text("Спален");
            $("#filter_var").empty();
            $("#filter_var").append(`<option class="apart-list-2" value="" selected>Выбрать</option>
                                <option class="apart-list-1" value="Студия">Студия</option>
                                <option class="apart-list-1" value="1">1</option>
                                <option class="apart-list-1" value="2">2</option>
                                <option class="apart-list-1" value="3">3</option>
                                <option class="apart-list-1" value="4">4</option>
                                <option class="apart-list-1" value="5+">5+</option>`);
            $('#udobstva_ap_kv').attr("style", "display: flex");
            $('#udobstva_ost').attr("style", "display: none !important");
            break;
        case "Офис":
            $("#text_filter").text("Комнат");
            $("#filter_var").empty();
            $("#filter_var").append(`<option class="apart-list-2" value="" selected>Выбрать</option>
                                <option class="apart-list-1" value="openspace">openspace</option>
                                <option class="apart-list-1" value="1">1</option>
                                <option class="apart-list-1" value="2">2</option>
                                <option class="apart-list-1" value="3">3</option>
                                <option class="apart-list-1" value="4">4</option>
                                <option class="apart-list-1" value="5+">5+</option>`);
            $('#udobstva_ap_kv').attr("style", "display: none !important");
            $('#udobstva_ost').attr("style", "display: flex");
            break;
        case "Торговая площадь":
            $("#text_filter").text("Комнат");
            $("#filter_var").empty();
            $("#filter_var").append(`<option class="apart-list-2" value="" selected>Выбрать</option>
                                <option class="apart-list-1" value="openspace">openspace</option>
                                <option class="apart-list-1" value="1">1</option>
                                <option class="apart-list-1" value="2">2</option>
                                <option class="apart-list-1" value="3">3</option>
                                <option class="apart-list-1" value="4">4</option>
                                <option class="apart-list-1" value="5+">5+</option>`);
            $('#udobstva_ap_kv').attr("style", "display: none !important");
            $('#udobstva_ost').attr("style", "display: flex");
            break;
        case "Свободного назначения":
            $("#text_filter").text("Комнат");
            $("#filter_var").empty();
            $("#filter_var").append(`<option class="apart-list-2" value="" selected>Выбрать</option>
                                <option class="apart-list-1" value="openspace">openspace</option>
                                <option class="apart-list-1" value="1">1</option>
                                <option class="apart-list-1" value="2">2</option>
                                <option class="apart-list-1" value="3">3</option>
                                <option class="apart-list-1" value="4">4</option>
                                <option class="apart-list-1" value="5+">5+</option>`);
            $('#udobstva_ap_kv').attr("style", "display: none !important");
            $('#udobstva_ost').attr("style", "display: flex");
            break;
        case "Паркинг":
            $("#text_filter").text("Обременение");
            $("#filter_var").empty();
            $("#filter_var").append(`<option class="apart-list-2" value="" selected>Выбрать</option>
                                <option class="apart-list-1" value="Без обременений">Без обременений</option>
                                <option class="apart-list-1" value="Аренда (субаренда)">Аренда (субаренда)</option>
                                <option class="apart-list-1" value="Ипотека (залог недвижимости)">Ипотека (залог недвижимости)</option>
                                <option class="apart-list-1" value="Арест">Арест</option>`);
            $('#udobstva_ap_kv').attr("style", "display: none !important");
            $('#udobstva_ost').attr("style", "display: none !important");
            break;
        case "Коворкинг":
            $("#text_filter").text("Комнат");
            $("#filter_var").empty();
            $("#filter_var").append(`<option class="apart-list-2" value="" selected>Выбрать</option>
                                <option class="apart-list-1" value="openspace">openspace</option>
                                <option class="apart-list-1" value="1">1</option>
                                <option class="apart-list-1" value="2">2</option>
                                <option class="apart-list-1" value="3">3</option>
                                <option class="apart-list-1" value="4">4</option>
                                <option class="apart-list-1" value="5+">5+</option>`);
            $('#udobstva_ap_kv').attr("style", "display: none !important");
            $('#udobstva_ost').attr("style", "display: flex");
            break;
    }
}

function prop_mob(prop){
    switch (prop) {
        case "Апартамент":
            $("#text_filter_mob").text("Спален");
            $("#filter_var_mob").empty();
            $("#filter_var_mob").append(`<input type="radio" class="btn-check button-apart-mob-7" name="options" id="option8_apart" value="Студия" autocomplete="off">
                        <label class="btn btn-secondary button-apart-mob-7" for="option8_apart">Студия</label>
                        <input type="radio" class="btn-check button-apart-mob-8" name="options" id="option9_apart" value="1" autocomplete="off">
                        <label class="btn btn-secondary button-apart-mob-8" for="option9_apart">1</label>
                        <input type="radio" class="btn-check button-apart-mob-8" name="options" id="option10_apart" value="2" autocomplete="off">
                        <label class="btn btn-secondary button-apart-mob-8" for="option10_apart">2</label>
                        <input type="radio" class="btn-check button-apart-mob-8" name="options" id="option11_apart" value="3" autocomplete="off">
                        <label class="btn btn-secondary button-apart-mob-8" for="option11_apart">3</label>
                        <input type="radio" class="btn-check button-apart-mob-8" name="options" id="option12_apart" value="4" autocomplete="off">
                        <label class="btn btn-secondary button-apart-mob-8" for="option12_apart">4</label>
                        <input type="radio" class="btn-check button-apart-mob-9" name="options" id="option13_apart" value="+5" autocomplete="off">
                        <label class="btn btn-secondary button-apart-mob-9" for="option13_apart">+5</label>`);
            $('#udobstva_ap_kv').attr("style", "display: flex");
            $('#udobstva_ost').attr("style", "display: none !important");
            $('#udob_list_mob').empty();
            $("#udob_list_mob").append(`<span class="button-apart-mob-10 udob_mob" id="flexCheckDefault-1_mob" data-type="" onclick="tristate(this);">
                            <label class="form-check-label" for="flexCheckDefault-1_mob"><img src="http://194.67.125.24/static/img/icon/ud-3.png" style="width: 20px; height: 20px;">
                                Мебель</label>
                        </span>
                        <span class="button-apart-mob-11 udob_mob" id="flexCheckDefault-2_mob" data-type="" onclick="tristate(this);">
                            <label class="form-check-label" for="flexCheckDefault-2_mob"><img src="http://194.67.125.24/static/img/icon/ud-2.png" style="width: 20px; height: 20px;">
                                Вид на сити</label>
                        </span>
                        <span class="button-apart-mob-11 udob_mob" id="flexCheckDefault-3_mob" data-type="" onclick="tristate(this);">
                            <label class="form-check-label" for="flexCheckDefault-3_mob"><img src="http://194.67.125.24/static/img/icon/ud-1.png" style="width: 20px; height: 20px;">
                            Вид на город</label>
                        </span>
                        <span class="button-apart-mob-12 udob_mob" id="flexCheckDefault-4_mob" data-type="" onclick="tristate(this);">
                            <label class="form-check-label" for="flexCheckDefault-4_mob"><img src="http://194.67.125.24/static/img/icon/ud-5.png" style="width: 20px; height: 20px;">
                                Угол</label>
                        </span>
                        <span class="button-apart-mob-13 udob_mob" id="flexCheckDefault-5_mob" data-type="" onclick="tristate(this);">
                            <label class="form-check-label" for="flexCheckDefault-5_mob"><img src="http://194.67.125.24/static/img/icon/ud-4.png" style="width: 20px; height: 20px;">
                            Мастер-спальня</label>
                        </span>
                        <span class="button-apart-mob-14 udob_mob" id="flexCheckDefault-6_mob" data-type="" onclick="tristate(this);">
                            <label class="form-check-label" for="flexCheckDefault-6_mob"><img src="http://194.67.125.24/static/img/icon/ud-6.png" style="width: 20px; height: 20px;">
                            Кухня гостиная</label>
                        </span>
                        <span class="button-apart-mob-15 udob_mob" id="flexCheckDefault-7_mob" data-type="" onclick="tristate(this);">
                            <label class="form-check-label" for="flexCheckDefault-7_mob"><img src="http://194.67.125.24/static/img/icon/ud-8.png" style="width: 20px; height: 20px;">
                            Кровать</label>
                        </span>
                        <span class="button-apart-mob-16 udob_mob" id="flexCheckDefault-8_mob" data-type="" onclick="tristate(this);">
                            <label class="form-check-label" for="flexCheckDefault-8_mob"><img src="http://194.67.125.24/static/img/icon/ud-9.png" style="width: 20px; height: 20px;">
                            Бытовые приборы</label>
                        </span>
                        <span class="button-apart-mob-17 udob_mob" id="flexCheckDefault-9_mob" data-type="" onclick="tristate(this);">
                            <label class="form-check-label" for="flexCheckDefault-9_mob"><img src="http://194.67.125.24/static/img/icon/ud-12.png" style="width: 20px; height: 20px;">
                            Ванна</label>
                        </span>
                         <span class="button-apart-mob-18 udob_mob" id="flexCheckDefault-10_mob" data-type="" onclick="tristate(this);">
                            <label class="form-check-label" for="flexCheckDefault-10_mob"><img src="http://194.67.125.24/static/img/icon/ud-7.png" style="width: 20px; height: 20px;">
                            Гардеробная</label>
                        </span>
                         <span class="button-apart-mob-19 udob_mob" id="flexCheckDefault-11_mob" data-type="" onclick="tristate(this);">
                            <label class="form-check-label" for="flexCheckDefault-11_mob"><img src="http://194.67.125.24/static/img/icon/ud-11.png" style="width: 20px; height: 20px;">
                            Душ</label>
                        </span>
                         <span class="button-apart-mob-20 udob_mob" id="flexCheckDefault-12_mob" data-type="" onclick="tristate(this);">
                            <label class="form-check-label" for="flexCheckDefault-12_mob"><img src="http://194.67.125.24/static/img/icon/ud-10.png" style="width: 20px; height: 20px;">
                            Постирочная</label>
                        </span>`);
            break;
        case "Квартира":
            $("#text_filter_mob").text("Спален");
            $("#filter_var_mob").empty();
            $("#filter_var_mob").append(`<input type="radio" class="btn-check button-apart-mob-7" name="options" id="option8_apart" value="Студия" autocomplete="off">
                        <label class="btn btn-secondary button-apart-mob-7" for="option8_apart">Студия</label>
                        <input type="radio" class="btn-check button-apart-mob-8" name="options" id="option9_apart" value="1" autocomplete="off">
                        <label class="btn btn-secondary button-apart-mob-8" for="option9_apart">1</label>
                        <input type="radio" class="btn-check button-apart-mob-8" name="options" id="option10_apart" value="2" autocomplete="off">
                        <label class="btn btn-secondary button-apart-mob-8" for="option10_apart">2</label>
                        <input type="radio" class="btn-check button-apart-mob-8" name="options" id="option11_apart" value="3" autocomplete="off">
                        <label class="btn btn-secondary button-apart-mob-8" for="option11_apart">3</label>
                        <input type="radio" class="btn-check button-apart-mob-8" name="options" id="option12_apart" value="4" autocomplete="off">
                        <label class="btn btn-secondary button-apart-mob-8" for="option12_apart">4</label>
                        <input type="radio" class="btn-check button-apart-mob-9" name="options" id="option13_apart" value="+5" autocomplete="off">
                        <label class="btn btn-secondary button-apart-mob-9" for="option13_apart">+5</label>`);
            $('#udobstva_ap_kv').attr("style", "display: flex");
            $('#udobstva_ost').attr("style", "display: none !important");
            $('#udob_list_mob').empty();
            $("#udob_list_mob").append(`<span class="button-apart-mob-10 udob_mob" id="flexCheckDefault-1_mob" data-type="" onclick="tristate(this);">
                            <label class="form-check-label" for="flexCheckDefault-1_mob"><img src="http://194.67.125.24/static/img/icon/ud-13.png" style="width: 20px; height: 20px;">
                                Мебель</label>
                        </span>
                        <span class="button-apart-mob-11 udob_mob" id="flexCheckDefault-2_mob" data-type="" onclick="tristate(this);">
                            <label class="form-check-label" for="flexCheckDefault-2_mob"><img src="http://194.67.125.24/static/img/icon/ud-2.png" style="width: 20px; height: 20px;">
                                Вид на сити</label>
                        </span>
                        <span class="button-apart-mob-11 udob_mob" id="flexCheckDefault-3_mob" data-type="" onclick="tristate(this);">
                            <label class="form-check-label" for="flexCheckDefault-3_mob"><img src="http://194.67.125.24/static/img/icon/ud-1.png" style="width: 20px; height: 20px;">
                            Вид на город</label>
                        </span>
                        <span class="button-apart-mob-12 udob_mob" id="flexCheckDefault-4_mob" data-type="" onclick="tristate(this);">
                            <label class="form-check-label" for="flexCheckDefault-4_mob"><img src="http://194.67.125.24/static/img/icon/ud-5.png" style="width: 20px; height: 20px;">
                                Угол</label>
                        </span>
                        <span class="button-apart-mob-13 udob_mob" id="flexCheckDefault-5_mob" data-type="" onclick="tristate(this);">
                            <label class="form-check-label" for="flexCheckDefault-5_mob"><img src="http://194.67.125.24/static/img/icon/ud-4.png" style="width: 20px; height: 20px;">
                            Мастер-спальня</label>
                        </span>
                        <span class="button-apart-mob-14 udob_mob" id="flexCheckDefault-6_mob" data-type="" onclick="tristate(this);">
                            <label class="form-check-label" for="flexCheckDefault-6_mob"><img src="http://194.67.125.24/static/img/icon/ud-6.png" style="width: 20px; height: 20px;">
                            Кухня гостиная</label>
                        </span>
                        <span class="button-apart-mob-15 udob_mob" id="flexCheckDefault-7_mob" data-type="" onclick="tristate(this);">
                            <label class="form-check-label" for="flexCheckDefault-7_mob"><img src="http://194.67.125.24/static/img/icon/ud-8.png" style="width: 20px; height: 20px;">
                            Кровать</label>
                        </span>
                        <span class="button-apart-mob-16 udob_mob" id="flexCheckDefault-8_mob" data-type="" onclick="tristate(this);">
                            <label class="form-check-label" for="flexCheckDefault-8_mob"><img src="http://194.67.125.24/static/img/icon/ud-9.png" style="width: 20px; height: 20px;">
                            Бытовые приборы</label>
                        </span>
                        <span class="button-apart-mob-17 udob_mob" id="flexCheckDefault-9_mob" data-type="" onclick="tristate(this);">
                            <label class="form-check-label" for="flexCheckDefault-9_mob"><img src="http://194.67.125.24/static/img/icon/ud-12.png" style="width: 20px; height: 20px;">
                            Ванна</label>
                        </span>
                         <span class="button-apart-mob-18 udob_mob" id="flexCheckDefault-10_mob" data-type="" onclick="tristate(this);">
                            <label class="form-check-label" for="flexCheckDefault-10_mob"><img src="http://194.67.125.24/static/img/icon/ud-7.png" style="width: 20px; height: 20px;">
                            Гардеробная</label>
                        </span>
                         <span class="button-apart-mob-19 udob_mob" id="flexCheckDefault-11_mob" data-type="" onclick="tristate(this);">
                            <label class="form-check-label" for="flexCheckDefault-11_mob"><img src="http://194.67.125.24/static/img/icon/ud-11.png" style="width: 20px; height: 20px;">
                            Душ</label>
                        </span>
                         <span class="button-apart-mob-20 udob_mob" id="flexCheckDefault-12_mob" data-type="" onclick="tristate(this);">
                            <label class="form-check-label" for="flexCheckDefault-12_mob"><img src="http://194.67.125.24/static/img/icon/ud-10.png" style="width: 20px; height: 20px;">
                            Постирочная</label>
                        </span>`);
            break;
        case "Офис":
            $("#text_filter_mob").text("Комнат");
            $("#filter_var_mob").empty();
            $("#filter_var_mob").append(`<input type="radio" class="btn-check button-apart-mob-7" name="options" id="option8_apart" value="openspace" autocomplete="off">
                        <label class="btn btn-secondary button-apart-mob-7" for="option8_apart">openspace</label>
                        <input type="radio" class="btn-check button-apart-mob-8" name="options" id="option9_apart" value="1" autocomplete="off">
                        <label class="btn btn-secondary button-apart-mob-8" for="option9_apart">1</label>
                        <input type="radio" class="btn-check button-apart-mob-8" name="options" id="option10_apart" value="2" autocomplete="off">
                        <label class="btn btn-secondary button-apart-mob-8" for="option10_apart">2</label>
                        <input type="radio" class="btn-check button-apart-mob-8" name="options" id="option11_apart" value="3" autocomplete="off">
                        <label class="btn btn-secondary button-apart-mob-8" for="option11_apart">3</label>
                        <input type="radio" class="btn-check button-apart-mob-8" name="options" id="option12_apart" value="4" autocomplete="off">
                        <label class="btn btn-secondary button-apart-mob-8" for="option12_apart">4</label>
                        <input type="radio" class="btn-check button-apart-mob-9" name="options" id="option13_apart" value="+5" autocomplete="off">
                        <label class="btn btn-secondary button-apart-mob-9" for="option13_apart">+5</label>`);
            $('#udobstva_ap_kv').attr("style", "display: none !important");
            $('#udobstva_ost').attr("style", "display: flex");
            $('#udob_list_mob').empty();
            $("#udob_list_mob").append(`<span class="button-apart-mob-10 udob_mob" id="flexCheckDefault-1_mob" data-type="" onclick="tristate(this);">
                            <label class="form-check-label" for="flexCheckDefault-1_mob"><img src="http://194.67.125.24/static/img/icon/ud-3.png" style="width: 20px; height: 20px;">
                                Мебель</label>
                        </span>
                        <span class="button-apart-mob-11 udob_mob" id="flexCheckDefault-2_mob" data-type="" onclick="tristate(this);">
                            <label class="form-check-label" for="flexCheckDefault-2_mob"><img src="http://194.67.125.24/static/img/icon/ud-2.png" style="width: 20px; height: 20px;">
                                Вид на сити</label>
                        </span>
                        <span class="button-apart-mob-11 udob_mob" id="flexCheckDefault-3_mob" data-type="" onclick="tristate(this);">
                            <label class="form-check-label" for="flexCheckDefault-3_mob"><img src="http://194.67.125.24/static/img/icon/ud-1.png" style="width: 20px; height: 20px;">
                            Вид на город</label>
                        </span>
                        <span class="button-apart-mob-12 udob_mob" id="flexCheckDefault-4_mob" data-type="" onclick="tristate(this);">
                            <label class="form-check-label" for="flexCheckDefault-4_mob"><img src="http://194.67.125.24/static/img/icon/ud-5.png" style="width: 20px; height: 20px;">
                                Угол</label>
                        </span>
                        <span class="button-apart-mob-13 udob_mob" id="flexCheckDefault-5_mob" data-type="" onclick="tristate(this);">
                            <label class="form-check-label" for="flexCheckDefault-5_mob"><img src="http://194.67.125.24/static/img/icon/ud-13.png" style="width: 20px; height: 20px;">
                            Свой с/у</label>
                        </span>
                        <span class="button-apart-mob-14 udob_mob" id="flexCheckDefault-6_mob" data-type="" onclick="tristate(this);">
                            <label class="form-check-label" for="flexCheckDefault-6_mob"><img src="http://194.67.125.24/static/img/icon/ud-6.png" style="width: 20px; height: 20px;">
                            Кухня</label>
                        </span>`);
            break;
        case "Торговая площадь":
            $("#text_filter_mob").text("Комнат");
            $("#filter_var_mob").empty();
            $("#filter_var_mob").append(`<input type="radio" class="btn-check button-apart-mob-7" name="options" id="option8_apart" value="openspace" autocomplete="off">
                        <label class="btn btn-secondary button-apart-mob-7" for="option8_apart">openspace</label>
                        <input type="radio" class="btn-check button-apart-mob-8" name="options" id="option9_apart" value="1" autocomplete="off">
                        <label class="btn btn-secondary button-apart-mob-8" for="option9_apart">1</label>
                        <input type="radio" class="btn-check button-apart-mob-8" name="options" id="option10_apart" value="2" autocomplete="off">
                        <label class="btn btn-secondary button-apart-mob-8" for="option10_apart">2</label>
                        <input type="radio" class="btn-check button-apart-mob-8" name="options" id="option11_apart" value="3" autocomplete="off">
                        <label class="btn btn-secondary button-apart-mob-8" for="option11_apart">3</label>
                        <input type="radio" class="btn-check button-apart-mob-8" name="options" id="option12_apart" value="4" autocomplete="off">
                        <label class="btn btn-secondary button-apart-mob-8" for="option12_apart">4</label>
                        <input type="radio" class="btn-check button-apart-mob-9" name="options" id="option13_apart" value="+5" autocomplete="off">
                        <label class="btn btn-secondary button-apart-mob-9" for="option13_apart">+5</label>`);
            $('#udobstva_ap_kv').attr("style", "display: none !important");
            $('#udobstva_ost').attr("style", "display: flex");
            $('#udob_list_mob').empty();
            $("#udob_list_mob").append(`<span class="button-apart-mob-10 udob_mob" id="flexCheckDefault-1_mob" data-type="" onclick="tristate(this);">
                            <label class="form-check-label" for="flexCheckDefault-1_mob"><img src="http://194.67.125.24/static/img/icon/ud-3.png" style="width: 20px; height: 20px;">
                                Мебель</label>
                        </span>
                        <span class="button-apart-mob-11 udob_mob" id="flexCheckDefault-2_mob" data-type="" onclick="tristate(this);">
                            <label class="form-check-label" for="flexCheckDefault-2_mob"><img src="http://194.67.125.24/static/img/icon/ud-2.png" style="width: 20px; height: 20px;">
                                Вид на сити</label>
                        </span>
                        <span class="button-apart-mob-11 udob_mob" id="flexCheckDefault-3_mob" data-type="" onclick="tristate(this);">
                            <label class="form-check-label" for="flexCheckDefault-3_mob"><img src="http://194.67.125.24/static/img/icon/ud-1.png" style="width: 20px; height: 20px;">
                            Вид на город</label>
                        </span>
                        <span class="button-apart-mob-12 udob_mob" id="flexCheckDefault-4_mob" data-type="" onclick="tristate(this);">
                            <label class="form-check-label" for="flexCheckDefault-4_mob"><img src="http://194.67.125.24/static/img/icon/ud-5.png" style="width: 20px; height: 20px;">
                                Угол</label>
                        </span>
                        <span class="button-apart-mob-13 udob_mob" id="flexCheckDefault-5_mob" data-type="" onclick="tristate(this);">
                            <label class="form-check-label" for="flexCheckDefault-5_mob"><img src="http://194.67.125.24/static/img/icon/ud-13.png" style="width: 20px; height: 20px;">
                            Свой с/у</label>
                        </span>
                        <span class="button-apart-mob-14 udob_mob" id="flexCheckDefault-6_mob" data-type="" onclick="tristate(this);">
                            <label class="form-check-label" for="flexCheckDefault-6_mob"><img src="http://194.67.125.24/static/img/icon/ud-6.png" style="width: 20px; height: 20px;">
                            Кухня</label>
                        </span>`);
            break;
        case "Свободного назначения":
            $("#text_filter_mob").text("Комнат");
            $("#filter_var_mob").empty();
            $("#filter_var_mob").append(`<input type="radio" class="btn-check button-apart-mob-7" name="options" id="option8_apart" value="openspace" autocomplete="off">
                        <label class="btn btn-secondary button-apart-mob-7" for="option8_apart">openspace</label>
                        <input type="radio" class="btn-check button-apart-mob-8" name="options" id="option9_apart" value="1" autocomplete="off">
                        <label class="btn btn-secondary button-apart-mob-8" for="option9_apart">1</label>
                        <input type="radio" class="btn-check button-apart-mob-8" name="options" id="option10_apart" value="2" autocomplete="off">
                        <label class="btn btn-secondary button-apart-mob-8" for="option10_apart">2</label>
                        <input type="radio" class="btn-check button-apart-mob-8" name="options" id="option11_apart" value="3" autocomplete="off">
                        <label class="btn btn-secondary button-apart-mob-8" for="option11_apart">3</label>
                        <input type="radio" class="btn-check button-apart-mob-8" name="options" id="option12_apart" value="4" autocomplete="off">
                        <label class="btn btn-secondary button-apart-mob-8" for="option12_apart">4</label>
                        <input type="radio" class="btn-check button-apart-mob-9" name="options" id="option13_apart" value="+5" autocomplete="off">
                        <label class="btn btn-secondary button-apart-mob-9" for="option13_apart">+5</label>`);
            $('#udobstva_ap_kv').attr("style", "display: none !important");
            $('#udobstva_ost').attr("style", "display: flex");
            $('#udob_list_mob').empty();
            $("#udob_list_mob").append(`<span class="button-apart-mob-10 udob_mob" id="flexCheckDefault-1_mob" data-type="" onclick="tristate(this);">
                            <label class="form-check-label" for="flexCheckDefault-1_mob"><img src="http://194.67.125.24/static/img/icon/ud-3.png" style="width: 20px; height: 20px;">
                                Мебель</label>
                        </span>
                        <span class="button-apart-mob-11 udob_mob" id="flexCheckDefault-2_mob" data-type="" onclick="tristate(this);">
                            <label class="form-check-label" for="flexCheckDefault-2_mob"><img src="http://194.67.125.24/static/img/icon/ud-2.png" style="width: 20px; height: 20px;">
                                Вид на сити</label>
                        </span>
                        <span class="button-apart-mob-11 udob_mob" id="flexCheckDefault-3_mob" data-type="" onclick="tristate(this);">
                            <label class="form-check-label" for="flexCheckDefault-3_mob"><img src="http://194.67.125.24/static/img/icon/ud-1.png" style="width: 20px; height: 20px;">
                            Вид на город</label>
                        </span>
                        <span class="button-apart-mob-12 udob_mob" id="flexCheckDefault-4_mob" data-type="" onclick="tristate(this);">
                            <label class="form-check-label" for="flexCheckDefault-4_mob"><img src="http://194.67.125.24/static/img/icon/ud-5.png" style="width: 20px; height: 20px;">
                                Угол</label>
                        </span>
                        <span class="button-apart-mob-13 udob_mob" id="flexCheckDefault-5_mob" data-type="" onclick="tristate(this);">
                            <label class="form-check-label" for="flexCheckDefault-5_mob"><img src="http://194.67.125.24/static/img/icon/ud-13.png" style="width: 20px; height: 20px;">
                            Свой с/у</label>
                        </span>
                        <span class="button-apart-mob-14 udob_mob" id="flexCheckDefault-6_mob" data-type="" onclick="tristate(this);">
                            <label class="form-check-label" for="flexCheckDefault-6_mob"><img src="http://194.67.125.24/static/img/icon/ud-6.png" style="width: 20px; height: 20px;">
                            Кухня</label>
                        </span>`);
            break;
        case "Паркинг":
            $("#text_filter_mob").text("Обременение");
            $("#filter_var_mob").empty();
            $("#filter_var_mob").append(`<input type="radio" class="btn-check button-apart-mob-4" name="options" id="option8_apart" value="Без обременений" autocomplete="off">
                        <label class="btn btn-secondary button-apart-mob-4" for="option8_apart">Без обременений</label>
                        <input type="radio" class="btn-check button-apart-mob-4" style="width: 173px;" name="options" id="option9_apart" value="Аренда (субаренда)" autocomplete="off">
                        <label class="btn btn-secondary button-apart-mob-4" style="width: 173px;" for="option9_apart">Аренда (субаренда)</label>
                        <input type="radio" class="btn-check button-apart-mob-1" style="width: 250px;" name="options" id="option10_apart" value="Ипотека (залог недвижимости)" autocomplete="off">
                        <label class="btn btn-secondary button-apart-mob-1" style="width: 250px;" for="option10_apart">Ипотека (залог недвижимости)</label>
                        <input type="radio" class="btn-check button-apart-mob-3" name="options" id="option11_apart" value="Арест" autocomplete="off">
                        <label class="btn btn-secondary button-apart-mob-3" for="option11_apart">Арест</label>`);
            $('#udobstva_ap_kv').attr("style", "display: none !important");
            $('#udobstva_ost').attr("style", "display: none !important");
            $('#udob_list_mob').empty();
            break;
        case "Коворкинг":
            $("#text_filter_mob").text("Комнат");
            $("#filter_var_mob").empty();
            $("#filter_var_mob").append(`<input type="radio" class="btn-check button-apart-mob-7" name="options" id="option8_apart" value="openspace" autocomplete="off">
                        <label class="btn btn-secondary button-apart-mob-7" for="option8_apart">openspace</label>
                        <input type="radio" class="btn-check button-apart-mob-8" name="options" id="option9_apart" value="1" autocomplete="off">
                        <label class="btn btn-secondary button-apart-mob-8" for="option9_apart">1</label>
                        <input type="radio" class="btn-check button-apart-mob-8" name="options" id="option10_apart" value="2" autocomplete="off">
                        <label class="btn btn-secondary button-apart-mob-8" for="option10_apart">2</label>
                        <input type="radio" class="btn-check button-apart-mob-8" name="options" id="option11_apart" value="3" autocomplete="off">
                        <label class="btn btn-secondary button-apart-mob-8" for="option11_apart">3</label>
                        <input type="radio" class="btn-check button-apart-mob-8" name="options" id="option12_apart" value="4" autocomplete="off">
                        <label class="btn btn-secondary button-apart-mob-8" for="option12_apart">4</label>
                        <input type="radio" class="btn-check button-apart-mob-9" name="options" id="option13_apart" value="+5" autocomplete="off">
                        <label class="btn btn-secondary button-apart-mob-9" for="option13_apart">+5</label>`);
            $('#udobstva_ap_kv').attr("style", "display: none !important");
            $('#udobstva_ost').attr("style", "display: flex");
            $('#udob_list_mob').empty();
            $("#udob_list_mob").append(`<span class="button-apart-mob-10 udob_mob" id="flexCheckDefault-1_mob" data-type="" onclick="tristate(this);">
                            <label class="form-check-label" for="flexCheckDefault-1_mob"><img src="http://194.67.125.24static/img/icon/ud-3.png" style="width: 20px; height: 20px;">
                                Мебель</label>
                        </span>
                        <span class="button-apart-mob-11 udob_mob" id="flexCheckDefault-2_mob" data-type="" onclick="tristate(this);">
                            <label class="form-check-label" for="flexCheckDefault-2_mob"><img src="http://194.67.125.24static/img/icon/ud-2.png" style="width: 20px; height: 20px;">
                                Вид на сити</label>
                        </span>
                        <span class="button-apart-mob-11 udob_mob" id="flexCheckDefault-3_mob" data-type="" onclick="tristate(this);">
                            <label class="form-check-label" for="flexCheckDefault-3_mob"><img src="http://194.67.125.24static/img/icon/ud-1.png" style="width: 20px; height: 20px;">
                            Вид на город</label>
                        </span>
                        <span class="button-apart-mob-12 udob_mob" id="flexCheckDefault-4_mob" data-type="" onclick="tristate(this);">
                            <label class="form-check-label" for="flexCheckDefault-4_mob"><img src="http://194.67.125.24static/img/icon/ud-5.png" style="width: 20px; height: 20px;">
                                Угол</label>
                        </span>
                        <span class="button-apart-mob-13 udob_mob" id="flexCheckDefault-5_mob" data-type="" onclick="tristate(this);">
                            <label class="form-check-label" for="flexCheckDefault-5_mob"><img src="http://194.67.125.24static/img/icon/ud-4.png" style="width: 20px; height: 20px;">
                            Мастер-спальня</label>
                        </span>
                        <span class="button-apart-mob-14 udob_mob" id="flexCheckDefault-6_mob" data-type="" onclick="tristate(this);">
                            <label class="form-check-label" for="flexCheckDefault-6_mob"><img src="http://194.67.125.24static/img/icon/ud-6.png" style="width: 20px; height: 20px;">
                            Кухня гостиная</label>
                        </span>
                        <span class="button-apart-mob-15 udob_mob" id="flexCheckDefault-7_mob" data-type="" onclick="tristate(this);">
                            <label class="form-check-label" for="flexCheckDefault-7_mob"><img src="http://194.67.125.24static/img/icon/ud-8.png" style="width: 20px; height: 20px;">
                            Кровать</label>
                        </span>
                        <span class="button-apart-mob-16 udob_mob" id="flexCheckDefault-8_mob" data-type="" onclick="tristate(this);">
                            <label class="form-check-label" for="flexCheckDefault-8_mob"><img src="http://194.67.125.24static/img/icon/ud-9.png" style="width: 20px; height: 20px;">
                            Бытовые приборы</label>
                        </span>
                        <span class="button-apart-mob-17 udob_mob" id="flexCheckDefault-9_mob" data-type="" onclick="tristate(this);">
                            <label class="form-check-label" for="flexCheckDefault-9_mob"><img src="http://194.67.125.24static/img/icon/ud-12.png" style="width: 20px; height: 20px;">
                            Ванна</label>
                        </span>
                         <span class="button-apart-mob-18 udob_mob" id="flexCheckDefault-10_mob" data-type="" onclick="tristate(this);">
                            <label class="form-check-label" for="flexCheckDefault-10_mob"><img src="http://194.67.125.24static/img/icon/ud-7.png" style="width: 20px; height: 20px;">
                            Гардеробная</label>
                        </span>
                         <span class="button-apart-mob-19 udob_mob" id="flexCheckDefault-11_mob" data-type="" onclick="tristate(this);">
                            <label class="form-check-label" for="flexCheckDefault-11_mob"><img src="http://194.67.125.24static/img/icon/ud-11.png" style="width: 20px; height: 20px;">
                            Душ</label>
                        </span>
                         <span class="button-apart-mob-20 udob_mob" id="flexCheckDefault-12_mob" data-type="" onclick="tristate(this);">
                            <label class="form-check-label" for="flexCheckDefault-12_mob"><img src="http://194.67.125.24static/img/icon/ud-10.png" style="width: 20px; height: 20px;">
                            Постирочная</label>
                        </span>`);
            break;
    }
}

function filter() {
    var data = {
        type_op : $('.button-admin-11').val(),
        type_prop : $('#type_prop').val(),
        tower : $('#tower').val(),
        floor_min : floor_min(),
        floor_max : floor_max(),
        total_area_min : total_area_min(),
        total_area_max : total_area_max(),
    }
    if ($('#number_pk').val() == "" || $('#number_pk').length < 1) { data['number_pk'] = '' } else { data['number_pk'] = $('#number_pk').val(); }
    if ($('#number_phone').val() == "" || $('#number_phone').length < 1) { data['number_phone'] = '' } else { data['number_phone'] = $('#number_phone').val(); }
    switch ($('input[name=price-filter]:checked').val()) {
        case "1":
            data["price_month_min"] = '0'
            data["price_month_max"] = '10000000000000'
            data["price_square_month_min"] = '0'
            data["price_square_month_max"] = '10000000000000'
            data["price_square_year_min"] = '0'
            data["price_square_year_max"] = '10000000000000'
            if ($('#price_min').val() != '') { data["price_min"] = $('#price_min').val().replace(/\s/g, ""); } else { data["price_min"] = '0' }
            if ($('#price_max').val() != '') { data["price_max"] = $('#price_max').val().replace(/\s/g, ""); } else { data["price_max"] = '10000000000000' }
            data["price_metr_min"] = '0'
            data["price_metr_max"] = '10000000000000'
            break

        case "2":
            data["price_month_min"] = '0'
            data["price_month_max"] = '10000000000000'
            data["price_square_month_min"] = '0'
            data["price_square_month_max"] = '10000000000000'
            data["price_square_year_min"] = '0'
            data["price_square_year_max"] = '10000000000000'
            data["price_min"] = '0'
            data["price_max"] = '10000000000000'
            if ($('#price_min').val() != '') { data["price_metr_min"] = $('#price_min').val().replace(/\s/g, ""); } else { data["price_metr_min"] = '0' }
            if ($('#price_max').val() != '') { data["price_metr_max"] = $('#price_max').val().replace(/\s/g, ""); } else { data["price_metr_max"] = '10000000000000' }
            break

        case "3":
            if ($('#price_min').val() != '') { data["price_month_min"] = $('#price_min').val().replace(/\s/g, ""); } else { data["price_month_min"] = '0' }
            if ($('#price_max').val() != '') { data["price_month_max"] = $('#price_max').val().replace(/\s/g, ""); } else { data["price_month_max"] = '10000000000000' }
            data["price_square_month_min"] = '0'
            data["price_square_month_max"] = '10000000000000'
            data["price_square_year_min"] = '0'
            data["price_square_year_max"] = '10000000000000'
            data["price_min"] = '0'
            data["price_max"] = '10000000000000'
            data["price_metr_min"] = '0'
            data["price_metr_max"] = '10000000000000'
            break

        case "4":
            data["price_month_min"] = '0'
            data["price_month_max"] = '10000000000000'
            if ($('#price_min').val() != '') { data["price_square_month_min"] = $('#price_min').val().replace(/\s/g, ""); } else { data["price_square_month_min"] = '0' }
            if ($('#price_max').val() != '') { data["price_square_month_max"] = $('#price_max').val().replace(/\s/g, ""); } else { data["price_square_month_max"] = '10000000000000' }
            data["price_square_year_min"] = '0'
            data["price_square_year_max"] = '10000000000000'
            data["price_min"] = '0'
            data["price_max"] = '10000000000000'
            data["price_metr_min"] = '0'
            data["price_metr_max"] = '10000000000000'
            break

        case "5":
            data["price_month_min"] = '0'
            data["price_month_max"] = '10000000000000'
            data["price_square_month_min"] = '0'
            data["price_square_month_max"] = '10000000000000'
            if ($('#price_min').val() != '') { data["price_square_year_min"] = $('#price_min').val().replace(/\s/g, ""); } else { data["price_square_year_min"] = '0' }
            if ($('#price_max').val() != '') { data["price_square_year_max"] = $('#price_max').val().replace(/\s/g, ""); } else { data["price_square_year_max"] = '10000000000000' }
            data["price_min"] = '0'
            data["price_max"] = '10000000000000'
            data["price_metr_min"] = '0'
            data["price_metr_max"] = '10000000000000'
            break
    }

    switch ($('#type_prop').val()) {
        case "Апартамент":
            data["bedrooms"] = $('#filter_var').val();
            data["rooms"] = ''
            data["encumbrance"] = ''
            data['gorod_view'] = $('#flexCheckDefault-1').data('type')
            data['city_view'] = $('#flexCheckDefault-2').data('type')
            data['furniture'] = $('#flexCheckDefault-3').data('type')
            data['master_bedroom'] = $('#flexCheckDefault-4').data('type')
            data['corner'] = $('#flexCheckDefault-5').data('type')
            data['kitchen_living'] = $('#flexCheckDefault-6').data('type')
            data['wardrobe'] = $('#flexCheckDefault-7').data('type')
            data['bed'] = $('#flexCheckDefault-8').data('type')
            data['household_appliances'] = $('#flexCheckDefault-9').data('type')
            data['laundry_room'] = $('#flexCheckDefault-10').data('type')
            data['shower'] = $('#flexCheckDefault-11').data('type')
            data['bath'] = $('#flexCheckDefault-12').data('type')
            data['your_own_farm'] = ''
            break
        case "Квартира":
            data["bedrooms"] = $('#filter_var').val();
            data["rooms"] = ''
            data["encumbrance"] = ''
            data['gorod_view'] = $('#flexCheckDefault-1').data('type')
            data['city_view'] = $('#flexCheckDefault-2').data('type')
            data['furniture'] = $('#flexCheckDefault-3').data('type')
            data['master_bedroom'] = $('#flexCheckDefault-4').data('type')
            data['corner'] = $('#flexCheckDefault-5').data('type')
            data['kitchen_living'] = $('#flexCheckDefault-6').data('type')
            data['wardrobe'] = $('#flexCheckDefault-7').data('type')
            data['bed'] = $('#flexCheckDefault-8').data('type')
            data['household_appliances'] = $('#flexCheckDefault-9').data('type')
            data['laundry_room'] = $('#flexCheckDefault-10').data('type')
            data['shower'] = $('#flexCheckDefault-11').data('type')
            data['bath'] = $('#flexCheckDefault-12').data('type')
            data['your_own_farm'] = ''
            break
        case "Офис":
            data["bedrooms"] = ''
            data["rooms"] = $('#filter_var').val();
            data["encumbrance"] = ''
            data['gorod_view'] = $('#flexCheckDefault-1').data('type')
            data['city_view'] = $('#flexCheckDefault-2').data('type')
            data['furniture'] = $('#flexCheckDefault-3').data('type')
            data['master_bedroom'] = ''
            data['corner'] = $('#flexCheckDefault-4').data('type')
            data['kitchen_living'] = $('#flexCheckDefault-5').data('type')
            data['wardrobe'] = ''
            data['bed'] = ''
            data['household_appliances'] = ''
            data['laundry_room'] = ''
            data['shower'] = ''
            data['bath'] = ''
            data['your_own_farm'] = $('#flexCheckDefault-6').data('type')
            break
        case "Торговая площадь":
            data["bedrooms"] = ''
            data["rooms"] = $('#filter_var').val();
            data["encumbrance"] = ''
            data['gorod_view'] = $('#flexCheckDefault-1').data('type')
            data['city_view'] = $('#flexCheckDefault-2').data('type')
            data['furniture'] = $('#flexCheckDefault-3').data('type')
            data['master_bedroom'] = ''
            data['corner'] = $('#flexCheckDefault-4').data('type')
            data['kitchen_living'] = $('#flexCheckDefault-5').data('type')
            data['wardrobe'] = ''
            data['bed'] = ''
            data['household_appliances'] = ''
            data['laundry_room'] = ''
            data['shower'] = ''
            data['bath'] = ''
            data['your_own_farm'] = $('#flexCheckDefault-6').data('type')
            break
        case "Свободного назначения":
            data["bedrooms"] = ''
            data["rooms"] = $('#filter_var').val();
            data["encumbrance"] = ''
            data['gorod_view'] = $('#flexCheckDefault-1').data('type')
            data['city_view'] = $('#flexCheckDefault-2').data('type')
            data['furniture'] = $('#flexCheckDefault-3').data('type')
            data['master_bedroom'] = ''
            data['corner'] = $('#flexCheckDefault-4').data('type')
            data['kitchen_living'] = $('#flexCheckDefault-5').data('type')
            data['wardrobe'] = ''
            data['bed'] = ''
            data['household_appliances'] = ''
            data['laundry_room'] = ''
            data['shower'] = ''
            data['bath'] = ''
            data['your_own_farm'] = $('#flexCheckDefault-6').data('type')
            break
        case "Паркинг":
            data["bedrooms"] = ''
            data["rooms"] = ''
            data["encumbrance"] = $('#filter_var').val();
            data['gorod_view'] = ''
            data['city_view'] = ''
            data['furniture'] = ''
            data['master_bedroom'] = ''
            data['corner'] = ''
            data['kitchen_living'] = ''
            data['wardrobe'] = ''
            data['bed'] = ''
            data['household_appliances'] = ''
            data['laundry_room'] = ''
            data['shower'] = ''
            data['bath'] = ''
            data['your_own_farm'] = ''
            break
        case "Коворкинг":
            data["bedrooms"] = ''
            data["rooms"] = $('#filter_var').val();
            data["encumbrance"] = ''
            data['gorod_view'] = $('#flexCheckDefault-1').data('type')
            data['city_view'] = $('#flexCheckDefault-2').data('type')
            data['furniture'] = $('#flexCheckDefault-3').data('type')
            data['corner'] = $('#flexCheckDefault-4').data('type')
            data['kitchen_living'] = $('#flexCheckDefault-5').data('type')
            data['master_bedroom'] = ''
            data['wardrobe'] = ''
            data['bed'] = ''
            data['household_appliances'] =''
            data['laundry_room'] = ''
            data['shower'] = ''
            data['bath'] = ''
            data['your_own_farm'] = $('#flexCheckDefault-6').data('type')
            break
    }

    $.ajax(
        {
            type:"GET",
            url: "filter/",
            data: data,
            success: function( data )
            {
                document.getElementById("list_obj").innerHTML = "";
                $("#list_obj").append(data)
            }
        });
}

function filter_mob() {
    var data = {
        type_op : $('.button-admin-10-mob').val(),
        type_prop : $('input[name=type_prop_mob]:checked').val(),
        tower : $('#tower_mob').val(),
        floor_min : floor_min_mob(),
        floor_max : floor_max_mob(),
        total_area_min : total_area_min_mob(),
        total_area_max : total_area_max_mob(),
    }
    if ($('#number_pk_mob').val() == "" || $('#number_pk_mob').length < 1) { data['number_pk'] = '' } else { data['number_pk'] = $('#number_pk_mob').val(); }
    if ($('#number_phone_mob').val() == "" || $('#number_phone_mob').length < 1) { data['number_phone'] = '' } else { data['number_phone'] = $('#number_phone_mob').val(); }
    switch ($('input[name=price-filter_mob]:checked').val()) {
        case "1":
            data["price_month_min"] = '0'
            data["price_month_max"] = '10000000000000'
            data["price_square_month_min"] = '0'
            data["price_square_month_max"] = '10000000000000'
            data["price_square_year_min"] = '0'
            data["price_square_year_max"] = '10000000000000'
            if ($('#price_min_mob').val() != '') { data["price_min"] = $('#price_min_mob').val().replace(/\s/g, ""); } else { data["price_min"] = '0' }
            if ($('#price_max_mob').val() != '') { data["price_max"] = $('#price_max_mob').val().replace(/\s/g, ""); } else { data["price_max"] = '10000000000000' }
            data["price_metr_min"] = '0'
            data["price_metr_max"] = '10000000000000'
            break

        case "2":
            data["price_month_min"] = '0'
            data["price_month_max"] = '10000000000000'
            data["price_square_month_min"] = '0'
            data["price_square_month_max"] = '10000000000000'
            data["price_square_year_min"] = '0'
            data["price_square_year_max"] = '10000000000000'
            data["price_min"] = '0'
            data["price_max"] = '10000000000000'
            if ($('#price_min_mob').val() != '') { data["price_metr_min"] = $('#price_min_mob').val().replace(/\s/g, ""); } else { data["price_metr_min"] = '0' }
            if ($('#price_max_mob').val() != '') { data["price_metr_max"] = $('#price_max_mob').val().replace(/\s/g, ""); } else { data["price_metr_max"] = '10000000000000' }
            break

        case "3":
            if ($('#price_min_mob').val() != '') { data["price_month_min"] = $('#price_min_mob').val().replace(/\s/g, ""); } else { data["price_month_min"] = '0' }
            if ($('#price_max_mob').val() != '') { data["price_month_max"] = $('#price_max_mob').val().replace(/\s/g, ""); } else { data["price_month_max"] = '10000000000000' }
            data["price_square_month_min"] = '0'
            data["price_square_month_max"] = '10000000000000'
            data["price_square_year_min"] = '0'
            data["price_square_year_max"] = '10000000000000'
            data["price_min"] = '0'
            data["price_max"] = '10000000000000'
            data["price_metr_min"] = '0'
            data["price_metr_max"] = '10000000000000'
            break

        case "4":
            data["price_month_min"] = '0'
            data["price_month_max"] = '10000000000000'
            if ($('#price_min_mob').val() != '') { data["price_square_month_min"] = $('#price_min_mob').val().replace(/\s/g, ""); } else { data["price_square_month_min"] = '0' }
            if ($('#price_max_mob').val() != '') { data["price_square_month_max"] = $('#price_max_mob').val().replace(/\s/g, ""); } else { data["price_square_month_max"] = '10000000000000' }
            data["price_square_year_min"] = '0'
            data["price_square_year_max"] = '10000000000000'
            data["price_min"] = '0'
            data["price_max"] = '10000000000000'
            data["price_metr_min"] = '0'
            data["price_metr_max"] = '10000000000000'
            break

        case "5":
            data["price_month_min"] = '0'
            data["price_month_max"] = '10000000000000'
            data["price_square_month_min"] = '0'
            data["price_square_month_max"] = '10000000000000'
            if ($('#price_min_mob').val() != '') { data["price_square_year_min"] = $('#price_min_mob').val().replace(/\s/g, ""); } else { data["price_square_year_min"] = '0' }
            if ($('#price_max_mob').val() != '') { data["price_square_year_max"] = $('#price_max_mob').val().replace(/\s/g, ""); } else { data["price_square_year_max"] = '10000000000000' }
            data["price_min"] = '0'
            data["price_max"] = '10000000000000'
            data["price_metr_min"] = '0'
            data["price_metr_max"] = '10000000000000'
            break
    }

    switch ($('input[name=type_prop_mob]:checked').val()) {
        case "Апартамент":
            data["bedrooms"] = $('#filter_var_mob').val();
            data["rooms"] = ''
            data["encumbrance"] = ''
            data['gorod_view'] = $('#flexCheckDefault-3_mob').data('type')
            data['city_view'] = $('#flexCheckDefault-2_mob').data('type')
            data['furniture'] = $('#flexCheckDefault-1_mob').data('type')
            data['master_bedroom'] = $('#flexCheckDefault-5_mob').data('type')
            data['corner'] = $('#flexCheckDefault-4_mob').data('type')
            data['kitchen_living'] = $('#flexCheckDefault-6_mob').data('type')
            data['wardrobe'] = $('#flexCheckDefault-10_mob').data('type')
            data['bed'] = $('#flexCheckDefault-7_mob').data('type')
            data['household_appliances'] = $('#flexCheckDefault-8_mob').data('type')
            data['laundry_room'] = $('#flexCheckDefault-12_mob').data('type')
            data['shower'] = $('#flexCheckDefault-11_mob').data('type')
            data['bath'] = $('#flexCheckDefault-9_mob').data('type')
            data['your_own_farm'] = ''
            break
        case "Квартира":
            data["bedrooms"] = $('#filter_var_mob').val();
            data["rooms"] = ''
            data["encumbrance"] = ''
            data['gorod_view'] = $('#flexCheckDefault-3_mob').data('type')
            data['city_view'] = $('#flexCheckDefault-2_mob').data('type')
            data['furniture'] = $('#flexCheckDefault-1_mob').data('type')
            data['master_bedroom'] = $('#flexCheckDefault-5_mob').data('type')
            data['corner'] = $('#flexCheckDefault-4_mob').data('type')
            data['kitchen_living'] = $('#flexCheckDefault-6_mob').data('type')
            data['wardrobe'] = $('#flexCheckDefault-10_mob').data('type')
            data['bed'] = $('#flexCheckDefault-7_mob').data('type')
            data['household_appliances'] = $('#flexCheckDefault-8_mob').data('type')
            data['laundry_room'] = $('#flexCheckDefault-12_mob').data('type')
            data['shower'] = $('#flexCheckDefault-11_mob').data('type')
            data['bath'] = $('#flexCheckDefault-9_mob').data('type')
            data['your_own_farm'] = ''
            break
        case "Офис":
            data["bedrooms"] = ''
            data["rooms"] = $('#filter_var_mob').val();
            data["encumbrance"] = ''
            data['gorod_view'] = $('#flexCheckDefault-3_mob').data('type')
            data['city_view'] = $('#flexCheckDefault-2_mob').data('type')
            data['furniture'] = $('#flexCheckDefault-1_mob').data('type')
            data['master_bedroom'] = ''
            data['corner'] = $('#flexCheckDefault-4_mob').data('type')
            data['kitchen_living'] = $('#flexCheckDefault-6_mob').data('type')
            data['wardrobe'] = ''
            data['bed'] = ''
            data['household_appliances'] = ''
            data['laundry_room'] = ''
            data['shower'] = ''
            data['bath'] = ''
            data['your_own_farm'] = $('#flexCheckDefault-5_mob').data('type')
            break
        case "Торговая площадь":
            data["bedrooms"] = ''
            data["rooms"] = $('#filter_var_mob').val();
            data["encumbrance"] = ''
            data['gorod_view'] = $('#flexCheckDefault-3_mob').data('type')
            data['city_view'] = $('#flexCheckDefault-2_mob').data('type')
            data['furniture'] = $('#flexCheckDefault-1_mob').data('type')
            data['master_bedroom'] = ''
            data['corner'] = $('#flexCheckDefault-4_mob').data('type')
            data['kitchen_living'] = $('#flexCheckDefault-6_mob').data('type')
            data['wardrobe'] = ''
            data['bed'] = ''
            data['household_appliances'] = ''
            data['laundry_room'] = ''
            data['shower'] = ''
            data['bath'] = ''
            data['your_own_farm'] = $('#flexCheckDefault-5_mob').data('type')
            break
        case "Свободного назначения":
            data["bedrooms"] = ''
            data["rooms"] = $('#filter_var_mob').val();
            data["encumbrance"] = ''
            data['gorod_view'] = $('#flexCheckDefault-3_mob').data('type')
            data['city_view'] = $('#flexCheckDefault-2_mob').data('type')
            data['furniture'] = $('#flexCheckDefault-1_mob').data('type')
            data['master_bedroom'] = ''
            data['corner'] = $('#flexCheckDefault-4_mob').data('type')
            data['kitchen_living'] = $('#flexCheckDefault-6_mob').data('type')
            data['wardrobe'] = ''
            data['bed'] = ''
            data['household_appliances'] = ''
            data['laundry_room'] = ''
            data['shower'] = ''
            data['bath'] = ''
            data['your_own_farm'] = $('#flexCheckDefault-5_mob').data('type')
            break
        case "Паркинг":
            data["bedrooms"] = ''
            data["rooms"] = ''
            data["encumbrance"] = $('#filter_var_mob').val();
            data['gorod_view'] = ''
            data['city_view'] = ''
            data['furniture'] = ''
            data['master_bedroom'] = ''
            data['corner'] = ''
            data['kitchen_living'] = ''
            data['wardrobe'] = ''
            data['bed'] = ''
            data['household_appliances'] = ''
            data['laundry_room'] = ''
            data['shower'] = ''
            data['bath'] = ''
            data['your_own_farm'] = ''
            break
        case "Коворкинг":
            data["bedrooms"] = ''
            data["rooms"] = $('#filter_var_mob').val();
            data["encumbrance"] = ''
            data['gorod_view'] = $('#flexCheckDefault-1').data('type')
            data['city_view'] = $('#flexCheckDefault-2').data('type')
            data['furniture'] = $('#flexCheckDefault-3').data('type')
            data['corner'] = $('#flexCheckDefault-4').data('type')
            data['kitchen_living'] = $('#flexCheckDefault-5').data('type')
            data['master_bedroom'] = ''
            data['wardrobe'] = ''
            data['bed'] = ''
            data['household_appliances'] =''
            data['laundry_room'] = ''
            data['shower'] = ''
            data['bath'] = ''
            data['your_own_farm'] = $('#flexCheckDefault-6').data('type')
            break
    }

    $.ajax(
        {
            type:"GET",
            url: "filter/",
            data: data,
            success: function( data )
            {
                document.getElementById("list_obj").innerHTML = "";
                $("#list_obj").append(data)
            }
        });
}

function restart_filter() {

    var data = {
        filter_restart : '1',
        type_prop : '',
        type_op : '',
        tower : '',
        floor_min : 0,
        floor_max : 10000000,
        total_area_min : 0,
        total_area_max : 100000000,
        gorod_view : '',
        city_view : '',
        furniture : '',
        master_bedroom : '',
        corner : '',
        kitchen_living : '',
        wardrobe : '',
        bed : '',
        household_appliances : '',
        laundry_room : '',
        shower : '',
        bath : '',
        your_own_farm : '',
        number_pk : '',
        bedrooms : '',
        rooms : '',
        encumbrance : '',
        price_min : 0,
        price_max : 10000000000000,
        price_metr_min : 0,
        price_metr_max : 10000000000000,
        price_month_min : 0,
        price_month_max : 10000000000000,
        price_square_month_min : 0,
        price_square_month_max : 10000000000000,
        price_square_year_min : 0,
        price_square_year_max : 10000000000000,
        number_phone : ''
    }


    $.ajax(
        {
            type:"GET",
            url: "filter/",
            data: data,
            success: function( data )
            {
                document.getElementById("list_obj").innerHTML = "";
                $("#list_obj").append(data[1])

                document.getElementById("res_filt").innerHTML = "";
                $("#res_filt").append(data[2])
            }
        });
}

function floor_min() {
    if ($('#floor_min').val() == '') {return '-5'} else {return $('#floor_min').val()}
}

function floor_max() {
    if ($('#floor_max').val() == '') {return '100'} else {return $('#floor_max').val()}
}

function total_area_min() {
    if ($('#total_area_min').val() == '') {return '0'} else {return $('#total_area_min').val()}
}

function total_area_max() {
    if ($('#total_area_max').val() == '') {return '100000'} else {return $('#total_area_max').val()}
}


function floor_min_mob() {
    if ($('#floor_min_mob').val() == '') {return '-5'} else {return $('#floor_min_mob').val()}
}

function floor_max_mob() {
    if ($('#floor_max_mob').val() == '') {return '100'} else {return $('#floor_max_mob').val()}
}

function total_area_min_mob() {
    if ($('#total_area_min_mob').val() == '') {return '0'} else {return $('#total_area_min_mob').val()}
}

function total_area_max_mob() {
    if ($('#total_area_max_mob').val() == '') {return '100000'} else {return $('#total_area_max_mob').val()}
}

function filtering(num) {
    var data = {}
    data['filt'] = num
    if ($('#info_mob_block').css('display') == 'none') {
        data['type'] = $('.button-admin-11').val()
    } else {
        data['type'] = $('.button-admin-10-mob').val()
    }

    $.ajax(
        {
            type:"GET",
            url: "filtering/",
            data: data,
            success: function( data )
            {
                document.getElementById("list_obj").innerHTML = "";
                $("#list_obj").append(data)

                if (num == 'По этажу вверх') {
                    $('#filtering_filt_text').text('По этажу вверх')
                    document.getElementById("filtering_filt").innerHTML = "";
                    $('#filtering_filt').append(`<li class="nav-li-sort"><a class="dropdown-item" onclick="restart_filter()">По умолчанию</a></li>
                            <li class="nav-li-sort"><a class="dropdown-item" onclick="filtering('По этажу вниз')">По этажу вниз</a></li>
                            <li class="nav-li-sort"><a class="dropdown-item" onclick="filtering('По цене вверх')">По цене вверх</a></li>
                            <li class="nav-li-sort"><a class="dropdown-item" onclick="filtering('По цене вниз')">По цене вниз</a></li>
                            <li class="nav-li-sort"><a class="dropdown-item" onclick="filtering('По площади вверх')">По площади вверх</a></li>
                            <li class="nav-li-sort"><a class="dropdown-item" onclick="filtering('По площади вниз')">По площади вниз</a></li>`)

                    $('#filtering_filt_text_mob').text('По этажу вверх')
                    document.getElementById("filtering_filt_mob").innerHTML = "";
                    $('#filtering_filt_mob').append(`<li class="nav-li-sort"><a class="dropdown-item" onclick="restart_filter()">По умолчанию</a></li>
                            <li class="nav-li-sort"><a class="dropdown-item" onclick="filtering('По этажу вниз')">По этажу вниз</a></li>
                            <li class="nav-li-sort"><a class="dropdown-item" onclick="filtering('По цене вверх')">По цене вверх</a></li>
                            <li class="nav-li-sort"><a class="dropdown-item" onclick="filtering('По цене вниз')">По цене вниз</a></li>
                            <li class="nav-li-sort"><a class="dropdown-item" onclick="filtering('По площади вверх')">По площади вверх</a></li>
                            <li class="nav-li-sort"><a class="dropdown-item" onclick="filtering('По площади вниз')">По площади вниз</a></li>`)
                }
                if (num == 'По этажу вниз') {
                    $('#filtering_filt_text').text('По этажу вниз')
                    document.getElementById("filtering_filt").innerHTML = "";
                    $('#filtering_filt').append(`<li class="nav-li-sort"><a class="dropdown-item" onclick="filtering('По этажу вверх')">По этажу вверх</a></li>
                            <li class="nav-li-sort"><a class="dropdown-item" onclick="restart_filter()">По умолчанию</a></li>
                            <li class="nav-li-sort"><a class="dropdown-item" onclick="filtering('По цене вверх')">По цене вверх</a></li>
                            <li class="nav-li-sort"><a class="dropdown-item" onclick="filtering('По цене вниз')">По цене вниз</a></li>
                            <li class="nav-li-sort"><a class="dropdown-item" onclick="filtering('По площади вверх')">По площади вверх</a></li>
                            <li class="nav-li-sort"><a class="dropdown-item" onclick="filtering('По площади вниз')">По площади вниз</a></li>`)

                    $('#filtering_filt_text_mob').text('По этажу вниз')
                    document.getElementById("filtering_filt_mob").innerHTML = "";
                    $('#filtering_filt_mob').append(`<li class="nav-li-sort"><a class="dropdown-item" onclick="restart_filter()">По умолчанию</a></li>
                            <li class="nav-li-sort"><a class="dropdown-item" onclick="filtering('По этажу вниз')">По этажу вниз</a></li>
                            <li class="nav-li-sort"><a class="dropdown-item" onclick="filtering('По цене вверх')">По цене вверх</a></li>
                            <li class="nav-li-sort"><a class="dropdown-item" onclick="filtering('По цене вниз')">По цене вниз</a></li>
                            <li class="nav-li-sort"><a class="dropdown-item" onclick="filtering('По площади вверх')">По площади вверх</a></li>
                            <li class="nav-li-sort"><a class="dropdown-item" onclick="filtering('По площади вниз')">По площади вниз</a></li>`)
                }
                if (num == 'По цене вверх') {
                    $('#filtering_filt_text').text('По цене вверх')
                    document.getElementById("filtering_filt").innerHTML = "";
                    $('#filtering_filt').append(`<li class="nav-li-sort"><a class="dropdown-item" onclick="filtering('По этажу вверх')">По этажу вверх</a></li>
                            <li class="nav-li-sort"><a class="dropdown-item" onclick="filtering('По этажу вниз')">По этажу вниз</a></li>
                            <li class="nav-li-sort"><a class="dropdown-item" onclick="restart_filter()">По умолчанию</a></li>
                            <li class="nav-li-sort"><a class="dropdown-item" onclick="filtering('По цене вниз')">По цене вниз</a></li>
                            <li class="nav-li-sort"><a class="dropdown-item" onclick="filtering('По площади вверх')">По площади вверх</a></li>
                            <li class="nav-li-sort"><a class="dropdown-item" onclick="filtering('По площади вниз')">По площади вниз</a></li>`)

                    $('#filtering_filt_text_mob').text('По цене вверх')
                    document.getElementById("filtering_filt_mob").innerHTML = "";
                    $('#filtering_filt_mob').append(`<li class="nav-li-sort"><a class="dropdown-item" onclick="restart_filter()">По умолчанию</a></li>
                            <li class="nav-li-sort"><a class="dropdown-item" onclick="filtering('По этажу вниз')">По этажу вниз</a></li>
                            <li class="nav-li-sort"><a class="dropdown-item" onclick="filtering('По цене вверх')">По цене вверх</a></li>
                            <li class="nav-li-sort"><a class="dropdown-item" onclick="filtering('По цене вниз')">По цене вниз</a></li>
                            <li class="nav-li-sort"><a class="dropdown-item" onclick="filtering('По площади вверх')">По площади вверх</a></li>
                            <li class="nav-li-sort"><a class="dropdown-item" onclick="filtering('По площади вниз')">По площади вниз</a></li>`)
                }
                if (num == 'По цене вниз') {
                    $('#filtering_filt_text').text('По цене вниз')
                    document.getElementById("filtering_filt").innerHTML = "";
                    $('#filtering_filt').append(`<li class="nav-li-sort"><a class="dropdown-item" onclick="filtering('По этажу вверх')">По этажу вверх</a></li>
                            <li class="nav-li-sort"><a class="dropdown-item" onclick="filtering('По этажу вниз')">По этажу вниз</a></li>
                            <li class="nav-li-sort"><a class="dropdown-item" onclick="filtering('По цене вверх')">По цене вверх</a></li>
                            <li class="nav-li-sort"><a class="dropdown-item" onclick="restart_filter()">По умолчанию</a></li>
                            <li class="nav-li-sort"><a class="dropdown-item" onclick="filtering('По площади вверх')">По площади вверх</a></li>
                            <li class="nav-li-sort"><a class="dropdown-item" onclick="filtering('По площади вниз')">По площади вниз</a></li>`)

                    $('#filtering_filt_text_mob').text('По цене вниз')
                    document.getElementById("filtering_filt_mob").innerHTML = "";
                    $('#filtering_filt_mob').append(`<li class="nav-li-sort"><a class="dropdown-item" onclick="restart_filter()">По умолчанию</a></li>
                            <li class="nav-li-sort"><a class="dropdown-item" onclick="filtering('По этажу вниз')">По этажу вниз</a></li>
                            <li class="nav-li-sort"><a class="dropdown-item" onclick="filtering('По цене вверх')">По цене вверх</a></li>
                            <li class="nav-li-sort"><a class="dropdown-item" onclick="filtering('По цене вниз')">По цене вниз</a></li>
                            <li class="nav-li-sort"><a class="dropdown-item" onclick="filtering('По площади вверх')">По площади вверх</a></li>
                            <li class="nav-li-sort"><a class="dropdown-item" onclick="filtering('По площади вниз')">По площади вниз</a></li>`)
                }
                if (num == 'По площади вверх') {
                    $('#filtering_filt_text').text('По площади вверх')
                    document.getElementById("filtering_filt").innerHTML = "";
                    $('#filtering_filt').append(`<li class="nav-li-sort"><a class="dropdown-item" onclick="filtering('По этажу вверх')">По этажу вверх</a></li>
                            <li class="nav-li-sort"><a class="dropdown-item" onclick="filtering('По этажу вниз')">По этажу вниз</a></li>
                            <li class="nav-li-sort"><a class="dropdown-item" onclick="filtering('По цене вверх')">По цене вверх</a></li>
                            <li class="nav-li-sort"><a class="dropdown-item" onclick="filtering('По цене вниз')">По цене вниз</a></li>
                            <li class="nav-li-sort"><a class="dropdown-item" onclick="restart_filter()">По умолчанию</a></li>
                            <li class="nav-li-sort"><a class="dropdown-item" onclick="filtering('По площади вниз')">По площади вниз</a></li>`)

                    $('#filtering_filt_text_mob').text('По площади вверх')
                    document.getElementById("filtering_filt_mob").innerHTML = "";
                    $('#filtering_filt_mob').append(`<li class="nav-li-sort"><a class="dropdown-item" onclick="restart_filter()">По умолчанию</a></li>
                            <li class="nav-li-sort"><a class="dropdown-item" onclick="filtering('По этажу вниз')">По этажу вниз</a></li>
                            <li class="nav-li-sort"><a class="dropdown-item" onclick="filtering('По цене вверх')">По цене вверх</a></li>
                            <li class="nav-li-sort"><a class="dropdown-item" onclick="filtering('По цене вниз')">По цене вниз</a></li>
                            <li class="nav-li-sort"><a class="dropdown-item" onclick="filtering('По площади вверх')">По площади вверх</a></li>
                            <li class="nav-li-sort"><a class="dropdown-item" onclick="filtering('По площади вниз')">По площади вниз</a></li>`)
                }
                if (num == 'По площади вниз') {
                    $('#filtering_filt_text').text('По площади вниз')
                    document.getElementById("filtering_filt").innerHTML = "";
                    $('#filtering_filt').append(`<li class="nav-li-sort"><a class="dropdown-item" onclick="filtering('По этажу вверх')">По этажу вверх</a></li>
                            <li class="nav-li-sort"><a class="dropdown-item" onclick="filtering('По этажу вниз')">По этажу вниз</a></li>
                            <li class="nav-li-sort"><a class="dropdown-item" onclick="filtering('По цене вверх')">По цене вверх</a></li>
                            <li class="nav-li-sort"><a class="dropdown-item" onclick="filtering('По цене вниз')">По цене вниз</a></li>
                            <li class="nav-li-sort"><a class="dropdown-item" onclick="filtering('По площади вверх')">По площади вверх</a></li>
                            <li class="nav-li-sort"><a class="dropdown-item" onclick="restart_filter()">По умолчанию</a></li>`)

                    $('#filtering_filt_text_mob').text('По площади вниз')
                    document.getElementById("filtering_filt_mob").innerHTML = "";
                    $('#filtering_filt_mob').append(`<li class="nav-li-sort"><a class="dropdown-item" onclick="restart_filter()">По умолчанию</a></li>
                            <li class="nav-li-sort"><a class="dropdown-item" onclick="filtering('По этажу вниз')">По этажу вниз</a></li>
                            <li class="nav-li-sort"><a class="dropdown-item" onclick="filtering('По цене вверх')">По цене вверх</a></li>
                            <li class="nav-li-sort"><a class="dropdown-item" onclick="filtering('По цене вниз')">По цене вниз</a></li>
                            <li class="nav-li-sort"><a class="dropdown-item" onclick="filtering('По площади вверх')">По площади вверх</a></li>
                            <li class="nav-li-sort"><a class="dropdown-item" onclick="filtering('По площади вниз')">По площади вниз</a></li>`)
                }
                if (num == 'по умолчанию') {
                    $('#filtering_filt_text').text('по умолчанию')
                    document.getElementById("filtering_filt").innerHTML = "";
                    $('#filtering_filt').append(`<li class="nav-li-sort"><a class="dropdown-item" onclick="filtering('По этажу вверх')">По этажу вверх</a></li>
                            <li class="nav-li-sort"><a class="dropdown-item" onclick="filtering('По этажу вниз')">По этажу вниз</a></li>
                            <li class="nav-li-sort"><a class="dropdown-item" onclick="filtering('По цене вверх')">По цене вверх</a></li>
                            <li class="nav-li-sort"><a class="dropdown-item" onclick="filtering('По цене вниз')">По цене вниз</a></li>
                            <li class="nav-li-sort"><a class="dropdown-item" onclick="filtering('По площади вверх')">По площади вверх</a></li>
                            <li class="nav-li-sort"><a class="dropdown-item" onclick="filtering('По площади вниз')">По площади вниз</a></li>`)

                    $('#filtering_filt_text_mob').text('по умолчанию')
                    document.getElementById("filtering_filt_mob").innerHTML = "";
                    $('#filtering_filt_mob').append(`<li class="nav-li-sort"><a class="dropdown-item" onclick="filtering('По этажу вверх')">По этажу вверх</a></li>
                            <li class="nav-li-sort"><a class="dropdown-item" onclick="filtering('По этажу вниз')">По этажу вниз</a></li>
                            <li class="nav-li-sort"><a class="dropdown-item" onclick="filtering('По цене вверх')">По цене вверх</a></li>
                            <li class="nav-li-sort"><a class="dropdown-item" onclick="filtering('По цене вниз')">По цене вниз</a></li>
                            <li class="nav-li-sort"><a class="dropdown-item" onclick="filtering('По площади вверх')">По площади вверх</a></li>
                            <li class="nav-li-sort"><a class="dropdown-item" onclick="filtering('По площади вниз')">По площади вниз</a></li>`)
                }
            }
        });
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

function edit_status(num, pk, type) {
    $.ajax(
        {
            type:"GET",
            url: "edit_status",
            data: {status : num, pk : pk, type : type},
            success: function( data )
            {
                document.getElementById("status_b-"+pk).innerHTML = "";
                $("#status_b-"+pk).append(data)
            }
        });
}

function photo_plan(pk, num) {
    if (num == '1') {
        $('#but_plan_'+pk).removeClass('button-slider-img-plan-2')
        $('#but_photo_'+pk).removeClass('button-slider-img-plan')
        $('#but_plan_'+pk).addClass('button-slider-img-plan')
        $('#but_photo_'+pk).addClass('button-slider-img-plan-2')

        $('#inner-'+pk).css("display", "none");
        $('#slider-chet-'+pk).css("display", "none");
        $('#plan_img_'+pk).css("display", "block");
    } else {
        $('#but_plan_'+pk).removeClass('button-slider-img-plan')
        $('#but_photo_'+pk).removeClass('button-slider-img-plan-2')
        $('#but_plan_'+pk).addClass('button-slider-img-plan-2')
        $('#but_photo_'+pk).addClass('button-slider-img-plan')

        $('#inner-'+pk).css("display", "block");
        $('#slider-chet-'+pk).css("display", "block");
        $('#plan_img_'+pk).css("display", "none");
    }
}

function modalslider(num) {
    $.ajax(
        {
            type:"GET",
            url: "modalslider",
            data: {pk : num},
            success: function( data )
            {
                document.getElementById("inner-carouselExampl").innerHTML = "";
                $("#inner-carouselExampl").append(data)
            }
        });
}

function paginate() {
    window.open('?page='+$("#input_paginate").val(),'_self')
}