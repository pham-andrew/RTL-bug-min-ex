# React Testing Library Mocks Bug Demonstration

## Instructions

This repo demonstrates a bug found in React Testing Library where an incorrect mock may cause a passing test to mark as failing. This bug can be seen by pulling the "master" branch and running "npm run test".

## File of Interest

There are 3 files in src, a testing file (Bug.test.tsx) and two component files (Page1.tsx and Page2.tsx). Both component files require a mock to be tested as they fetch and use a response via useEffect upon rendering.

## Bug Description

There are 2 tests. The first test has incorrect mocks, it requires an array but receives an object. If the first test is run solo, it will error. The second test is correct and passes if run solo, it requires a string and receives a string.

When we run the test suite containing both tests we get the following result:

```
√ given incorrect mock (76 ms)
× given correct mock, passes solo (19 ms)
```

This is the opposite of what we expect, since the first test has incorrect mocks and errors its own, it should not pass with another test in the suite. The second test that passes on its own should not be marked as failing when it comes after a failing test.

## Duplication Issues

If the three files of interest are copied into a new react app, both tests will pass (while the first test is given an incorrect mock, there is no expect so it does not fail). Therefore the issue likely lies somewhere in the specific configuration of this app.
