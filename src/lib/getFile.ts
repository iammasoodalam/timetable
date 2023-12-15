'use server'
import fs from 'fs'
import path from 'path'

export default async function getFile(){
  return fs.readFileSync(path.join(process.cwd(), 'src/lib', 'data.json'), 'utf-8')
}