// external modules
import colors from 'colors'

// internal modules
import { app } from "@/app/routes";
import { sequelize } from '@/config/database'
import { App } from "@/config/application"

// init sequelize
if ( App.connectDatabase === "true") {
  (async () => {
    await sequelize.sync({ alter: true });
  })(); 
} 

const PORT = App.port || 8080
const DB_CONENCTION = App.connectDatabase

app.listen(PORT , () => {
  console.log(`Server Running On ${colors.cyan(`http://localhost:${PORT}`)} | Allow Database Connection: ${colors.cyan(`${DB_CONENCTION}`)}`);
});