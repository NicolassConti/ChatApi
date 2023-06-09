const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const db = require("./utils/database");
const initModels = require("./models/initModels");
const userRoutes = require("./routes/user.routes")
const conversationRoutes = require("./routes/conversation.routes");
const messageRoutes = require("./routes/message.routes");
const participantRoutes = require("./routes/participant.routes");
const authRoutes = require("./routes/auth.routes");



const errorHandlerRoute = require("./routes/errorHandler.routes")



initModels();

const app = express();

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());


const PORT = 3001;

db.authenticate()
    .then(() => {
        console.log("Base de datos conectada");
    })
    .catch((error) => {
        console.log(error);
    })


db.sync()
    .then(() => {
        console.log("Base de datos sincronizada");
    })
    .catch((error) => {
        console.log(error);
    })


app.get("/", (req, res) => {
    res.send("welcome to muy chat")
})

app.use(userRoutes);
app.use(conversationRoutes);
app.use(messageRoutes);
app.use(participantRoutes);
app.use(authRoutes);


errorHandlerRoute(app);


app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
})

