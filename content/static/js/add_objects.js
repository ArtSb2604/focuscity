$('#add_tower').change( function() {
   $(this).find(":selected").each(function () {
            switch ($(this).val()) {
                case 'Башня “Федерация”':
                    $('#add_subtower').empty();
                    $("#add_subtower").append(`<option class="apart-list-1" value="Восток" selected>Восток</option>
                                <option class="apart-list-1" value="Запад">Запад</option>`);
                    break;

                case 'Neva towers':
                    $('#add_subtower').empty();
                    $("#add_subtower").append(`<option class="apart-list-1" value="1 башня" selected>1 башня</option>
                                <option class="apart-list-1" value="2 башня">2 башня</option>`);
                    break;

                case 'ОКО':
                    $('#add_subtower').empty();
                    $("#add_subtower").append(`<option class="apart-list-1" value="1 башня" selected>1 башня</option>
                                <option class="apart-list-1" value="2 башня">2 башня</option>`);
                    break;

                case 'Меркурий':
                    $('#add_subtower').empty();
                    break;

                case 'Город Столиц':
                    $('#add_subtower').empty();
                    $("#add_subtower").append(`<option class="apart-list-1" value="Москва" selected>Москва</option>
                                <option class="apart-list-1" value="Санкт-Петербург">Санкт-Петербург</option>`);
                    break;

                case 'Империя':
                    $('#add_subtower').empty();
                    break;

                case 'IQ квартал':
                    $('#add_subtower').empty();
                    $("#add_subtower").append(`<option class="apart-list-1" value="1 башня" selected>1 башня</option>
                                <option class="apart-list-1" value="2 башня">2 башня</option>
                                <option class="apart-list-1" value="3 башня">3 башня</option>`);
                    break;

                case 'Северная башня':
                    $('#add_subtower').empty();
                    break;

                case 'Башни на набережной':
                    $('#add_subtower').empty();
                    $("#add_subtower").append(`<option class="apart-list-1" value="А блок" selected>А блок</option>
                                <option class="apart-list-1" value="В блок">В блок</option>
                                <option class="apart-list-1" value="С блок">С блок</option>`);
                    break;

                case 'Башня 2000':
                    $('#add_subtower').empty();
                    break;

                case 'Мост Багратион':
                    $('#add_subtower').empty();
                    break;

                case 'Евразия':
                    $('#add_subtower').empty();
                    break;

                case 'Эволюция':
                    $('#add_subtower').empty();
                    break;

                case 'Афимол':
                    $('#add_subtower').empty();
                    break;

                case 'Moskow Towers':
                    $('#add_subtower').empty();
                    $("#add_subtower").append(`<option class="apart-list-1" value="1 башня" selected>1 башня</option>
                                <option class="apart-list-1" value="2 башня">2 башня</option>`);
                    break;

                case 'iCity':
                    $('#add_subtower').empty();
                    $("#add_subtower").append(`<option class="apart-list-1" value="Time" selected>Time</option>
                                <option class="apart-list-1" value="Space">Space</option>`);
                    break;

                case 'One tower':
                    $('#add_subtower').empty();
                    break;

                case 'Capital Towers':
                    $('#add_subtower').empty();
                    $("#add_subtower").append(`<option class="apart-list-1" value="park tower" selected>park tower</option>
                                <option class="apart-list-1" value="city tower">city tower</option>
                                <option class="apart-list-1" value="river tower">river tower</option>`);
                    break;

                case 'ЖК city park':
                    $('#add_subtower').empty();
                    $("#add_subtower").append(`<option class="apart-list-1" value="1 корпус" selected>1 корпус</option>
                                <option class="apart-list-1" value="2 корпус">2 корпус</option>
                                <option class="apart-list-1" value="3 корпус">3 корпус</option>
                                <option class="apart-list-1" value="4 корпус">4 корпус</option>
                                <option class="apart-list-1" value="5 корпус">5 корпус</option>
                                <option class="apart-list-1" value="6 корпус">6 корпус</option>`);
                    break;

                case 'ЖК Headliner':
                    $('#add_subtower').empty();
                    $("#add_subtower").append(`<option class="apart-list-1" value="Мукомольный проезд, 2" selected>Мукомольный проезд, 2</option>
                                <option class="apart-list-1" value="Шмитовский проезд, 39 к1">Шмитовский проезд, 39 к1</option>
                                <option class="apart-list-1" value="Шмитовский проезд, 39 к2">Шмитовский проезд, 39 к2</option>
                                <option class="apart-list-1" value="Шмитовский проезд, 39 к3">Шмитовский проезд, 39 к3</option>
                                <option class="apart-list-1" value="Шмитовский проезд, вл39 к4">Шмитовский проезд, вл39 к4</option>
                                <option class="apart-list-1" value="Шмитовский проезд, вл39 к5">Шмитовский проезд, вл39 к5</option>
                                <option class="apart-list-1" value="Шмитовский проезд, вл39 к6">Шмитовский проезд, вл39 к6</option>
                                <option class="apart-list-1" value="Шмитовский проезд, вл39 к7">Шмитовский проезд, вл39 к7</option>
                                <option class="apart-list-1" value="Шмитовский проезд, 39 к8">Шмитовский проезд, 39 к8</option>
                                <option class="apart-list-1" value="корпус">корпус</option>`);
                    break;

                case 'ЖК Сosmopolit':
                    $('#add_subtower').empty();
                    $("#add_subtower").append(`<option class="apart-list-1" value="Шмитовский проезд, вл40" selected>Шмитовский проезд, вл40</option>`);
                    break;

                case 'ЖК Бадаевский':
                    $('#add_subtower').empty();
                    $("#add_subtower").append(`<option class="apart-list-1" value="Набережная Тараса Шевченко, 12 стр" selected>Набережная Тараса Шевченко, 12 стр</option>`);
                    break;

                case 'ЖК Redside':
                    $('#add_subtower').empty();
                    $("#add_subtower").append(`<option class="apart-list-1" value="Черногрязская 2-я, 6к1-6к4 и 9к1-9к5" selected>Черногрязская 2-я, 6к1-6к4 и 9к1-9к5</option>`);
                    break;

                case 'ЖК Victory park Residences':
                    $('#add_subtower').empty();
                    $("#add_subtower").append(`<option class="apart-list-1" value="Братьев Фонченко, 3к1-3к7" selected>Братьев Фонченко, 3к1-3к7</option>`);
                    break;

                case 'ЖК Hide':
                    $('#add_subtower').empty();
                    $("#add_subtower").append(`<option class="apart-list-1" value="Сетуньский 1-й проезд, вл6-10к1-10к3" selected>Сетуньский 1-й проезд, вл6-10к1-10к3</option>`);
                    break;

                case 'ЖК Поклонная 9':
                    $('#add_subtower').empty();
                    $("#add_subtower").append(`<option class="apart-list-1" value="Поклонная 9" selected>Поклонная 9</option>`);
                    break;

                case 'ЖК Резиденция монэ':
                    $('#add_subtower').empty();
                    $("#add_subtower").append(`<option class="apart-list-1" value="Звенигородская 2-я улица, 11" selected>Звенигородская 2-я улица, 11</option>`);
                    break;
            }
    });
 });



