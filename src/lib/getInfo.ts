import { GetInfo, GetInfoError } from 'interface/getInfo';
import parsePhoneNumber from 'libphonenumber-js';
import phoneData from '../phone';

/**
 * @description
 * Information about the mobile operator.
 *
 * @param {String} phone Mobile operator number
 * 
 * @example
 * getInfo('+7(908)2903350');
 * return { operator: 'ООО "Т2 Мобайл"', region: 'Калининградская обл.' }
 * 
 * or error
 * 
 * getInfo('');
 * return {error: 'Incorrect phone number.'} || {error: 'No data available.'}
 * 
 */
function getInfo(phone: string): GetInfoError | GetInfo {
    const phoneNumber = parsePhoneNumber(phone, 'RU');
    if (!phoneNumber) return {error: 'Incorrect phone number.'}
    const phoneStr: string = phoneNumber.number.toString()
    const prefix: number = Number(phoneStr.substring(2,5))
    const sufix: number = Number(phoneStr.substring(5,12))
    const data = phoneData.filter( e => e[0] === prefix && sufix >= e[1] && sufix <= e[2] ).shift()
    if(data) return {operator: String(data[4]), region: String(data[5])};
    return {error: 'No data available.'}
}

export default getInfo;
