import Validator from '../game';

test('Проверка пройдена', () => {
  const data = 'alex_777-defolt';
  const result = 'alex_777-defolt';
  expect(new Validator().validateUsername(data)).toBe(result);
});

test('Проверка на латынь', () => {
  expect(() => new Validator().validateUsername('саня_777-defolt')).toThrow('Допустимы только латинские буквы, символы тире -, подчёркивания _ и цифры (0-9)');
});

test('проверка на лишний символ', () => {
  expect(() => new Validator().validateUsername('alex@"777-defolt')).toThrow('Допустимы только латинские буквы, символы тире -, подчёркивания _ и цифры (0-9)');
});

test('Проверка на содержание более трёх цифр', () => {
  expect(() => new Validator().validateUsername('alex_1987-defolt')).toThrow('Имя не должно содержать подряд более трёх цифр');
});

test('Проверка начала имени', () => {
  expect(() => new Validator().validateUsername('-alex_777-defolt')).toThrow('Имя не должно начинаться цифрами, символами подчёркивания или тире');
});

test('Проверка начала имени', () => {
  expect(() => new Validator().validateUsername('_alex_777-defolt')).toThrow('Имя не должно начинаться цифрами, символами подчёркивания или тире');
});

test('Проверка начала имени', () => {
  expect(() => new Validator().validateUsername('0alex_777-defolt')).toThrow('Имя не должно начинаться цифрами, символами подчёркивания или тире');
});

test('Проверка конца имени', () => {
  expect(() => new Validator().validateUsername('alex_777-defolt-')).toThrow('Имя не должно заканчиваться цифрами, символами подчёркивания или тире');
});

test('Проверка конца имени', () => {
  expect(() => new Validator().validateUsername('alex_777-defolt_')).toThrow('Имя не должно заканчиваться цифрами, символами подчёркивания или тире');
});

test('Проверка конца имени', () => {
  expect(() => new Validator().validateUsername('alex_777-defolt0')).toThrow('Имя не должно заканчиваться цифрами, символами подчёркивания или тире');
});
