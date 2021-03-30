import {powertrainPricing, paintPricing, wheelPricing, interiorPricing} from './pricing';



// Function to calculate price. Takes inputs from current selection context

export const calculatePrice = (powertrain, color, wheels, interior) => {

    const powertrainVal = powertrainPricing.find(el => el.name === powertrain);
    const paintVal = paintPricing.find(el => el.name === color);
    const wheelsVal = wheelPricing.find(el => el.name === wheels);
    const interiorVal = interiorPricing.find(el => el.name === interior);


    return [powertrainVal.price, paintVal.price, wheelsVal.price, interiorVal.price];

}


// Formats Price

export function numberWithCommas(num) {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
