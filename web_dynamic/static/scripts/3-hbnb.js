$(document).ready(function () {
  let dict = {};
  $('input:checkbox').css('margin-right', '10px');
  $('input:checkbox').change(function () {
    if ($(this).is(':checked')) {
      dict[$(this).attr('data-name')] = $(this).attr('data-id');
    } else {
      delete dict[$(this).attr('data-name')];
    }
    $('DIV.amenities>h4').text(function () {
      let keys = Object.keys(dict);
      return keys.join(', ');
    });
  });
  $.getJSON('http://0.0.0.0:5001/api/v1/status/', function (data) {
    if (data.status === 'OK') {
      $('DIV#api_status').addClass('available');
    }
  });

  $.ajax({
    type: 'POST',
    url: 'http://0.0.0.0:5001/api/v1/places_search/',
    data: JSON.stringify({}),
    Content-Type: 'application/json',
    success: function (data) {
      data.sort(function(a, b) {
        if (a.name < b.name) return -1;
        if (a.name > b.name) return 1;
        return 0;
      });
    });
    function (data) {

    };
  });
});
