import getOfferLimits from '../getOfferLimits';

describe('Calculate offer limits correctly', () => {
    it('crypto_crypto rate = 20', () => {
        expect(getOfferLimits({
            firstPaymentType: 'crypto',
            secondPaymentType: 'crypto',
            isCourseSwapped: false,
            offerRateWithCommission: 18.18181818,
            offerRateWithoutCommission: 20,
            digits: 8,
            receiveLimits: { min: 0.0001, max: 1000000 }, // ETH
            refundLimits: { min: 0.0001, max: 1000000 }, // BTC
            sellWalletBalance: 0.5, // BTC
        })).toEqual({ min: 0.002, max: 9.09090909 });
    });

    it('crypto_crypto rate < 1', () => {
        expect(getOfferLimits({
            firstPaymentType: 'crypto',
            secondPaymentType: 'crypto',
            isCourseSwapped: false,
            offerRateWithCommission: 0.04545455,
            offerRateWithoutCommission: 0.05,
            digits: 8,
            receiveLimits: { min: 0.0001, max: 1000000 },
            refundLimits: { min: 0.0001, max: 1000000 },
            sellWalletBalance: 10,
        })).toEqual({ min: 0.0001, max: 0.4545455 });
    });

    it('crypto_crypto rate = 50000, swapped', () => {
        expect(getOfferLimits({
            firstPaymentType: 'crypto',
            secondPaymentType: 'crypto',
            isCourseSwapped: true,
            offerRateWithCommission: 55555.56,
            offerRateWithoutCommission: 50000,
            digits: 2,
            receiveLimits: { min: 0.0001, max: 1000000 }, // BTC
            refundLimits: { min: 1, max: 1000000 }, // USDT
            sellWalletBalance: 20, // UDST
            sellCommission: 10, // need only for USDT-like sell currency
            buyCommission: 10, // need only for USDT-like sell currency
        })).toEqual({ min: 5, max: 16.36 });
    });

    it('crypto_crypto rate = 50000', () => {
        expect(getOfferLimits({
            firstPaymentType: 'crypto',
            secondPaymentType: 'crypto',
            isCourseSwapped: false,
            offerRateWithCommission: 45454.55,
            offerRateWithoutCommission: 50000.00,
            digits: 2,
            receiveLimits: { min: 1, max: 1000000 }, // USDT
            refundLimits: { min: 0.0001, max: 1000000 }, // BTC
            sellWalletBalance: 1, // BTC
        })).toEqual({ min: 5, max: 45454.55 });
    });

    it('crypto_fiat rate = 45 454.54 and max limit 10 000 USD', () => {
        expect(getOfferLimits({
            firstPaymentType: 'crypto',
            secondPaymentType: 'fiat',
            isCourseSwapped: false,
            offerRateWithCommission: 45454.54,
            offerRateWithoutCommission: 50000,
            digits: 2,
            receiveLimits: { min: 10, max: 10000 }, // USD
            refundLimits: { min: 0.0001, max: 1000000 }, // BTC
            sellWalletBalance: 1, // BTC
        })).toEqual({ min: 10, max: 10000 });
    });

    it('crypto_crypto rate = 1000 and max limit 10 BTC', () => {
        expect(getOfferLimits({
            firstPaymentType: 'crypto',
            secondPaymentType: 'crypto',
            isCourseSwapped: false,
            offerRateWithCommission: 909.09090909,
            offerRateWithoutCommission: 1000,
            digits: 2,
            receiveLimits: { min: 0.0001, max: 1000000 }, // ETH
            refundLimits: { min: 0.0001, max: 10 }, // BTC
            sellWalletBalance: 100, // BTC
        })).toEqual({ min: 0.1, max: 10000 });
    });

    it('crypto_fiat rate = 50000', () => {
        expect(getOfferLimits({
            firstPaymentType: 'crypto',
            secondPaymentType: 'fiat',
            isCourseSwapped: false,
            offerRateWithCommission: 45454.54,
            offerRateWithoutCommission: 50000,
            digits: 2,
            receiveLimits: { min: 10, max: 100000 }, // USD
            refundLimits: { min: 0.0001, max: 1000000 }, // BTC
            sellWalletBalance: 1, // BTC
        })).toEqual({ min: 10, max: 45454.54 });
    });

    it('fiat_crypto rate = 50000, swapped, and max limit fiat 1000', () => {
        expect(getOfferLimits({
            firstPaymentType: 'fiat',
            secondPaymentType: 'crypto',
            isCourseSwapped: true,
            offerRateWithCommission: 55555.56,
            offerRateWithoutCommission: 50000,
            digits: 2,
            receiveLimits: { min: 0.0001, max: 1000000 }, // BTC
            refundLimits: { min: 10, max: 1000 }, // USD
        })).toEqual({ min: 10, max: 1000 });
    });
});
