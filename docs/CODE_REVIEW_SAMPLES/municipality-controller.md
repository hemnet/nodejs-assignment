### Municipality Controller (Medium difficulty)
Present this code and ask for review:

```typescript
// controllers/municipality.ts
export async function getMunicipalityPackages(req, res) {
  const id = req.params.id;
  const packages = await db.query(
    'SELECT * FROM packages WHERE municipality_id = ' + id
  );
  res.json(packages);
}
```

**What we're looking for:**
- Security: SQL injection vulnerability
- Type safety: no types on parameters
- Error handling: what if municipality doesn't exist?
- Validation: what if id is not a number?
- Naming: is the function name clear?
- Response structure: should we return additional context?
