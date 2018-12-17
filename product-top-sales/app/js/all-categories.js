var topData = [
    {"id": 0, "name": "zzz", "price": 1200, "new": "1", "discount": 5, "age1": "0", "age2": "1", "age3": "1" , "sales":35},
    {"id": 1, "name": "aaa", "price": 1200, "new": "1", "discount": 5, "age1": "0", "age2": "1", "age3": "1" , "sales":20},
    {"id": 2, "name": "bbb", "price": 1000, "new": "1", "discount": 20, "age1": "1", "age2": "1", "age3": "1","sales":5 },
    {"id": 3, "name": "jjj", "price": 900, "new": "1", "discount": 10, "age1": "1", "age2": "1", "age3": "1", "sales":0},
    {"id": 4, "name": "ccc", "price": 500, "new": "1", "discount": 8, "age1": "1", "age2": "1", "age3": "0", "sales":30},
    {"id": 5, "name": "hhh", "price": 100, "new": "0", "discount": 7, "age1": "1", "age2": "1", "age3": "0", "sales":1},
    {"id": 6, "name": "kkk", "price": 2000, "new": "1", "discount": 15, "age1": "1", "age2": "0", "age3": "1", "sales":40},
    {"id": 7, "name": "eee", "price": 3000, "new": "1", "discount": 18, "age1": "1", "age2": "1", "age3": "1", "sales":2},
    {"id": 8, "name": "sss", "price": 4000, "new": "1", "discount": 25, "age1": "0", "age2": "1", "age3": "0", "sales":7},
    {"id": 9, "name": "qqq", "price": 3500, "new": "0", "discount": 17, "age1": "1", "age2": "1", "age3": "1", "sales":8},
    {"id": 10, "name": "ppp", "price": 200, "new": "1", "discount": 10, "age1": "1", "age2": "0", "age3": "1", "sales":9},
    {"id": 11, "name": "nnn", "price": 1200, "new": "1", "discount": 22, "age1": "1", "age2": "0", "age3": "0","sales":0 },
    {"id": 12, "name": "fff", "price": 1400, "new": "1", "discount": 15, "age1": "1", "age2": "1", "age3": "1", "sales":10},
    {"id": 13, "name": "abe", "price": 6000, "new": "0", "discount": 30, "age1": "1", "age2": "1", "age3": "1", "sales":10},
    {"id": 14, "name": "ooo", "price": 1220, "new": "1", "discount": 40, "age1": "0", "age2": "0", "age3": "1", "sales":15},
    {"id": 15, "name": "ffbf", "price": 1400, "new": "1", "discount": 11, "age1": "1", "age2": "1", "age3": "0", "sales":44},
    {"id": 16, "name": "abbbbbbb bbbbbbbe bbbbbbbb", "price": 6000, "new": "0", "discount": 0, "age1": "1", "age2": "1", "age3": "1", "sales":50},

];

var totalPrice;

function AllProduct(count) {
    this.id = count;
    this.productId = "Topproduct_" + this.id;
    this.productName = this.productId + "_name";
    this.productPrice = this.productId + "_price";
    this.productISNew = this.productId + "_isNew";
    this.productDiscount = this.productId + "_discount";
    this.productAge1 = this.productId + "_age1";
    this.productAge2 = this.productId + "_age2";
    this.productAge3 = this.productId + "_age3";
    this.productSales = this.productId + "_sales";
    this.productDetails = this.productId + "_text";
    this.productImg = this.productId + "_img";
    this.btnAddToCart = this.productId + "_btnAddToCart";
    this.btnDetails = this.productId + "_Details";
    this.productSaleInput = this.productId + "_quantity";
    this.btnSubmitSales = this.productId + "_submitQuantity";
    this.htmlContent ='';

};



