$(document).ready(function () {
  let dict = {};
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
});
