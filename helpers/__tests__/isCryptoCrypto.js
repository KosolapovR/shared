import { isCryptoCrypto } from '../index';

describe('Work correctly', () => {
    it('crypto_crypto OK', () => {
        expect(isCryptoCrypto('crypto', 'crypto')).toBeTruthy();
    });
});
