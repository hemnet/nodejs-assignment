## Feature request 1: Municipalities
The company pricing expert wants to start segmenting our package prices based on the municipality the package is sold in. In other words, a package should be able to have different prices depending on a municipality.

Look into the pending test in `tests/services/package.spec.ts` for guidance and make all the tests pass.

## Feature request 2: Pricing history
An accounting department needs information on price changes that happened for the package basic in 2023. This kind of request will happen frequently, so we need a simple way to fetch pricing history, given a package, a year and optionally a municipality.

Look into the pending tests in `tests/services/price.spec.ts` for guidance and make all the tests pass.