AllProduct.prototype.createHtml = function (data) {

    this.htmlContent = " <div class=\"row p-1 mb-3 commonClass\">\n" +
        "\n" +
        "        <div class=\"border border-purple d-flex d-block d-flex justify-content-around \" id='"+this.productId+"'>\n" +
        "\n" +
        "            <div class=\"col-2 align-self-center\">\n" +
        "                <img class=\"img-fluid align-middle w-100 \" src=\"images/Placeholder.png\" style=\"height: 80px;\" id='"+this.productImg+"'>\n" +
        "\n" +
        "            </div>\n" +
        "            <div class=\"col-4 align-self-center\">\n" +
        "                <div class=\"card-body text-center\">\n" +
        "                    <h5 class=\"card-title\">\n" +
        "                                <span class=\"text-uppercase font-weight-bold mb-2 d-block\" id='"+this.productName+"'>\n" + data.name +

        "                                </span>\n" +
        "                        <div>  <span class=\" badge badge-pill badge-success my-1 mr-1\" id='"+this.productPrice+"'>\n" + data.price +
        "                                    <i class=\"fa fa-dollar mr-2\"></i></span>";

    if(data.discount >0)
    {
    this.htmlContent +=  "                            <span class=\"badge badge-pill badge-danger my-1 mr-1\" id='"+this.productDiscount+"'>\n" +
        "                                    <i class=\"fa fa-arrow-circle-down mr-2\"></i>"+data.discount+"</span>\n";}

     this.htmlContent+=   " <span class=\"badge badge-pill badge-info my-1 mr-1\" id='"+this.productSales+"'># " +data.sales+"</span></div>\n" +

        "                    </h5>\n" +
        "                </div>\n" +
        "            </div>\n" +
        "\n" +
        "            <div class=\"col-3 align-self-center\">\n" +
        "\n" +
        "\n" +
        "                <div class=\"btn-toolbar mb-2 d-flex justify-content-center \" role=\"toolbar\" aria-label=\"Toolbar with button groups\">\n" +
        "                    <div class=\"btn-group \" role=\"group\" aria-label=\"First group\">\n" +
        "                    <button type=\"button\" href=\"#11\" class=\"btn btn-info text-white btn-sm rounded m-1 \" role=\"button\" onclick=\"\" id='"+this.btnAddToCart+"'>Add to compare</button></div>\n" +
        "                    <div class=\"btn-group \" role=\"group\" aria-label=\"First group\">\n" +
        "                        <a href=\"product.html\" class=\"btn btn-light btn-sm rounded m-1\" id='"+this.btnDetails+"'>Details</a>\n" +
        "                    </div>      </div></div>\n" +
        "\n" +
        "            <div class=\"col-3 align-self-center\">\n" +
        "                <div class=\"btn-toolbar mb-2 d-flex justify-content-center \" role=\"toolbar\" aria-label=\"Toolbar with button groups\"> <div class=\"input-group\">\n" +
        "                    <label for=\"product_16_quantity\" class=\"sr-only \">qulaliy</label>\n" +
        "                    <input type=\"text\" id='"+this.productSaleInput+"' class=\"form-control  m-1\" maxlength=\"3\" size=\"3\">\n" +
        "                </div>\n" +
        "                    <div class=\"btn-group \" role=\"group\" aria-label=\"Second group\">\n" +
        "                        <button type=\"button\" class=\"btn btn-success btn-sm rounded m-1\" id='"+this.btnSubmitSales+"' onclick=\"onclickSubmit(this)\">Add to cart\n" +
        "                        </button>\n" +
        "                    </div>\n" +
        "                </div>\n" +
        "\n" +
        "            </div>\n" +
        "\n" +
        "        </div>\n" +
        "    </div>";


return this.htmlContent;
};


AllProduct.prototype.default = function () {

    $("#radio1-label").addClass("thick");
    $("#radio2-label ,#radio3-label, #radio4-label, #radio5-label, #radio6-label ").removeClass("thick");

    topData.sort(function (a, b) {
        if (b.sales < a.sales) return -1;
        if (b.sales > a.sales) return 1;
        return 0;
    });

    var dataCopy = topData.slice(0,5);

    dataCopy.sort(function (a, b) {
        if (a.name < b.name) return -1;
        if (a.name > b.name) return 1;
        return 0;
    });


    $("#TopProductArea").empty();
    for(var i=0; i<5 ; i++)
    {
        var p = new AllProduct(dataCopy[i].id);
        document.getElementById("TopProductArea").innerHTML += p.createHtml(dataCopy[i]);
    }

};


AllProduct.prototype.fadeHidden = function()
{
    var myCardss = document.myCards;
    console.log(myCardss);



};


