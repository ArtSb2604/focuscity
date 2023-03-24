$('#prop').on('change', function (e) {
    $('#price').html("");
    $('#apart').html("");

    if ($('#prop').val() == 'rent') {
        $('#price').append(`<p class="container-222-block-2-text">Цена</p>
                            <div class="price_choices" style="line-height: 0;">
                                <input type="radio" id="pricemobChoice1" class="radio-custom" name="price-mob-filter" value="1" checked>
                                <label for="pricemobChoice1" style="line-height: 1;">в месяц</label>
                            </div>
                            <div class="price_choices" style="line-height: 0;">
                                <input type="radio" id="pricemobChoice2" class="radio-custom" name="price-mob-filter" value="2">
                                <label for="pricemobChoice2" style="line-height: 1;">м²/месяц </label>
                            </div>
                            <div class="price_choices" style="line-height: 0;">
                                <input type="radio" id="pricemobChoice3" class="radio-custom" name="price-mob-filter" value="3">
                                <label for="pricemobChoice3" style="line-height: 1;">м²/год </label>
                            </div>`)

        $('#apart').append(`<option class="apart-list-1" value="Апартамент" selected>Апартамент</option>
                        <option class="apart-list-1" value="Офис">Офис</option>
                        <option class="apart-list-1" value="Торговая площадь">Торговая площадь</option>
                        <option class="apart-list-1" value="Свободного назначения">Свободного назначения</option>
                        <option class="apart-list-1" value="Паркинг">Паркинг</option>
                        <option class="apart-list-1" value="Коворкинг">Коворкинг</option>`)
    } else {
        $('#price').append(`<p class="container-222-block-2-text">Цена</p>
                            <div class="price_choices" style="line-height: 0;">
                                <input type="radio" id="pricemobChoice1" class="radio-custom" name="price-mob-filter" value="4" checked>
                                <label for="pricemobChoice1" style="line-height: 1;">за всё</label>
                            </div>
                            <div class="price_choices" style="line-height: 0;">
                                <input type="radio" id="pricemobChoice2" class="radio-custom" name="price-mob-filter" value="5">
                                <label for="pricemobChoice2" style="line-height: 1;">за м²</label>
                            </div>`)

        $('#apart').append(`<option class="apart-list-1" value="Апартамент" selected>Апартамент</option>
                        <option class="apart-list-1" value="Офис">Офис</option>
                        <option class="apart-list-1" value="Торговая площадь">Торговая площадь</option>
                        <option class="apart-list-1" value="Свободного назначения">Свободного назначения</option>
                        <option class="apart-list-1" value="Паркинг">Паркинг</option>`)
    }
});


$(document).ready(function () {
    $("form").submit(function (event) {
        var type = $('#prop').val()
        var apart = $('#apart').val()
        var tower = $('#tower').val()
        var price_month_min = ''
        var price_month_max = ''
        var price_square_min = ''
        var price_square_max = ''
        var price_square_year_min = ''
        var price_square_year_max = ''
        var price_min = ''
        var price_max = ''
        var price_metr_min = ''
        var price_metr_max = ''
        var price_var = $('input[name="price-mob-filter"]:checked').val();
        switch (price_var) {
            case '1':
                price_month_min += $('#price_min').val()
                price_month_max += $('#price_max').val()
                price_square_min += '0'
                price_square_max += '10000000000'
                price_square_year_min += '0'
                price_square_year_max += '10000000000'
                price_min += '0'
                price_max += '10000000000'
                price_metr_min += '0'
                price_metr_max += '10000000000'
                break;
            case '2':
                price_month_min += '0'
                price_month_max += '10000000000'
                price_square_min += $('#price_min').val()
                price_square_max += $('#price_max').val()
                price_square_year_min += '0'
                price_square_year_max += '10000000000'
                price_min += '0'
                price_max += '10000000000'
                price_metr_min += '0'
                price_metr_max += '10000000000'
                break;
            case '3':
                price_month_min += '0'
                price_month_max += '10000000000'
                price_square_min += '0'
                price_square_max += '10000000000'
                price_square_year_min += $('#price_min').val()
                price_square_year_max += $('#price_max').val()
                price_min += '0'
                price_max += '10000000000'
                price_metr_min += '0'
                price_metr_max += '10000000000'
                break;
            case '4':
                price_month_min += '0'
                price_month_max += '10000000000'
                price_square_min += '0'
                price_square_max += '10000000000'
                price_square_year_min += '0'
                price_square_year_max += '10000000000'
                price_min += $('#price_min').val()
                price_max += $('#price_max').val()
                price_metr_min += '0'
                price_metr_max += '10000000000'
                break;
            case '5':
                price_month_min += '0'
                price_month_max += '10000000000'
                price_square_min += '0'
                price_square_max += '10000000000'
                price_square_year_min += '0'
                price_square_year_max += '10000000000'
                price_min += '0'
                price_max += '10000000000'
                price_metr_min += $('#price_min').val()
                price_metr_max += $('#price_max').val()
                break;
        }
        window.open(`/objects?filter=1&type=${type}&apart=${apart}&tower=${tower}&price_month_min=${price_month_min}&price_month_max=${price_month_max}&price_square_month_min=${price_square_min}&price_square_month_max=${price_square_max}&price_square_year_min=${price_square_year_min}&price_square_year_max=${price_square_year_max}&price_min=${price_min}&price_max=${price_max}&price_metr_min=${price_metr_min}&price_metr_max=${price_metr_max}`, '_self');
        event.preventDefault();
    });
});

(function() {
  "use strict";

  var carousel = document.getElementsByClassName('carousel')[0],
      slider = carousel.getElementsByClassName('carousel__slider')[0],
      items = carousel.getElementsByClassName('carousel__slider__item'),
      prevBtn = document.getElementsByClassName('carousel__prev')[0],
      nextBtn = document.getElementsByClassName('carousel__next')[0];

  slider.style.width = totalWidth + "px";

  var width, height, totalWidth, margin = 20,
      currIndex = 0,
      interval, intervalTime = 4000;

  function init() {
      resize();
      move(Math.floor(items.length / 2));
      bindEvents();

      timer();
  }

  function resize() {
      width = Math.max(window.innerWidth * .19, 275),
      height = window.innerHeight * .5,
      totalWidth = width * items.length;

      slider.style.width = totalWidth + "px";


      for(var i = 0; i < items.length; i++) {
          let item = items[i];
      }
  }

  function move(index) {

      if(index < 1) index = items.length;
      if(index > items.length) index = 1;
      currIndex = index;

      for(var i = 0; i < items.length; i++) {
          let item = items[i],
              box = item.getElementsByClassName('slider-index-1-bottom-block')[0];
          if(i == (index - 1)) {
              item.classList.add('carousel__slider__item--active');
              box.style.transform = "perspective(1200px)";
          } else {
            item.classList.remove('carousel__slider__item--active');
          }
      }

      slider.style.transform = "translate3d(" + ((index * -width) + (width / 2) + window.innerWidth / 2) + "px, 0, 0)";
  }



  function prev() {
    move(--currIndex);
    timer();
  }

  function next() {
    move(++currIndex);
    timer();
  }


  function bindEvents() {
      window.onresize = resize;
      prevBtn.addEventListener('click', () => { prev(); });
      nextBtn.addEventListener('click', () => { next(); });
  }





  init();

})();




