

$('#add_tower').change( function() {
   $(this).find(":selected").each(function () {
            switch ($(this).val()) {
                case 'Башня “Федерация”':
                    $('#add_subtower').empty();
                    $("#add_subtower").append(`<option class="apart-list-1" value="Восток" selected>Восток</option>
                                <option class="apart-list-1" value="Запад">Запад</option>`);
                    $('#address').val('Москва, Пресненская набережная, 12')
                    myMap.destroy();
                    ymaps.ready(init);
                    $('#address_coords_x').val('55.7498682028503')
                    $('#address_coords_y').val('37.53772679764558')
                    $('#number_of_floors').val('97')
                    $('#number_of_floors_mob').val('97')
                    break;
                case 'Neva towers':
                    $('#add_subtower').empty();
                    $("#add_subtower").append(`<option class="apart-list-1" value="1 башня" selected>1 башня</option>
                                <option class="apart-list-1" value="2 башня">2 башня</option>`);
                    $('#address').val('Москва, 1-й Красногвардейский проезд, 22с1')
                    $('#maps').attr('src','https://yandex.ru/map-widget/v1/?um=constructor%3A45a348eececbaa11a73480bb8bea2eb8890ee08909b457dda13409527822c412&amp;source=constructor');
                    myMap.destroy();
                    ymaps.ready(init_1);
                    function init_1() {
                        myMap = new ymaps.Map("map", {center: [55.75109656735715,37.53376785713961], zoom: 14}, {searchControlProvider: 'yandex#search'});
                        myMap.geoObjects.add(new ymaps.Placemark([55.75109656735715,37.53376785713961], {balloonContent: 'цвет <strong>красный</strong>',
                            iconCaption: 'Neva towers 1 башня'}, {preset: 'islands#redDotIconWithCaption'}))
                    }
                    $('#address_coords_x').val('55.75109656735715')
                    $('#address_coords_y').val('37.53376785713961')
                    $('#number_of_floors').val('68')
                    $('#number_of_floors_mob').val('68')

                    break;
                case 'ОКО':
                    $('#add_subtower').empty();
                    $("#add_subtower").append(`<option class="apart-list-1" value="1 башня" selected>1 башня</option>
                                <option class="apart-list-1" value="2 башня">2 башня</option>`);
                    $('#address').val('Москва, 1-й Красногвардейский проезд, 21с1')
                    $('#maps').attr('src','https://yandex.ru/map-widget/v1/?um=constructor%3Aeac40aed16af33e37915fea996514b7cd3fda02e6a22a2251e8076ef6b112f9d&amp;source=constructor');
                    myMap.destroy();
                    ymaps.ready(init_2);
                    function init_2() {
                        myMap = new ymaps.Map("map", {center: [55.750013430235434,37.53474418122102], zoom: 14}, {searchControlProvider: 'yandex#search'});
                        myMap.geoObjects.add(new ymaps.Placemark([55.750013430235434,37.53474418122102], {balloonContent: 'цвет <strong>красный</strong>',
                            iconCaption: 'ОКО 1 башня'}, {preset: 'islands#redDotIconWithCaption'}))
                    }
                    $('#address_coords_x').val('55.750013430235434')
                    $('#address_coords_y').val('37.53474418122102')
                    $('#number_of_floors').val('65')
                    $('#number_of_floors_mob').val('65')
                    break;
                case 'Меркурий':
                    $('#add_subtower').empty();
                    $('#address').val('Москва, 1-й Красногвардейский проезд, 15')
                    $('#maps').attr('src','https://yandex.ru/map-widget/v1/?um=constructor%3Abb65bc35e25d942b131263e8d68a77f814c4b614e67514ca5c2dc3b4c42ffdd7&amp;source=constructor');
                    myMap.destroy();
                    ymaps.ready(init3);
                    function init3() {
                        myMap = new ymaps.Map("map", {center: [55.75046121125501,37.53943268257904], zoom: 14}, {searchControlProvider: 'yandex#search'});
                        myMap.geoObjects.add(new ymaps.Placemark([55.75046121125501,37.53943268257904], {balloonContent: 'цвет <strong>красный</strong>',
                            iconCaption: 'Меркурий'}, {preset: 'islands#redDotIconWithCaption'}))
                    }
                    $('#address_coords_x').val('55.75046121125501')
                    $('#address_coords_y').val('37.53943268257904')
                    $('#number_of_floors').val('75')
                    $('#number_of_floors_mob').val('75')
                    break;
                case 'Город Столиц':
                    $('#add_subtower').empty();
                    $("#add_subtower").append(`<option class="apart-list-1" value="Москва" selected>Москва</option>
                                <option class="apart-list-1" value="Санкт-Петербург">Санкт-Петербург</option>`);
                     $('#address').val('Москва, Пресненская набережная, 8с1')
                    $('#maps').attr('src','https://yandex.ru/map-widget/v1/?um=constructor%3Ad0b470a4656fa6d1352eebdc5613471cd4763c953360009eb2478db765c5b191&amp;source=constructor');
                    myMap.destroy();
                    ymaps.ready(init4);
                    function init4() {
                        myMap = new ymaps.Map("map", {center: [55.74773052248407,37.539112260929684], zoom: 14}, {searchControlProvider: 'yandex#search'});
                        myMap.geoObjects.add(new ymaps.Placemark([55.74773052248407,37.539112260929684], {balloonContent: 'цвет <strong>красный</strong>',
                            iconCaption: 'Город Столиц Москва'}, {preset: 'islands#redDotIconWithCaption'}))
                    }
                    $('#address_coords_x').val('55.74773052248407')
                    $('#address_coords_y').val('37.539112260929684')
                    $('#number_of_floors').val('76')
                    $('#number_of_floors_mob').val('76')
                     break;
                case 'Империя':
                    $('#add_subtower').empty();
                     $('#address').val('Москва, Пресненская набережная, 6с2')
                    $('#maps').attr('src','https://yandex.ru/map-widget/v1/?um=constructor%3A1703b2f9e87dd04440e075fe1fc7a54428fba3729c2f5f209b061653c62a5b74&amp;source=constructor');
                    myMap.destroy();
                    ymaps.ready(init5);
                    function init5() {
                        myMap = new ymaps.Map("map", {center: [55.7480512498835,37.54036753474865], zoom: 14}, {searchControlProvider: 'yandex#search'});
                        myMap.geoObjects.add(new ymaps.Placemark([55.7480512498835,37.54036753474865], {balloonContent: 'цвет <strong>красный</strong>',
                            iconCaption: 'Империя'}, {preset: 'islands#redDotIconWithCaption'}))
                    }
                    $('#address_coords_x').val('55.7480512498835')
                    $('#address_coords_y').val('37.54036753474865')
                    $('#number_of_floors').val('60')
                    $('#number_of_floors_mob').val('60')
                     break;
                case 'IQ квартал':
                    $('#add_subtower').empty();
                    $("#add_subtower").append(`<option class="apart-list-1" value="1 башня" selected>1 башня</option>
                                <option class="apart-list-1" value="2 башня">2 башня</option>
                                <option class="apart-list-1" value="3 башня">3 башня</option>`);
                     $('#address').val('Москва, Пресненская набережная, 10с2')
                    $('#maps').attr('src','https://yandex.ru/map-widget/v1/?um=constructor%3A02bab19b2a38307da4a920e4c26c5d3cf4c3516c4c0dd9e4fe5370e9a3953f83&amp;source=constructor');
                    myMap.destroy();
                    ymaps.ready(init6);
                    function init6() {
                        myMap = new ymaps.Map("map", {center: [55.74717983341456,37.53473489581737], zoom: 14}, {searchControlProvider: 'yandex#search'});
                        myMap.geoObjects.add(new ymaps.Placemark([55.74717983341456,37.53473489581737], {balloonContent: 'цвет <strong>красный</strong>',
                            iconCaption: 'IQ квартал 1 башня'}, {preset: 'islands#redDotIconWithCaption'}))
                    }
                    $('#address_coords_x').val('55.74717983341456')
                    $('#address_coords_y').val('37.53473489581737')
                    $('#number_of_floors').val('22')
                    $('#number_of_floors_mob').val('22')
                     break;
                case 'Северная башня':
                    $('#add_subtower').empty();
                    $('#address').val('Москва, Тестовская улица, 10')
                    $('#maps').attr('src','https://yandex.ru/map-widget/v1/?um=constructor%3Aac33f965caeb2886007bc344dad11325be5d72638b17755ecbf2a9f6b4c4c39c&amp;source=constructor');
                    myMap.destroy();
                    ymaps.ready(init7);
                    function init7() {
                        myMap = new ymaps.Map("map", {center: [55.75171219578257,37.53270714580212], zoom: 14}, {searchControlProvider: 'yandex#search'});
                        myMap.geoObjects.add(new ymaps.Placemark([55.75171219578257,37.53270714580212], {balloonContent: 'цвет <strong>красный</strong>',
                            iconCaption: 'Северная башня'}, {preset: 'islands#redDotIconWithCaption'}))
                    }
                    $('#address_coords_x').val('55.75171219578257')
                    $('#address_coords_y').val('37.53270714580212')
                    $('#number_of_floors').val('27')
                    $('#number_of_floors_mob').val('27')
                    break;
                case 'Башни на набережной':
                    $('#add_subtower').empty();
                    $("#add_subtower").append(`<option class="apart-list-1" value="А блок" selected>А блок</option>
                                <option class="apart-list-1" value="В блок">В блок</option>
                                <option class="apart-list-1" value="С блок">С блок</option>`);
                    $('#address').val('Москва, Пресненская набережная, 10блокА')
                    $('#maps').attr('src','https://yandex.ru/map-widget/v1/?um=constructor%3A16bc8cf5c62f9762ac2510a394bc13a3c56a97103b3336516aaf172690366ee8&amp;source=constructor');
                    myMap.destroy();
                    ymaps.ready(init8);
                    function init8() {
                        myMap = new ymaps.Map("map", {center: [55.74667754976414,37.537524393192854], zoom: 14}, {searchControlProvider: 'yandex#search'});
                        myMap.geoObjects.add(new ymaps.Placemark([55.74667754976414,37.537524393192854], {balloonContent: 'цвет <strong>красный</strong>',
                            iconCaption: 'Башни на набережной А блок'}, {preset: 'islands#redDotIconWithCaption'}))
                    }
                    $('#address_coords_x').val('55.74667754976414')
                    $('#address_coords_y').val('37.537524393192854')
                    $('#number_of_floors').val('17')
                    $('#number_of_floors_mob').val('17')
                    break;
                case 'Башня 2000':
                    $('#add_subtower').empty();
                    $('#address').val('Москва, набережная Тараса Шевченко, 23А')
                    $('#maps').attr('src','https://yandex.ru/map-widget/v1/?um=constructor%3Ae992c7a5636606416f38066e1a2039ca18a506c7ec00f20b460134e98da480d8&amp;source=constructor');
                    myMap.destroy();
                    ymaps.ready(init9);
                    function init9() {
                        myMap = new ymaps.Map("map", {center: [55.74621705920357,37.546161939194306], zoom: 14}, {searchControlProvider: 'yandex#search'});
                        myMap.geoObjects.add(new ymaps.Placemark([55.74621705920357,37.546161939194306], {balloonContent: 'цвет <strong>красный</strong>',
                            iconCaption: 'Башня 2000'}, {preset: 'islands#redDotIconWithCaption'}))
                    }
                    $('#address_coords_x').val('55.74621705920357')
                    $('#address_coords_y').val('37.546161939194306')
                    $('#number_of_floors').val('31')
                    $('#number_of_floors_mob').val('31')
                    break;
                case 'Мост Багратион':
                    $('#add_subtower').empty();
                    $('#address').val('Москва, Краснопресненская набережная, 16с1')
                    $('#maps').attr('src','https://yandex.ru/map-widget/v1/?um=constructor%3Aed46511f86f2f407abc0b9744574d3b55686d8ef9bc87f60146bc16a7ecb3baa&amp;source=constructor');
                    myMap.destroy();
                    ymaps.ready(init10);
                    function init10() {
                        myMap = new ymaps.Map("map", {center: [55.747324508379776,37.54499249606381], zoom: 14}, {searchControlProvider: 'yandex#search'});
                        myMap.geoObjects.add(new ymaps.Placemark([55.747324508379776,37.54499249606381], {balloonContent: 'цвет <strong>красный</strong>',
                            iconCaption: 'Мост Багратион'}, {preset: 'islands#redDotIconWithCaption'}))
                    }
                    $('#address_coords_x').val('55.747324508379776')
                    $('#address_coords_y').val('37.54499249606381')
                    $('#number_of_floors').val('3')
                    $('#number_of_floors_mob').val('3')
                    break;
                case 'Евразия':
                    $('#add_subtower').empty();
                    $('#address').val('Москва, Пресненская набережная, 10с1')
                    $('#maps').attr('src','https://yandex.ru/map-widget/v1/?um=constructor%3Afda97d3283d21d9f78730f62c7c3acbfc12223d8acae72adde968aba08461ea9&amp;source=constructor');
                    myMap.destroy();
                    ymaps.ready(init11);
                    function init11() {
                        myMap = new ymaps.Map("map", {center: [55.748885505280626,37.53534467345199], zoom: 14}, {searchControlProvider: 'yandex#search'});
                        myMap.geoObjects.add(new ymaps.Placemark([55.748885505280626,37.53534467345199], {balloonContent: 'цвет <strong>красный</strong>',
                            iconCaption: 'Евразия'}, {preset: 'islands#redDotIconWithCaption'}))
                    }
                    $('#address_coords_x').val('55.748885505280626')
                    $('#address_coords_y').val('37.53534467345199')
                    $('#number_of_floors').val('70')
                    $('#number_of_floors_mob').val('70')
                    break;
                case 'Эволюция':
                    $('#add_subtower').empty();
                    $('#address').val('Москва, Пресненская набережная, 4с2')
                    $('#maps').attr('src','https://yandex.ru/map-widget/v1/?um=constructor%3A02bb9e852350c78d8d061866b8d5a5aafc5e928e2975ef0b8f0f817c18f3a2b4&amp;source=constructor');
                    myMap.destroy();
                    ymaps.ready(init12);
                    function init12() {
                        myMap = new ymaps.Map("map", {center: [55.748486117068914,37.54193217879258], zoom: 14}, {searchControlProvider: 'yandex#search'});
                        myMap.geoObjects.add(new ymaps.Placemark([55.748486117068914,37.54193217879258], {balloonContent: 'цвет <strong>красный</strong>',
                            iconCaption: 'Эволюция'}, {preset: 'islands#redDotIconWithCaption'}))
                    }
                    $('#address_coords_x').val('55.748486117068914')
                    $('#address_coords_y').val('37.54193217879258')
                    $('#number_of_floors').val('55')
                    $('#number_of_floors_mob').val('55')
                    break;
                case 'Афимол':
                    $('#add_subtower').empty();
                    $('#address').val('Москва, Пресненская набережная, 2')
                    $('#maps').attr('src','https://yandex.ru/map-widget/v1/?um=constructor%3Ae25d6f0bbfff6e4986d9cb0e554669e3a8c508e2b82006f865419969038733e2&amp;source=constructor');
                    myMap.destroy();
                    ymaps.ready(init13);
                    function init13() {
                        myMap = new ymaps.Map("map", {center: [55.74936960669903,37.53949673300704], zoom: 14}, {searchControlProvider: 'yandex#search'});
                        myMap.geoObjects.add(new ymaps.Placemark([55.74936960669903,37.53949673300704], {balloonContent: 'цвет <strong>красный</strong>',
                            iconCaption: 'Афимол'}, {preset: 'islands#redDotIconWithCaption'}))
                    }
                    $('#address_coords_x').val('55.74936960669903')
                    $('#address_coords_y').val('37.53949673300704')
                    $('#number_of_floors').val('7')
                    $('#number_of_floors_mob').val('7')
                    break;
                case 'Moskow Towers':
                    $('#add_subtower').empty();
                    $("#add_subtower").append(`<option class="apart-list-1" value="1 башня" selected>1 башня</option>
                                <option class="apart-list-1" value="2 башня">2 башня</option>`);
                    $('#address').val('Москва, 1-й Красногвардейский проезд, 11')
                    $('#maps').attr('src','https://yandex.ru/map-widget/v1/?um=constructor%3A9f99a9ad512f876b157ebe058c074ebc5d425bf85dee0497c1bccebd03d85222&amp;source=constructor');
                    myMap.destroy();
                    ymaps.ready(init14);
                    function init14() {
                        myMap = new ymaps.Map("map", {center: [55.7509549966136,37.541470838842], zoom: 14}, {searchControlProvider: 'yandex#search'});
                        myMap.geoObjects.add(new ymaps.Placemark([55.7509549966136,37.541470838842], {balloonContent: 'цвет <strong>красный</strong>',
                            iconCaption: 'Moskow Towers 1 башня'}, {preset: 'islands#redDotIconWithCaption'}))
                    }
                    $('#address_coords_x').val('55.7509549966136')
                    $('#address_coords_y').val('37.541470838842')
                    $('#number_of_floors').val('62')
                    $('#number_of_floors_mob').val('62')
                    break;
                case 'iCity':
                    $('#add_subtower').empty();
                    $("#add_subtower").append(`<option class="apart-list-1" value="Time" selected>Time</option>
                                <option class="apart-list-1" value="Space">Space</option>`);
                    $('#address').val('Москва, Шмитовский проезд, 37')
                    $('#maps').attr('src','https://yandex.ru/map-widget/v1/?um=constructor%3A4260aa69d62bdab46ca3036b93477fd59a3cd60a40a9019f6e1f6e9f4b5bd7d6&amp;source=constructor');
                    myMap.destroy();
                    ymaps.ready(init15);
                    function init15() {
                        myMap = new ymaps.Map("map", {center: [55.75458814089205,37.530654960216374], zoom: 14}, {searchControlProvider: 'yandex#search'});
                        myMap.geoObjects.add(new ymaps.Placemark([55.75458814089205,37.530654960216374], {balloonContent: 'цвет <strong>красный</strong>',
                            iconCaption: 'iCity Time'}, {preset: 'islands#redDotIconWithCaption'}))
                    }
                    $('#address_coords_x').val('55.75458814089205')
                    $('#address_coords_y').val('37.530654960216374')
                    $('#number_of_floors').val('34')
                    $('#number_of_floors_mob').val('34')
                    break;
                case 'One tower':
                    $('#add_subtower').empty();
                    $('#address').val('Москва, 1-й Красногвардейский проезд, 13')
                    $('#maps').attr('src','https://yandex.ru/map-widget/v1/?um=constructor%3A4195e82a94b61dd068e5a82b5287fa81e90769ad52673e34ec727ff0ea720cb2&amp;source=constructor');
                    myMap.destroy();
                    ymaps.ready(init16);
                    function init16() {
                        myMap = new ymaps.Map("map", {center: [55.751579547488,37.540199641506206], zoom: 14}, {searchControlProvider: 'yandex#search'});
                        myMap.geoObjects.add(new ymaps.Placemark([55.751579547488,37.540199641506206], {balloonContent: 'цвет <strong>красный</strong>',
                            iconCaption: 'One tower'}, {preset: 'islands#redDotIconWithCaption'}))
                    }
                    $('#address_coords_x').val('55.751579547488')
                    $('#address_coords_y').val('37.540199641506206')
                    $('#number_of_floors').val('106')
                    $('#number_of_floors_mob').val('106')
                    break;
                case 'Capital Towers':
                    $('#add_subtower').empty();
                    $("#add_subtower").append(`<option class="apart-list-1" value="park tower" selected>park tower</option>
                                <option class="apart-list-1" value="city tower">city tower</option>
                                <option class="apart-list-1" value="river tower">river tower</option>`);
                    $('#address').val('Москва, Краснопресненская набережная, вл14с1кВ')
                    $('#maps').attr('src','https://yandex.ru/map-widget/v1/?um=constructor%3Ae3cb6e98975fd78a819adfa87317417eb0ce2424d879f76b8d4f871cd69807c1&amp;source=constructor');
                    myMap.destroy();
                    ymaps.ready(init17);
                    function init17() {
                        myMap = new ymaps.Map("map", {center: [55.75206496068768,37.54835865703677], zoom: 14}, {searchControlProvider: 'yandex#search'});
                        myMap.geoObjects.add(new ymaps.Placemark([55.75206496068768,37.54835865703677], {balloonContent: 'цвет <strong>красный</strong>',
                            iconCaption: 'Capital Towers park tower'}, {preset: 'islands#redDotIconWithCaption'}))
                    }
                    $('#address_coords_x').val('55.75206496068768')
                    $('#address_coords_y').val('37.54835865703677')
                    $('#number_of_floors').val('61')
                    $('#number_of_floors_mob').val('61')
                    break;
                case 'ЖК city park':
                    $('#add_subtower').empty();
                    $("#add_subtower").append(`<option class="apart-list-1" value="1 корпус" selected>1 корпус</option>
                                <option class="apart-list-1" value="2 корпус">2 корпус</option>
                                <option class="apart-list-1" value="3 корпус">3 корпус</option>
                                <option class="apart-list-1" value="4 корпус">4 корпус</option>
                                <option class="apart-list-1" value="5 корпус">5 корпус</option>
                                <option class="apart-list-1" value="6 корпус">6 корпус</option>`);
                    $('#address').val('Москва, Мантулинская, 9 к1')
                    $('#maps').attr('src','https://yandex.ru/map-widget/v1/?um=constructor%3A8702da78a9326a622f365e377ee909bf1dfc9bc47b081a19127b57577de45900&amp;source=constructor');
                    myMap.destroy();
                    ymaps.ready(init18);
                    function init18() {
                        myMap = new ymaps.Map("map", {center: [55.754714, 37.546255], zoom: 14}, {searchControlProvider: 'yandex#search'});
                        myMap.geoObjects.add(new ymaps.Placemark([55.754714, 37.546255], {balloonContent: 'цвет <strong>красный</strong>',
                            iconCaption: 'ЖК city park 1 корпус'}, {preset: 'islands#redDotIconWithCaption'}))
                    }
                    $('#address_coords_x').val('55.754714')
                    $('#address_coords_y').val('37.546255')
                    $('#number_of_floors').val('20')
                    $('#number_of_floors_mob').val('20')
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
                                <option class="apart-list-1" value="Шмитовский проезд, вл40">Шмитовский проезд, вл40</option>`);
                    $('#address').val('Москва, Мукомольный проезд, 2')
                    $('#maps').attr('src','https://yandex.ru/map-widget/v1/?um=constructor%3A904b39e2b9b19d27a02816954a4d0ce6da4991790eb65d9fa2df35490ac72be6&amp;source=constructor');
                    myMap.destroy();
                    ymaps.ready(init19);
                    function init19() {
                        myMap = new ymaps.Map("map", {center: [55.751330, 37.526896], zoom: 14}, {searchControlProvider: 'yandex#search'});
                        myMap.geoObjects.add(new ymaps.Placemark([55.751330, 37.526896], {balloonContent: 'цвет <strong>красный</strong>',
                            iconCaption: 'ЖК Headliner Мукомольный проезд, 2'}, {preset: 'islands#redDotIconWithCaption'}))
                    }
                    $('#address_coords_x').val('55.751330')
                    $('#address_coords_y').val('37.526896')
                    $('#number_of_floors').val('48')
                    $('#number_of_floors_mob').val('48')
                    break;
                case 'ЖК Сosmopolit':
                    $('#add_subtower').empty();
                    $("#add_subtower").append(`<option class="apart-list-1" value="Шмитовский проезд, вл40" selected>Шмитовский проезд, вл40</option>`);
                    $('#address').val('Шмитовский проезд, вл40')
                    $('#maps').attr('src','1');
                    myMap.destroy();
                    ymaps.ready(init20);
                    function init20() {
                        myMap = new ymaps.Map("map", {center: [55.758706, 37.557116], zoom: 14}, {searchControlProvider: 'yandex#search'});
                        myMap.geoObjects.add(new ymaps.Placemark([55.758706, 37.557116], {balloonContent: 'цвет <strong>красный</strong>',
                            iconCaption: 'ЖК Сosmopolit'}, {preset: 'islands#redDotIconWithCaption'}))
                    }
                    $('#address_coords_x').val('55.758706')
                    $('#address_coords_y').val('37.557116')
                    $('#number_of_floors').val('36')
                    $('#number_of_floors_mob').val('36')

                    break;
                case 'ЖК Бадаевский':
                    $('#add_subtower').empty();
                    $("#add_subtower").append(`<option class="apart-list-1" value="Набережная Тараса Шевченко, 12 стр" selected>Набережная Тараса Шевченко, 12 стр</option>`);
                    $('#address').val('Набережная Тараса Шевченко, 12 стр')
                    $('#maps').attr('src','1');
                    myMap.destroy();
                    ymaps.ready(init21);
                    function init21() {
                        myMap = new ymaps.Map("map", {center: [55.752344, 37.561014], zoom: 14}, {searchControlProvider: 'yandex#search'});
                        myMap.geoObjects.add(new ymaps.Placemark([55.752344, 37.561014], {balloonContent: 'цвет <strong>красный</strong>',
                            iconCaption: 'ЖК Бадаевский'}, {preset: 'islands#redDotIconWithCaption'}))
                    }
                    $('#address_coords_x').val('55.752344')
                    $('#address_coords_y').val('37.561014')
                    break;
                case 'ЖК Redside':
                    $('#add_subtower').empty();
                    $("#add_subtower").append(`<option class="apart-list-1" value="Черногрязская 2-я, 6к1" selected>Черногрязская 2-я, 6к1</option>
<option class="apart-list-1" value="Черногрязская 2-я, 6к2" >Черногрязская 2-я, 6к2</option>
<option class="apart-list-1" value="Черногрязская 2-я, 6к3" >Черногрязская 2-я, 6к3</option>
<option class="apart-list-1" value="Черногрязская 2-я, 6к4" >Черногрязская 2-я, 6к4</option>
<option class="apart-list-1" value="Черногрязская 2-я, 9к1" >Черногрязская 2-я, 9к1</option>
<option class="apart-list-1" value="Черногрязская 2-я, 9к2" >Черногрязская 2-я, 9к2</option>
<option class="apart-list-1" value="Черногрязская 2-я, 9к3" >Черногрязская 2-я, 9к3</option>
<option class="apart-list-1" value="Черногрязская 2-я, 9к4" >Черногрязская 2-я, 9к4</option>
<option class="apart-list-1" value="Черногрязская 2-я, 9к5" >Черногрязская 2-я, 9к5</option>`);
                    $('#address').val('Москва, Черногрязская 2-я, 6к1')
                    $('#maps').attr('src','1');
                    myMap.destroy();
                    ymaps.ready(init22);
                    function init22() {
                        myMap = new ymaps.Map("map", {center: [55.761249, 37.547153], zoom: 14}, {searchControlProvider: 'yandex#search'});
                        myMap.geoObjects.add(new ymaps.Placemark([55.761249, 37.547153], {balloonContent: 'цвет <strong>красный</strong>',
                            iconCaption: 'ЖК Redside'}, {preset: 'islands#redDotIconWithCaption'}))
                    }
                    $('#address_coords_x').val('55.761249')
                    $('#address_coords_y').val('37.547153')
                    $('#number_of_floors').val('10')
                    $('#number_of_floors_mob').val('10')
                    break;
                case 'ЖК Victory park Residences':
                    $('#add_subtower').empty();
                    $("#add_subtower").append(`<option class="apart-list-1" value="Братьев Фонченко, 3к1" selected>Братьев Фонченко, 3к1</option>
<option class="apart-list-1" value="Братьев Фонченко, 3к2" >Братьев Фонченко, 3к2</option>
<option class="apart-list-1" value="Братьев Фонченко, 3к3" >Братьев Фонченко, 3к3</option>
<option class="apart-list-1" value="Братьев Фонченко, 3к4" >Братьев Фонченко, 3к4</option>
<option class="apart-list-1" value="Братьев Фонченко, 3к5" >Братьев Фонченко, 3к5</option>
<option class="apart-list-1" value="Братьев Фонченко, 3к6" >Братьев Фонченко, 3к6</option>
<option class="apart-list-1" value="Братьев Фонченко, 3к7" >Братьев Фонченко, 3к7</option>`);
                    $('#address').val('Москва, Братьев Фонченко, 3к1')
                    $('#maps').attr('src','1');
                    myMap.destroy();
                    ymaps.ready(init23);
                    function init23() {
                        myMap = new ymaps.Map("map", {center: [55.731987, 37.514985], zoom: 14}, {searchControlProvider: 'yandex#search'});
                        myMap.geoObjects.add(new ymaps.Placemark([55.731987, 37.514985], {balloonContent: 'цвет <strong>красный</strong>',
                            iconCaption: 'ЖК Victory park Residences'}, {preset: 'islands#redDotIconWithCaption'}))
                    }
                    $('#address_coords_x').val('55.731987')
                    $('#address_coords_y').val('37.514985')
                    $('#number_of_floors').val('11')
                    $('#number_of_floors_mob').val('11')
                    break;
                case 'ЖК Hide':
                    $('#add_subtower').empty();
                    $("#add_subtower").append(`<option class="apart-list-1" value="Сетуньский 1-й проезд, вл6-10к1" selected>Сетуньский 1-й проезд, вл6-10к1</option>
<option class="apart-list-1" value="Сетуньский 1-й проезд, вл6-10к2" >Сетуньский 1-й проезд, вл6-10к2</option>
<option class="apart-list-1" value="Сетуньский 1-й проезд, вл6-10к3" >Сетуньский 1-й проезд, вл6-10к3</option>`);
                    $('#address').val('Москва, Сетуньский 1-й проезд, вл6-10к1')
                    $('#maps').attr('src','1');
                    myMap.destroy();
                    ymaps.ready(init24);
                    function init24() {
                        myMap = new ymaps.Map("map", {center: [55.732220, 37.540209], zoom: 14}, {searchControlProvider: 'yandex#search'});
                        myMap.geoObjects.add(new ymaps.Placemark([55.732220, 37.540209], {balloonContent: 'цвет <strong>красный</strong>',
                            iconCaption: 'ЖК Hide'}, {preset: 'islands#redDotIconWithCaption'}))
                    }
                    $('#address_coords_x').val('55.732220')
                    $('#address_coords_y').val('37.540209')
                    $('#number_of_floors').val('41')
                    $('#number_of_floors_mob').val('41')
                    break;
                case 'ЖК Поклонная 9':
                    $('#add_subtower').empty();
                    $("#add_subtower").append(`<option class="apart-list-1" value="Поклонная 9" selected>Поклонная 9</option>`);
                    $('#address').val('Москва, Поклонная 9')
                    $('#maps').attr('src','1');
                    myMap.destroy();
                    ymaps.ready(init25);
                    function init25() {
                        myMap = new ymaps.Map("map", {center: [55.734334, 37.525324], zoom: 14}, {searchControlProvider: 'yandex#search'});
                        myMap.geoObjects.add(new ymaps.Placemark([55.734334, 37.525324], {balloonContent: 'цвет <strong>красный</strong>',
                            iconCaption: 'ЖК Поклонная 9'}, {preset: 'islands#redDotIconWithCaption'}))
                    }
                    $('#address_coords_x').val('55.734334')
                    $('#address_coords_y').val('37.525324')
                    $('#number_of_floors').val('32')
                    $('#number_of_floors_mob').val('32')
                    break;
                case 'ЖК Резиденция монэ':
                    $('#add_subtower').empty();
                    $("#add_subtower").append(`<option class="apart-list-1" value="Звенигородская 2-я улица, 11" selected>Звенигородская 2-я улица, 11</option>`);
                    $('#address').val('Москва, Звенигородская 2-я улица, 11')
                    $('#maps').attr('src','1');
                    myMap.destroy();
                    ymaps.ready(init26);
                    function init26() {
                        myMap = new ymaps.Map("map", {center: [55.761543, 37.554214], zoom: 14}, {searchControlProvider: 'yandex#search'});
                        myMap.geoObjects.add(new ymaps.Placemark([55.761543, 37.554214], {balloonContent: 'цвет <strong>красный</strong>',
                            iconCaption: 'ЖК Резиденция монэ'}, {preset: 'islands#redDotIconWithCaption'}))
                    }
                    $('#address_coords_x').val('55.761543')
                    $('#address_coords_y').val('37.554214')
                    $('#number_of_floors').val('18')
                    $('#number_of_floors_mob').val('18')
                    break;
            }


    });
 });


$('#add_subtower').change( function() {
   $(this).find(":selected").each(function () {
            switch ($(this).val()) {
                case 'Восток':
                    if ($('#add_tower').val() == "Башня “Федерация”") {
                        $('#address').val('Москва, Пресненская набережная, 12');
                        myMap.destroy();
                        ymaps.ready(init30)
                        function init30() {
                            myMap = new ymaps.Map("map", {center: [55.7498682028503,37.53772679764558], zoom: 14}, {searchControlProvider: 'yandex#search'});
                            myMap.geoObjects.add(new ymaps.Placemark([55.7498682028503,37.53772679764558], {balloonContent: 'цвет <strong>красный</strong>',
                                iconCaption: 'Башня “Федерация” Восток'}, {preset: 'islands#redDotIconWithCaption'}))
                        }
                        $('#address_coords_x').val('55.7498682028503')
                        $('#address_coords_y').val('37.53772679764558')
                        $('#number_of_floors').val('97')
                        $('#number_of_floors_mob').val('97')
                    }
                    break;
                case 'Запад':
                    if ($('#add_tower').val() == "Башня “Федерация”") {
                        $('#address').val('Москва, Пресненская набережная, 12');
                        myMap.destroy();
                        ymaps.ready(init31)
                        function init31() {
                            myMap = new ymaps.Map("map", {center: [55.749414363772374,37.537007965629584], zoom: 14}, {searchControlProvider: 'yandex#search'});
                            myMap.geoObjects.add(new ymaps.Placemark([55.749414363772374,37.537007965629584], {balloonContent: 'цвет <strong>красный</strong>',
                                iconCaption: 'Башня “Федерация” Запад'}, {preset: 'islands#redDotIconWithCaption'}))
                        }
                        $('#address_coords_x').val('55.749414363772374')
                        $('#address_coords_y').val('37.537007965629584')
                        $('#number_of_floors').val('62')
                        $('#number_of_floors_mob').val('62')
                    }
                    break;
                case '1 башня':
                    if ($('#add_tower').val() == "Neva towers") {
                        $('#address').val('Москва, 1-й Красногвардейский проезд, 22с1');
                        myMap.destroy();
                        ymaps.ready(init32)
                        function init32() {
                            myMap = new ymaps.Map("map", {center: [55.75109656735715,37.53376785713961], zoom: 14}, {searchControlProvider: 'yandex#search'});
                            myMap.geoObjects.add(new ymaps.Placemark([55.75109656735715,37.53376785713961], {balloonContent: 'цвет <strong>красный</strong>',
                                iconCaption: 'Neva towers 1 башня'}, {preset: 'islands#redDotIconWithCaption'}))
                        }
                        $('#address_coords_x').val('55.75109656735715')
                        $('#address_coords_y').val('37.53376785713961')
                        $('#number_of_floors').val('68')
                        $('#number_of_floors_mob').val('68')
                    }
                    if ($('#add_tower').val() == "ОКО") {
                        $('#address').val('Москва, 1-й Красногвардейский проезд, 21с1');
                        myMap.destroy();
                        ymaps.ready(init33)
                        function init33() {
                            myMap = new ymaps.Map("map", {center: [55.750013430235434,37.53474418122102], zoom: 14}, {searchControlProvider: 'yandex#search'});
                            myMap.geoObjects.add(new ymaps.Placemark([55.750013430235434,37.53474418122102], {balloonContent: 'цвет <strong>красный</strong>',
                                iconCaption: 'ОКО 1 башня'}, {preset: 'islands#redDotIconWithCaption'}))
                        }
                        $('#address_coords_x').val('55.750013430235434')
                        $('#address_coords_y').val('37.53474418122102')
                        $('#number_of_floors').val('65')
                        $('#number_of_floors_mob').val('65')
                    }
                    if ($('#add_tower').val() == "IQ квартал") {
                        $('#address').val('Москва, Пресненская набережная, 10с2');
                        myMap.destroy();
                        ymaps.ready(init34)
                        function init34() {
                            myMap = new ymaps.Map("map", {center: [55.74717983341456,37.53473489581737], zoom: 14}, {searchControlProvider: 'yandex#search'});
                            myMap.geoObjects.add(new ymaps.Placemark([55.74717983341456,37.53473489581737], {balloonContent: 'цвет <strong>красный</strong>',
                                iconCaption: 'IQ квартал 1 башня'}, {preset: 'islands#redDotIconWithCaption'}))
                        }
                        $('#address_coords_x').val('55.74717983341456')
                        $('#address_coords_y').val('37.53473489581737')
                        $('#number_of_floors').val('22')
                        $('#number_of_floors_mob').val('22')
                    }
                    if ($('#add_tower').val() == "Moskow Towers") {
                        $('#address').val('Москва, 1-й Красногвардейский проезд, 11');
                        myMap.destroy();
                        ymaps.ready(init43)
                        function init43() {
                            myMap = new ymaps.Map("map", {center: [55.7509549966136,37.541470838842], zoom: 14}, {searchControlProvider: 'yandex#search'});
                            myMap.geoObjects.add(new ymaps.Placemark([55.7509549966136,37.541470838842], {balloonContent: 'цвет <strong>красный</strong>',
                                iconCaption: 'Moskow Towers 1 башня'}, {preset: 'islands#redDotIconWithCaption'}))
                        }
                        $('#address_coords_x').val('55.7509549966136')
                        $('#address_coords_y').val('37.541470838842')
                        $('#number_of_floors').val('62')
                        $('#number_of_floors_mob').val('62')
                    }
                    break;
                case '2 башня':
                    if ($('#add_tower').val() == "Neva towers") {
                        $('#address').val('Москва, 1-й Красногвардейский проезд, 22с2');
                        myMap.destroy();
                        ymaps.ready(init35)
                        function init35() {
                            myMap = new ymaps.Map("map", {center: [55.75155038678193,37.535323538368225], zoom: 14}, {searchControlProvider: 'yandex#search'});
                            myMap.geoObjects.add(new ymaps.Placemark([55.75155038678193,37.535323538368225], {balloonContent: 'цвет <strong>красный</strong>',
                                iconCaption: 'Neva towers 2 башня'}, {preset: 'islands#redDotIconWithCaption'}))
                        }
                        $('#address_coords_x').val('55.75155038678193')
                        $('#address_coords_y').val('37.535323538368225')
                        $('#number_of_floors').val('78')
                        $('#number_of_floors_mob').val('78')
                    }
                    if ($('#add_tower').val() == "ОКО") {
                        myMap.destroy();
                        $('#address').val('Москва, 1-й Красногвардейский проезд, 21с2');
                        ymaps.ready(init36)
                        function init36() {
                            myMap = new ymaps.Map("map", {center: [55.749468824741676,37.53420773941805], zoom: 14}, {searchControlProvider: 'yandex#search'});
                            myMap.geoObjects.add(new ymaps.Placemark([55.749468824741676,37.53420773941805], {balloonContent: 'цвет <strong>красный</strong>',
                                iconCaption: 'ОКО 2 башня'}, {preset: 'islands#redDotIconWithCaption'}))
                        }
                        $('#address_coords_x').val('55.749468824741676')
                        $('#address_coords_y').val('37.53420773941805')
                        $('#number_of_floors').val('85')
                        $('#number_of_floors_mob').val('85')
                    }
                    if ($('#add_tower').val() == "IQ квартал") {
                        $('#address').val('Москва, Пресненская набережная, 10с2');
                        myMap.destroy();
                        ymaps.ready(init37)
                        function init37() {
                            myMap = new ymaps.Map("map", {center: [55.74774262545288,37.53452031909619], zoom: 14}, {searchControlProvider: 'yandex#search'});
                            myMap.geoObjects.add(new ymaps.Placemark([55.74774262545288,37.53452031909619], {balloonContent: 'цвет <strong>красный</strong>',
                                iconCaption: 'IQ квартал 2 башня'}, {preset: 'islands#redDotIconWithCaption'}))
                        }
                        $('#address_coords_x').val('55.74774262545288')
                        $('#address_coords_y').val('37.53452031909619')
                        $('#number_of_floors').val('33')
                        $('#number_of_floors_mob').val('33')
                    }
                    if ($('#add_tower').val() == "Moskow Towers") {
                        $('#address').val('Москва, 1-й Красногвардейский проезд, 11');
                        myMap.destroy();
                        ymaps.ready(init44)
                        function init44() {
                            myMap = new ymaps.Map("map", {center: [55.751312002973805,37.54093439703903], zoom: 14}, {searchControlProvider: 'yandex#search'});
                            myMap.geoObjects.add(new ymaps.Placemark([55.751312002973805,37.54093439703903], {balloonContent: 'цвет <strong>красный</strong>',
                                iconCaption: 'Moskow Towers 2 башня'}, {preset: 'islands#redDotIconWithCaption'}))
                        }
                        $('#address_coords_x').val('55.751312002973805')
                        $('#address_coords_y').val('37.54093439703903')
                        $('#number_of_floors').val('62')
                        $('#number_of_floors_mob').val('62')
                    }
                    break;
                case 'ОКО II':
                    if ($('#add_tower').val() == "ОКО") {
                        $('#address').val('Москва, 1-й Красногвардейский проезд, 19');
                        myMap.destroy();
                        ymaps.ready(init38)
                        function init38() {
                            myMap = new ymaps.Map("map", {center: [55.75045516019454,37.53640715081025], zoom: 14}, {searchControlProvider: 'yandex#search'});
                            myMap.geoObjects.add(new ymaps.Placemark([55.75045516019454,37.53640715081025], {balloonContent: 'цвет <strong>красный</strong>',
                                iconCaption: 'ОКО II'}, {preset: 'islands#redDotIconWithCaption'}))
                        }
                        $('#address_coords_x').val('55.75045516019454')
                        $('#address_coords_y').val('37.53640715081025')
                        $('#number_of_floors').val('11')
                        $('#number_of_floors_mob').val('11')
                    }
                    break;
                case 'Москва':
                    if ($('#add_tower').val() == "Город Столиц") {
                        $('#address').val('Москва, 1-й Пресненская набережная, 8с1');
                        myMap.destroy();
                        ymaps.ready(init39)
                        function init39() {
                            myMap = new ymaps.Map("map", {center: [55.74773052248407,37.539112260929684], zoom: 14}, {searchControlProvider: 'yandex#search'});
                            myMap.geoObjects.add(new ymaps.Placemark([55.74773052248407,37.539112260929684], {balloonContent: 'цвет <strong>красный</strong>',
                                iconCaption: 'Город Столиц Москва'}, {preset: 'islands#redDotIconWithCaption'}))
                        }
                        $('#address_coords_x').val('55.74773052248407')
                        $('#address_coords_y').val('37.539112260929684')
                        $('#number_of_floors').val('76')
                        $('#number_of_floors_mob').val('76')
                    }
                    break;
                case 'Санкт-Петербург':
                    if ($('#add_tower').val() == "Город Столиц") {
                        $('#address').val('Москва, 1-й Пресненская набережная, 8с1');
                        myMap.destroy();
                        ymaps.ready(init39)
                        function init39() {
                            myMap = new ymaps.Map("map", {center: [55.747246400639916,37.53865092097911], zoom: 14}, {searchControlProvider: 'yandex#search'});
                            myMap.geoObjects.add(new ymaps.Placemark([55.747246400639916,37.53865092097911], {balloonContent: 'цвет <strong>красный</strong>',
                                iconCaption: 'Город Столиц Санкт-Петербург'}, {preset: 'islands#redDotIconWithCaption'}))
                        }
                        $('#address_coords_x').val('55.747246400639916')
                        $('#address_coords_y').val('37.53865092097911')
                        $('#number_of_floors').val('65')
                        $('#number_of_floors_mob').val('65')
                    }
                    break;
                case '3 башня':
                    if ($('#add_tower').val() == "IQ квартал") {
                        $('#address').val('Москва, Пресненская набережная, 10с2');
                        myMap.destroy();
                        ymaps.ready(init40)
                        function init40() {
                            myMap = new ymaps.Map("map", {center: [55.74774262545288,37.53452031909619], zoom: 14}, {searchControlProvider: 'yandex#search'});
                            myMap.geoObjects.add(new ymaps.Placemark([55.74774262545288,37.53452031909619], {balloonContent: 'цвет <strong>красный</strong>',
                                iconCaption: 'IQ квартал 3 башня'}, {preset: 'islands#redDotIconWithCaption'}))
                        }
                        $('#address_coords_x').val('55.74774262545288')
                        $('#address_coords_y').val('37.53452031909619')
                        $('#number_of_floors').val('42')
                        $('#number_of_floors_mob').val('42')
                    }
                    break;
                case 'А блок':
                    if ($('#add_tower').val() == "Башни на набережной") {
                        $('#address').val('Москва, Пресненская набережная, 10блокА');
                        myMap.destroy();
                        ymaps.ready(init41)
                        function init41() {
                            myMap = new ymaps.Map("map", {center: [55.74667754976414,37.537524393192854], zoom: 14}, {searchControlProvider: 'yandex#search'});
                            myMap.geoObjects.add(new ymaps.Placemark([55.74667754976414,37.537524393192854], {balloonContent: 'цвет <strong>красный</strong>',
                                iconCaption: 'Башни на набережной А блок'}, {preset: 'islands#redDotIconWithCaption'}))
                        }
                        $('#address_coords_x').val('55.74667754976414')
                        $('#address_coords_y').val('37.537524393192854')
                        $('#number_of_floors').val('17')
                        $('#number_of_floors_mob').val('17')
                    }
                    break;
                case 'В блок':
                    if ($('#add_tower').val() == "Башни на набережной") {
                        $('#address').val('Москва, Пресненская набережная, 10блокВ');
                        myMap.destroy();
                        ymaps.ready(init42)
                        function init42() {
                            myMap = new ymaps.Map("map", {center: [55.74638706950865,37.53644078075084], zoom: 14}, {searchControlProvider: 'yandex#search'});
                            myMap.geoObjects.add(new ymaps.Placemark([55.74638706950865,37.53644078075084], {balloonContent: 'цвет <strong>красный</strong>',
                                iconCaption: 'Башни на набережной В блок'}, {preset: 'islands#redDotIconWithCaption'}))
                        }
                        $('#address_coords_x').val('55.74638706950865')
                        $('#address_coords_y').val('37.53644078075084')
                        $('#number_of_floors').val('27')
                        $('#number_of_floors_mob').val('27')
                    }
                    break;
                case 'С блок':
                    if ($('#add_tower').val() == "Башни на набережной") {
                        $('#address').val('Москва, Пресненская набережная, 10блокС');
                        myMap.destroy();
                        ymaps.ready(init42)
                        function init42() {
                            myMap = new ymaps.Map("map", {center: [55.74702854384183,37.536816290012936], zoom: 14}, {searchControlProvider: 'yandex#search'});
                            myMap.geoObjects.add(new ymaps.Placemark([55.74702854384183,37.536816290012936], {balloonContent: 'цвет <strong>красный</strong>',
                                iconCaption: 'Башни на набережной С блок'}, {preset: 'islands#redDotIconWithCaption'}))
                        }
                        $('#address_coords_x').val('55.74702854384183')
                        $('#address_coords_y').val('37.536816290012936')
                        $('#number_of_floors').val('59')
                        $('#number_of_floors_mob').val('59')
                    }
                    break;
                case 'Time':
                    if ($('#add_tower').val() == "iCity") {
                        $('#address').val('Москва, Шмитовский проезд, 37');
                        myMap.destroy();
                        ymaps.ready(init45)
                        function init45() {
                            myMap = new ymaps.Map("map", {center: [55.75458814089205,37.530654960216374], zoom: 14}, {searchControlProvider: 'yandex#search'});
                            myMap.geoObjects.add(new ymaps.Placemark([55.75458814089205,37.530654960216374], {balloonContent: 'цвет <strong>красный</strong>',
                                iconCaption: 'iCity Time'}, {preset: 'islands#redDotIconWithCaption'}))
                        }
                        $('#address_coords_x').val('55.75458814089205')
                        $('#address_coords_y').val('37.530654960216374')
                        $('#number_of_floors').val('34')
                        $('#number_of_floors_mob').val('34')
                    }
                    break;
                case 'Space':
                    if ($('#add_tower').val() == "iCity") {
                        $('#address').val('Москва, Шмитовский проезд, 37');
                        myMap.destroy();
                        ymaps.ready(init46)
                        function init46() {
                            myMap = new ymaps.Map("map", {center: [55.75522947980942,37.53006487423309], zoom: 14}, {searchControlProvider: 'yandex#search'});
                            myMap.geoObjects.add(new ymaps.Placemark([55.75522947980942,37.53006487423309], {balloonContent: 'цвет <strong>красный</strong>',
                                iconCaption: 'iCity Space'}, {preset: 'islands#redDotIconWithCaption'}))
                        }
                        $('#address_coords_x').val('55.75522947980942')
                        $('#address_coords_y').val('37.53006487423309')
                        $('#number_of_floors').val('61')
                        $('#number_of_floors_mob').val('61')
                    }
                    break;
                case 'park tower':
                    if ($('#add_tower').val() == "Capital Towers") {
                        $('#address').val('Москва, Краснопресненская набережная, вл14с1кВ');
                        myMap.destroy();
                        ymaps.ready(init47)
                        function init47() {
                            myMap = new ymaps.Map("map", {center: [55.75206496068768,37.54835865703677], zoom: 14}, {searchControlProvider: 'yandex#search'});
                            myMap.geoObjects.add(new ymaps.Placemark([55.75206496068768,37.54835865703677], {balloonContent: 'цвет <strong>красный</strong>',
                                iconCaption: 'One tower park tower'}, {preset: 'islands#redDotIconWithCaption'}))
                        }
                        $('#address_coords_x').val('55.75206496068768')
                        $('#address_coords_y').val('37.54835865703677')
                        $('#number_of_floors').val('61')
                        $('#number_of_floors_mob').val('61')
                    }
                    break;
                case 'city tower':
                    if ($('#add_tower').val() == "Capital Towers") {
                        $('#address').val('Москва, Краснопресненская набережная, вл14с1кБ');
                        myMap.destroy();
                        ymaps.ready(init48)
                        function init48() {
                            myMap = new ymaps.Map("map", {center: [55.751396340410615,37.54860542026614], zoom: 14}, {searchControlProvider: 'yandex#search'});
                            myMap.geoObjects.add(new ymaps.Placemark([55.751396340410615,37.54860542026614], {balloonContent: 'цвет <strong>красный</strong>',
                                iconCaption: 'One tower city tower'}, {preset: 'islands#redDotIconWithCaption'}))
                        }
                        $('#address_coords_x').val('55.751396340410615')
                        $('#address_coords_y').val('37.54860542026614')
                        $('#number_of_floors').val('61')
                        $('#number_of_floors_mob').val('61')
                    }
                    break;
                case 'river tower':
                    if ($('#add_tower').val() == "Capital Towers") {
                        $('#address').val('Москва, Краснопресненская набережная, вл14с1кА');
                        myMap.destroy();
                        ymaps.ready(init49)
                        function init49() {
                            myMap = new ymaps.Map("map", {center: [55.75105752034647,37.549670228330264], zoom: 14}, {searchControlProvider: 'yandex#search'});
                            myMap.geoObjects.add(new ymaps.Placemark([55.75105752034647,37.549670228330264], {balloonContent: 'цвет <strong>красный</strong>',
                                iconCaption: 'One tower river tower'}, {preset: 'islands#redDotIconWithCaption'}))
                        }
                        $('#address_coords_x').val('55.75105752034647')
                        $('#address_coords_y').val('37.549670228330264')
                        $('#number_of_floors').val('61')
                        $('#number_of_floors_mob').val('61')
                    }
                    break;
                case '1 корпус':
                    if ($('#add_tower').val() == "ЖК city park") {
                        $('#address').val('Москва, Мантулинская, 9 к1');
                        myMap.destroy();
                        ymaps.ready(init50)
                        function init50() {
                            myMap = new ymaps.Map("map", {center: [55.754714, 37.546255], zoom: 14}, {searchControlProvider: 'yandex#search'});
                            myMap.geoObjects.add(new ymaps.Placemark([55.754714, 37.546255], {balloonContent: 'цвет <strong>красный</strong>',
                                iconCaption: 'ЖК city park 1 корпус'}, {preset: 'islands#redDotIconWithCaption'}))
                        }
                        $('#address_coords_x').val('55.754714')
                        $('#address_coords_y').val('37.546255')
                        $('#number_of_floors').val('20')
                        $('#number_of_floors_mob').val('20')
                    }
                    break;
                case '2 корпус':
                    if ($('#add_tower').val() == "ЖК city park") {
                        $('#address').val('Москва, Мантулинская, 9 к2');
                        myMap.destroy();
                        ymaps.ready(init51)
                        function init51() {
                            myMap = new ymaps.Map("map", {center: [55.755576, 37.544881], zoom: 14}, {searchControlProvider: 'yandex#search'});
                            myMap.geoObjects.add(new ymaps.Placemark([55.755576, 37.544881], {balloonContent: 'цвет <strong>красный</strong>',
                                iconCaption: 'ЖК city park 2 корпус'}, {preset: 'islands#redDotIconWithCaption'}))
                        }
                        $('#address_coords_x').val('55.755576')
                        $('#address_coords_y').val('37.544881')
                        $('#number_of_floors').val('20')
                        $('#number_of_floors_mob').val('20')
                    }
                    break;
                case '3 корпус':
                    if ($('#add_tower').val() == "ЖК city park") {
                        $('#address').val('Москва, Мантулинская, 9 к3');
                        myMap.destroy();
                        ymaps.ready(init52)
                        function init52() {
                            myMap = new ymaps.Map("map", {center: [55.754284, 37.544773], zoom: 14}, {searchControlProvider: 'yandex#search'});
                            myMap.geoObjects.add(new ymaps.Placemark([55.754284, 37.544773], {balloonContent: 'цвет <strong>красный</strong>',
                                iconCaption: 'ЖК city park 3 корпус'}, {preset: 'islands#redDotIconWithCaption'}))
                        }
                        $('#address_coords_x').val('55.754284')
                        $('#address_coords_y').val('37.544773')
                        $('#number_of_floors').val('20')
                        $('#number_of_floors_mob').val('20')
                    }
                    break;
                case '4 корпус':
                    if ($('#add_tower').val() == "ЖК city park") {
                        $('#address').val('Москва, Мантулинская, 9 к4');
                        myMap.destroy();
                        ymaps.ready(init53)
                        function init53() {
                            myMap = new ymaps.Map("map", {center: [55.755186, 37.543443], zoom: 14}, {searchControlProvider: 'yandex#search'});
                            myMap.geoObjects.add(new ymaps.Placemark([55.755186, 37.543443], {balloonContent: 'цвет <strong>красный</strong>',
                                iconCaption: 'ЖК city park 4 корпус'}, {preset: 'islands#redDotIconWithCaption'}))
                        }
                        $('#address_coords_x').val('55.755186')
                        $('#address_coords_y').val('37.543443')
                        $('#number_of_floors').val('20')
                        $('#number_of_floors_mob').val('20')
                    }
                    break;
                case '5 корпус':
                    if ($('#add_tower').val() == "ЖК city park") {
                        $('#address').val('Москва, Мантулинская, 9 к5');
                        myMap.destroy();
                        ymaps.ready(init54)
                        function init54() {
                            myMap = new ymaps.Map("map", {center: [55.754031, 37.543138], zoom: 14}, {searchControlProvider: 'yandex#search'});
                            myMap.geoObjects.add(new ymaps.Placemark([55.754031, 37.543138], {balloonContent: 'цвет <strong>красный</strong>',
                                iconCaption: 'ЖК city park 5 корпус'}, {preset: 'islands#redDotIconWithCaption'}))
                        }
                        $('#address_coords_x').val('55.754031')
                        $('#address_coords_y').val('37.543138')
                        $('#number_of_floors').val('20')
                        $('#number_of_floors_mob').val('20')
                    }
                    break;
                case '6 корпус':
                    if ($('#add_tower').val() == "ЖК city park") {
                        $('#address').val('Москва, Мантулинская, 9 к6');
                        myMap.destroy();
                        ymaps.ready(init55)
                        function init55() {
                            myMap = new ymaps.Map("map", {center: [55.754750, 37.541889], zoom: 14}, {searchControlProvider: 'yandex#search'});
                            myMap.geoObjects.add(new ymaps.Placemark([55.754750, 37.541889], {balloonContent: 'цвет <strong>красный</strong>',
                                iconCaption: 'ЖК city park 6 корпус'}, {preset: 'islands#redDotIconWithCaption'}))
                        }
                        $('#address_coords_x').val('55.754750')
                        $('#address_coords_y').val('37.541889')
                        $('#number_of_floors').val('20')
                        $('#number_of_floors_mob').val('20')
                    }
                    break;
                case 'Мукомольный проезд, 2':
                    $('#address').val('Москва, Мукомольный проезд, 2');
                    myMap.destroy();
                    ymaps.ready(init56)
                    function init56() {
                        myMap = new ymaps.Map("map", {center: [55.751330, 37.526896], zoom: 14}, {searchControlProvider: 'yandex#search'});
                        myMap.geoObjects.add(new ymaps.Placemark([55.751330, 37.526896], {balloonContent: 'цвет <strong>красный</strong>',
                            iconCaption: 'ЖК Headliner'}, {preset: 'islands#redDotIconWithCaption'}))
                    }
                    $('#address_coords_x').val('55.751330')
                    $('#address_coords_y').val('37.526896')
                    $('#number_of_floors').val('48')
                    $('#number_of_floors_mob').val('48')
                    break;
                case 'Шмитовский проезд, 39 к1':
                    $('#address').val('Москва, Шмитовский проезд, 39 к1');
                    myMap.destroy();
                    ymaps.ready(init57)
                    function init57() {
                        myMap = new ymaps.Map("map", {center: [55.754618, 37.524067], zoom: 14}, {searchControlProvider: 'yandex#search'});
                        myMap.geoObjects.add(new ymaps.Placemark([55.754618, 37.524067], {balloonContent: 'цвет <strong>красный</strong>',
                            iconCaption: 'ЖК Headliner'}, {preset: 'islands#redDotIconWithCaption'}))
                    }
                    $('#address_coords_x').val('55.754618')
                    $('#address_coords_y').val('37.524067')
                    $('#number_of_floors').val('54')
                    $('#number_of_floors_mob').val('54')
                    break;
                case 'Шмитовский проезд, 39 к2':
                    $('#address').val('Москва, Шмитовский проезд, 39 к2');
                    myMap.destroy();
                    ymaps.ready(init58)
                    function init58() {
                        myMap = new ymaps.Map("map", {center: [55.754618, 37.524067], zoom: 14}, {searchControlProvider: 'yandex#search'});
                        myMap.geoObjects.add(new ymaps.Placemark([55.754618, 37.524067], {balloonContent: 'цвет <strong>красный</strong>',
                            iconCaption: 'ЖК Headliner'}, {preset: 'islands#redDotIconWithCaption'}))
                    }
                    $('#address_coords_x').val('55.754618')
                    $('#address_coords_y').val('37.524067')
                    $('#number_of_floors').val('32')
                    $('#number_of_floors_mob').val('32')
                    break;
                case 'Шмитовский проезд, 39 к3':
                    $('#address').val('Москва, Шмитовский проезд, 39 к3');
                    myMap.destroy();
                    ymaps.ready(init59)
                    function init59() {
                        myMap = new ymaps.Map("map", {center: [55.752941, 37.524354], zoom: 14}, {searchControlProvider: 'yandex#search'});
                        myMap.geoObjects.add(new ymaps.Placemark([55.752941, 37.524354], {balloonContent: 'цвет <strong>красный</strong>',
                            iconCaption: 'ЖК Headliner'}, {preset: 'islands#redDotIconWithCaption'}))
                    }
                    $('#address_coords_x').val('55.752941')
                    $('#address_coords_y').val('37.524354')
                    $('#number_of_floors').val('11')
                    $('#number_of_floors_mob').val('11')
                    break;
                case 'Шмитовский проезд, вл39 к4':
                    $('#address').val('Москва, Шмитовский проезд, вл39 к4');
                    myMap.destroy();
                    ymaps.ready(init60)
                    function init60() {
                        myMap = new ymaps.Map("map", {center: [55.753534, 37.523779], zoom: 14}, {searchControlProvider: 'yandex#search'});
                        myMap.geoObjects.add(new ymaps.Placemark([55.753534, 37.523779], {balloonContent: 'цвет <strong>красный</strong>',
                            iconCaption: 'ЖК Headliner'}, {preset: 'islands#redDotIconWithCaption'}))
                    }
                    $('#address_coords_x').val('55.753534')
                    $('#address_coords_y').val('37.523779')
                    $('#number_of_floors').val('53')
                    $('#number_of_floors_mob').val('53')
                    break;
                case 'Шмитовский проезд, вл39 к5':
                    $('#address').val('Москва, Шмитовский проезд, вл39 к5');
                    myMap.destroy();
                    ymaps.ready(init61)
                    function init61() {
                        myMap = new ymaps.Map("map", {center: [55.754005, 37.524112], zoom: 14}, {searchControlProvider: 'yandex#search'});
                        myMap.geoObjects.add(new ymaps.Placemark([55.754005, 37.524112], {balloonContent: 'цвет <strong>красный</strong>',
                            iconCaption: 'ЖК Headliner'}, {preset: 'islands#redDotIconWithCaption'}))
                    }
                    $('#address_coords_x').val('55.754005')
                    $('#address_coords_y').val('37.524112')
                    $('#number_of_floors').val('43')
                    $('#number_of_floors_mob').val('43')
                    break;
                case 'Шмитовский проезд, вл39 к6':
                    $('#address').val('Москва, Шмитовский проезд, вл39 к6');
                    myMap.destroy();
                    ymaps.ready(init62)
                    function init62() {
                        myMap = new ymaps.Map("map", {center: [55.751665, 37.526295], zoom: 14}, {searchControlProvider: 'yandex#search'});
                        myMap.geoObjects.add(new ymaps.Placemark([55.751665, 37.526295], {balloonContent: 'цвет <strong>красный</strong>',
                            iconCaption: 'ЖК Headliner'}, {preset: 'islands#redDotIconWithCaption'}))
                    }
                    $('#address_coords_x').val('55.751665')
                    $('#address_coords_y').val('37.526295')
                    $('#number_of_floors').val('43')
                    $('#number_of_floors_mob').val('43')
                    break;
                case 'Шмитовский проезд, вл39 к7':
                    $('#address').val('Москва, Шмитовский проезд, вл39 к7');
                    myMap.destroy();
                    ymaps.ready(init63)
                    function init63() {
                        myMap = new ymaps.Map("map", {center: [55.751665, 37.526295], zoom: 14}, {searchControlProvider: 'yandex#search'});
                        myMap.geoObjects.add(new ymaps.Placemark([55.751665, 37.526295], {balloonContent: 'цвет <strong>красный</strong>',
                            iconCaption: 'ЖК Headliner'}, {preset: 'islands#redDotIconWithCaption'}))
                    }
                    $('#address_coords_x').val('55.751665')
                    $('#address_coords_y').val('37.526295')
                    $('#number_of_floors').val('15')
                    $('#number_of_floors_mob').val('15')
                    break;
                case 'Шмитовский проезд, 39 к8':
                    $('#address').val('Москва, Шмитовский проезд, 39 к8');
                    myMap.destroy();
                    ymaps.ready(init64)
                    function init64() {
                        myMap = new ymaps.Map("map", {center: [55.751665, 37.526295], zoom: 14}, {searchControlProvider: 'yandex#search'});
                        myMap.geoObjects.add(new ymaps.Placemark([55.751665, 37.526295], {balloonContent: 'цвет <strong>красный</strong>',
                            iconCaption: 'ЖК Headliner'}, {preset: 'islands#redDotIconWithCaption'}))
                    }
                    $('#address_coords_x').val('55.751665')
                    $('#address_coords_y').val('37.526295')
                    $('#number_of_floors').val('51')
                    $('#number_of_floors_mob').val('51')
                    break;
                case 'Шмитовский проезд, вл40':
                    $('#address').val('Москва, Шмитовский проезд, вл40');
                    myMap.destroy();
                    ymaps.ready(init65)
                    function init65() {
                        myMap = new ymaps.Map("map", {center: [55.756356, 37.520905], zoom: 14}, {searchControlProvider: 'yandex#search'});
                        myMap.geoObjects.add(new ymaps.Placemark([55.756356, 37.520905], {balloonContent: 'цвет <strong>красный</strong>',
                            iconCaption: 'ЖК Headliner'}, {preset: 'islands#redDotIconWithCaption'}))
                    }
                    $('#address_coords_x').val('55.756356')
                    $('#address_coords_y').val('37.520905')
                    $('#number_of_floors').val('36')
                    $('#number_of_floors_mob').val('36')
                    break;
                case 'Набережная Тараса Шевченко, 12 стр':
                    $('#address').val('Москва, Набережная Тараса Шевченко, 12 стр');
                    myMap.destroy();
                    ymaps.ready(init66)
                    function init66() {
                        myMap = new ymaps.Map("map", {center: [55.752344, 37.561014], zoom: 14}, {searchControlProvider: 'yandex#search'});
                        myMap.geoObjects.add(new ymaps.Placemark([55.752344, 37.561014], {balloonContent: 'цвет <strong>красный</strong>',
                            iconCaption: 'ЖК Бадаевский'}, {preset: 'islands#redDotIconWithCaption'}))
                    }
                    $('#address_coords_x').val('55.752344')
                    $('#address_coords_y').val('37.561014')
                    break;
                case 'Черногрязская 2-я, 6к1':
                    $('#address').val('Москва, Черногрязская 2-я, 6к1');
                    myMap.destroy();
                    ymaps.ready(init67)
                    function init67() {
                        myMap = new ymaps.Map("map", {center: [55.761249, 37.547153], zoom: 14}, {searchControlProvider: 'yandex#search'});
                        myMap.geoObjects.add(new ymaps.Placemark([55.761249, 37.547153], {balloonContent: 'цвет <strong>красный</strong>',
                            iconCaption: 'ЖК Redside'}, {preset: 'islands#redDotIconWithCaption'}))
                    }
                    $('#address_coords_x').val('55.761249')
                    $('#address_coords_y').val('37.547153')
                    $('#number_of_floors').val('10')
                    $('#number_of_floors_mob').val('10')
                    break;
                case 'Черногрязская 2-я, 6к2':
                    $('#address').val('Москва, Черногрязская 2-я, 6к2');
                    myMap.destroy();
                    ymaps.ready(init68)
                    function init68() {
                        myMap = new ymaps.Map("map", {center: [55.762181, 37.547540], zoom: 14}, {searchControlProvider: 'yandex#search'});
                        myMap.geoObjects.add(new ymaps.Placemark([55.762181, 37.547540], {balloonContent: 'цвет <strong>красный</strong>',
                            iconCaption: 'ЖК Redside'}, {preset: 'islands#redDotIconWithCaption'}))
                    }
                    $('#address_coords_x').val('55.762181')
                    $('#address_coords_y').val('37.547540')
                    $('#number_of_floors').val('13')
                    $('#number_of_floors_mob').val('13')
                    break;
                case 'Черногрязская 2-я, 6к3':
                    $('#address').val('Москва, Черногрязская 2-я, 6к3');
                    myMap.destroy();
                    ymaps.ready(init69)
                    function init69() {
                        myMap = new ymaps.Map("map", {center: [55.762247, 37.549040], zoom: 14}, {searchControlProvider: 'yandex#search'});
                        myMap.geoObjects.add(new ymaps.Placemark([55.762247, 37.549040], {balloonContent: 'цвет <strong>красный</strong>',
                            iconCaption: 'ЖК Redside'}, {preset: 'islands#redDotIconWithCaption'}))
                    }
                    $('#address_coords_x').val('55.762181')
                    $('#address_coords_y').val('37.547540')
                    $('#number_of_floors').val('20')
                    $('#number_of_floors_mob').val('20')
                    break;
                case 'Черногрязская 2-я, 6к4':
                    $('#address').val('Москва, Черногрязская 2-я, 6к4');
                    myMap.destroy();
                    ymaps.ready(init70)
                    function init70() {
                        myMap = new ymaps.Map("map", {center: [55.761634, 37.548160], zoom: 14}, {searchControlProvider: 'yandex#search'});
                        myMap.geoObjects.add(new ymaps.Placemark([55.761634, 37.548160], {balloonContent: 'цвет <strong>красный</strong>',
                            iconCaption: 'ЖК Redside'}, {preset: 'islands#redDotIconWithCaption'}))
                    }
                    $('#address_coords_x').val('55.761634')
                    $('#address_coords_y').val('37.548160')
                    $('#number_of_floors').val('21')
                    $('#number_of_floors_mob').val('21')
                    break;
                case 'Черногрязская 2-я, 9к1':
                    $('#address').val('Москва, Черногрязская 2-я, 9к1');
                    myMap.destroy();
                    ymaps.ready(init71)
                    function init71() {
                        myMap = new ymaps.Map("map", {center: [55.763949, 37.546938], zoom: 14}, {searchControlProvider: 'yandex#search'});
                        myMap.geoObjects.add(new ymaps.Placemark([55.763949, 37.546938], {balloonContent: 'цвет <strong>красный</strong>',
                            iconCaption: 'ЖК Redside'}, {preset: 'islands#redDotIconWithCaption'}))
                    }
                    $('#address_coords_x').val('55.763949')
                    $('#address_coords_y').val('37.546938')
                    $('#number_of_floors').val('13')
                    $('#number_of_floors_mob').val('13')
                    break;
                case 'Черногрязская 2-я, 9к2':
                    $('#address').val('Москва, Черногрязская 2-я, 9к2');
                    myMap.destroy();
                    ymaps.ready(init72)
                    function init72() {
                        myMap = new ymaps.Map("map", {center: [55.763949, 37.546938], zoom: 14}, {searchControlProvider: 'yandex#search'});
                        myMap.geoObjects.add(new ymaps.Placemark([55.763949, 37.546938], {balloonContent: 'цвет <strong>красный</strong>',
                            iconCaption: 'ЖК Redside'}, {preset: 'islands#redDotIconWithCaption'}))
                    }
                    $('#address_coords_x').val('55.763949')
                    $('#address_coords_y').val('37.546938')
                    $('#number_of_floors').val('17')
                    $('#number_of_floors_mob').val('17')
                    break;
                case 'Черногрязская 2-я, 9к3':
                    $('#address').val('Москва, Черногрязская 2-я, 9к3');
                    myMap.destroy();
                    ymaps.ready(init73)
                    function init73() {
                        myMap = new ymaps.Map("map", {center: [55.761634, 37.548160], zoom: 14}, {searchControlProvider: 'yandex#search'});
                        myMap.geoObjects.add(new ymaps.Placemark([55.761634, 37.548160], {balloonContent: 'цвет <strong>красный</strong>',
                            iconCaption: 'ЖК Redside'}, {preset: 'islands#redDotIconWithCaption'}))
                    }
                    $('#address_coords_x').val('55.761634')
                    $('#address_coords_y').val('37.548160')
                    $('#number_of_floors').val('17')
                    $('#number_of_floors_mob').val('17')
                    break;
                case 'Черногрязская 2-я, 9к4':
                    $('#address').val('Москва, Черногрязская 2-я, 9к4');
                    myMap.destroy();
                    ymaps.ready(init74)
                    function init74() {
                        myMap = new ymaps.Map("map", {center: [55.761634, 37.548160], zoom: 14}, {searchControlProvider: 'yandex#search'});
                        myMap.geoObjects.add(new ymaps.Placemark([55.761634, 37.548160], {balloonContent: 'цвет <strong>красный</strong>',
                            iconCaption: 'ЖК Redside'}, {preset: 'islands#redDotIconWithCaption'}))
                    }
                    $('#address_coords_x').val('55.761634')
                    $('#address_coords_y').val('37.548160')
                    $('#number_of_floors').val('21')
                    $('#number_of_floors_mob').val('21')
                    break;
                case 'Черногрязская 2-я, 9к5':
                    $('#address').val('Москва, Черногрязская 2-я, 9к5');
                    myMap.destroy();
                    ymaps.ready(init75)
                    function init75() {
                        myMap = new ymaps.Map("map", {center: [55.761634, 37.548160], zoom: 14}, {searchControlProvider: 'yandex#search'});
                        myMap.geoObjects.add(new ymaps.Placemark([55.761634, 37.548160], {balloonContent: 'цвет <strong>красный</strong>',
                            iconCaption: 'ЖК Redside'}, {preset: 'islands#redDotIconWithCaption'}))
                    }
                    $('#address_coords_x').val('55.761634')
                    $('#address_coords_y').val('37.548160')
                    $('#number_of_floors').val('2')
                    $('#number_of_floors_mob').val('2')
                    break;
                case 'Братьев Фонченко, 3к1':
                    $('#address').val('Москва, Братьев Фонченко, 3к1');
                    myMap.destroy();
                    ymaps.ready(init76)
                    function init76() {
                        myMap = new ymaps.Map("map", {center: [55.731987, 37.514985], zoom: 14}, {searchControlProvider: 'yandex#search'});
                        myMap.geoObjects.add(new ymaps.Placemark([55.731987, 37.514985], {balloonContent: 'цвет <strong>красный</strong>',
                            iconCaption: 'ЖК Victory park Residences'}, {preset: 'islands#redDotIconWithCaption'}))
                    }
                    $('#address_coords_x').val('55.731987')
                    $('#address_coords_y').val('37.514985')
                    $('#number_of_floors').val('11')
                    $('#number_of_floors_mob').val('11')
                    break;
                case 'Братьев Фонченко, 3к2':
                    $('#address').val('Москва, Братьев Фонченко, 3к2');
                    myMap.destroy();
                    ymaps.ready(init77)
                    function init77() {
                        myMap = new ymaps.Map("map", {center: [55.732134, 37.515793], zoom: 14}, {searchControlProvider: 'yandex#search'});
                        myMap.geoObjects.add(new ymaps.Placemark([55.732134, 37.515793], {balloonContent: 'цвет <strong>красный</strong>',
                            iconCaption: 'ЖК Victory park Residences'}, {preset: 'islands#redDotIconWithCaption'}))
                    }
                    $('#address_coords_x').val('55.732134')
                    $('#address_coords_y').val('37.515793')
                    $('#number_of_floors').val('11')
                    $('#number_of_floors_mob').val('11')
                    break;
                case 'Братьев Фонченко, 3к3':
                    $('#address').val('Москва, Братьев Фонченко, 3к3');
                    myMap.destroy();
                    ymaps.ready(init78)
                    function init78() {
                        myMap = new ymaps.Map("map", {center: [55.732306, 37.516530], zoom: 14}, {searchControlProvider: 'yandex#search'});
                        myMap.geoObjects.add(new ymaps.Placemark([55.732306, 37.516530], {balloonContent: 'цвет <strong>красный</strong>',
                            iconCaption: 'ЖК Victory park Residences'}, {preset: 'islands#redDotIconWithCaption'}))
                    }
                    $('#address_coords_x').val('55.732306')
                    $('#address_coords_y').val('37.516530')
                    $('#number_of_floors').val('11')
                    $('#number_of_floors_mob').val('11')
                    break;
                case 'Братьев Фонченко, 3к4':
                    $('#address').val('Москва, Братьев Фонченко, 3к4');
                    myMap.destroy();
                    ymaps.ready(init79)
                    function init79() {
                        myMap = new ymaps.Map("map", {center: [55.732535, 37.517311], zoom: 14}, {searchControlProvider: 'yandex#search'});
                        myMap.geoObjects.add(new ymaps.Placemark([55.732535, 37.517311], {balloonContent: 'цвет <strong>красный</strong>',
                            iconCaption: 'ЖК Victory park Residences'}, {preset: 'islands#redDotIconWithCaption'}))
                    }
                    $('#address_coords_x').val('55.732535')
                    $('#address_coords_y').val('37.517311')
                    $('#number_of_floors').val('11')
                    $('#number_of_floors_mob').val('11')
                    break;
                case 'Братьев Фонченко, 3к5':
                    $('#address').val('Москва, Братьев Фонченко, 3к5');
                    myMap.destroy();
                    ymaps.ready(init80)
                    function init80() {
                        myMap = new ymaps.Map("map", {center: [55.732692, 37.518048], zoom: 14}, {searchControlProvider: 'yandex#search'});
                        myMap.geoObjects.add(new ymaps.Placemark([55.732692, 37.518048], {balloonContent: 'цвет <strong>красный</strong>',
                            iconCaption: 'ЖК Victory park Residences'}, {preset: 'islands#redDotIconWithCaption'}))
                    }
                    $('#address_coords_x').val('55.732692')
                    $('#address_coords_y').val('37.518048')
                    $('#number_of_floors').val('11')
                    $('#number_of_floors_mob').val('11')
                    break;
                case 'Братьев Фонченко, 3к6':
                    $('#address').val('Москва, Братьев Фонченко, 3к6');
                    myMap.destroy();
                    ymaps.ready(init81)
                    function init81() {
                        myMap = new ymaps.Map("map", {center: [55.732068, 37.518344], zoom: 14}, {searchControlProvider: 'yandex#search'});
                        myMap.geoObjects.add(new ymaps.Placemark([55.732068, 37.518344], {balloonContent: 'цвет <strong>красный</strong>',
                            iconCaption: 'ЖК Victory park Residences'}, {preset: 'islands#redDotIconWithCaption'}))
                    }
                    $('#address_coords_x').val('55.732068')
                    $('#address_coords_y').val('37.518344')
                    $('#number_of_floors').val('10')
                    $('#number_of_floors_mob').val('10')
                    break;
                case 'Братьев Фонченко, 3к7':
                    $('#address').val('Москва, Братьев Фонченко, 3к7');
                    myMap.destroy();
                    ymaps.ready(init82)
                    function init82() {
                        myMap = new ymaps.Map("map", {center: [55.731734, 37.517347], zoom: 14}, {searchControlProvider: 'yandex#search'});
                        myMap.geoObjects.add(new ymaps.Placemark([55.731734, 37.517347], {balloonContent: 'цвет <strong>красный</strong>',
                            iconCaption: 'ЖК Victory park Residences'}, {preset: 'islands#redDotIconWithCaption'}))
                    }
                    $('#address_coords_x').val('55.731734')
                    $('#address_coords_y').val('37.517347')
                    $('#number_of_floors').val('10')
                    $('#number_of_floors_mob').val('10')
                    break;
                case 'Сетуньский 1-й проезд, вл6-10к1':
                    $('#address').val('Москва, Сетуньский 1-й проезд, вл6-10к1');
                    myMap.destroy();
                    ymaps.ready(init83)
                    function init83() {
                        myMap = new ymaps.Map("map", {center: [55.732220, 37.540209], zoom: 14}, {searchControlProvider: 'yandex#search'});
                        myMap.geoObjects.add(new ymaps.Placemark([55.732220, 37.540209], {balloonContent: 'цвет <strong>красный</strong>',
                            iconCaption: 'ЖК Hide'}, {preset: 'islands#redDotIconWithCaption'}))
                    }
                    $('#address_coords_x').val('55.732220')
                    $('#address_coords_y').val('37.540209')
                    $('#number_of_floors').val('41')
                    $('#number_of_floors_mob').val('41')
                    break;
                case 'Сетуньский 1-й проезд, вл6-10к2':
                    $('#address').val('Москва, Сетуньский 1-й проезд, вл6-10к2');
                    myMap.destroy();
                    ymaps.ready(init84)
                    function init84() {
                        myMap = new ymaps.Map("map", {center: [55.732220, 37.540209], zoom: 14}, {searchControlProvider: 'yandex#search'});
                        myMap.geoObjects.add(new ymaps.Placemark([55.732220, 37.540209], {balloonContent: 'цвет <strong>красный</strong>',
                            iconCaption: 'ЖК Hide'}, {preset: 'islands#redDotIconWithCaption'}))
                    }
                    $('#address_coords_x').val('55.732220')
                    $('#address_coords_y').val('37.540209')
                    $('#number_of_floors').val('41')
                    $('#number_of_floors_mob').val('41')
                    break;
                case 'Сетуньский 1-й проезд, вл6-10к3':
                    $('#address').val('Москва, Сетуньский 1-й проезд, вл6-10к3');
                    myMap.destroy();
                    ymaps.ready(init85)
                    function init85() {
                        myMap = new ymaps.Map("map", {center: [55.732220, 37.540209], zoom: 14}, {searchControlProvider: 'yandex#search'});
                        myMap.geoObjects.add(new ymaps.Placemark([55.732220, 37.540209], {balloonContent: 'цвет <strong>красный</strong>',
                            iconCaption: 'ЖК Hide'}, {preset: 'islands#redDotIconWithCaption'}))
                    }
                    $('#address_coords_x').val('55.732220')
                    $('#address_coords_y').val('37.540209')
                    $('#number_of_floors').val('41')
                    $('#number_of_floors_mob').val('41')
                    break;
                case 'Поклонная 9':
                    $('#address').val('Москва, Поклонная 9');
                    myMap.destroy();
                    ymaps.ready(init83)
                    function init83() {
                        myMap = new ymaps.Map("map", {center: [55.734334, 37.525324], zoom: 14}, {searchControlProvider: 'yandex#search'});
                        myMap.geoObjects.add(new ymaps.Placemark([55.734334, 37.525324], {balloonContent: 'цвет <strong>красный</strong>',
                            iconCaption: 'ЖК Поклонная 9'}, {preset: 'islands#redDotIconWithCaption'}))
                    }
                    $('#address_coords_x').val('55.734334')
                    $('#address_coords_y').val('37.525324')
                    $('#number_of_floors').val('32')
                    $('#number_of_floors_mob').val('32')
                    break;
                case 'Звенигородская 2-я улица, 11':
                    $('#address').val('Москва, Звенигородская 2-я улица, 11');
                    myMap.destroy();
                    ymaps.ready(init84)
                    function init84() {
                        myMap = new ymaps.Map("map", {center: [55.761543, 37.554214], zoom: 14}, {searchControlProvider: 'yandex#search'});
                        myMap.geoObjects.add(new ymaps.Placemark([55.761543, 37.554214], {balloonContent: 'цвет <strong>красный</strong>',
                            iconCaption: 'ЖК Резиденция монэ'}, {preset: 'islands#redDotIconWithCaption'}))
                    }
                    $('#address_coords_x').val('55.761543')
                    $('#address_coords_y').val('37.554214')
                    $('#number_of_floors').val('18')
                    $('#number_of_floors_mob').val('18')
                    break;
            }


    });
 });



$('#add_tower').change( function() {
   $(this).find(":selected").each(function () {
       if ($(this).val() == 'Capital Towers' || $(this).val() == 'ЖК city park' || $(this).val() == 'ЖК Headliner' || $(this).val() == 'ЖК Сosmopolit' ||
            $(this).val() == 'ЖК Бадаевский' || $(this).val() == 'ЖК Redside' || $(this).val() == 'ЖК Victory park Residences' || $(this).val() == 'ЖК Hide'
            || $(this).val() == 'ЖК Поклонная 9' || $(this).val() == 'ЖК Резиденция монэ') {
                $('#type_ned').empty();
                $("#type_ned").append(`<h1 class="text-filter-add-2">Тип недвижимости</h1>
                        <div class="p-2 add-select-admin-2">
                            <div class="p-2 add-type">
                                <input type="radio" class="btn-check button-add-type" name="option" id="option101" value="Квартира" autocomplete="off" onclick="property_type('Квартира')" checked>
                                <label class="btn btn-secondary button-add-type" for="option101">Квартира</label>
                            </div>
                        </div>`)
               property_type_add()
            } else {
                $('#type_ned').empty();
                $("#type_ned").append(`<h1 class="text-filter-add-2">Тип недвижимости</h1>
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
                        </div>`)
            }

    });
 });

function type_oper(num) {
    if (num == 'rent') {
            $('#zaezd_otezd').css("display", "flex");

        $('#add_tower').find(":selected").each(function () {
            if ($(this).val() == 'Capital Towers' || $(this).val() == 'ЖК city park' || $(this).val() == 'ЖК Headliner' || $(this).val() == 'ЖК Сosmopolit' ||
            $(this).val() == 'ЖК Бадаевский' || $(this).val() == 'ЖК Redside' || $(this).val() == 'ЖК Victory park Residences' || $(this).val() == 'ЖК Hide'
            || $(this).val() == 'ЖК Поклонная 9' || $(this).val() == 'ЖК Резиденция монэ') {
                $('#type_ned').empty();
                $("#type_ned").append(`<h1 class="text-filter-add-2">Тип недвижимости</h1>
                        <div class="p-2 add-select-admin-2">
                            <div class="p-2 add-type">
                                <input type="radio" class="btn-check button-add-type" name="option" id="option101" value="Квартира" autocomplete="off" onclick="property_type('Квартира')" checked>
                                <label class="btn btn-secondary button-add-type" for="option101">Квартира</label>
                            </div>
                        </div>`)
            } else {

                $('#type_ned').empty();
                $("#type_ned").append(`<h1 class="text-filter-add-2">Тип недвижимости</h1>
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
                                <input type="text" name="price" id="price" onkeyup="price_add(this.value);" class="form-control input-add-price" placeholder="1 000 000 000 000 ₽" aria-label="price" aria-describedby="addon-wrapping">
                            </div>
                            <div class="p-2 add-price">
                                <h1 class="text-filter-add-4">За м²</h1>
                                <input type="text" name="price_metr" id="price_metr" class="form-control input-add-price" placeholder="1 000 000 000 000 ₽" aria-label="price" aria-describedby="addon-wrapping">
                            </div>`);

        var pricese = IMask(
  document.getElementById('price'),
  {
    mask: Number,
    min: -10000,
    max: 10000000000000,
    thousandsSeparator: ' '
  });

        $('#add_status').empty();
        $("#add_status").append(`<input type="radio" class="btn-check button-add-type-active-2" name="options_status" id="option106_status" autocomplete="off" value="Продается" checked="checked">
                            <label class="btn btn-secondary button-add-type-active-2" for="option106_status" style="width: 180px;">Продается</label>
                            <input type="radio" class="btn-check button-add-type-2" name="options_status" id="option107_status" value="Продано" autocomplete="off">
                            <label class="btn btn-secondary button-add-type-2" for="option107_status" style="width: 180px;">Продано</label>`);
    }
}

function property_type_add() {
    $.ajax(
        {
            type:"GET",
            url: "http://194.67.125.24/objects/add_object/filter_add_object/",
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


var dt = new DataTransfer();

$('.input-file input[name=upload_plan]').on('change', function(){
	let $files_list = $(this).closest('.input-file').next();
	$files_list.empty();

	for(var i = 0; i < this.files.length; i++){
		let file = this.files.item(i);
		dt.items.add(file);

		let reader = new FileReader();
		reader.readAsDataURL(file);
		reader.onloadend = function(){
			let new_file_input = '<div class="input-file-list-item">' +
				'<img class="input-file-list-img" src="' + reader.result + '">' +
				'<span class="input-file-list-name">' + file.name + '</span>' +
				'<a href="#" onclick="removeFilesItem(this); return false;" class="input-file-list-remove">x</a>' +
			'</div>';
			$files_list.append(new_file_input);
		}
	};
	this.files = dt.files;
    $('#file_text_save').html(``)
});

function removeFilesItem(target){
	let name = $(target).prev().text();
	let input = $(target).closest('.input-file-row').find('input[type=file]');
	$(target).closest('.input-file-list-item').remove();
	for(let i = 0; i < dt.items.length; i++){
		if(name === dt.items[i].getAsFile().name){
			dt.items.remove(i);
		}
	}
	input[0].files = dt.files;
    $('#file_text_save').html(`<svg width="81" height="82" viewBox="0 0 81 82" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M20.75 41H60.125" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M40.9414 61.1922V20.8076" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                <rect x="1.25" y="0.5" width="79" height="81" rx="39.5" stroke="#959697"/>
                                </a>
                                </svg><h3 class="text-add-planir">Загрузить планировку</h3>`)
}

var dt2 = new DataTransfer();

$('#input_photo').on('change', function(){
	let $files_list = $(this).closest('.input-file').next();

	for(var i = 0; i < this.files.length; i++){
		let file = this.files.item(i);
		dt2.items.add(file);

		let reader = new FileReader();
		reader.readAsDataURL(file);
		reader.onloadend = function(){
			let new_file_input = '<div class="input-file-list-item_photo">' +
				'<img class="input-file-list-img" src="' + reader.result + '">' +
				'<a href="#" onclick="removeFilesItem_2(this); return false;" class="input-file-list-remove">x</a>' +
			'</div>';
			$files_list.append(new_file_input);
		}
	};
	this.files = dt2.files;
    $('input[name=file]').css('display', 'none')
    $('#inputs').append(`<input type="file" id="input_photo" name="file${$('#input_photo').length+1}" accept="image/*">`)
    $('.input-file-row-img').css('display','flex')
    $('.input-file-row-img').css('flex-direction','row')
    $('#block_add_photo').css('width','250px')
    $('#block_add_photo').html(`<span class="input-photo">Добавить фото</span>`)
    console.log(dt2)
});

function removeFilesItem_2(target){
	let name = $(target).prev().text();
	let input = $(target).closest('.input-file-row-img').find('input[type=file]');
	$(target).closest('.input-file-list-item_photo').remove();
	for(let i = 0; i < dt2.items.length; i++){
		if(name === dt2.items[i].getAsFile().name){
			dt2.items.remove(i);
		}
	}
	input[0].files = dt2.files;
}

$('#price_month').on('input',function(e){
    $('#price_square_month').val(Math.round(Number($('#price_month').val().replace(/\s/g, ""))/$('#total_area').val().replace(/\s/g, "")).toLocaleString())
    $('#price_square_year').val(Math.round(Number($('#price_month').val().replace(/\s/g, "")/$('#total_area').val().replace(/\s/g, "")*12)).toLocaleString())
});

function price_add(num) {
    $('#price_metr').val(Math.round(Number($('#price').val().replace(/\s/g, "")/$('#total_area').val().replace(/\s/g, ""))).toLocaleString())
}

function total(num) {
    if ($('input[name="type-op"]:checked').val() == 'rent') {
        $('#price_square_month').val(Math.round(Number($('#price_month').val().replace(/\s/g, "")/$('#total_area').val().replace(/\s/g, ""))).toLocaleString())
        $('#price_square_year').val(Math.round(Number($('#price_month').val().replace(/\s/g, "")/$('#total_area').val().replace(/\s/g, "")*12)).toLocaleString())
    } else {
        $('#price_metr').val(Math.round(Number($('#price').val().replace(/\s/g, "")/$('#total_area').val().replace(/\s/g, ""))).toLocaleString())
    }
}

var element = document.getElementById('number_phone');
var maskOptions = {
  mask: '+{7}(000)000-00-00'
};
var mask = IMask(element, maskOptions);


var price_month = IMask(
  document.getElementById('price_month'),
  {
    mask: Number,
    min: -10000,
    max: 10000000000000,
    thousandsSeparator: ' '
  });

function delete_obj(num) {
    $.ajax(
    {
        type:"GET",
        url: "http://194.67.125.24/objects/delete_obj/",
        data:{
                 obj_id: num
        },
        success: function( data )
        {
        }
     })
}

function dublicate_no_photo() {
    $('#buttonsi').append('<input type="text" id="no_photo" name="no_photo" value="1" style="display:none;"/>')
}

function dublicate_and_photo() {
    $('#buttonsi').append('<input type="text" id="and_photo" name="and_photo" value="1" style="display:none;"/>')
}

function save() {
    $('#buttonsi').append('<input type="text" id="save" name="save" value="1" style="display:none;"/>')
}

function removeFilesEdit(num) {
    $.ajax(
        {
            type:"GET",
            url: "http://194.67.125.24/objects/delete_photo",
            data: {num : num},
            success: function( data )
            {
                $("#photo-"+num).remove();
            }
        });
}

function add_number(num) {
    $(num).remove()
    $('#list_number').append('<input id="number_phone_2" name="number_phone_2" type="text" class="form-control input-add-tel" placeholder="+7 (_ _ _ ) _ _ _ - _ _ - _ _" aria-label="tower" aria-describedby="addon-wrapping">')

    var element = document.getElementById('number_phone_2');
    var maskOptions = {
        mask: '+{7}(000)000-00-00'
    };
    var mask = IMask(element, maskOptions);

}

