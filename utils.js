var path = require("path");

exports.normalize = function(args) {
    return path.normalize(args)
}

exports.join = function(args) {
    return path.join(args)
}

exports.FileExtension = function(args) {
    return path.extname(args)
}

exports.resolve = function(args) {
    return path.resolve(args)
}

exports.sep = function(args) {
    return path.sep(args)
}

exports.delimiter = function(args) {
    return path.delimiter(args)
}
