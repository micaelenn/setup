export class App {
  static connectDatabase: string | undefined = process.env.CONNECT_DATABASE
  static port: string | undefined = process.env.PORT
  static databaseName: string | undefined = process.env.DB_NAME
  static databaseUser: string | undefined = process.env.DB_USER
  static databasePassword: string | undefined = process.env.DB_PASSWORD
  static databaseHost: string | undefined = process.env.DB_HOST
}

export const setEndpoint = (endpoint: string) => {
  return `/api/v1/${endpoint}`
}
