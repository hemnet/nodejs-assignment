import express from 'express'
import { sequelizeConnection } from './db/config.ts'
import { seedDb } from './db/seed.ts'
import packagesRoutes from './routes/package.routes.ts'

const port = Number(process.env.PORT ?? 3000)
const startDate = Date.now()
export const app = express()

//  Initialize database //
await sequelizeConnection.sync({ force: true })
console.log('DB running')
await seedDb()

app.use(express.json())

app.get('/ping', async (_req, res) => {
  res.json({
    status: 'ok',
    timestamp: Date.now(),
    uptime: Date.now() - startDate,
  })
})

app.use('/api/packages', packagesRoutes)

app.listen(port, () => {
  console.log(`Hemnet application running on port ${port}!`)
})
