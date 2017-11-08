var fn_sign = async(ctx, next) => {
    ctx.render('signin.html', {

    });
}

var fn_signin = async(ctx, next) => {
    ctx.render('admin/user.html', {

    })
}


var fn_signup = async(ctx, next) => {
    ctx.render("signup.html", {

    })
}

var fn_forgotpwd = async(ctx, next) => {
    ctx.render('forgot-pwd.html', {

    })
}

var fn_signup_post = async(ctx, next) => {

}

module.exports = {
    'GET /signin': fn_sign,
    'GET /signin_post': fn_signin,
    'GET /signup': fn_signup,
    'POST /signup': fn_signup_post,
    'GET /forgot-pwd': fn_forgotpwd
}