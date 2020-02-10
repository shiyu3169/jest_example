const googleSearch = require('./index');

const dbMock = ['dog.com', 'cheesepuff.com', 'disney.com', 'dogpictures.com'];

describe('googleSearch', () => {
  test('is a silly test', () => {
    expect('hello').toBe('hello');
  });

  test('is searching google', () => {
    expect(googleSearch('testtest', dbMock)).toEqual([]);
    expect(googleSearch('dog', dbMock)).toEqual(['dog.com', 'dogpictures.com']);
  });

  test('should work with undefined and null input', () => {
    expect(googleSearch(undefined, dbMock)).toEqual([]);
    expect(googleSearch(null, dbMock)).toEqual([]);
  });

  test('should return less then 3 matches', () => {
    expect(googleSearch('.com', dbMock).length).toEqual(3);
  });
});
