export interface GetInfoError {
    error: 'Incorrect phone number.'| 'No data available.'
}

export interface GetInfo {
    operator: string, 
    region: string
}