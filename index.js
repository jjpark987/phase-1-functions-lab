function distanceFromHqInBlocks(pickupLocation) {
    return Math.abs(pickupLocation - 42);
}

function distanceFromHqInFeet(pickupLocation) {
    return distanceFromHqInBlocks(pickupLocation) * 264;
}

function distanceTravelledInFeet(initialBlock, finalBlock) {
    return Math.abs(finalBlock - initialBlock) * 264;
}

function calculatesFarePrice (initialBlock, finalBlock) {
    const distanceInFeet = distanceTravelledInFeet(initialBlock, finalBlock);
    if (distanceInFeet < 400) {
        return 0;
    } else if (distanceInFeet > 400 && distanceInFeet < 2000) {
        return (distanceInFeet - 400) * 0.02;
    } else if (distanceInFeet > 2000 && distanceInFeet < 2500) {
        return 25;
    } else {
        return `cannot travel that far`;
    }
}