export const getLocation = (pathname) => {

    const splitLocation = pathname.split('/');
    let finalLocation;

    if(splitLocation[splitLocation.length - 1] === '' || splitLocation[splitLocation.length - 1].includes(':') ){
        finalLocation = splitLocation[splitLocation.length - 2];
    }else{
        finalLocation = splitLocation[splitLocation.length - 1];
    }

    return finalLocation;
}