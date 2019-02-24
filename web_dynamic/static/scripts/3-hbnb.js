function template (place) {
  return `
<article>
<div class="title">
<h2>${place.name}</h2>
<div class="price_by_night">
${place.price_by_night}
</div>
</div>
<div class="information">
<div class="max_guest">
<i class="fa fa-users fa-3x" aria-hidden="true"></i>
<br />
${place.max_guest} Guests
</div>
<div class="number_rooms">
<i class="fa fa-bed fa-3x" aria-hidden="true"></i>
<br />
${place.number_rooms} Bedrooms
</div>
<div class="number_bathrooms">
<i class="fa fa-bath fa-3x" aria-hidden="true"></i>
<br />
${place.number_bathrooms} Bathroom
</div>
</div>
<div class="description">
<br />
${place.description}
</div>
</article>`;
}
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
    contentType: 'application/json',
    success: function (data) {
      data.sort(function (a, b) {
        if (a.name < b.name) return -1;
        if (a.name > b.name) return 1;
        return 0;
      });
      for (let place of data) {
        $('section.places').append(template(place));
      }
    }
  });
});
