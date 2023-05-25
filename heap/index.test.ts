import { MinHeap } from './index';

it('should maintain the min heap when insert 3 times', () => {
  const myHeap = new MinHeap();

  myHeap.insert(100);
  myHeap.insert(70);
  myHeap.insert(88);

  expect(myHeap.getData()).toEqual([70, 100, 88]);
});

it('should maintain the min heap when insert 3 times and delete 1 time', () => {
  const myHeap = new MinHeap();

  myHeap.insert(100);
  myHeap.insert(70);
  myHeap.insert(88);

  const out = myHeap.delete();

  expect(myHeap.getData()).toEqual([88, 100]);
  expect(out).toEqual(70);
});
