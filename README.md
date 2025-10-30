# Coding Assignment

We have set up a minimal Node.js app with some opinionated file structure (with
routes, controllers, models and services), as well as some tests in Jest.
Running the test command should make all tests pass after you finish your
assignment:

```sh
# Run npm install to install all necessary packages for development
$ npm install
# The test command will set up an in-memory SQLite DB.
$ npm run test
```

To develop locally with hot reloading, run the following command:

```sh
$ npm run dev
```

Both test and dev commands will spin up a new in-memory SQLite DB each time you
run them. The dev command will additionally seed with some initial data
(`db/seed.ts`).

## A few notes about the assignment

We would like you to model the product domain (it doesn’t have to be perfect)
and update the application to enable the two features. Think through your
solution and implement it based on the instructions and your own thoughts.

- Write code as if it was to be delivered to production
- Set your own scope and make your own prioritizations for the challenge
- No HTTP requests are needed anywhere
- The assignment can (and should) be completed without the need of any more
  external packages
- Code styling is not mandatory but greatly appreciated :)

## If things go wrong

Let us know if something doesn't seem right. We might have missed something.
Don't panic! 💚

## Follow-up

- Application structure
- Data integrity
- Testing
- Design choices and their advantages and disadvantages