$(document).ready(function () {


    var obj = new AllProduct(0);
    obj.default();


    $("#radio1").on("click", function () {

        $("#radio1-label").addClass("thick");
        $("#radio2-label ,#radio3-label, #radio4-label, #radio5-label, #radio6-label, #radio7-label, #radio8-label ").removeClass("thick");

        topData.sort(function (a, b) {
            if (b.sales < a.sales) return -1;
            if (b.sales > a.sales) return 1;
            return 0;
        });

        var dataCopy = topData.slice(0, 5);

        dataCopy.sort(function (a, b) {
            if (a.name < b.name) return -1;
            if (a.name > b.name) return 1;
            return 0;
        });



        $("#TopProductArea").empty();
        for (var i = 0; i < 5; i++) {
            var p = new AllProduct(dataCopy[i].id);
            document.getElementById("TopProductArea").innerHTML += p.createHtml(dataCopy[i]);
        }


    });


    $("#radio2").click(function () {

        //name ascend
        $("#radio2-label").addClass("thick");
        $("#radio1-label ,#radio3-label, #radio4-label, #radio5-label, #radio6-label , #radio7-label, #radio8-label ").removeClass("thick");



        var dataCopy = topData.slice(0, 5);

        dataCopy.sort(function (a, b) {
            if (b.name < a.name) return -1;
            if (b.name > a.name) return 1;
            return 0;
        });


        $("#TopProductArea").empty();
        for (var i = 0; i < 5; i++) {
            var p = new AllProduct(dataCopy[i].id);
            document.getElementById("TopProductArea").innerHTML += p.createHtml(dataCopy[i]);
        }


    });


    $("#radio3").click(function () {

        var dataCopy = topData.slice(0, 5);
        //name ascend
        $("#radio3-label").addClass("thick");
        $("#radio1-label ,#radio2-label, #radio4-label, #radio5-label, #radio6-label , #radio7-label, #radio8-label").removeClass("thick");

        dataCopy.sort(function (a, b) {
            if (a.price < b.price) return -1;
            if (a.price > b.price) return 1;
            return 0;
        });


        $("#TopProductArea").empty();
        for (var i = 0; i < 5; i++) {
            var p = new AllProduct(dataCopy[i].id);
            document.getElementById("TopProductArea").innerHTML += p.createHtml(dataCopy[i]);
        }


    });



    $("#radio4").click(function () {

        var dataCopy = topData.slice(0, 5);
        //name ascend
        $("#radio4-label").addClass("thick");
        $("#radio1-label ,#radio3-label, #radio2-label, #radio5-label, #radio6-label , #radio7-label, #radio8-label ").removeClass("thick");

        dataCopy.sort(function (a, b) {
            if (b.price < a.price) return -1;
            if (b.price > a.price) return 1;
            return 0;
        });


        $("#TopProductArea").empty();
        for (var i = 0; i < 5; i++) {
            var p = new AllProduct(dataCopy[i].id);
            document.getElementById("TopProductArea").innerHTML += p.createHtml(dataCopy[i]);
        }


    });


    $("#radio5").click(function () {

        var dataCopy = topData.slice(0, 5);
        //name ascend
        $("#radio5-label").addClass("thick");
        $("#radio1-label ,#radio2-label, #radio4-label, #radio3-label, #radio6-label , #radio7-label, #radio8-label ").removeClass("thick");

        dataCopy.sort(function (a, b) {
            if (a.discount < b.discount) return -1;
            if (a.discount > b.discount) return 1;
            return 0;
        });


        $("#TopProductArea").empty();
        for (var i = 0; i < 5; i++) {
            var p = new AllProduct(dataCopy[i].id);
            document.getElementById("TopProductArea").innerHTML += p.createHtml(dataCopy[i]);
        }


    });

    $("#radio6").click(function () {

        var dataCopy = topData.slice(0, 5);
        //name ascend
        $("#radio6-label").addClass("thick");
        $("#radio1-label ,#radio2-label, #radio4-label, #radio5-label, #radio3-label , #radio7-label, #radio8-label ").removeClass("thick");

        dataCopy.sort(function (a, b) {
            if (b.discount < a.discount) return -1;
            if (b.discount > a.discount) return 1;
            return 0;
        });


        $("#TopProductArea").empty();
        for (var i = 0; i < 5; i++) {
            var p = new AllProduct(dataCopy[i].id);
            document.getElementById("TopProductArea").innerHTML += p.createHtml(dataCopy[i]);
        }


    });


    $("#radio7").click(function () {

        var dataCopy = topData.slice(0, 5);
        //name ascend
        $("#radio7-label").addClass("thick");
        $("#radio1-label ,#radio2-label, #radio4-label, #radio3-label, #radio5-label,#radio8-label, #radio6-label").removeClass("thick");

        dataCopy.sort(function (a, b) {
            if (a.sales < b.sales) return -1;
            if (a.sales > b.sales) return 1;
            return 0;
        });


        $("#TopProductArea").empty();
        for (var i = 0; i < 5; i++) {
            var p = new AllProduct(dataCopy[i].id);
            document.getElementById("TopProductArea").innerHTML += p.createHtml(dataCopy[i]);
        }


    });

    $("#radio8").click(function () {

        var dataCopy = topData.slice(0, 5);
        //name ascend
        $("#radio8-label").addClass("thick");
        $("#radio1-label ,#radio2-label, #radio3-label, #radio4-label, #radio5-label, #radio6-label, #radio7-label ").removeClass("thick");

        dataCopy.sort(function (a, b) {
            if (b.sales < a.sales) return -1;
            if (b.sales> a.sales) return 1;
            return 0;
        });


        $("#TopProductArea").empty();
        for (var i = 0; i < 5; i++) {
            var p = new AllProduct(dataCopy[i].id);
            document.getElementById("TopProductArea").innerHTML += p.createHtml(dataCopy[i]);
        }


    });


});



