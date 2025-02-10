const convert = (amount, fromCurrency, toCurrency) => {
    if (isNaN(amount) || !amount || !fromCurrency || !toCurrency) return null;

    const exchangesRate = {
        USD: {
            EUR: 1.1,
            GBP: 0.85
        },
        EUR: {
            USD: 0.9,
            GBP: 0.75
        },
        GBP: {
            USD: 1.25,
            EUR: 1.35
        }
    }

    const rate = exchangesRate[fromCurrency][toCurrency];
    if (!rate) return null;

    return amount * rate;
}

const convertUSDEUR = convert(100, 'USD', 'EUR');
const convertGBPUSD = convert(150, 'GBP', 'USD');

console.log(`Конвертация из USD в EUR: ${convertUSDEUR}`);
console.log(`Конвертация из GBP в USD: ${convertGBPUSD}`);