import { exec } from 'child_process'
import { join, relative } from 'path'

type Options = {
  force?: boolean
}

const schemaPath = relative(
  process.cwd(),
  join(__dirname, '../../database/schema.prisma')
)

export const executePrismaCommand = (command: string, options?: Options) => {
  const databaseUrl =
    process.env.DATABASE_URL ?? (options?.force ? 'postgresql://' : undefined)

  if (!databaseUrl) {
    console.error('Could not find DATABASE_URL in environment')
    process.exit(1)
  }

  console.log('Executing Prisma command:', command)
  executeCommand(`${command} --schema ${schemaPath}`)
}

const executeCommand = (command: string) => {
  exec(command, (error, stdout, stderr) => {
    if (error) {
      console.log(error.message)
      return
    }
    if (stderr) {
      console.log(stderr)
      return
    }
    console.log(stdout)
  })
}