$('#add_tower').change( function() {
   $(this).find(":selected").each(function () {
       if ($('.admin-users-block-add-2-mob').css('display') == 'none') {
           if ($(this).val() == 'Capital Towers' || $(this).val() == 'ЖК city park' || $(this).val() == 'ЖК Headliner' || $(this).val() == 'ЖК Сosmopolit' ||
            $(this).val() == 'ЖК Бадаевский' || $(this).val() == 'ЖК Redside' || $(this).val() == 'ЖК Victory park Residences' || $(this).val() == 'ЖК Hide'
            || $(this).val() == 'ЖК Поклонная 9' || $(this).val() == 'ЖК Резиденция монэ') {
                $('#type_ned').empty();
                $("#type_ned").append(`<div class="p-2 block-filter-add-6" style="height: 43px;">
                        <h1 class="text-filter-add-2">Тип недвижимости</h1>
                        <div class="p-2 add-select-admin-2">
                            <div class="p-2 add-type">
                                <input type="radio" class="btn-check button-add-type" name="option" id="option101" value="Квартира" autocomplete="off" onclick="property_type('Квартира')" checked>
                                <label class="btn btn-secondary button-add-type" for="option101">Квартира</label>
                            </div>
                        </div>
                    </div>`)
               property_type_add()
            } else {
                $('#type_ned').empty();
                $("#type_ned").append(`<div class="p-2 block-filter-add-6" style="height: 86px;">
                        <h1 class="text-filter-add-2">Тип недвижимости</h1>
                        <div class="p-2 add-select-admin-2">
                            <div class="p-2 add-type">
                                <input type="radio" class="btn-check button-add-type" name="option" id="option100" autocomplete="off" checked="checked" onclick="property_type_add()" value="Апартамент">
                                <label class="btn btn-secondary button-add-type" for="option100" style="width: 132px;">Апартамент</label>
                                <input type="radio" class="btn-check button-add-type" name="option" id="option102" autocomplete="off" onclick="property_type_add()" value="Офис">
                                <label class="btn btn-secondary button-add-type" for="option102" style="width: 86px;">Офис</label>
                                <input type="radio" class="btn-check button-add-type" name="option" id="option103" autocomplete="off" onclick="property_type_add()" value="Торговая площадь">
                                <label class="btn btn-secondary button-add-type" for="option103" style="width: 182px;">Торговая площадь</label>
                                <input type="radio" class="btn-check button-add-type" name="option" id="option104" autocomplete="off" onclick="property_type_add()" value="Свободного назначения">
                                <label class="btn btn-secondary button-add-type" for="option104" style="width: 228px;">Свободного назначения</label>
                                <input type="radio" class="btn-check button-add-type" name="option" id="option105" autocomplete="off" onclick="property_type_add()" value="Паркинг">
                                <label class="btn btn-secondary button-add-type" for="option105" style="width: 106px;">Паркинг</label>
                            </div>
                            <div class="p-2 add-type-2">
                                <input type="radio" class="btn-check button-add-type" name="option" id="option107" autocomplete="off" onclick="property_type_add()" value="Коворкинг">
                                <label class="btn btn-secondary button-add-type" for="option107" style="width: 120px;">Коворкинг</label>
                            </div>
                        </div>
                    </div>`)
            }
       } else {
           if ($(this).val() == 'Capital Towers' || $(this).val() == 'ЖК city park' || $(this).val() == 'ЖК Headliner' || $(this).val() == 'ЖК Сosmopolit' ||
            $(this).val() == 'ЖК Бадаевский' || $(this).val() == 'ЖК Redside' || $(this).val() == 'ЖК Victory park Residences' || $(this).val() == 'ЖК Hide'
            || $(this).val() == 'ЖК Поклонная 9' || $(this).val() == 'ЖК Резиденция монэ') {
                $('#type_ned_mob').empty();
                $("#type_ned_mob").append(`<h1 class="text-filter-add-2">Тип недвижимости</h1>
                        <div class="p-2 add-select-admin-2">
                            <div class="p-2 add-type-mob">
                                <input type="radio" class="btn-check button-add-type-mob" name="option_mob" id="optionsss1" onclick="property_type_add()" value="Апартамент" autocomplete="off" checked="checked">
                                <label class="btn btn-secondary button-add-type-mob" for="optionsss1" style="width: 116px;">Апартамент</label>
                            </div>
                        </div>`)
               property_type_add()
            } else {
                $('#type_ned_mob').empty();
                $("#type_ned_mob").append(`<h1 class="text-filter-add-2">Тип недвижимости</h1>
                        <div class="p-2 add-select-admin-2">
                            <div class="p-2 add-type-mob">
                                <input type="radio" class="btn-check button-add-type-mob" name="option_mob" id="optionsss1" onclick="property_type_add()" value="Апартамент" autocomplete="off" checked="checked">
                                <label class="btn btn-secondary button-add-type-mob" for="optionsss1" style="width: 116px;">Апартамент</label>
                                <input type="radio" class="btn-check button-add-type-mob" name="option_mob" id="optionsss2" onclick="property_type_add()" value="Квартира" autocomplete="off">
                                <label class="btn btn-secondary button-add-type-mob" for="optionsss2" style="width: 99px;">Квартира</label>
                                <input type="radio" class="btn-check button-add-type-mob" name="option_mob" id="optionsss3" onclick="property_type_add()" value="Офис" autocomplete="off">
                                <label class="btn btn-secondary button-add-type-mob" for="optionsss3" style="width: 70px;">Офис</label>
                            </div>
                            <div class="p-2 add-type-mob">
                                <input type="radio" class="btn-check button-add-type-mob" name="option_mob" id="optionsss4" onclick="property_type_add()" value="Торговая площадь" autocomplete="off">
                                <label class="btn btn-secondary button-add-type-mob" for="optionsss4" style="width: 166px;">Торговая площадь</label>
                                <input type="radio" class="btn-check button-add-type-mob" name="option_mob" id="optionsss5" onclick="property_type_add()" value="Паркинг" autocomplete="off">
                                <label class="btn btn-secondary button-add-type-mob" for="optionsss5" style="width: 90px;">Паркинг</label>
                            </div>
                            <div class="p-2 add-type-mob">
                                <input type="radio" class="btn-check button-add-type-mob" name="option_mob" id="optionsss6" onclick="property_type_add()" value="Свободного назначения" autocomplete="off">
                                <label class="btn btn-secondary button-add-type-mob" for="optionsss6" style="width: 212px;">Свободного назначения</label>
                                <input type="radio" class="btn-check button-add-type-mob" name="option_mob" id="optionsss7" onclick="property_type_add()" value="Коворкинг" autocomplete="off">
                                <label class="btn btn-secondary button-add-type-mob" for="optionsss7" style="width: 110px;">Коворкинг</label>
                            </div>
                        </div>`)
            }
       }

    });
 });

