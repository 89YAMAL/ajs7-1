export default class Validator {
  validateUsername(name) {
    if (/^[a-z0-9-_]+$/.test(name) !== true) {
      throw new Error('Допустимы только латинские буквы, символы тире -, подчёркивания _ и цифры (0-9)');
    }
    if (/\d{4}/.test(name) === true) {
      throw new Error('Имя не должно содержать подряд более трёх цифр');
    }
    if (/^[-_\d]/.test(name) === true) {
      throw new Error('Имя не должно начинаться цифрами, символами подчёркивания или тире');
    }
    if (/[-_\d]$/.test(name) === true) {
      throw new Error('Имя не должно заканчиваться цифрами, символами подчёркивания или тире');
    }
    this.name = name;
    return this.name;
  }
}
