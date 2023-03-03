import { json } from '@remix-run/node'
import fs from 'fs'
import path from 'path'

export const loader = () => {
  const filepath = path.resolve(`${__dirname}/../app/worklets/paint/box.js`)
  const contents = fs.readFileSync(filepath).toString()

  return json(contents)
}