function type_oper(num) {
    if ($('.admin-users-block-add-2-mob').css('display') == 'none') {
        if (num == 'rent') {
            $('#zaezd_otezd').css("display", "flex");

        $('#add_tower').find(":selected").each(function () {
            if ($(this).val() == 'Capital Towers' || $(this).val() == 'ЖК city park' || $(this).val() == 'ЖК Headliner' || $(this).val() == 'ЖК Сosmopolit' ||
            $(this).val() == 'ЖК Бадаевский' || $(this).val() == 'ЖК Redside' || $(this).val() == 'ЖК Victory park Residences' || $(this).val() == 'ЖК Hide'
            || $(this).val() == 'ЖК Поклонная 9' || $(this).val() == 'ЖК Резиденция монэ') {
                $('#type_ned').empty();
                $("#type_ned").append(`<div class="p-2 block-filter-add-6" style="height: 43px;">
                        <h1 class="text-filter-add-2">Тип недвижимости</h1>
                        <div class="p-2 add-select-admin-2">
                            <div class="p-2 add-type">
                                <input type="radio" class="btn-check button-add-type" name="option" id="option101" value="Квартира" autocomplete="off" onclick="property_type('Квартира')" checked>
                                <label class="btn btn-secondary button-add-type" for="option101">Квартира</label>
                            </div>
                        </div>
                    </div>`)
            } else {

                $('#type_ned').empty();
                $("#type_ned").append(`<div class="p-2 block-filter-add-6" style="height: 86px;">
                        <h1 class="text-filter-add-2">Тип недвижимости</h1>
                        <div class="p-2 add-select-admin-2">
                            <div class="p-2 add-type">
                                <input type="radio" class="btn-check button-add-type" name="option" id="option100" autocomplete="off" checked="checked" onclick="property_type_add()" value="Апартамент">
                                <label class="btn btn-secondary button-add-type" for="option100" style="width: 132px;">Апартамент</label>
                                <input type="radio" class="btn-check button-add-type" name="option" id="option102" autocomplete="off" onclick="property_type_add()" value="Офис">
                                <label class="btn btn-secondary button-add-type" for="option102" style="width: 86px;">Офис</label>
                                <input type="radio" class="btn-check button-add-type" name="option" id="option103" autocomplete="off" onclick="property_type_add()" value="Торговая площадь">
                                <label class="btn btn-secondary button-add-type" for="option103" style="width: 182px;">Торговая площадь</label>
                                <input type="radio" class="btn-check button-add-type" name="option" id="option104" autocomplete="off" onclick="property_type_add()" value="Свободного назначения">
                                <label class="btn btn-secondary button-add-type" for="option104" style="width: 228px;">Свободного назначения</label>
                                <input type="radio" class="btn-check button-add-type" name="option" id="option105" autocomplete="off" onclick="property_type_add()" value="Паркинг">
                                <label class="btn btn-secondary button-add-type" for="option105" style="width: 106px;">Паркинг</label>
                            </div>
                            <div class="p-2 add-type-2">
                                <input type="radio" class="btn-check button-add-type" name="option" id="option106" autocomplete="off" onclick="property_type_add()" value="Коворкинг">
                                <label class="btn btn-secondary button-add-type" for="option106" style="width: 120px;">Коворкинг</label>
                            </div>
                        </div>
                    </div>`)
            }
    });
        $('#add_pricing').empty();
        $("#add_pricing").append(`<div class="p-2 add-price">
                                <h1 class="text-filter-add-4">месяц</h1>
                                <input type="text" name="price_month" id="price_month" class="form-control input-add-price" placeholder="1 000 000 000 000 ₽" aria-label="price" aria-describedby="addon-wrapping">
                            </div>
                            <div class="p-2 add-price">
                                <h1 class="text-filter-add-4">м²/ месяц</h1>
                                <input type="text" name="price_square_month" id="price_square_month" class="form-control input-add-price" placeholder="1 000 000 000 000 ₽" aria-label="price" aria-describedby="addon-wrapping">
                            </div>
                            <div class="p-2 add-price">
                                <h1 class="text-filter-add-4">м²/ год</h1>
                                <input type="text" name="price_square_year" id="price_square_year" class="form-control input-add-price" placeholder="1 000 000 000 000 ₽" aria-label="price" aria-describedby="addon-wrapping">
                            </div>`);

        $('#add_status').empty();
        $("#add_status").append(`<input type="radio" class="btn-check button-add-type-active-2" name="options_status" id="option106" autocomplete="off" value="Сдается" checked="checked">
                            <label class="btn btn-secondary button-add-type-active-2" for="option106">Сдается</label>
                            <input type="radio" class="btn-check button-add-type-2" name="options_status" id="option107" value="Сдано" autocomplete="off">
                            <label class="btn btn-secondary button-add-type-2" for="option107">Сдано</label>`);
    } else {
            $('#zaezd_otezd').css("display", "none");

        $('#add_tower').find(":selected").each(function () {
            if ($(this).val() == 'Capital Towers' || $(this).val() == 'ЖК city park' || $(this).val() == 'ЖК Headliner' || $(this).val() == 'ЖК Сosmopolit' ||
            $(this).val() == 'ЖК Бадаевский' || $(this).val() == 'ЖК Redside' || $(this).val() == 'ЖК Victory park Residences' || $(this).val() == 'ЖК Hide'
            || $(this).val() == 'ЖК Поклонная 9' || $(this).val() == 'ЖК Резиденция монэ') {
                $('#type_ned').empty();
                $("#type_ned").append(`<div class="p-2 block-filter-add-6" style="height: 43px;">
                        <h1 class="text-filter-add-2">Тип недвижимости</h1>
                        <div class="p-2 add-select-admin-2">
                            <div class="p-2 add-type">
                                <input type="radio" class="btn-check button-add-type" name="option" id="option101" value="Квартира" autocomplete="off" onclick="property_type('Квартира')" checked>
                                <label class="btn btn-secondary button-add-type" for="option101">Квартира</label>
                            </div>
                        </div>
                    </div>`)
            } else {
                $('#type_ned').empty();
                $("#type_ned").append(`<div class="p-2 block-filter-add-6" style="height: 43px;">
                        <h1 class="text-filter-add-2">Тип недвижимости</h1>
                        <div class="p-2 add-select-admin-2">
                            <div class="p-2 add-type">
                                <input type="radio" class="btn-check button-add-type" name="option" id="option100" autocomplete="off" checked="checked" onclick="property_type_add()" value="Апартамент">
                                <label class="btn btn-secondary button-add-type" for="option100" style="width: 132px;">Апартамент</label>
                                <input type="radio" class="btn-check button-add-type" name="option" id="option102" autocomplete="off" onclick="property_type_add()" value="Офис">
                                <label class="btn btn-secondary button-add-type" for="option102" style="width: 86px;">Офис</label>
                                <input type="radio" class="btn-check button-add-type" name="option" id="option103" autocomplete="off" onclick="property_type_add()" value="Торговая площадь">
                                <label class="btn btn-secondary button-add-type" for="option103" style="width: 182px;">Торговая площадь</label>
                                <input type="radio" class="btn-check button-add-type" name="option" id="option104" autocomplete="off" onclick="property_type_add()" value="Свободного назначения">
                                <label class="btn btn-secondary button-add-type" for="option104" style="width: 228px;">Свободного назначения</label>
                                <input type="radio" class="btn-check button-add-type" name="option" id="option105" autocomplete="off" onclick="property_type_add()" value="Паркинг">
                                <label class="btn btn-secondary button-add-type" for="option105" style="width: 106px;">Паркинг</label>
                            </div>
                            
                        </div>
                    </div>`)
            }
    });
        $('#add_pricing').empty();
        $("#add_pricing").append(`<div class="p-2 add-price">
                                <h1 class="text-filter-add-4">За все</h1>
                                <input type="text" name="price" id="price" class="form-control input-add-price" placeholder="1 000 000 000 000 ₽" aria-label="price" aria-describedby="addon-wrapping">
                            </div>
                            <div class="p-2 add-price">
                                <h1 class="text-filter-add-4">За м²</h1>
                                <input type="text" name="price_metr" id="price_metr" class="form-control input-add-price" placeholder="1 000 000 000 000 ₽" aria-label="price" aria-describedby="addon-wrapping">
                            </div>`);

        $('#add_status').empty();
        $("#add_status").append(`<input type="radio" class="btn-check button-add-type-active-2" name="options_status" id="option106" autocomplete="off" value="Продается" checked="checked">
                            <label class="btn btn-secondary button-add-type-active-2" for="option106" style="width: 180px;">Продается</label>
                            <input type="radio" class="btn-check button-add-type-2" name="options_status" id="option107" value="Продано" autocomplete="off">
                            <label class="btn btn-secondary button-add-type-2" for="option107" style="width: 180px;">Продано</label>`);
    }
    } else {
        if (num == 'rent') {
        $('#add_tower').find(":selected").each(function () {
            if ($(this).val() == 'Capital Towers' || $(this).val() == 'ЖК city park' || $(this).val() == 'ЖК Headliner' || $(this).val() == 'ЖК Сosmopolit' ||
            $(this).val() == 'ЖК Бадаевский' || $(this).val() == 'ЖК Redside' || $(this).val() == 'ЖК Victory park Residences' || $(this).val() == 'ЖК Hide'
            || $(this).val() == 'ЖК Поклонная 9' || $(this).val() == 'ЖК Резиденция монэ') {
                $('#type_ned_mob').empty();
                $("#type_ned_mob").append(`<h1 class="text-filter-add-2">Тип недвижимости</h1>
                        <div class="p-2 add-select-admin-2">
                            <div class="p-2 add-type-mob">
                                <input type="radio" class="btn-check button-add-type-mob" name="option_mob" id="optionsss1" onclick="property_type_add()" value="Апартамент" autocomplete="off" checked="checked">
                                <label class="btn btn-secondary button-add-type-mob" for="optionsss1" style="width: 116px;">Апартамент</label>
                            </div>
                        </div>`)
            } else {
                $('#type_ned_mob').empty();
                $("#type_ned_mob").append(`<h1 class="text-filter-add-2">Тип недвижимости</h1>
                        <div class="p-2 add-select-admin-2">
                            <div class="p-2 add-type-mob">
                                <input type="radio" class="btn-check button-add-type-mob" name="option_mob" id="optionsss1" onclick="property_type_add()" value="Апартамент" autocomplete="off" checked="checked">
                                <label class="btn btn-secondary button-add-type-mob" for="optionsss1" style="width: 116px;">Апартамент</label>
                                <input type="radio" class="btn-check button-add-type-mob" name="option_mob" id="optionsss2" onclick="property_type_add()" value="Квартира" autocomplete="off">
                                <label class="btn btn-secondary button-add-type-mob" for="optionsss2" style="width: 99px;">Квартира</label>
                                <input type="radio" class="btn-check button-add-type-mob" name="option_mob" id="optionsss3" onclick="property_type_add()" value="Офис" autocomplete="off">
                                <label class="btn btn-secondary button-add-type-mob" for="optionsss3" style="width: 70px;">Офис</label>
                            </div>
                            <div class="p-2 add-type-mob">
                                <input type="radio" class="btn-check button-add-type-mob" name="option_mob" id="optionsss4" onclick="property_type_add()" value="Торговая площадь" autocomplete="off">
                                <label class="btn btn-secondary button-add-type-mob" for="optionsss4" style="width: 166px;">Торговая площадь</label>
                                <input type="radio" class="btn-check button-add-type-mob" name="option_mob" id="optionsss5" onclick="property_type_add()" value="Паркинг" autocomplete="off">
                                <label class="btn btn-secondary button-add-type-mob" for="optionsss5" style="width: 90px;">Паркинг</label>
                            </div>
                            <div class="p-2 add-type-mob">
                                <input type="radio" class="btn-check button-add-type-mob" name="option_mob" id="optionsss6" onclick="property_type_add()" value="Свободного назначения" autocomplete="off">
                                <label class="btn btn-secondary button-add-type-mob" for="optionsss6" style="width: 212px;">Свободного назначения</label>
                                <input type="radio" class="btn-check button-add-type-mob" name="option_mob" id="optionsss7" onclick="property_type_add()" value="Коворкинг" autocomplete="off">
                                <label class="btn btn-secondary button-add-type-mob" for="optionsss7" style="width: 110px;">Коворкинг</label>
                            </div>
                        </div>`)
            }
        });

        $('#add_pricing_mob').empty();
        $("#add_pricing_mob").append(`<h1 class="text-filter-add-2">Цена</h1>
                            <div class="p-2 add-price">
                                <h1 class="text-filter-add-2-price">месяц</h1>
                                <input type="text" name="price_month_mob" id="price_month_mob" class="form-control input-add-price" placeholder="1 000 000 000 000 ₽" aria-label="price" aria-describedby="addon-wrapping">
                            </div>
                            <div class="p-2 add-price">
                                <h1 class="text-filter-add-2-price">м²/ месяц</h1>
                                <input type="text" name="price_square_month_mob" id="price_square_month_mob" class="form-control input-add-price" placeholder="1 000 000 000 000 ₽" aria-label="price" aria-describedby="addon-wrapping">
                            </div>
                            <div class="p-2 add-price">
                                <h1 class="text-filter-add-2-price">м²/ год</h1>
                                <input type="text" name="price_square_year_mob" id="price_square_year_mob" class="form-control input-add-price" placeholder="1 000 000 000 000 ₽" aria-label="price" aria-describedby="addon-wrapping">
                            </div>`);

        $('#add_status_mob').empty();
        $("#add_status_mob").append(`<input type="radio" class="btn-check button-add-type-active-2" name="options_status_mob" id="options_status_mob106" value="Сдается" autocomplete="off" checked="checked">
                            <label class="btn btn-secondary button-add-type-active-2" for="options_status_mob106">Сдается</label>
                            <input type="radio" class="btn-check button-add-type-2" name="options_status_mob" id="options_status_mob107" value="Сдано" autocomplete="off">
                            <label class="btn btn-secondary button-add-type-2" for="options_status_mob107">Сдано</label>`);
    } else {
        $('#add_tower').find(":selected").each(function () {
            if ($(this).val() == 'Capital Towers' || $(this).val() == 'ЖК city park' || $(this).val() == 'ЖК Headliner' || $(this).val() == 'ЖК Сosmopolit' ||
            $(this).val() == 'ЖК Бадаевский' || $(this).val() == 'ЖК Redside' || $(this).val() == 'ЖК Victory park Residences' || $(this).val() == 'ЖК Hide'
            || $(this).val() == 'ЖК Поклонная 9' || $(this).val() == 'ЖК Резиденция монэ') {
                $('#type_ned_mob').empty();
                $("#type_ned_mob").append(`<h1 class="text-filter-add-2">Тип недвижимости</h1>
                        <div class="p-2 add-select-admin-2">
                            <div class="p-2 add-type-mob">
                                <input type="radio" class="btn-check button-add-type-mob" name="option_mob" id="optionsss1" onclick="property_type_add()" value="Апартамент" autocomplete="off" checked="checked">
                                <label class="btn btn-secondary button-add-type-mob" for="optionsss1" style="width: 116px;">Апартамент</label>
                            </div>
                        </div>`)
            } else {
                $('#type_ned_mob').empty();
                $("#type_ned_mob").append(`<h1 class="text-filter-add-2">Тип недвижимости</h1>
                        <div class="p-2 add-select-admin-2">
                            <div class="p-2 add-type-mob">
                                <input type="radio" class="btn-check button-add-type-mob" name="option_mob" id="optionsss1" onclick="property_type_add()" value="Апартамент" autocomplete="off" checked="checked">
                                <label class="btn btn-secondary button-add-type-mob" for="optionsss1" style="width: 116px;">Апартамент</label>
                                <input type="radio" class="btn-check button-add-type-mob" name="option_mob" id="optionsss2" onclick="property_type_add()" value="Квартира" autocomplete="off">
                                <label class="btn btn-secondary button-add-type-mob" for="optionsss2" style="width: 99px;">Квартира</label>
                                <input type="radio" class="btn-check button-add-type-mob" name="option_mob" id="optionsss3" onclick="property_type_add()" value="Офис" autocomplete="off">
                                <label class="btn btn-secondary button-add-type-mob" for="optionsss3" style="width: 70px;">Офис</label>
                            </div>
                            <div class="p-2 add-type-mob">
                                <input type="radio" class="btn-check button-add-type-mob" name="option_mob" id="optionsss4" onclick="property_type_add()" value="Торговая площадь" autocomplete="off">
                                <label class="btn btn-secondary button-add-type-mob" for="optionsss4" style="width: 166px;">Торговая площадь</label>
                                <input type="radio" class="btn-check button-add-type-mob" name="option_mob" id="optionsss5" onclick="property_type_add()" value="Паркинг" autocomplete="off">
                                <label class="btn btn-secondary button-add-type-mob" for="optionsss5" style="width: 90px;">Паркинг</label>
                            </div>
                            <div class="p-2 add-type-mob">
                                <input type="radio" class="btn-check button-add-type-mob" name="option_mob" id="optionsss7" onclick="property_type_add()" value="Свободного назначения" autocomplete="off">
                                <label class="btn btn-secondary button-add-type-mob" for="optionsss7" style="width: 212px;">Свободного назначения</label>
                            </div>
                        </div>`)
            }
    });
        $('#add_pricing_mob').empty();
        $("#add_pricing_mob").append(`<h1 class="text-filter-add-2">Цена</h1>
                            <div class="p-2 add-price">
                                <h1 class="text-filter-add-2-price">За все</h1>
                                <input type="text" name="price_mob" id="price_mob" class="form-control input-add-price" placeholder="1 000 000 000 000 ₽" aria-label="price" aria-describedby="addon-wrapping">
                            </div>
                            <div class="p-2 add-price">
                                <h1 class="text-filter-add-2-price">За м²</h1>
                                <input type="text" name="price_metr_mob" id="price_metr_mob" class="form-control input-add-price" placeholder="1 000 000 000 000 ₽" aria-label="price" aria-describedby="addon-wrapping">
                            </div>`);

        $('#add_status_mob').empty();
        $("#add_status_mob").append(`<input type="radio" class="btn-check button-add-type-active-2" name="options_status_mob" id="options_status_mob106" value="Продаётся" autocomplete="off" checked="checked">
                            <label class="btn btn-secondary button-add-type-active-2" for="options_status_mob106">Продаётся</label>
                            <input type="radio" class="btn-check button-add-type-2" name="options_status_mob" id="options_status_mob107" value="Продано" autocomplete="off">
                            <label class="btn btn-secondary button-add-type-2" for="options_status_mob107">Продано</label>`);
    }
    }
}

