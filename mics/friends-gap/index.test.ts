import { degreesOfTwoFriend } from '.';

it('should ["john", "cena"]', () => {
  const result = degreesOfTwoFriend(
    ['john:cena', 'john:lena', 'lena:x'],
    'john',
    'cena',
  );

  expect(result).toEqual(['john', 'cena']);
});

it('should ["fred", "marry", "bill"]', () => {
  const result = degreesOfTwoFriend(
    ['fred:joe', 'joe:marry', 'marry:fred', 'marry:bill'],
    'fred',
    'bill',
  );

  expect(result).toEqual(['fred', 'marry', 'bill']);
});

it('should ["fred", "joe", "marry", "bill"]', () => {
  const result = degreesOfTwoFriend(
    ['fred:joe', 'joe:marry', 'marry:bill'],
    'fred',
    'bill',
  );

  expect(result).toEqual(['fred', 'joe', 'marry', 'bill']);
});

it('should ["fred", "john", "bill"]', () => {
  const result = degreesOfTwoFriend(
    [
      'fred:joe',
      'fred:john',
      'joe:john',
      'joe:marry',
      'marry:bill',
      'john:bill',
    ],
    'fred',
    'bill',
  );

  expect(result).toEqual(['fred', 'john', 'bill']);
});
