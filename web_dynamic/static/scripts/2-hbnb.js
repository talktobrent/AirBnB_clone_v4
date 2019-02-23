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
  console.log($.get('http://0.0.0.0:5001/api/v1/status/'));
  if ($.get('http://0.0.0.0:5001/api/v1/status/').status === 'OK') {
    $('DIV#api_status').addClass('available');
  } else {
    $('DIV#api_status').removeClass('available');
  }
});
