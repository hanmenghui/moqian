const path = require('path');
const mime = require('mime');
const fs = require('fs');

function statciFiles(url, dir) {
    return async(ctx, next) => {
        let rpath = ctx.request.path;
        console.log(`request static file:${rpath}`);
        console.log(`${url}`);
        console.log(rpath.startsWith(url));
        if (rpath.startsWith(url)) {
            let fp = path.join(dir, rpath.substring(url.length));
            console.log(`file url:${fp}`);
            fs.exists(fp, (exists) => {
                console.log(`eeeeeee:${exists}`);
                if (exists) {
                    fs.readFile(fp, (err, data) => {
                        console.log(`errrrr:${err}`);
                        if (err) throw err;
                        ctx.response.type = mime.lookup(rpath);
                        console.log(data);
                        ctx.response.body = data;
                    });
                } else {
                    ctx.response.status = 404;
                }
            });
        } else {
            await next();
        }
    }
}


module.exports = statciFiles;