export const getAppType =  () =>  {
    if (typeof document != 'undefined') {
        return "Web"
    }
    else if (typeof navigator != 'undefined' && navigator.product == 'ReactNative') {
       return 'ReactNative'
    }
    return 'NodeJS'
}
