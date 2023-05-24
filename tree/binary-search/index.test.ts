import { bs_list } from '.';

it('should true [1,2,3,5,6,7,10] needle: 1', () => {
  expect(bs_list([1, 2, 3, 5, 6, 7, 10], 1)).toEqual(true);
});

it('should true [1,2,3,5,6,7,10] needle: 2', () => {
  expect(bs_list([1, 2, 3, 5, 6, 7, 10], 2)).toEqual(true);
});

it('should true [1,2,3,5,6,7,10] needle: 3', () => {
  expect(bs_list([1, 2, 3, 5, 6, 7, 10], 3)).toEqual(true);
});

it('should true [1,2,3,5,6,7,10] needle: 6', () => {
  expect(bs_list([1, 2, 3, 5, 6, 7, 10], 6)).toEqual(true);
});

it('should true [1,2,3,5,6,7,10] needle: 7', () => {
  expect(bs_list([1, 2, 3, 5, 6, 7, 10], 7)).toEqual(true);
});

it('should true [1,2,3,5,6,7,10] needle: 10', () => {
  expect(bs_list([1, 2, 3, 5, 6, 7, 10], 10)).toEqual(true);
});

it('should true [1,2,3,5,6,7,10] needle: 11', () => {
  expect(bs_list([1, 2, 3, 5, 6, 7, 10], 11)).toEqual(false);
});

it('should true [1,2,3,5,6,7,10] needle: 4', () => {
  expect(bs_list([1, 2, 3, 5, 6, 7, 10], 4)).toEqual(false);
});
