const defaultStorage = window.localStorage;
export const getItemFromStorage = (storage = defaultStorage) => storage.getItem("token");
export const setItemToStorage = (value, storage=defaultStorage) => storage.setItem("token",value)
export const clearItemFromStorage = (storage = defaultStorage) => storage.removeItem("token")

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