import { GetInfo, GetInfoError } from 'interface/getInfo';
declare function getInfo(phone: string): GetInfoError | GetInfo;
export default getInfo;
