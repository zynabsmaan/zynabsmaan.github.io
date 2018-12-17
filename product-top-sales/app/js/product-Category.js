var data = [
    {"id": 1, "name": "aaa", "price": 1200, "new": "1", "discount": 5, "age1": "0", "age2": "1", "age3": "1"},
    {"id": 2, "name": "bbb", "price": 1000, "new": "1", "discount": 20, "age1": "1", "age2": "1", "age3": "1"},
    {"id": 3, "name": "jjj", "price": 900, "new": "1", "discount": 10, "age1": "1", "age2": "1", "age3": "1"},
    {"id": 4, "name": "ccc", "price": 500, "new": "1", "discount": 8, "age1": "1", "age2": "1", "age3": "0"},
    {"id": 5, "name": "hhh", "price": 100, "new": "0", "discount": 7, "age1": "1", "age2": "1", "age3": "0"},
    {"id": 6, "name": "kkk", "price": 2000, "new": "1", "discount": 15, "age1": "1", "age2": "0", "age3": "1"},
    {"id": 7, "name": "eee", "price": 3000, "new": "1", "discount": 18, "age1": "1", "age2": "1", "age3": "1"},
    {"id": 8, "name": "sss", "price": 4000, "new": "1", "discount": 25, "age1": "0", "age2": "1", "age3": "0"},
    {"id": 9, "name": "qqq", "price": 3500, "new": "0", "discount": 17, "age1": "1", "age2": "1", "age3": "1"},
    {"id": 10, "name": "ppp", "price": 200, "new": "1", "discount": 10, "age1": "1", "age2": "0", "age3": "1"},
    {"id": 11, "name": "nnn", "price": 1200, "new": "1", "discount": 22, "age1": "1", "age2": "0", "age3": "0"},
    {"id": 12, "name": "fff", "price": 1400, "new": "1", "discount": 15, "age1": "1", "age2": "1", "age3": "1"},
    {"id": 13, "name": "abe", "price": 6000, "new": "0", "discount": 30, "age1": "1", "age2": "1", "age3": "1"},
    {"id": 14, "name": "ooo", "price": 1220, "new": "1", "discount": 40, "age1": "0", "age2": "0", "age3": "1"},
    {"id": 15, "name": "ffbf", "price": 1400, "new": "1", "discount": 11, "age1": "1", "age2": "1", "age3": "0"},
    {"id": 16, "name": "abbe", "price": 6000, "new": "0", "discount": 0, "age1": "1", "age2": "1", "age3": "1"},

];
// var radioform = data.slice(0);
// var newData;
// var newData2;
// var length = 10;

function Product(count) {
    this.id = count;
    this.productId = "product_" + this.id;
    this.produntName = this.productId + "-name";
    this.productPrice = this.productId + "-price";
    this.productISNew = this.productId + "-isNew";
    this.productDiscount = this.productId + "-discount";
    this.productAge1 = this.productId + "-age1";
    this.productAge2 = this.productId + "-age2";
    this.productAge3 = this.productId + "-age3";
    this.productDetails = this.productId + "-text";
    this.productImg = this.productId + "-img";
    this.btnAddToCart = this.productId + "-btnAddToCart";
    this.btnDetails = this.productId + "-Details";

};


