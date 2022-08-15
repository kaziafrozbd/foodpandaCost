function pandaCost(shingara, somucha, jilapi){
    if(shingara.typeOf != 'number' || somucha.typeOf != 'number' || jilapi.typeOf != 'number'){
        return 'please send proper number !'
    }
    const shingaraPerPrice = 7;
    const somuchaPerPrice = 10;
    const jilapiPerPrice = 15;
    const shingaraTotalPrice = shingaraPerPrice * shingara;
    const somuchaTotalPrice = somuchaPerPrice * somucha;
    const jilapiTotalPrice = jilapiPerPrice * jilapi;
    const total = shingaraTotalPrice + somuchaTotalPrice + jilapiTotalPrice;
    return total;
}
const totalPrice = pandaCost(5, 5 ,5);
console.log(totalPrice);