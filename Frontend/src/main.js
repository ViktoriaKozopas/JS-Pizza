/**
 * Created by chaika on 25.01.16.
 */

$(function () {
    //This code will execute when the page is ready
    var PizzaMenu = require('./pizza/PizzaMenu');
    var PizzaCart = require('./pizza/PizzaCart');
    var Pizza_List = require('./Pizza_List');

    PizzaCart.initialiseCart();
    PizzaMenu.initialiseMenu();

    $(".nav-pills li").on("click", function () {
        $(".nav-pills li").removeClass("active");
        $(this).addClass("active");
        var filt = $(this).find('a').data("filter");
        PizzaMenu.filterPizza(filt);
    })

    $(".clear-cart").click(function () {
        PizzaCart.clearCart();
    });

    $(".next-step-button").click(function () {
        if ($("#inputName").val() === "") {
            $(".name-help-block").show();
        }else $(".name-help-block").hide();
        if ($("#inputPhone").val() === "") {
            $(".phone-help-block").show();
        }else  $(".phone-help-block").hide();
        if ($("#inputAddress").val() === "") {
            $(".address-help-block").show();
        }else  $(".address-help-block").hide();
    });

    $(".form-control").focus(function () {
        if ($("#inputName").val() !== "") {
            $(".name-help-block").hide();
        }
        if ($("#inputPhone").val() !== "") {
            $(".phone-help-block").hide();
        }
        if ($("#inputAddress").val() !== "") {
            $(".address-help-block").hide();
        }
    })


});