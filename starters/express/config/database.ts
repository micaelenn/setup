// external modules
import dotenv from "dotenv"
import { Sequelize } from "sequelize-typescript"

// internal modules
import { App } from "@/config/application"

// models
import { Heartbeat } from '@/app/heartbeat/heartbeat.model'

dotenv.config({ path: ".env" });

export const sequelize = new Sequelize(
  App.databaseName!, 
  App.databaseUser!, 
  App.databasePassword, {
  host: App.databaseHost,
  dialect: 'mysql',
  models: [Heartbeat],
  logging: false
});