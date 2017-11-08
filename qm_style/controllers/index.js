var fn_index = async(ctx, next) => {
    ctx.render('index.html', {
        isIndex: true
    })
};

var fn_project = async(ctx, nect) => {
    ctx.render("project.html", {

    })
}

var fn_aboutus = async(ctx, next) => {
    ctx.render("aboutus.html", {

    })
}

module.exports = {
    'GET /': fn_index,
    'GET /project': fn_project,
    'GET /aboutus': fn_aboutus
};