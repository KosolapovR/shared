import { isFiatCrypto } from '../index';

describe('Work correctly', () => {
    it('fiat_crypto OK', () => {
        expect(isFiatCrypto('fiat', 'crypto')).toBeTruthy();
    });
});
