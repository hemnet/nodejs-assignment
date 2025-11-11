# Assignment

A company ‘MediaNow’ is selling packages - Basic, Plus, and Premium. The price for each package is updated regularly and a pricing log is kept for all packages. The company is doing well and the feature requests are pouring in! Help us by implementing the following two feature requests made by our coworkers.

On checking out, these two commands should run normally:

```shell
# Run npm install to install all necessary packages for development
$ npm install
# The test command will set up an in-memory SQLite DB.
$ npm run test
```

To develop locally with hot reloading, run the following command:

```shell
$ npm run dev
```

Both test and dev commands will spin up a new in-memory SQLite DB each time you run them. The dev command will additionally seed with some initial data (`db/seed.ts`).

## Feature request 1: Municipalities
The company pricing expert wants to start segmenting our package prices based on the municipality the package is sold in. In other words, a package should be able to have different prices depending on a municipality.

Look into the pending test in `tests/services/package.spec.ts` for guidance and make all the tests pass.

## Feature request 2: Pricing history
An accounting department needs information on price changes that happened for the package basic in 2023. This kind of request will happen frequently, so we need a simple way to fetch pricing history, given a package, a year and optionally a municipality.

Look into the pending tests in `tests/services/price.spec.ts` for guidance and make all the tests pass.