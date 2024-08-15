export function formatToCurrency(value: number) {
    const floatValue = value / 100;
    
    const formattedValue = floatValue.toFixed(2);
    
    return `R$ ${formattedValue}`;
}