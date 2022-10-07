import * as khooks from '..';

describe('khooks', () => {
  test('exports modules should be defined', () => {
    Object.keys(khooks).forEach((module) => {
      expect(khooks[module]).toBeDefined();
    });
  });
});