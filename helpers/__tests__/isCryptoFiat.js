import { isCryptoFiat } from '../index';

describe('Work correctly', () => {
    it('crypto_fiat OK', () => {
        expect(isCryptoFiat('crypto', 'fiat')).toBeTruthy();
    });
});
