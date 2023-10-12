

// test cases
assertArrayEqual(takeUntil([1, -1, 2], x => x < 0), [1]);
assertArrayEqual(takeUntil(["one", "two", "three"], x => x.length > 3), ["one", "two"]);
assertArrayEqual(takeUntil([0, 2, 4, 6, 8, 9, 10, 12, 14], x => x % 2 !== 0), [0,2,4,6,8]);