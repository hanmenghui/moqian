/***
 * 订单
 */
var fun_orders = async(ctx, next) => {
    ctx.render("admin/orders.html", {});
}

var fun_price = async(ctx, next) => {
    ctx.render("admin/price.html", {

    })
}

module.exports = {
    'GET /orders': fun_orders,
    'GET /price': fun_price
}