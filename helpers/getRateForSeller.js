import { DEAL_TYPES } from '../consts';

export default ({
                    isCustomPrice,
                    customPrice,
                    sellServiceCommission,
                    isDirectionInverted,
                    profitPercent,
                    exchangeRate,
                    operationType,
                }) => {
    const profitPercentInDecimal = (1 + (profitPercent !== -100 ? profitPercent : 0) / 100);
    const sellServiceCommissionInDecimal = (1 + (sellServiceCommission !== -100 ? sellServiceCommission : 0) / 100);
    const invertedProfitPercentInDecimal = (1 - (profitPercent !== 100 ? profitPercent : 0) / 100);
    const invertedSellServiceCommissionInDecimal = (1 - (sellServiceCommission !== 100 ? sellServiceCommission : 0) / 100);

    const realRateWithoutCommission = isCustomPrice
        ? customPrice
        : isDirectionInverted
            ? exchangeRate * invertedProfitPercentInDecimal
            : exchangeRate * profitPercentInDecimal;

    const rateWithCommission = isDirectionInverted
        ? isCustomPrice
            ? operationType === DEAL_TYPES.CRYPTO
                ? customPrice * sellServiceCommissionInDecimal
                : customPrice / invertedSellServiceCommissionInDecimal
            : realRateWithoutCommission / invertedSellServiceCommissionInDecimal
        : isCustomPrice
            ? customPrice / sellServiceCommissionInDecimal
            : realRateWithoutCommission / sellServiceCommissionInDecimal;

    const realRateWithCommission = !Number.isNaN(rateWithCommission)
        ? rateWithCommission
        : undefined;

    return { realRateWithoutCommission, realRateWithCommission };
};
