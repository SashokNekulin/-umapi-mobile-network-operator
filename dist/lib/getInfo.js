"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const libphonenumber_js_1 = require("libphonenumber-js");
const phone_1 = require("../phone");
function getInfo(phone) {
    const phoneNumber = (0, libphonenumber_js_1.default)(phone, 'RU');
    if (!phoneNumber)
        return { error: 'Incorrect phone number.' };
    const phoneStr = phoneNumber.number.toString();
    const prefix = Number(phoneStr.substring(2, 5));
    const sufix = Number(phoneStr.substring(5, 12));
    const data = phone_1.default.filter(e => e[0] === prefix && sufix >= e[1] && sufix <= e[2]).shift();
    if (data)
        return { operator: String(data[4]), region: String(data[5]) };
    return { error: 'No data available.' };
}
exports.default = getInfo;
//# sourceMappingURL=getInfo.js.map