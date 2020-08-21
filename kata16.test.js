const wrapWords = require('./kata16');

test('Wraps at 50 chars', () => {
  let mock = 'jdks fjk fjk fjf jsafk sakjfhsakjd fhkjsa dfhas khfkj ashfk jahskjs dfhjksa fhk hsdf jsahfdksa fhkjs fhk shfk hasdkfj hsakjf hskajd fhkjsa dfhkj sahfdkj sahkfj hsakdj fhsakj dfhkja sdfhkj asdhfk sahfk ash fkjshfkj asdfhkjs dahfkj sadhfkj saa';

  expect(wrapWords(mock, 50)).toBe("jdks fjk fjk fjf jsafk sakjfhsakjd fhkjsa dfhas\nkhfkj ashfk jahskjs dfhjksa fhk hsdf jsahfdksa\nfhkjs fhk shfk hasdkfj hsakjf hskajd fhkjsa dfhkj\nsahfdkj sahkfj hsakdj fhsakj dfhkja sdfhkj asdhfk\nsahfk ash fkjshfkj asdfhkjs dahfkj sadhfkj saa");
});

test('Wraps at 100 chars', () => {
  let mock = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum";

  expect(wrapWords(mock, 100)).toBe("Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the\nindustry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type\nand scrambled it to make a type specimen book. It has survived not only five centuries, but also the\nleap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s\nwith the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop\npublishing software like Aldus PageMaker including versions of Lorem Ipsum");
});