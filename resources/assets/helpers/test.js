import {
  makeHash,
  modifiers,
  contentfulImageUrl,
} from './index';

// Test contentfulImageUrl()
test('generate contentful image url with added parameters', () => {
  const contentfulImage = contentfulImageUrl('//images.contentful.com/somecrazystring.jpg', 800, 600, 'fill');

  expect(contentfulImage).toBe('//images.contentful.com/somecrazystring.jpg?w=800&h=600&fit=fill');
});

// Test makeHash()
test('makes hash from a string', () => {
  expect(makeHash('some arbitrary string here')).toBe(988941499);
});

// Test modifiers()
test('prefix a class name', () => {
  expect(modifiers('danger')).toEqual(expect.arrayContaining(['-danger']));
});

test('prefix a series of class names', () => {
  expect(modifiers('danger', 'will', 'robinson')).toEqual(expect.arrayContaining(['-danger', '-will', '-robinson']));
});
