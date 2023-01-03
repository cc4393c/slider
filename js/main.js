(function () {
  var Slider = function (opt) {
    this.sliderItems = document.getElementsByClassName(opt.sliderItem);
    this.thumbItems = document.getElementsByClassName(opt.thumbItem);

    this.bindClick();
  };

  Slider.prototype = {
    bindClick: function () {
      var sliders = this.sliderItems,
          thumbs = this.thumbItems;
      for (var i = 0; i < thumbs.length; i++) {
        (function (j) {
          thumbs[j].onclick = function () {
            for (var k = 0; k < thumbs.length; k++) {
              thumbs[k].className = 'thumb-item';
              sliders[k].className = 'slider-item';
            }
            this.className += ' cur';
            sliders[j].className += ' active';
          };
        })(i);
      }
    }
  };

  window.Slider = Slider;
})();
