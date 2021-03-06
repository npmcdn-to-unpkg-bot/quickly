var {clearCart,refreshCart} = require("./engine/checkout.func.jsx");
var {createOrder} = require("./engine/createOrder.jsx");
var {reservationAdded, createReservation} = require("./engine/createReservation.jsx");
var registerUserModal = require('./engine/registerUserModal.js');
// menuItems - массив при заказе с едой

export function addReservationToCart(jsonObj, callback){
    console.log('addReservationToCart: ', jsonObj);
    setStorage('theReservation', jsonObj);
    reservationAdded();
    refreshCart();
    if (callback) callback(jsonObj);
}

function pasteMenu(categoryId){
    $.getJSON(serverUrl+'/api/v2/menu-items/get/'+categoryId, function(data){
        $('#foodItems').html('');
        console.log(data);
        $.each(data.result.menuItems, function(key, item){
            if( item.menu_item_image == ""){
                item.menu_item_image = "images/samples/9-tiny.jpg";
            } else item.menu_item_image = "http://176.112.201.81/static/cdn/"+item.menu_item_image;

            var output = `
                <div class="col-lg-4 col-xs-6 food-item">
                    <a href="#">
                        <div class="product-image">
                            <img src="${item.menu_item_image}" />
                            <div class="product-controls">
                                <button class="button main add-to-cart"
                                data-name="${item.menu_item_name}"
                                data-price="${item.menu_item_price}"
                                data-id="${item.menu_item_id}">В корзину</button>
                            </div>
                        </div>

                        <div class="product-info">
                            <div class="major">
                                <div class="product-name">
                                    <b>${item.menu_item_name}</b>
                                </div>
                                <div class="product-price">
                                    <span>${item.menu_item_price} <i class="rouble">i</i></span>
                                </div>
                            </div>
                            <div class="product-description">
                                <span>${item.menu_item_full_description}</span>
                            </div>
                        </div>
                    </a>
                </div>`;
            $('#foodItems').append(output);
        });
    });
}

function pasteCartElement(cartElement, elementCount){
    var el = `
    <tr class="reservation-${cartElement.type}">
        <td>${cartElement.name}</td>
        <td>${cartElement.price} р.</td>
        <td>
            <div class="form-group label-placeholder is-empty" data-id="${cartElement.id}" data-name="${cartElement.name}" data-price="${cartElement.price}">
                <span class="control-minus" data-id="cartItem-${cartElement.id}">-</span>
                <input type="text" value="${elementCount}" class="form-control" id="cartItem-${cartElement.id}">
                <span class="control-plus" data-id="cartItem-${cartElement.id}">+</span>
            </div>
        </td>
        <td>
            <button class="checkout-action"><i class="icon icn-trash"></i></button>
        </td>
    </tr>
    `;

    return el;
}

export function getHallsList(restaurantId, callback){
/*    var box = $('#hallsBox');
    $.getJSON(serverUrl+'/api/v2/reservation/halls/'+restaurantId, function(data){
        console.log('getHallsList: ', data);
        var hallsList = ``;
        if( data.result ){
            var halls = data.result.halls;
            console.log('getHallsList: ', halls);
            $.each(halls, function(index, hall){
                console.log('Hall: ', hall);
                hallsList += '<button class="hall-button light button-hall" data-id="'+hall.hall_id+'">'+hall.hall_name+'</button>';
            });
            console.log('hallsList: ', hallsList);
            box.html(hallsList);
            callback(data.result.halls);
        }
    });*/
}

function showReservationMap(halls){
    $.each(data, function(index,value){
        console.log(value);
    });
}

export function getReservationPointsList(hallId, theDate, callback){
    $.getJSON(serverUrl+'/api/v2/reservation/tables/'+hallId+'/'+theDate, function(data){
        console.log('getReservationPointsList: Using Timestamp = ', theDate);
        console.log('getReservationPointsList: ', data);
        var tableType = 0;

        var originalHeight = data.params.height;
        var originalWidth = data.params.width;

        console.log('Hall img original width: ', originalWidth);
        console.log('Hall img original height: ', originalHeight);
        $('#roomBox').html(`
            <div class="the-room">
                <div class="current-date">
                    <span>Состояние на ${currentReservationTime.format('DD/MM/YYYY HH:mm')}</span>
                </div>
                <img class="room-image"
                data-width="${originalWidth}"
                data-height="${originalHeight}"
                src="${hallsUrl}${data.params.hall.hall_image}" />
            </div>`);

            $.each(data.params.tables, function(index,value){

                if( value.table_type == 0 ) tableType = `
                    <div class="type">Беплатный</div>
                    `;

                if( value.table_type == 1 ) tableType = `
                    <div class="type">Платный</div>
                    <div class="price">Стоимость заказа: <b></b></div>
                    `;

                if( value.table_type == 2 ) tableType = `
                    <div class="type">Депозитный</dive>
                    <div class="price">Стоимость депозита: <b>${table_deposit}</b></div>;
                    `;

                var theOptions;

                for(var i = 1; i <= value.table_seats_count; i++){
                    theOptions += '<option>'+i+'</option>';
                }

                $('#roomBox .the-room').append(`
                    <div class="table reservation-point" data-hall="${value.hall_id}" id="table-${value.table_id}" data-id="${value.table_id}"
                    data-reserved="${data.params.reservations[value.table_id]}"
                    data-seats="${value.table_seats_count}"
                    data-deposit="${value.table_deposit}"
                    data-price="${value.table_price}"
                    data-restaurant="${value.restaurant_id}"
                     data-hall="${value.hall_id}"
                     style="left:${value.table_coord_x-10}px; top:${value.table_coord_y-20}px">
                        <div class="table-number">${value.table_number}</div>
                        <div class="table-everything">
                            <div class="table-desc">
                                ${tableType}
                                <span>Мест: ${value.table_seats_count}</span>
                            </div>
                            <div class="form-group label-static" style="margin-top:35px">
                                <label for="tableOption-${value.table_id}" class="control-label">На сколько человек?</label>
                                <select id="tableOption-${value.table_id}" data-object="table-${value.table_id}" class="form-control">
                                  ${theOptions}
                                </select>
                                <button class="button main round" style="width:100%; margin-top:10px;">Забронировать</button>
                            </div>
                        </div>
                    </div>
                `);
            });


            if(callback) callback();
    });
}

