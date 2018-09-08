var d = [
    {"id": 0, "name": "Cat0", "img":"images/Placeholder.png"},
    {"id": 1, "name": "Cat1", "img":"images/Placeholder.png"},
    {"id": 2, "name": "Cat2", "img":"images/Placeholder.png"},
    {"id": 3, "name": "Cat3", "img":"images/Placeholder.png"},
    {"id": 4, "name": "Cat4", "img":"images/Placeholder.png"},
    {"id": 5, "name": "Cat5","img":"images/Placeholder.png"},
    {"id": 6, "name": "Cat6", "img":"images/Placeholder.png"},
    {"id": 7, "name": "Cat7", "img":"images/Placeholder.png"},
    {"id": 8, "name": "Cat8", "img":"images/Placeholder.png"},
    {"id": 9, "name": "Cat9", "img":"images/Placeholder.png"},
    {"id": 10, "name": "ppp", "img":"images/Placeholder.png"},
    {"id": 11, "name": "nnn", "img":"images/Placeholder.png"},
    {"id": 12, "name": "fff", "img":"images/Placeholder.png"},
    {"id": 13, "name": "abe", "img":"images/Placeholder.png"},
    {"id": 14, "name": "ooo", "img":"images/Placeholder.png"},
    {"id": 15, "name": "ffbf", "img":"images/Placeholder.png"},
    {"id": 16, "name": "abbe", "img":"images/Placeholder.png"},

];


function Category(catId)
{
    this.id= catId;
    this.categoryName = "category-"+this.id;
    this.categoryImage = this.categoryName + "-img";
    this.htmlContent='';
};


Category.prototype.CreateCategory = function () {

    this.htmlContent = "<div class=\"col-lg-3 col-md-3 col-sm-6 col-6\"><div class=\"card shadow card-shadow mb-2\">\n" +
        "                        <img class=\"card-img\" src='"+d[this.id].img +"' alt=\"Card image\" id='"+this.categoryImage +"'>\n" +
        "                        <div class=\"card-img-overlay\">\n" +
        "                            <span class=\"card-title text-center display-6\" id='"+this.categoryName+"'>"+d[this.id].name+"</span>\n" +
        "                        </div>\n" +
        "                    </div> </div>";

    return this.htmlContent;
};



$(document).ready(function () {

    $("#Categories").empty();
    for(var i=0; i<9;i++)
    {
        var cat = new Category(i);
        document.getElementById("Categories").innerHTML += cat.CreateCategory();
    }





});