function property_type_add() {
    if ($('.admin-users-block-add-2-mob').css('display') == 'none') {
        $.ajax(
        {
            type:"GET",
            url: "filter_add_object/",
            data: {
                prop : $('input[name="option"]:checked').val(),
                stat : $('input[name="type-op"]:checked').val(),
            },
            success: function( data )
            {
                $('#hst').empty();
                $("#hst").append(data)
            }
        });
    } else {
        $.ajax(
        {
            type:"GET",
            url: "filter_add_object/",
            data: {
                prop : $('input[name="option_mob"]:checked').val(),
                stat : $('input[name="type-op"]:checked').val(),
            },
            success: function( data )
            {
                $('#hst').empty();
                $("#hst").append(data)
            }
        });
    }
}

function add_file() {
    $('#add_file').append(`<input type="file" name="upload_photo_${$('.upload_photo').length+1}" id="upload_photo" class="upload_photo"/>`)
}



function tristate_1_mob(control) {
    switch ($(control).data("type")) {
        case 0:
            $(control).data("type", 1);
            $(control).find('label').css("background-color", "#27CC8C");
            $(control).find('label').css("color", "#ffffff");
            console.log($(control).data("type"))
            break;
        case 1:
             $(control).data("type", 0);
             $(control).find('label').css("background-color", "#ffffff");
             $(control).find('label').css("color", "#A1A0A0");
             console.log($(control).data("type"))
             break;
    }
}

function check_udob(num) {
    if( $(num).is(':checked') ) {
        $(num).val('1')
        console.log($(num).val())
    } else {
        $(num).val('0')
        console.log($(num).val())
    }
}

if ($('.add-address-2-mob').css('display') == 'none') {
    $('#check').append("<input type='text' name='adaptive' value='desktop' style='display:none;'/>")
} else {
    $('#check').append("<input type='text' name='adaptive' value='mobile' style='display:none;'/>")
}