var fun_demoIndex = async(ctx, next) => {
    ctx.render("semantic_demo.html", {});
}

module.exports = {
    "GET /semantic/demo": fun_demoIndex
}