Product.prototype.createProduct = function (productData) {

    var getData = productData;


    var htmlContent = "<div class=\"col-lg-4 col-md-6 col-sm-12\" id='" + this.productId + "'>\n" +
        "\n" +
        "                        <div class=\"card mb-4 shadow card-shadow\">\n" +
        "  <img class=\"card-img-top align-self-center rounded\" src=\"images/p1.png\" id='" + this.productImg + "'\n" +
        "                                 alt=\"Card image cap\"\n" +
        "                                 style=\"position:relative;width:15vw;min-width:150px;\">\n" +
        "                            <div class=\"card-body text-center\">\n" +
        "                                <h5 class=\"card-title\">\n" +
        "                                <span class=\"text-uppercase font-weight-bold mb-2 d-block\"\n" +
        "                                      id='" + this.productName + "'>\n" +
        getData.name + " \n" +
        "                                </span>\n" +
        "                                    <span class=\" badge badge-pill badge-success my-1 mr-1\" id='" + this.productPrice + "'>" + getData.price + "</span>\n";

    if (getData.new == "1") {
        htmlContent += "<span class=\"badge badge-pill badge-info my-1 mr-1\"\n" +
            "id='" + this.productISNew + "'>New</span>\n";

    }

    if (getData.discount > 0) {
        htmlContent += "  <span class=\"badge badge-pill badge-danger my-1 mr-1\"\n" +
            " id='" + this.productDiscount + "'>" + getData.discount + "%</span>\n";
    }

    if (getData.age1 == "1") {
        htmlContent += "<span class=\" badge badge-pill bg-pink my-1 mr-1\"\n" +
            "                                         id='" + this.productAge1 + "'>Women</span>\n";

    }

    if (getData.age2 == "1") {
        htmlContent += " <span class=\" badge badge-pill bg-pink my-1 mr-1\"\n" +
            "   id='" + this.productAge2 + "'>Men</span>\n";
    }

    if (getData.age3 == "1") {
        htmlContent += "  <span class=\" badge badge-pill bg-pink my-1 mr-1\"\n" +
            "   id='" + this.productAge3 + "'>Kids</span>\n";
    }


    htmlContent += " </h5>\n" +
        "                                <p class=\"card-text text-truncate\" id='" + this.productDetails + "'>Contrary to popular belief, Lorem Ipsum is not simply\n" +
        "                                    random text. It has roots\n" +
        "                                    in</p>\n" +
        "                                <div class=\"d-flex justify-content-center flex-wrap \">\n" +
        "                                    <button type=\"button\" class=\"btn btn-light mr-3\" id='" + this.btnDetails + "'>Details</button>\n" +
        "                                    <button type=\"button\" class=\"btn btn-success\" id='" + this.btnAddToCart + "'>Add to cart</button>\n" +
        "                                </div>\n" +
        "                            </div>\n" +
        "                        </div>\n" +
        "\n" +
        "                    </div>\n";

    return htmlContent;
};


Product.prototype.default = function () {

    $("#radio1-label").addClass("thick");

    var length = 10;
    if (data.length < length) {
        length = data.length
    }

    data.sort(function (a, b) {
        if (a.name < b.name) return -1;
        if (a.name > b.name) return 1;
        return 0;
    });

    $("#product_body").empty();
    for (var i = 0; i < length; i++) {
        var obj = new Product(data[i].id);
        $("#product_body").append(obj.createProduct(data[i]));
    }
};


