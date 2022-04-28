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

## Solution

This is an issue with testing library react version 11.2.7. Updating "@testing-library/react" fixes the issue (we used 13.1.1). Updating "@testing-library/react" requires "react" and "react-dom" to be updated as well (we used 18.1.0). In our repo, replacing package.json with the contents of package.updated.json fixes the issue.