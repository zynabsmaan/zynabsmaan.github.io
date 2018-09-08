var dataoriginal = [
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
    {"id": 16, "name": "abbe", "price": 6000, "new": "0", "discount": 0, "age1": "1", "age2": "1", "age3": "1", "sales":50},

];

var totalPrice =0;
function Product(count) {
    this.id = count;
    this.productId = "product_" + this.id;
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



Product.prototype.CreateHtml = function (data) {

    this.htmlContent = " <div class=\"col-lg-4 col-md-6 col-sm-6 col-12\">\n" +
        "\n" +
        "                    <div class=\"card mb-4 shadow card-shadow\" id='"+this.productId +"'>\n" +
        "                        <img class=\"card-img-top align-self-center\" src=\"images/Placeholder.png\" id='" +this.productImg+ "'\n" +
        "                             alt=\"Card image cap\" style=\"position:relative;width:15vw;min-width:150px;\">\n";

    if (data.new == 1)
    {
        this.htmlContent +=   "<div class=\"card-img-overlay\">\n" +
            "                            <div class=\"card-title text-center\">\n" +
            "                                <span class=\"badge badge-pill bg-danger font-weight-bold text-white display-9\">New</span>\n" +
            "                            </div>\n" +
            "                        </div>\n";
    }


        this.htmlContent += "                        <div class=\"card-body text-center\">\n" +
        "                            <h5 class=\"card-title\">\n" +
        "                                <span class=\"text-uppercase font-weight-bold mb-2 d-block\" id='"+this.productName+"'>\n" +
        data.name +"</span>\n" +
        "                                <span class=\" badge badge-pill badge-success my-1 mr-1\" id='"+this.productPrice+"'>\n" +
        "                                    <i class=\"fa fa-dollar mr-2\"></i>"+data.price +"</span>\n" +
        "\n" ;
            if(data.discount >0)
            {
                this.htmlContent +=  "<span class=\"badge badge-pill badge-danger my-1 mr-1\" id='"+this.productDiscount+"'>\n" +
                    "                                    <i class=\"fa fa-arrow-circle-down mr-2\"></i> "+data.discount+"</span>\n";
            }

      this.htmlContent+=  "<span class=\"badge badge-pill badge-info my-1 mr-1\" id='"+this.productSales+"'>#"+data.sales+"</span>\n";
            if(data.age1 == 1)
            {
                this.htmlContent +=    "<span class=\" badge badge-pill bg-pink my-1 mr-1\" id='"+this.productAge1+"'>Women</span>\n";
            }

    if(data.age2==1)
    {
        this.htmlContent +=    "<span class=\" badge badge-pill bg-pink my-1 mr-1\" id='"+this.productAge2+"'>Men</span>\n";
    }

    if(data.age3 == 1)
    {
        this.htmlContent +=    "<span class=\" badge badge-pill bg-pink my-1 mr-1\" id='"+this.productAge3+"'>Kids</span>\n";
    }


      this.htmlContent+=  "                            </h5>\n" +
        "                            <p class=\"card-text text-truncate\" id=\"product_2-text\">Contrary to popular belief, Lorem\n" +
        "                                Ipsum is not simply\n" +
        "                                random text. It has roots\n" +
        "                                in</p>\n" +
        "                            <div class=\"row\">\n" +
        "                                <div class=\"col-lg-7 col-md-12 col-sm-12 col-12\">\n" +
        "                                    <button type=\"button\" href=\"#11\" class=\"btn btn-info text-white btn-sm w-100 px-0 m-1\" role=\"button\" onclick='alert(\"No Compare\");' id='"+this.btnAddToCart+"'>Add to compare</button>\n" +
        "                                </div>\n" +
        "                                <div class=\"col-lg-5 col-md-12 col-sm-12 col-12\" >\n" +
        "                                    <a  href=\"product.html\" class=\"btn btn-light mr-3 btn-sm w-100 mx-1 m-1\"   id='"+this.btnDetails+"'>Details</a>\n" +
        "\n" +
        "                                </div>\n" +
        "                            </div>\n" +
        "                            <form class=\".form\">\n" +
        "                                <div class=\"row\">\n" +
        "                                    <div class=\"col-lg-6 col-6 col-md-12 col-sm-12\">\n" +
        "                                        <label for='"+this.productSaleInput+"' class=\"sr-only \">qulaliy</label>\n" +
        "                                        <input type=\"text\" id='"+this.productSaleInput+"' class=\"form-control m-1\"\n" +
        "                                               aria-describedby=\"inputGroup-sizing-sm\" aria-label=\"Small\">\n" +
        "                                    </div>\n" +
        "\n" +
        "                                <div class=\"col-lg-6 col-6 col-md-12 col-sm-12\">\n" +
        "                                    <button type=\"button\" class=\"btn btn-success btn-sm w-100 mx-1 m-1\" id='"+this.btnSubmitSales+"' onclick='onclickSubmit(this)'>Add to cart\n" +
        "                                    </button>\n" +
        "                                </div>\n" +
        "                                </div>\n" +
        "                            </form>\n" +
        "                        </div>\n" +
        "                    </div>\n" +
        "                </div>";


return this.htmlContent

};

Product.prototype.default = function()
{

    dataoriginal.sort(function (a, b) {
        if (b.sales < a.sales) return -1;
        if (b.sales > a.sales) return 1;
        return 0;
    });

    var dataCopy = dataoriginal.slice(0,9);

    dataCopy.sort(function (a, b) {
        if (b.price < a.price) return -1;
        if (b.price > a.price) return 1;
        return 0;
    });


    $("#products-area").empty();
    for(var i=0; i<9 ; i++)
    {
        var p = new Product(dataCopy[i].id);
        document.getElementById("products-area").innerHTML += p.CreateHtml(dataCopy[i]);
    }


    //top salses list
    for(var i=0; i<6; i++)
    {
        document.getElementById("productTopSales-" + (i+1)).innerHTML = "<i class=\"fa fa-caret-right mr-2\"></i>\n" +
            dataCopy[i].name +"\n" +
            "   <span class=\"badge badge-pill bg-danger ml-2\">"+dataCopy[i].price+"<i class=\"fa fa-dollar \"></i></span></a>";

    }


    $("#pricelabel").addClass("thick");


};




$(document).ready(function () {

  var p = new Product(0);
  p.default();


      $("#orderprice").on("click", function () {


          var dataCopy = dataoriginal.slice(0,9)

          dataCopy.sort(function (a, b) {
              if (b.price < a.price) return -1;
              if (b.price > a.price) return 1;
              return 0;
          });

          $("#products-area").empty();
          for(var i=0; i<9 ; i++)
          {
              var p = new Product(dataCopy[i].id);
              document.getElementById("products-area").innerHTML += p.CreateHtml(dataCopy[i]);
          }

          //top salses list
          for(var i=0; i<6; i++)
          {
              document.getElementById("productTopSales-" + (i+1)).innerHTML = "<i class=\"fa fa-caret-right mr-2\"></i>\n" +
                  dataCopy[i].name +"\n" +
                  "   <span class=\"badge badge-pill bg-danger ml-2\">"+dataCopy[i].price+"<i class=\"fa fa-dollar \"></i></span></a>";

          }

          $("#pricelabel").addClass("thick");
          $("#saleslabel, #namelabel").removeClass("thick");
      });


      $("#ordersales").on("click", function () {

          var dataCopy = dataoriginal.slice(0,9);

          dataCopy.sort(function (a, b) {
              if (b.sales < a.sales) return -1;
              if (b.sales > a.sales) return 1;
              return 0;
          });

          $("#products-area").empty();
          for(var i=0; i<9 ; i++)
          {
              var p = new Product(dataCopy[i].id);
              document.getElementById("products-area").innerHTML += p.CreateHtml(dataCopy[i]);
          }


          //top salses list
          for(var i=0; i<6; i++)
          {
              document.getElementById("productTopSales-" + (i+1)).innerHTML = "<i class=\"fa fa-caret-right mr-2\"></i>\n" +
                  dataCopy[i].name +"\n" +
                  "   <span class=\"badge badge-pill bg-danger ml-2\">"+dataCopy[i].price+"<i class=\"fa fa-dollar \"></i></span></a>";

          }

          $("#saleslabel").addClass("thick");
          $("#pricelabel, #namelabel").removeClass("thick");

      });


      $("#ordername").on("click", function () {


          var dataCopy = dataoriginal.slice(0,9)

          dataCopy.sort(function (a, b) {
              if (a.name < b.name) return -1;
              if (a.name > b.name) return 1;
              return 0;
          });


          $("#products-area").empty();
          for(var i=0; i<9 ; i++)
          {
              var p = new Product(dataCopy[i].id);
              document.getElementById("products-area").innerHTML += p.CreateHtml(dataCopy[i]);
          }


          //top salses list
          for(var i=0; i<6; i++)
          {
              document.getElementById("productTopSales-" + (i+1)).innerHTML = "<i class=\"fa fa-caret-right mr-2\"></i>\n" +
                  dataCopy[i].name +"\n" +
                  "   <span class=\"badge badge-pill bg-danger ml-2\">"+dataCopy[i].price+"<i class=\"fa fa-dollar \"></i></span></a>";

          }

          $("#namelabel").addClass("thick");
          $("#saleslabel, #pricelabel").removeClass("thick");

      });

  });



function Sort() {


    if ($('#orderprice').is(':checked')) {

        var dataCopy = dataoriginal.slice(0, 9)

        dataCopy.sort(function (a, b) {
            if (b.price < a.price) return -1;
            if (b.price > a.price) return 1;
            return 0;
        });

        $("#products-area").empty();
        for (var i = 0; i < 9; i++) {
            var p = new Product(dataCopy[i].id);
            document.getElementById("products-area").innerHTML += p.CreateHtml(dataCopy[i]);
        }

        //top salses list
        for (var i = 0; i < 6; i++) {
            document.getElementById("productTopSales-" + (i + 1)).innerHTML = "<i class=\"fa fa-caret-right mr-2\"></i>\n" +
                dataCopy[i].name + "\n" +
                "   <span class=\"badge badge-pill bg-danger ml-2\">" + dataCopy[i].price + "<i class=\"fa fa-dollar \"></i></span></a>";
        }

        $("#pricelabel").addClass("thick");
        $("#saleslabel, #namelabel").removeClass("thick");
    }

    if ($('#ordersales').is(':checked')) {
        var dataCopy = dataoriginal.slice(0, 9);

        dataCopy.sort(function (a, b) {
            if (b.sales < a.sales) return -1;
            if (b.sales > a.sales) return 1;
            return 0;
        });

        $("#products-area").empty();
        for (var i = 0; i < 9; i++) {
            var p = new Product(dataCopy[i].id);
            document.getElementById("products-area").innerHTML += p.CreateHtml(dataCopy[i]);
        }


        //top salses list
        for (var i = 0; i < 6; i++) {
            document.getElementById("productTopSales-" + (i + 1)).innerHTML = "<i class=\"fa fa-caret-right mr-2\"></i>\n" +
                dataCopy[i].name + "\n" +
                "   <span class=\"badge badge-pill bg-danger ml-2\">" + dataCopy[i].price + "<i class=\"fa fa-dollar \"></i></span></a>";

        }

        $("#saleslabel").addClass("thick");
        $("#pricelabel, #namelabel").removeClass("thick");

    }

    if($("#ordername").is(":checked"))
    {
        var dataCopy = dataoriginal.slice(0,9)

        dataCopy.sort(function (a, b) {
            if (a.name < b.name) return -1;
            if (a.name > b.name) return 1;
            return 0;
        });


        $("#products-area").empty();
        for(var i=0; i<9 ; i++)
        {
            var p = new Product(dataCopy[i].id);
            document.getElementById("products-area").innerHTML += p.CreateHtml(dataCopy[i]);
        }


        //top salses list
        for(var i=0; i<6; i++)
        {
            document.getElementById("productTopSales-" + (i+1)).innerHTML = "<i class=\"fa fa-caret-right mr-2\"></i>\n" +
                dataCopy[i].name +"\n" +
                "   <span class=\"badge badge-pill bg-danger ml-2\">"+dataCopy[i].price+"<i class=\"fa fa-dollar \"></i></span></a>";

        }

        $("#namelabel").addClass("thick");
        $("#saleslabel, #pricelabel").removeClass("thick");

    }
}

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
    dataoriginal.sort(function (a, b) {
        if (b.sales < a.sales) return -1;
        if (b.sales > a.sales) return 1;
        return 0;
    });


}

function searchSet(id, s) {

    for(var i=0; i<dataoriginal.length;i++)
    {
        if(dataoriginal[i].id == id)
        {
            dataoriginal[i].sales += parseInt(s);
           totalPrice +=  dataoriginal[i].price *parseInt(s);
           console.log("Now the total price is: ", totalPrice);

            break;
        }
    }
    return dataoriginal[i].sales
}




