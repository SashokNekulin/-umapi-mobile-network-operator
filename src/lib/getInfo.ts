import parsePhoneNumber from 'libphonenumber-js';
import phoneData from '../phone';

/**
 * @description
 * Format phone.
 *
 * @param {String} phone phone
 * @returns {String}
 *
 * @throws If query is not an object g
 *
 * @example
 * 
 */
function getInfo(phone: string): string {
    const phoneNumber = parsePhoneNumber(phone, 'RU');
    if (!phoneNumber) {
        throw new Error('[@umapi/mobile-network-operator]: Incorrect phone number.');
    }

    const phoneStr: string = phoneNumber.number.toString();

    //const oneData = phoneData.filter( e => e[0] === phoneStr );
    
    return phone;
}

export default getInfo;
