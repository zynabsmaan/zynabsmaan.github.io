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
var radioform = data.slice(0);
var newData;
var newData2;
var length = 10;

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
        "                        <div class=\"card mb-2\">\n" +
        "  <img class=\"card-img-top align-self-center\" src=\"images/p1.png\" id='" + this.productImg + "'\n" +
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

    htmlContent += "  <span class=\"badge badge-pill badge-danger my-1 mr-1\"\n" +
        " id='" + this.productDiscount + "'>" + getData.discount + "%</span>\n";

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


    if (radioform.length < length) {
        length = radioform.length
    }

    data.sort(function (a, b) {
        if (a.name < b.name) return -1;
        if (a.name > b.name) return 1;
        return 0;
    });

    $("#product_body").empty();
    for (var i = 0; i < length; i++) {

        var obj = new Product(data[i].id);
        document.getElementById("product_body").innerHTML += obj.createProduct(data[i]);

    }

    newData = data.slice(0);
    newData2 = data.slice(0);

}


$(document).ready(function () {

    document.getElementById("range1").innerText = document.getElementById("myRange1").value;
    document.getElementById("range2").innerText = document.getElementById("myRange2").value

    var obj = new Product(0);
    obj.default();

    var radios = document.radios.exampleRadios;

    document.getElementById(radios[0].id).onclick = function (e) {

        //name ascend


        if (radioform.length < length) {
            length = radioform.length
        }



        radioform.sort(function (a, b) {
            if (a.name < b.name) return -1;
            if (a.name > b.name) return 1;
            return 0;
        });

        data.sort(function (a, b) {
            if (a.name < b.name) return -1;
            if (a.name > b.name) return 1;
            return 0;
        });

        $("#product_body").empty();


        for (var i = 0; i < radioform.length; i++) {

            var obj = new Product(radioform[i].id);
            document.getElementById("product_body").innerHTML += obj.createProduct(radioform[i]);

        }

    };


    document.getElementById(radios[1].id).onclick = function (e) {

        //name ascend

        data.sort(function (a, b) {
            if (b.name < a.name) return -1;
            if (b.name > a.name) return 1;
            return 0;
        });

        radioform.sort(function (a, b) {
            if (b.name < a.name) return -1;
            if (b.name > a.name) return 1;
            return 0;
        });

        $("#product_body").empty();


        for (var i = 0; i < length; i++) {

            var obj = new Product(radioform[i].id);
            document.getElementById("product_body").innerHTML += obj.createProduct(radioform[i]);
        }
    };


    document.getElementById(radios[2].id).onclick = function (e) {

        //name ascend
        radioform.sort(function (a, b) {
            return a.price - b.price;
        });

        data.sort(function (a, b) {
            return a.price - b.price;
        });


        $("#product_body").empty();


        for (var i = 0; i < length; i++) {

            var obj = new Product(radioform[i].id);
            document.getElementById("product_body").innerHTML += obj.createProduct(radioform[i]);

        }

    };


    document.getElementById(radios[3].id).onclick = function (e) {

        //name ascend


        radioform.sort(function (a, b) {
            return b.price - a.price;
        });

        data.sort(function (a, b) {
            return b.price - a.price;
        });

        $("#product_body").empty();


        for (var i = 0; i < length; i++) {


            var obj = new Product(radioform[i].id);
            document.getElementById("product_body").innerHTML += obj.createProduct(radioform[i]);

        }

    };


    document.getElementById(radios[4].id).onclick = function (e) {

        //discount up

        data.sort(function (a, b) {
            if (a.discount < b.discount) return -1;
            if (a.discount > b.discount) return 1;
            return 0;
        });

        radioform.sort(function (a, b) {
            if (a.discount < b.discount) return -1;
            if (a.discount > b.discount) return 1;
            return 0;
        });
        $("#product_body").empty();


        for (var i = 0; i < length; i++) {

            var obj = new Product(radioform[i].id);
            document.getElementById("product_body").innerHTML += obj.createProduct(radioform[i]);

        }

    };


    document.getElementById(radios[5].id).onclick = function (e) {

        //discount up


        radioform.sort(function (a, b) {
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


            var obj = new Product(radioform[i].id);
            document.getElementById("product_body").innerHTML += obj.createProduct(radioform[i]);

        }


        newData = data.slice(0);
        newData2 = data.slice(0);
    };


    //filteration


    document.getElementById("checks1").onchange = function (e) {

        //
        // if ($("#check1").is(":checked") ||
        //     ($("#check2").is(":checked") && $("#check3").is(":checked") && $("#check4").is(":checked")) ||
        //     (!$("#check2").is(":checked") && !$("#check3").is(":checked") && !$("#check4").is(":checked") && !$("#check1").is(":checked")) ||
        //     ($("#check1").is(":checked") && $("#check2").is(":checked")) ||
        //     ($("#check1").is(":checked") && $("#check3").is(":checked")) ||
        //     ($("#check1").is(":checked") && $("#check4").is(":checked"))) {
        //
        //     newData = data.slice(0);
        //     console.log(data.length);
        // }


        if (($("#check1").is(":checked") ||
            ($("#check2").is(":checked") && $("#check3").is(":checked") && $("#check4").is(":checked")) ||
            (!$("#check2").is(":checked") && !$("#check3").is(":checked") && !$("#check4").is(":checked") && !$("#check1").is(":checked")) ||
            ($("#check1").is(":checked") && $("#check2").is(":checked")) ||
            ($("#check1").is(":checked") && $("#check3").is(":checked")) ||
            ($("#check1").is(":checked") && $("#check4").is(":checked"))) && (!$("#check5").is(":checked") && !$("#check6").is(":checked"))) {

            newData = data.slice(0);
            newData2 = data.slice(0);
            console.log(data.length);
        }


        //women only

        if ($("#check2").is(":checked") && !$("#check3").is(":checked") && !$("#check4").is(":checked") && !$("#check1").is(":checked")) {
            newData = [];
            for (var i = 0; i < data.length; i++) {

                if (data[i].age1 == "1") {
                    newData.push(data[i])
                }

            }
        }

        //Men only
        if (!$("#check2").is(":checked") && $("#check3").is(":checked") && !$("#check4").is(":checked") && !$("#check1").is(":checked")) {
            newData = [];
            for (var i = 0; i < data.length; i++) {

                if (data[i].age2 == "1") {
                    newData.push(data[i]);

                }
            }
        }

        //Kids only
        if (!$("#check2").is(":checked") && !$("#check3").is(":checked") && $("#check4").is(":checked") && !$("#check1").is(":checked")) {
            newData = [];
            for (var i = 0; i < data.length; i++) {
                if (data[i].age3 == "1") {
                    newData.push(data[i]);
                }
            }


        }
//Women and men
        if ($("#check2").is(":checked") && $("#check3").is(":checked") && !$("#check4").is(":checked") && !$("#check1").is(":checked")) {
            newData = [];
            for (var i = 0; i < data.length; i++) {

                if (data[i].age1 == 1 || data[i].age2 == 1) {
                    newData.push(data[i]);
                }
            }

        }
        //Women and kids
        if ($("#check2").is(":checked") && !$("#check3").is(":checked") && $("#check4").is(":checked") && !$("#check1").is(":checked")) {
            newData = [];
            for (var i = 0; i < data.length; i++) {

                if (data[i].age1 == 1 || data[i].age3 == 1) {

                    newData.push(data[i]);
                }
            }
        }

//men and kids
        if (!$("#check2").is(":checked") && $("#check3").is(":checked") && $("#check4").is(":checked") && !$("#check1").is(":checked")) {
            newData = [];
            for (var i = 0; i < data.length; i++) {
                if (data.age2 == 1 || data[i].age3 == 1) {
                    newData.push(data[i]);
                }
            }

        }


        var newDataform = [];
        newData = newData.filter(value => -1 !== newData2.indexOf(value));

        var l = 0;


        $("#product_body").empty();
        console.log(length);
        console.log(newData.length);
        for (var i = 0; i < newData.length; i++) {

            if ( (newData[i].price >= document.getElementById("range1").innerText) &&
                (newData[i].price <= document.getElementById("range2").innerText) && (l < length))
               {
                l++;
                console.log(i, "hhhhhhhhhhhhh");
                var obj = new Product(newData[i].id);
                document.getElementById("product_body").innerHTML += obj.createProduct(newData[i]);
                newDataform.push(newData[i])


            }
        }


        radioform = newDataform.slice(0);

    };


    document.getElementById("checks2").onchange = function (e) {


        length = $("#number option:selected").text();
        document.getElementById("range1").innerText = document.getElementById("myRange1").value;
        document.getElementById("range2").innerText = document.getElementById("myRange2").value;


        if (($("#check1").is(":checked") ||
            ($("#check2").is(":checked") && $("#check3").is(":checked") && $("#check4").is(":checked")) ||
            (!$("#check2").is(":checked") && !$("#check3").is(":checked") && !$("#check4").is(":checked") && !$("#check1").is(":checked")) ||
            ($("#check1").is(":checked") && $("#check2").is(":checked")) ||
            ($("#check1").is(":checked") && $("#check3").is(":checked")) ||
            ($("#check1").is(":checked") && $("#check4").is(":checked"))) && (!$("#check5").is(":checked") && !$("#check6").is(":checked"))) {

            newData = data.slice(0);
            newData2 = data.slice(0);
            console.log(data.length);
        }else if (!$("#check5").is(":checked") && !$("#check6").is(":checked")) {
            newData2 = data.slice(0);
        }

//new only
        if ($("#check5").is(":checked") && !$("#check6").is(":checked")) {
            newData2 = [];

            for (var i = 0; i < data.length; i++) {

                if (data[i].new == "1") {
                    newData2.push(data[i])
                }
            }
        }


        if (!$("#check5").is(":checked") && $("#check6").is(":checked")) {
            newData2 = [];
            for (var i = 0; i < data.length; i++) {
                if (data[i].discount > 0) {
                    newData2.push(data[i]);
                }
            }
        }


        if ($("#check5").is(":checked") && $("#check6").is(":checked")) {
            newData2 = [];


            for (var i = 0; i < data.length; i++) {

                if (data[i].new == "1" && data[i].discount > 0) {
                    newData2.push(data[i]);
                }
            }
        }

        newData2 = newData.filter(value => -1 !== newData2.indexOf(value));
       console.log(newData2.length);
        var newdataform = [];
        var l = 0;

        $("#product_body").empty();
        for (var i = 0; i < newData2.length; i++)
        {

            if (((newData2[i].price >= document.getElementById("range1").innerText) &&
                (newData2[i].price <= document.getElementById("range2").innerText)) && (l < length))
            {
                var obj = new Product(newData2[i].id);
                document.getElementById("product_body").innerHTML += obj.createProduct(newData2[i]);
                newdataform.push(newData2[i]);
                l++;
                console.log("kkkkkkkkkkkk",l);

            }
        }
        radioform = newdataform;



    };


});


