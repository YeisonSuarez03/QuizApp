export const getPlacementByWidth = (windowWidth, placeD, placeM) => {
    let placement;

    if(windowWidth <= 768){
        placement = placeM;
    }else{
        placement = placeD;
    }

    return placement;
}