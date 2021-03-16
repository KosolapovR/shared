import { Map } from 'immutable';
import { getRateForBuyer } from '../index';

describe('Rate for buyer', () => {
    describe('Correct data work', () => {
        it('CRYPTO-CRYPTO, custom price', () => {
            const { realRateWithCommission } = getRateForBuyer(new Map({
                isDirectionInverted: false,
                isCustomPrice: true,
                customPrice: 50000,
                buyServiceCommission: 10,
            }));

            expect(parseFloat(realRateWithCommission.toFixed(8))).toBe(55555.55555556);
        });

        it('FIAT_CRYPTO, custom price', () => {
            const { realRateWithCommission } = getRateForBuyer(new Map({
                isDirectionInverted: true,
                isCustomPrice: true,
                customPrice: 50000,
                buyServiceCommission: 10,
            }));

            expect(parseFloat(realRateWithCommission.toFixed(8))).toBe(45454.54545455);
        });

        it('CRYPTO-FIAT, custom price', () => {
            const { realRateWithCommission } = getRateForBuyer(new Map({
                isDirectionInverted: false,
                isCustomPrice: true,
                customPrice: 50000,
                buyServiceCommission: 10,
            }));

            expect(parseFloat(realRateWithCommission.toFixed(8))).toBe(55555.55555556);
        });

        it('CRYPTO-CRYPTO inverted, custom price', () => {
            const { realRateWithCommission } = getRateForBuyer(new Map({
                isDirectionInverted: true,
                isCustomPrice: true,
                operationType: 'crypto',
                customPrice: 50000,
                buyServiceCommission: 10,
            }));

            expect(parseFloat(realRateWithCommission.toFixed(8))).toBe(45000);
        });

        it('CRYPTO-CRYPTO, with profit', () => {
            const { realRateWithCommission } = getRateForBuyer(new Map({
                isDirectionInverted: false,
                isCustomPrice: false,
                rateCalculated: 50000,
                buyServiceCommission: 10,
            }));

            expect(parseFloat(realRateWithCommission.toFixed(8))).toBe(55555.55555556);
        });

        it('FIAT_CRYPTO, with profit', () => {
            const { realRateWithCommission } = getRateForBuyer(new Map({
                isDirectionInverted: true,
                isCustomPrice: false,
                rateCalculated: 50000,
                buyServiceCommission: 10,
            }));

            expect(parseFloat(realRateWithCommission.toFixed(8))).toBe(45454.54545455);
        });

        it('CRYPTO-FIAT, with profit', () => {
            const { realRateWithCommission } = getRateForBuyer(new Map({
                isDirectionInverted: false,
                isCustomPrice: false,
                rateCalculated: 50000,
                buyServiceCommission: 10,
            }));

            expect(parseFloat(realRateWithCommission.toFixed(8))).toBe(55555.55555556);
        });

        it('CRYPTO-CRYPTO inverted, with profit', () => {
            const { realRateWithCommission } = getRateForBuyer(new Map({
                isDirectionInverted: true,
                isCustomPrice: false,
                operationType: 'crypto',
                rateCalculated: 50000,
                buyServiceCommission: 10,
            }));

            expect(parseFloat(realRateWithCommission.toFixed(8))).toBe(45000);
        });
    });

    describe('Incorrect data work as commission = 0', () => {
        it('CRYPTO-CRYPTO, custom price', () => {
            const { realRateWithCommission } = getRateForBuyer(new Map({
                isDirectionInverted: false,
                isCustomPrice: true,
                customPrice: 50000,
                buyServiceCommission: 100,
            }));

            expect(parseFloat(realRateWithCommission.toFixed(8))).toBe(50000);
        });
    });
});
