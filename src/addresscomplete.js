<script>
      var placeSearch, autocomplete;


      function initAutocomplete() {
        autocomplete = new google.maps.places.Autocomplete(
            (document.getElementById('street-name')),
            {types: ['geocode']});

        autocomplete.addListener('place_changed', fillInAddress);
      }

      function fillInAddress() {


        var place = autocomplete.getPlace();
        alert(place.address_components[i])

      }


</script>

