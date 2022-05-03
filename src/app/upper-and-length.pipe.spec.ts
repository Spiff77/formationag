import { UpperAndLengthPipe } from './upper-and-length.pipe';

describe('UpperAndLengthPipe', () => {
  it('create an instance', () => {
    const pipe = new UpperAndLengthPipe();
    expect(pipe).toBeTruthy();
  });
});