function getReservationUnixTime(e){
    console.log('getReservationUnixTime: ', currentReservationTime.unix(), currentReservationTime.format('x'));
    return currentReservationTime.unix();

}

$(function() {

    $(document).on('click', '.button-hall', function(event){
        $(this).addClass('main');
        $('.button-hall').removeClass('main');
        var time = getReservationUnixTime();
        var id = $(this).data('id');
        console.log('Button Hall Clicked; Time = ',time);
        console.log('Restaurant ID: ', id);
        getReservationPointsList(id, time);
    });


    $(document).on({
        mouseenter: function () {
            $('.the-room .table').removeClass('reserved');
            $(this).parent().addClass('reserved');
        },
    }, '.the-room .table .table-number');

    $(document).on('mouseleave', '.the-room .table .table-everything', function(event){
        $(this).parent().removeClass('reserved');
    });

    $(document).on('click', '#buttonCheckoutReservation', function(event){
        createReservation(function(w){
            console.log('createReservation: callback ',w);
        });
    });

    var currentReservationTime;

    $(document).on('click', '.reserved .button', function(event) {
        console.log('#buttonReserve clicked');
        flyToCart( $(this) );
        console.log('currentReservationTime: ', getReservationUnixTime());

        $('.the-room .table.reserved').each(function(){
            var jsonObj = {};
            var reservation = getStorage('theReservation');

            jsonObj['id'] = $(this).data('id');
            jsonObj['name'] = $('section.company-about .title h2').html()+', Стол #'+$(this).data('id');
            jsonObj['count'] = $('select', $(this).parent()).val();
            jsonObj['price'] = $(this).data('price');
            jsonObj['hall'] = $(this).data('hall');
            jsonObj['restaurant'] = $(this).data('restaurant');
            jsonObj['date'] = getReservationUnixTime();
            jsonObj['type'] = 'table';

            console.log('Reservation Add: ', jsonObj);

            var menuItems = getStorage('theCart');
            var menuCompany = $(this).data('restaurant'), tableCompany = $(this).data('restaurant');

            if( menuItems ) {
                menuCompany = menuItems[0].restaurant;
            }

            console.log('menuCompany: '+menuCompany, 'tableCompany:'+tableCompany );

            if( menuCompany == tableCompany ){
                if(isEmpty(reservation) === false){
                    swal({
                      title: 'В корзине уже есть один стол.',
                      text: "Одновременно в корзине может быть только один стол на резервацию! Удалить предыдущий стол и добавить этот?",
                      type: 'warning',
                      showCancelButton: true,
                      confirmButtonText: 'Да, заменить!',
                      cancelButtonText: 'Нет, оставить тот',
                      closeOnConfirm: false
                    }).then(function(isConfirm) {
                      if (isConfirm) {
                        addReservationToCart(jsonObj);
                      } else {
                        toastr.warning('Завершите предыдущий заказ');
                      }
                    });

                } else {
                    addReservationToCart(jsonObj);
                }
            } else {
                swal({
                  title: 'Внимание!',
                  text: 'В корзину нельзя поместить позиции из разных ресторанов. Очистить корзину и добавить выбранный вами стол?',
                  type: 'error',
                  showCancelButton: true,
                  confirmButtonText: 'Да, добавить',
                  cancelButtonText: 'Продолжить',
                  closeOnConfirm: false
                }).then(function(isConfirm) {
                  if (isConfirm) {
                    clearCart(function(){
                        swal({
                          title: 'Козрзина обновлена!',
                          text: 'Вы начали покупки в текущем ресторане. Выбранный вами товар будет добавлен в новую корзину.',
                          type: 'success', confirmButtonText: 'Продолжить',
                        }).then(function(isConfirm){
                            addToCart(jsonObj, button);
                            console.log('Cart Cleared, Adding new item.');
                        });
                    });
                    setStorage('theReservation', jsonObj);
                    reservationAdded();
                    refreshCart();
                  } else {
                    postOrder(params, function(data){
                        if (callback) callback(data);
                    });
                  }
                });
            }
        });

        $('.reserved').removeClass('reserved').addClass('yours');
    });

    $(document).on('click', '.reservation-table .checkout-action', function(e){
        $(this).parent().parent().velocity({opacity:0}, 500, function(){
            setTimeout(function(){
               $('.reservation-table').remove();
               localStorage.removeItem('theReservation');
               refreshCart();
            },500)
        });
    });


    $(document).on('dp.change', function(e) {
        currentReservationTime = getReservationUnixTime();
        getReservationPointsList(currentCompany, getReservationUnixTime());
    });

});
