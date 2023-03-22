// module path ทำการอ้างอิงตำแหน้งของไฟร์ คล้ายกับ module fs
// แต่ใช้งานได้ดีกว่า module fs
const express = require('express')
const path = require('path')
const ejs = require('ejs')
const app = express()
const router = require('./routes/myRouter')

// set router
app.use(router)

// set views
app.set('views', path.join(__dirname, 'views'))
// set template engine
app.set('view engine', 'ejs')

// set staticfile
app.use(express.static(path.join(__dirname, 'public')))

app.listen(3000, () => {
    console.log("Start server at port 3000");
})