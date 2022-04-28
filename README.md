# React Testing Library Bug Minimum Code Example

## Instructions

This repo demonstrates a bug found in React Testing Library where an incorrect mock may cause a passing test to mark as failing. This bug can be seen by pulling the "master" branch and running "npm run test".

## File Structure

There are 3 files, a testing file and two component files. Both component files require a mock to be tested.

## Testing Bug

There are 2 tests. The first test has incorrect mocks, it requires an array but receives an object. If the first test is run solo, it will fail. The second test is correct and passes if run solo, it requires a string and receives a string.

When we run the test we get the following result:

```
√ given incorrect mocks (88 ms)
× passes if it is the only one run (15 ms)
```

This is the opposite of what we expect, since the first test has incorrect mocks and does not pass on its own it should not pass with another test in the suite. The second test that passes on its own should not be marked as failing because it comes after a failing test.

Any passing test that requires a mock will fail after an incorrectly mocked test.

## Duplication Issue

We attempted to duplicate this bug on a new react app but could not. This duplication attempt can be found here: "https://github.com/pham-andrew/rtl-mocks-bug-duplication". In this repository both tests pass, which is also unexpected behavior because we expect the first test to fail with a bad mock.

We are unsure of the exact differences between these two repos, this repo has many more dependencies and may contain older versions since it was extracted from a project while the new react app was just created.
