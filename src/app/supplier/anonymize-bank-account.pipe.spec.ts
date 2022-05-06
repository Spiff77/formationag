import { AnonymizeBankAccountPipe } from './anonymize-bank-account.pipe';

describe('AnonymizeBankAccountPipe', () => {
  it('create an instance', () => {
    const pipe = new AnonymizeBankAccountPipe();
    expect(pipe).toBeTruthy();
  });
});
