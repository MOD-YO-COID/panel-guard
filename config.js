import fs, { watchFile, unwatchFile, readFileSync } from 'fs';
import chalk from 'chalk';
import { fileURLToPath } from 'url';

global.owner = [
  ['6282179721320', 'LyeeHost', true],
]
// [number, dia creator/owner?, dia developer?]
// Put your number here
global.mods = ['6282179721320'] // Want some help?
global.prems = JSON.parse(readFileSync('./src/premium.json')) // Premium user has unlimited limit
global.wm = 'PANEL DIMAS'

let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  import(file)
})
