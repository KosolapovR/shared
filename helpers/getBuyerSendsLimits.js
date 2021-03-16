import ceil from "./ceil";
import cropNumberToN from "./cropNumberToN";

export default ({
                    isDirectionInverted,
                    rateWithCommission,
                    minimumAmount = 0,
                    maximumAmount = 0,
                    sellCurrencyDigits = 8,
                }) => ({
    buyerSendsMinimumAmount: isDirectionInverted
        ? ceil(minimumAmount / rateWithCommission, sellCurrencyDigits, false, true)
        : minimumAmount,
    buyerSendsMaximumAmount: isDirectionInverted
        ? cropNumberToN(maximumAmount / rateWithCommission, sellCurrencyDigits, false, true)
        : maximumAmount,
});