$(document).ready(function () {

    var length = 10;
    var newData2;
    var newData = data.slice(0);
    $("#range1").text($("#myRange1").val());
    $("#range2").text($("#myRange2").val());


    var obj = new Product(0);
    obj.default();
////////////////////////////////////////////////////////////////////////////
    //Radio1 - name Adecesnt
    $("#radio1").on("click", function () {

        $("#radio1-label").addClass("thick");
        $("#radio2-label ,#radio3-label, #radio4-label, #radio5-label, #radio6-label ").removeClass("thick");

        if (data.length < length) {
            length = data.length
        }

        data.sort(function (a, b) {
            if (a.name < b.name) return -1;
            if (a.name > b.name) return 1;
            return 0;
        });

        newData.sort(function (a, b) {
            if (a.name < b.name) return -1;
            if (a.name > b.name) return 1;
            return 0;
        });


        $("#product_body").empty();
        for (var i = 0; i < length; i++) {
            var obj = new Product(newData[i].id);
            $("#product_body").append(obj.createProduct(newData[i]));
        }
    });
/////////////////////////////////////////////////////////////////////////////////////////////


    $("#radio2").click(function () {

        //name ascend
        $("#radio2-label").addClass("thick");
        $("#radio1-label ,#radio3-label, #radio4-label, #radio5-label, #radio6-label ").removeClass("thick");
        if (newData.length < length) {
            length = newData.length
        }

        data.sort(function (a, b) {
            if (b.name < a.name) return -1;
            if (b.name > a.name) return 1;
            return 0;
        });

        newData.sort(function (a, b) {
            if (b.name < a.name) return -1;
            if (b.name > a.name) return 1;
            return 0;
        });

        $("#product_body").empty();
        for (var i = 0; i < length; i++) {
            var obj = new Product(newData[i].id);
            $("#product_body").append(obj.createProduct(newData[i]));
        }
    });

/////////////////////////////////////////////////////////////////////////////////


    $("#radio3").on("click", function () {

        $("#radio3-label").addClass("thick");
        $("#radio2-label ,#radio1-label, #radio4-label, #radio5-label, #radio6-label ").removeClass("thick");

        if (newData.length < length) {
            length = newData.length
        }


        newData.sort(function (a, b) {
            if (a.price < b.price) return -1;
            if (a.price > b.price) return 1;
            return 0;
        })

        data.sort(function (a, b) {
            if (a.price < b.price) return -1;
            if (a.price > b.price) return 1;
            return 0;
        });



        $("#product_body").empty();
        for (var i = 0; i < length; i++) {
            var obj = new Product(newData[i].id);
            $("#product_body").append(obj.createProduct(newData[i]));
        }
    });

///////////////////////////////////////////////////////////////////////////////////////////////

    $("#radio4").on("click", function () {

        $("#radio4-label").addClass("thick");
        $("#radio2-label ,#radio3-label, #radio1-label, #radio5-label, #radio6-label ").removeClass("thick");

        if (newData.length < length) {
            length = newData.length
        }

        newData.sort(function (a, b) {
            if (b.price < a.price) return -1;
            if (b.price > a.price) return 1;
            return 0;
        });

        data.sort(function (a, b) {
            if (b.price < a.price) return -1;
            if (b.price > a.price) return 1;
            return 0;
        });

        $("#product_body").empty();
        for (var i = 0; i < length; i++) {
            var obj = new Product(newData[i].id);
            $("#product_body").append(obj.createProduct(newData[i]));
        }
    });

/////////////////////////////////////////////////////////////////////////
    $("#radio5").on("click", function () {

        $("#radio5-label").addClass("thick");
        $("#radio2-label ,#radio3-label, #radio4-label, #radio1-label, #radio6-label ").removeClass("thick");

        //discount up
        if (newData.length < length) {
            length = newData.length
        }
        newData.sort(function (a, b) {
            if (a.discount < b.discount) return -1;
            if (a.discount > b.discount) return 1;
            return 0;
        });

        data.sort(function (a, b) {
            if (a.discount < b.discount) return -1;
            if (a.discount > b.discount) return 1;
            return 0;
        });

        $("#product_body").empty();
        for (var i = 0; i < length; i++) {
            var obj = new Product(newData[i].id);
            $("#product_body").append(obj.createProduct(newData[i]));

        }
    });

    //////////////////////////////////////////////////////////////////////////////////////
    $("#radio6").on("click", function () {

        $("#radio6-label").addClass("thick");
        $("#radio2-label ,#radio3-label, #radio4-label, #radio5-label, #radio1-label ").removeClass("thick");

        //discount up
        if (newData.length < length) {
            length = newData.length
        }

        newData.sort(function (a, b) {
            if (b.discount < a.discount) return -1;
            if (b.discount > a.discount) return 1;
            return 0;
        });

        data.sort(function (a, b) {
            if (b.discount < a.discount) return -1;
            if (b.discount > a.discount) return 1;
            return 0;
        });

        $("#product_body").empty();
        for (var i = 0; i < length; i++) {
            var obj = new Product(newData[i].id);
            $("#product_body").append(obj.createProduct(newData[i]));
        }
    });

/////////////////////////////////////////////////////////////////////

    $("#check1").on("click", function () {
        $("#check1-label").toggleClass("thick");

    });

    $("#check2").on("click", function () {
        $("#check2-label").toggleClass("thick");

    });

    $("#check3").on("click", function () {
        $("#check3-label").toggleClass("thick");

    });

    $("#check4").on("click", function () {
        $("#check4-label").toggleClass("thick");

    });

    $("#check5").on("click", function () {
        $("#check5-label").toggleClass("thick");

    });

    $("#check6").on("click", function () {
        $("#check6-label").toggleClass("thick");

    });

    $("#checks1").on("change", function () {


//Check if the range from is bigger than range2
        if ($("#myRange1").val() >= $("#myRange2").val()) {
            alert("'From' value can't be bigger than 'To' value or equal !!");
            $("#myRange1").val(0);
            $("#myRange2").val(6000);
        }
//get the number of product
        length = $("#number option:selected").text();
        $("#range1").text($("#myRange1").val());
        $("#range2").text($("#myRange2").val());
        newData, newData2 = [];


        if (($("#check1").is(":checked") ||
            ($("#check2").is(":checked") && $("#check3").is(":checked") && $("#check4").is(":checked")) ||
            (!$("#check1").is(":checked") && !$("#check2").is(":checked") && !$("#check3").is(":checked") && !$("#check4").is(":checked")) ||
            ($("#check1").is(":checked") && $("#check2").is(":checked")) ||
            ($("#check1").is(":checked") && $("#check3").is(":checked")) ||
            ($("#check1").is(":checked") && $("#check4").is(":checked"))) &&
            (!$("#check5").is(":checked") && !$("#check6").is(":checked"))) {
            console.log("all");
            newData = data.slice(0);

        }


        //women only
        if ($("#check2").is(":checked") && !$("#check3").is(":checked") && !$("#check4").is(":checked") && !$("#check1").is(":checked")) {

            console.log("women");
            newData = [];
            for (var i = 0; i < data.length; i++) {
                if (data[i].age1 == "1") {
                    newData.push(data[i])
                }
            }
        }

        //Men only
        if (!$("#check2").is(":checked") && $("#check3").is(":checked") && !$("#check4").is(":checked") && !$("#check1").is(":checked")) {

            console.log("men");
            newData = [];
            for (var i = 0; i < data.length; i++) {
                if (data[i].age2 == "1") {
                    newData.push(data[i]);

                }
            }
        }

        //Kids only
        if (!$("#check2").is(":checked") && !$("#check3").is(":checked") && $("#check4").is(":checked") && !$("#check1").is(":checked")) {

            console.log("kids");
            newData = [];
            for (var i = 0; i < data.length; i++) {
                if (data[i].age3 == "1") {

                    newData.push(data[i]);
                }
            }


        }
//Women and men
        if ($("#check2").is(":checked") && $("#check3").is(":checked") && !$("#check4").is(":checked") && !$("#check1").is(":checked")) {
            console.log("Women and men");
            newData = [];
            for (var i = 0; i < data.length; i++) {

                if (data[i].age1 == 1 || data[i].age2 == 1) {

                    newData.push(data[i]);
                }
            }

        }
        //Women and kids
        if ($("#check2").is(":checked") && !$("#check3").is(":checked") && $("#check4").is(":checked") && !$("#check1").is(":checked")) {
            console.log("Women and kids");
            newData = [];
            for (var i = 0; i < data.length; i++) {

                if (data[i].age1 == 1 || data[i].age3 == 1) {

                    newData.push(data[i]);
                }
            }
        }

//men and kids
        if (!$("#check2").is(":checked") && $("#check3").is(":checked") && $("#check4").is(":checked") && !$("#check1").is(":checked")) {
            console.log("kids and men");
            newData = [];
            for (var i = 0; i < data.length; i++) {
                if (data.age2 == 1 || data[i].age3 == 1) {

                    newData.push(data[i]);
                }
            }

        }


//new only
        if ($("#check5").is(":checked") && !$("#check6").is(":checked")) {
            newData2 = [];
            console.log("new");
            for (var i = 0; i < newData.length; i++) {

                if (newData[i].new == "1") {
                    newData2.push(newData[i])
                }
            }
            newData = newData2.slice(0);
        }


        if (!$("#check5").is(":checked") && $("#check6").is(":checked")) {
            console.log("discount");
            newData2 = [];
            for (var i = 0; i < newData.length; i++) {
                if (newData[i].discount > 0) {
                    newData2.push(newData[i]);
                }
            }

            newData = newData2.slice(0);
        }


        if ($("#check5").is(":checked") && $("#check6").is(":checked")) {
            console.log("new and discount");
            newData2 = [];
            for (var i = 0; i < newData.length; i++) {

                if (newData[i].new == "1" && newData[i].discount > 0) {
                    newData2.push(newData[i]);
                }
            }
            newData = newData2.slice(0);
        }


        var l = 0;
        $("#product_body").empty();
        console.log(length);
        console.log(newData.length);
        console.log($("#range1").text());
        newData2 = [];
        for (var i = 0; i < newData.length; i++) {

            if ((newData[i].price >= $("#range1").text()) &&
                (newData[i].price <= $("#range2").text()) && (l < length)) {
                l++;
                newData2.push(newData[i]);
                console.log(i, "hhhhhhhhhhhhh");
                var obj = new Product(newData[i].id);
                $("#product_body").append(obj.createProduct(newData[i]));
            }
        }

        newData = newData2.slice(0);

    });


});



