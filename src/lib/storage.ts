const defaultStorage = window.sessionStorage;
export const getItemFromStorage = (key,storage = defaultStorage) => storage.getItem(key);
export const setItemToStorage = (key, value,  storage=defaultStorage) => storage.setItem(key,value)
export const clearItemFromStorage = (key, storage = defaultStorage) => storage.removeItem(key)

const authHeaderKeys = ["platform", "Authorization"];

export const saveAuthDataToDevice = (headers, accessToken = null) =>{
    authHeaderKeys.forEach((key) => {
        if(key.toLowerCase() === 'authorization'.toLowerCase()){
            if(accessToken){
                setItemToStorage('token',accessToken);
            }
            else{
                setItemToStorage(key, headers[key])
            }
        }
    })
}