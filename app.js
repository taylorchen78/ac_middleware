// app.js
const express = require('express')
const app = express()
const port = 3000

app.use((req, res, next) => {
  //Q1
  const reqTime = new Date(Date.now())
  const reqTimeFromat = reqTime.getFullYear() + '-' + (reqTime.getMonth() + 1) + '-' + reqTime.getDate() + ' ' + reqTime.getHours() + ':' + reqTime.getMinutes() + ':' + reqTime.getSeconds()

  const Q1 = reqTimeFromat + ' | ' + req.method + ' from ' + req.originalUrl

  console.log(Q1)

  next()

  //Q2
  res.on('finish', () => {
    const resTime = new Date(Date.now())
    const period = resTime - reqTime
    const resTimeFromat = resTime.getFullYear() + '-' + (resTime.getMonth() + 1) + '-' + resTime.getDate() + ' ' + resTime.getHours() + ':' + resTime.getMinutes() + ':' + resTime.getSeconds()

    const Q2 = resTimeFromat + ' | ' + req.method + ' from ' + req.originalUrl + ' | total time: ' + period + 'ms'

    console.log(Q2)
  })
})

app.get('/', (req, res) => {
  res.send('列出全部 Todo')
})

app.get('/new', (req, res) => {
  res.send('新增 Todo 頁面')
})

app.get('/:id', (req, res) => {
  res.send('顯示一筆 Todo')
})

app.post('/', (req, res) => {
  res.send('新增一筆  Todo')
})

app.listen(port, () => {
  console.log(`App running on port ${port}`)
})