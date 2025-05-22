listRestaurants = []

function loadRestaurantData() {
  fetch('../data/Restaurants.json')
    .then((response) => response.json())
    .then((response) => {
      listRestaurants = response;
    });
}

function loadBookingForm() {
    const queryString = window.location.search;  // ví dụ: ?id=admin

    // Tạo đối tượng URLSearchParams để dễ thao tác
    const urlParams = new URLSearchParams(queryString);

    // Lấy giá trị param "id"
    var username = urlParams.get('id');

    var booking_form = document.getElementById('list-restaurants');


    if (username == null) {
        for(var res of listRestaurants){
            booking_form.innerHTML += `
                <div class="restaurant-item">
                    <p><strong>`+res.name+`</strong></p>
                    <p>`+res.address+`</p>
                    <p>Open - Close: `+res.hours+`</p>
                        <p>
                            <a href="tel:`+res.phone+`" class="btn btn-outline-primary">012345678</a>
                            <a href="./booking-form.html" class="btn btn-warning">Đặt bàn</a>
                        </p>
                </div>`;
        }
    } else {
        for(var res of listRestaurants){
            booking_form.innerHTML += `
                <div class="restaurant-item">
                    <p><strong>`+res.name+`</strong></p>
                    <p>`+res.address+`</p>
                    <p>Open - Close: `+res.hours+`</p>
                        <p>
                            <a href="tel:`+res.phone+`" class="btn btn-outline-primary">012345678</a>
                            <a href="./booking-form.html?id=`+username+`" class="btn btn-warning">Đặt bàn</a>
                        </p>
                </div>`;
        }
    }
}

loadRestaurantData()