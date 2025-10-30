import express from 'express'
import { sequelizeConnection } from './db/config.ts'
import { seedDb } from './db/seed.ts'
import packagesRoutes from './routes/package.routes.ts'

const port = 3000
export const app = express()

app.listen(port, () => {
  console.log(`Hemnet application running on port ${port}!`)
})
app.use(express.json())

//  Initialize database //
sequelizeConnection.sync({ force: true }).then(async () => {
  console.log('DB running')

  await seedDb()
})

app.use('/api/packages', packagesRoutes)
