# Coding Assignment

We have set up a minimal Node.js app with some opinionated file structure (with
routes, controllers, models and services), as well as some tests in Jest.

The goal of this test will be explained to us by your interviewers during your
interview. This structure outlines a minimal functioning API with a minimal set
of tests and features you will have to improve.

On checking out, these two commands should run normally:

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

This is not intended to be the perfect application as it is today, however it
does run with the latest Node version and using TypeScript as we do here at
Hemnet.

The current tech stack is:

- Node.js on version 24+ (uses Node's native TS execution capabilities)
- ECMAScript Modules throughout the codebase
- Jest for testing
- SQLite as an in-memory database (using Sequelize as ORM)

### Guidelines

When doing the assignment with us in your interview, be mindful of the following
guidelines:

- Write code as if it was to be delivered to production
- You won't need to write any infra-related code (like Dockerfiles, CI/CD
  pipelines, etc)
- Some of the variables and code in the codebase are intentionally left there
  for you to get a hint on what you should do next
- Set your own scope and make your own prioritizations for the challenges you're
  proposed
- No HTTP requests are needed anywhere
- The assignment can (and should) be completed without the need of any more
  external packages, but you can add them if you feel it's necessary, just have
  a good reason for it
- Code styling is not mandatory but greatly appreciated, we include a biome file
  and it _should_ be set up to automatically run on save. But you can manually
  run it using `npm run lint`
- By the end of your thinking, make sure there are no errors or failing tests
  when running `npm run test`, you wouldn't deploy an erroring application to
  production, would you?
- Don't over-engineer things, keep it simple and pragmatic, not everything is as
  complex as it seems

### What are we looking for?

This test is intentionally open-ended. We want to see how you think and how you
react when presented with one or more challenges. Think of this as a pair
programming session so:

- Share your thoughts out loud
- Feel free to ask questions if something is not clear
- Feel free to explain your reasoning when making decisions
- You're in control of the code, we won't barge in or change your decisions, but
  we might ask questions about them
- Understand that there might be multiple valid approaches to the same problem
- There are no trick questions here, we just want to see how you work, we want
  you to be with us as much as you do. We are not against you

The interviewers will judge you based on (but not limited to):

- Problem solving skills
- Clarity of thought
- Code organization and quality
- How easy it is to follow your reasoning and code
- How you prioritize tasks
- How you approach testing and problems when presented with a demand
- How is your relationship with your tools and tech stack

### About the use of AI tools

At Hemnet we believe AI tools can be a great help to developers, and we don't
ban their use during interviews, you're free to use them or not. However, we do
expect you to:

- Know when it's a good idea to use them
- Differentiate between good and bad suggestions
- Disclose why are you using them for a particular task

Make good use of your tools, but remember you're being evaluated on your own
skills, not the AI's.

## If things go wrong

Let us know if something doesn't seem right or if you have any questions.
