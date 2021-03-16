import { getRateForSeller } from '../index';

describe('Rate for seller', () => {
    describe('Rate with commission correct', () => {
        it('CRYPTO-CRYPTO, custom price', () => {
            const { realRateWithCommission } = getRateForSeller({
                profitPercent: null,
                exchangeRate: null,
                isDirectionInverted: false,
                isCustomPrice: true,
                customPrice: 50000,
                sellServiceCommission: 10,
            });

            expect(parseFloat(realRateWithCommission.toFixed(8))).toBe(45454.54545455);
        });

        it('FIAT_CRYPTO, custom price', () => {
            const { realRateWithCommission } = getRateForSeller({
                profitPercent: null,
                exchangeRate: null,
                isDirectionInverted: true,
                isCustomPrice: true,
                customPrice: 50000,
                sellServiceCommission: 10,
            });

            expect(parseFloat(realRateWithCommission.toFixed(8))).toBe(55555.55555556);
        });

        it('CRYPTO-FIAT, custom price', () => {
            const { realRateWithCommission } = getRateForSeller({
                profitPercent: null,
                exchangeRate: null,
                isDirectionInverted: false,
                isCustomPrice: true,
                customPrice: 50000,
                sellServiceCommission: 10,
            });

            expect(parseFloat(realRateWithCommission.toFixed(8))).toBe(45454.54545455);
        });

        it('CRYPTO-CRYPTO inverted, custom price', () => {
            const { realRateWithCommission } = getRateForSeller({
                profitPercent: null,
                exchangeRate: null,
                isDirectionInverted: true,
                isCustomPrice: true,
                operationType: 'crypto',
                customPrice: 50000,
                sellServiceCommission: 10,
            });

            expect(parseFloat(realRateWithCommission.toFixed(8))).toBe(55000);
        });

        it('CRYPTO-CRYPTO, with profit', () => {
            const { realRateWithCommission } = getRateForSeller({
                profitPercent: 10,
                exchangeRate: 50000,
                isDirectionInverted: false,
                isCustomPrice: false,
                customPrice: null,
                sellServiceCommission: 10,
            });

            expect(parseFloat(realRateWithCommission.toFixed(8))).toBe(50000);
        });

        it('FIAT_CRYPTO, with profit', () => {
            const { realRateWithCommission } = getRateForSeller({
                profitPercent: 10,
                exchangeRate: 50000,
                isDirectionInverted: true,
                isCustomPrice: false,
                customPrice: null,
                sellServiceCommission: 10,
            });

            expect(parseFloat(realRateWithCommission.toFixed(8))).toBe(50000);
        });

        it('CRYPTO-FIAT, with profit', () => {
            const { realRateWithCommission } = getRateForSeller({
                profitPercent: 10,
                exchangeRate: 50000,
                isDirectionInverted: false,
                isCustomPrice: false,
                customPrice: null,
                sellServiceCommission: 10,
            });

            expect(parseFloat(realRateWithCommission.toFixed(8))).toBe(50000);
        });

        it('CRYPTO-CRYPTO inverted, with profit', () => {
            const { realRateWithCommission } = getRateForSeller({
                profitPercent: 10,
                exchangeRate: 50000,
                isDirectionInverted: true,
                isCustomPrice: false,
                customPrice: null,
                sellServiceCommission: 10,
            });


            expect(parseFloat(realRateWithCommission.toFixed(8))).toBe(50000);
        });
    });

    describe('Rate without commission correct', () => {
        it('CRYPTO-CRYPTO, custom price', () => {
            const { realRateWithoutCommission } = getRateForSeller({
                profitPercent: null,
                exchangeRate: null,
                isDirectionInverted: false,
                isCustomPrice: true,
                customPrice: 50000,
                sellServiceCommission: 10,
            });

            expect(parseFloat(realRateWithoutCommission.toFixed(8))).toBe(50000);
        });

        it('FIAT_CRYPTO, custom price', () => {
            const { realRateWithoutCommission } = getRateForSeller({
                profitPercent: null,
                exchangeRate: null,
                isDirectionInverted: true,
                isCustomPrice: true,
                customPrice: 50000,
                sellServiceCommission: 10,
            });

            expect(parseFloat(realRateWithoutCommission.toFixed(8))).toBe(50000);
        });

        it('CRYPTO-FIAT, custom price', () => {
            const { realRateWithoutCommission } = getRateForSeller({
                profitPercent: null,
                exchangeRate: null,
                isDirectionInverted: false,
                isCustomPrice: true,
                customPrice: 50000,
                sellServiceCommission: 10,
            });

            expect(parseFloat(realRateWithoutCommission.toFixed(8))).toBe(50000);
        });

        it('CRYPTO-CRYPTO inverted, custom price', () => {
            const { realRateWithoutCommission } = getRateForSeller({
                profitPercent: null,
                exchangeRate: null,
                isDirectionInverted: true,
                isCustomPrice: true,
                operationType: 'crypto',
                customPrice: 50000,
                sellServiceCommission: 10,
            });

            expect(parseFloat(realRateWithoutCommission.toFixed(8))).toBe(50000);
        });

        it('CRYPTO-CRYPTO, with profit', () => {
            const { realRateWithoutCommission } = getRateForSeller({
                profitPercent: 10,
                exchangeRate: 50000,
                isDirectionInverted: false,
                isCustomPrice: false,
                customPrice: null,
                sellServiceCommission: 10,
            });

            expect(parseFloat(realRateWithoutCommission.toFixed(8))).toBe(55000);
        });

        it('FIAT_CRYPTO, with profit', () => {
            const { realRateWithoutCommission } = getRateForSeller({
                profitPercent: 10,
                exchangeRate: 50000,
                isDirectionInverted: true,
                isCustomPrice: false,
                customPrice: null,
                sellServiceCommission: 10,
            });

            expect(parseFloat(realRateWithoutCommission.toFixed(8))).toBe(45000);
        });

        it('CRYPTO-FIAT, with profit', () => {
            const { realRateWithoutCommission } = getRateForSeller({
                profitPercent: 10,
                exchangeRate: 50000,
                isDirectionInverted: false,
                isCustomPrice: false,
                customPrice: null,
                sellServiceCommission: 10,
            });

            expect(parseFloat(realRateWithoutCommission.toFixed(8))).toBe(55000);
        });

        it('CRYPTO-CRYPTO inverted, with profit', () => {
            const { realRateWithoutCommission } = getRateForSeller({
                profitPercent: 10,
                exchangeRate: 50000,
                isDirectionInverted: true,
                isCustomPrice: false,
                customPrice: null,
                sellServiceCommission: 10,
            });


            expect(parseFloat(realRateWithoutCommission.toFixed(8))).toBe(45000);
        });
    });

    describe('Incorrect data work as commission = 0', () => {
        it('CRYPTO-CRYPTO, custom price', () => {
            const { realRateWithCommission } = getRateForSeller({
                isDirectionInverted: false,
                isCustomPrice: true,
                customPrice: 50000,
                sellServiceCommission: -100,
            });

            expect(realRateWithCommission).toBe(50000);
        });
    });
});
