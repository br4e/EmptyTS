import { exit } from 'process'

const run = async () => {
  try {
    console.info('Running!')
  } catch(e) {
    console.error('Caught Error!')
    console.error(e)

    exit()
  }
  console.info('Complete!')
}

(async () => await run())()
