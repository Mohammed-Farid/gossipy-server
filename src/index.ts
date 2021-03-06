import 'module-alias/register'

import server from './server'
import chalk from 'chalk'

server
  .listen({ port: process.env.PORT || 4000 })
  .then(({ url }) =>
    console.log(
      `Server has ${chalk.blueBright.bold(
        'started'
      )} on url ${chalk.blueBright.bold(url)}`
    )
  )
