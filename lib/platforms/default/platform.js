var IO = require("../../io").IO;

var defaultStream = {
    write : function(string) {
        if (typeof print !== "undefined")
            print(string);
    }
};

exports.STDOUT = new IO(null, defaultStream);
exports.STDERR = new IO(null, defaultStream);

exports.ARGV = __global__.arguments || [];

exports.ENV = {};