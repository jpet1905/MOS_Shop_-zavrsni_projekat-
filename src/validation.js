// funkcije koje se koriste u Signup-u za validaciju
export const usernameLength = (str) => str.trim().length >= 4;
export const emailLength = (str) => str.trim().length !== 0;
export const isValidEmail = (str) => {
    return (/^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(str))
}
export const passwordLength = (str) => str.length >= 7;
// upotreba RegEx-a za proveru sadrzanosti broja i velikog slova u sifri
export const doesItHaveNumber = (str) => {
    return (/\d/.test(str))
}
export const hasUpperCase = (str) => {
    return (/[A-Z]/.test(str))
}

// funkcija koja se koristi u CreateProduct za validaciju, brand nije obavezan za svaki proizvod
export const isValidNewProduct = (size, price, category, productName, description, avatar) => size.trim() !== ""
    // && price.trim() !== ""
    && !isNaN(Number(price))
    && category.trim() !== ""
    && productName.trim() !== ""
    && description.trim() !== ""
    && avatar.trim() !== ""
    && validURL(avatar)

// pomocna funkcija koja proverava url pomocu RegEx-a
function validURL(str) {
    var pattern = new RegExp('^(https?:\\/\\/)?' + // protocol
        '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + // domain name
        '((\\d{1,3}\\.){3}\\d{1,3}))' + // OR ip (v4) address
        '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // port and path
        '(\\?[;&a-z\\d%_.~+=-]*)?' + // query string
        '(\\#[-a-z\\d_]*)?$', 'i'); // fragment locator
    return pattern.test(str);
}