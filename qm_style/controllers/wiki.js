var fn_index = async(ctx, next) => {
    ctx.render('wiki/wiki.html', {

    });
}

var fun_getting_started = async(ctx, next) => {
    ctx.render("wiki/getting_started.html", {


    });
}

module.exports = {
    "GET /wiki": fn_index,
    "GET /wiki/getting_started": fun_getting_started
}