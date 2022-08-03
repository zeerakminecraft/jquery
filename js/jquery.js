
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
    constructor(buyerid, carid, quantity){
        this.buyerid = buyerid;
        this.carid = carid;
        this.quantity = quantity;
    }
};

var cars = [];
var buyers = [];
var orders = [];


var year = new Date().getFullYear();
$(document).ready(function(){
    

    console.log("Calling function successfully...");
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
