// router จะทำงานร่วมกับฝั่ง server
const express = require('express')
const router = express.Router()


// connect views 
router.get('/', (req, res) => {
    const name = "Mean.Bordinsak"
    const age = 21
    const address = "<h4>BKK Pathuthani</h4>" //สามารถส่งเป็น html tage ได้
    const name2 = {firstname: 'Bordinsak', lastname: "Prasopboon"}
    const product = ['เสื้อ', 'โน้ตบุ๊ก']
    const product2 = [
        {
            name: 'เสื้อคลุม',
            price: 20000,
            image: '../public/images/products/product2.png'
        },
        {
            name: 'โน้ตบุ๊ก',
            price: 30000,
            image: '../public/images/products/product1.png'
        },
    ]

    res.render('index', {name: name, age: age, address: address, name2: name2, product: product, product2: product2}) //การส่งค่าตัวแปลไปใช้งานหน้า index.ejs
})

// export router ออกไปทำงานใยไฟร์อื่น
module.exports = router 