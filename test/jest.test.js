test('Devo conhecer as principais assertivas do jest', () => {
  let number = null;

  expect(number).toBeNull();

  number = 12;

  expect(number).not.toBeNull();
});
