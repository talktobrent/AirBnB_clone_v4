$(document).ready(function () {
  let dict = {};
  $('input:checkbox').change(function () {
    if ($(this).is(':checked')) {
      console.log($(this).attr('data-name') + ', ' + $(this).attr('data-id'));
      dict[$(this).attr('data-name')] = $(this).attr('data-id');
    } else {
      delete dict.$(this).attr('data-id');
    }
  });
  $('DIV.amenities.h4').text(function () {
    let keys = Object.keys(dict);
    console.log(keys.join(', '));
    return keys.join(', ');
  });
});
