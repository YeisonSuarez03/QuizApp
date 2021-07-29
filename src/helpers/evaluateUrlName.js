export const evaluateUrlName = (url) => {
    let isPicSet;
    (url === null || url === '') ? isPicSet = false : isPicSet = true;

    return isPicSet;

}