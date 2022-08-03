
class Car{
    constructor(id, name, model, hybrid, color) {
        this.id = id;
        this.name = name;
        this.model = model;
        this.hybrid = hybrid;
        this.color = color;
    }
};

class Buyer{
    constructor(id, name){
        this.id = id;
        this.name = name;
    }
};

class Order{
    constructor(buyerid, buyername, carid, carname, quantity){
        this.buyerid = buyerid;
        this.buyername = buyername;
        this.carid = carid;
        this.carname = carname;
        this.quantity = quantity;
    }
};

var cars = [new Car(1, "corolla", 2022, true, "Black"), new Car(2, "corolla", 2012, false, "Black")];
var buyers = [new Buyer(1, "Ali"), new Buyer(2, "Tariq")];
var orders = [new Order()];


var year = new Date().getFullYear();
$(document).ready(function(){
    console.log("Calling function successfully...");

    $.each(cars, function (key, value) {
        $('#carstable').append('<tr> <td>' + value.id + '</td>  <td>' + value.name + '</td> <td>' + value.model + '</td> <td>' + value.hybrid + '</td> <td>' + value.color + '</td></tr>');
    })

    var modeloptions = '';
    for (i = year; i >= 1970; i--) {
        modeloptions += '<option value="' + i + '">' + i + '</option>';
    }
    $('#carmodel').append(modeloptions);

    var buyeroptions = '';
    for(i=0; i<buyers.length;i++){
        console.log(buyers[i].id);
        buyeroptions += '<option value="'+ buyers[i].id + '">' + buyers[i].id + '</option>'
    }
    $("#orderformbuyerid").append(buyeroptions);

    var caroptions = '';
    for(i=0; i<buyers.length;i++){
        console.log(cars[i]["id"]);
        caroptions+= '<option value="'+ cars[i]["id"] + '">' + cars[i]["id"] + '</option>'
    }
    $("#orderformcarid").append(caroptions);


    const submitcar = $("#submitcar");
    var h;
    submitcar.click(() => {
        const id = $("#id").val();
        const name = $("#name").val();
        const model = $("#carmodel").val();
        const color = $("#color").val();
        if ($('#hybrid').is(":checked"))
        {
            h = "Yes";
        }
        else{
            h = "No";
        }
        // cars.append(new Car(id, name, model, h, price));
        cars.push(new Car(id, name, model, h, color))
        cars.forEach(element => {
            console.log(element);
        });
    });

    const submitbuyer = $("#buyersubmit");
    submitbuyer.click(() => {
        const id = $("#buyerid").val();
        const name = $("#buyername").val();
        buyers.push(new Buyer(id, name))
        buyers.forEach(element => {
            console.log(element);
        });
    })
})



// $(document).ready(function () {
//     console.log("Here")
//     console.log("hey hellooo")
//     $('p').click();
//     $('p').click(function () {
//         console.log('you clicked on p')
//         // $('p').hide();
//         // $('#1').hide();
//         // $(".odd").hide();
//     });

//     $('#1').mouseenter(function(){
//         console.log("you entered: ", this);
//     });

//     $('p').on({
//         click: function(){
//             console.log("click");
//         },
//         dblclick: function(){
//             console.log("dbclick");
//         },
//         mouseleave: function(){
//             console.log("mouseleave");
//         }
//     })
// })
