### Price Calculation Service (Higher difficulty)
Present this code and ask for review:

```typescript
// services/pricing.ts
export function calculatePrice(package: Package, municipality?: Municipality) {
  let price = package.basePrice;

  if (municipality) {
    if (municipality.name === 'Stockholm') {
      price = price * 1.5;
    } else if (municipality.name === 'Göteborg') {
      price = price * 1.3;
    } else if (municipality.name === 'Malmö') {
      price = price * 1.2;
    }
  }

  return price;
}
```

**What we're looking for:**
- Maintainability: hardcoded multipliers
- Scalability: string comparison instead of data-driven approach
- Business logic: should multipliers be in the database?
- Testing: is this easy to test?
- Domain modeling: is this the right abstraction?