function onclickSubmit(thisFullId)
{
    var id = thisFullId.id;
    var num = id.split("_")[1];
    var idInput = id.split("_");
    idInput.pop();
    var prefix = idInput.join("_");
    idInput = prefix + "_quantity";
    var q = document.getElementById(idInput).value;
    document.getElementById(idInput).value ="";
    var sales = searchSet(num, q);
    document.getElementById(prefix + "_sales").innerText="#" + sales;
    Sort();
    topData.sort(function (a, b) {
        if (b.sales < a.sales) return -1;
        if (b.sales > a.sales) return 1;
        return 0;
    });


}

function searchSet(id, s) {

    for(var i=0; i<topData.length;i++)
    {
        if(topData[i].id == id)
        {
            topData[i].sales += parseInt(s);
            totalPrice +=  topData[i].price *parseInt(s);
            console.log("Now the total price is: ", totalPrice);

            break;
        }
    }
    return topData[i].sales
}


function Sort() {

    if ($('#radio1').is(':checked')) {

        $("#radio1-label").addClass("thick");
        $("#radio2-label ,#radio3-label, #radio4-label, #radio5-label, #radio6-label, #radio7-label, #radio8-label ").removeClass("thick");

        topData.sort(function (a, b) {
            if (b.sales < a.sales) return -1;
            if (b.sales > a.sales) return 1;
            return 0;
        });

        var dataCopy = topData.slice(0, 5);

        dataCopy.sort(function (a, b) {
            if (a.name < b.name) return -1;
            if (a.name > b.name) return 1;
            return 0;
        });

        $(".commonClass").fadeOut(3000);

        $("#TopProductArea").empty();
        for (var i = 0; i < 5; i++) {
            var p = new AllProduct(dataCopy[i].id);
            document.getElementById("TopProductArea").innerHTML += p.createHtml(dataCopy[i]);
        }
    }


    if ($('#radio2').is(':checked')) {
        //name ascend
        $("#radio2-label").addClass("thick");
        $("#radio1-label ,#radio3-label, #radio4-label, #radio5-label, #radio6-label , #radio7-label, #radio8-label ").removeClass("thick");



        var dataCopy = topData.slice(0, 5);

        dataCopy.sort(function (a, b) {
            if (b.name < a.name) return -1;
            if (b.name > a.name) return 1;
            return 0;
        });


        $("#TopProductArea").empty();
        for (var i = 0; i < 5; i++) {
            var p = new AllProduct(dataCopy[i].id);
            document.getElementById("TopProductArea").innerHTML += p.createHtml(dataCopy[i]);
        }

    }


    if ($('#radio3').is(':checked')) {
        var dataCopy = topData.slice(0, 5);
        //name ascend
        $("#radio3-label").addClass("thick");
        $("#radio1-label ,#radio2-label, #radio4-label, #radio5-label, #radio6-label , #radio7-label, #radio8-label").removeClass("thick");

        dataCopy.sort(function (a, b) {
            if (a.price < b.price) return -1;
            if (a.price > b.price) return 1;
            return 0;
        });


        $("#TopProductArea").empty();
        for (var i = 0; i < 5; i++) {
            var p = new AllProduct(dataCopy[i].id);
            document.getElementById("TopProductArea").innerHTML += p.createHtml(dataCopy[i]);
        }


    }

    if ($('#radio4').is(':checked')) {
        var dataCopy = topData.slice(0, 5);
        //name ascend
        $("#radio4-label").addClass("thick");
        $("#radio1-label ,#radio3-label, #radio2-label, #radio5-label, #radio6-label , #radio7-label, #radio8-label ").removeClass("thick");

        dataCopy.sort(function (a, b) {
            if (b.price < a.price) return -1;
            if (b.price > a.price) return 1;
            return 0;
        });


        $("#TopProductArea").empty();
        for (var i = 0; i < 5; i++) {
            var p = new AllProduct(dataCopy[i].id);
            document.getElementById("TopProductArea").innerHTML += p.createHtml(dataCopy[i]);
        }

    }

    if ($('#radio5').is(':checked')) {
        var dataCopy = topData.slice(0, 5);
        //name ascend
        $("#radio5-label").addClass("thick");
        $("#radio1-label ,#radio2-label, #radio4-label, #radio3-label, #radio6-label , #radio7-label, #radio8-label ").removeClass("thick");

        dataCopy.sort(function (a, b) {
            if (a.discount < b.discount) return -1;
            if (a.discount > b.discount) return 1;
            return 0;
        });


        $("#TopProductArea").empty();
        for (var i = 0; i < 5; i++) {
            var p = new AllProduct(dataCopy[i].id);
            document.getElementById("TopProductArea").innerHTML += p.createHtml(dataCopy[i]);
        }

    }


    if ($('#radio6').is(':checked')) {
        var dataCopy = topData.slice(0, 5);
        //name ascend
        $("#radio6-label").addClass("thick");
        $("#radio1-label ,#radio2-label, #radio4-label, #radio5-label, #radio3-label , #radio7-label, #radio8-label ").removeClass("thick");

        dataCopy.sort(function (a, b) {
            if (b.discount < a.discount) return -1;
            if (b.discount > a.discount) return 1;
            return 0;
        });


        $("#TopProductArea").empty();
        for (var i = 0; i < 5; i++) {
            var p = new AllProduct(dataCopy[i].id);
            document.getElementById("TopProductArea").innerHTML += p.createHtml(dataCopy[i]);
        }
    }

    if ($('#radio7').is(':checked')) {
        var dataCopy = topData.slice(0, 5);
        //name ascend
        $("#radio7-label").addClass("thick");
        $("#radio1-label ,#radio2-label, #radio4-label, #radio3-label, #radio5-label,#radio8-label, #radio6-label").removeClass("thick");

        dataCopy.sort(function (a, b) {
            if (a.sales < b.sales) return -1;
            if (a.sales > b.sales) return 1;
            return 0;
        });


        $("#TopProductArea").empty();
        for (var i = 0; i < 5; i++) {
            var p = new AllProduct(dataCopy[i].id);
            document.getElementById("TopProductArea").innerHTML += p.createHtml(dataCopy[i]);
        }


    }


    if ($('#radio8').is(':checked')) {
        var dataCopy = topData.slice(0, 5);
        //name ascend
        $("#radio8-label").addClass("thick");
        $("#radio1-label ,#radio2-label, #radio3-label, #radio4-label, #radio5-label, #radio6-label, #radio7-label ").removeClass("thick");

        dataCopy.sort(function (a, b) {
            if (b.sales < a.sales) return -1;
            if (b.sales> a.sales) return 1;
            return 0;
        });


        $("#TopProductArea").empty();
        for (var i = 0; i < 5; i++) {
            var p = new AllProduct(dataCopy[i].id);
            document.getElementById("TopProductArea").innerHTML += p.createHtml(dataCopy[i]);
        }


    }

}