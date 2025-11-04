import type { Request, Response } from 'express'
import PackageService from '../services/package.service.ts'

export default {
  async getAll(_: Request, response: Response) {
    const packages = await PackageService.getAll()

    response.send({ packages })
  },
}
