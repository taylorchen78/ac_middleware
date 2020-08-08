# Middleware exercise

## Feature
伺服器接到任一請求時，server log 上能正確印出請求中的 HTTP 與網址
```
2019-5-17 18:51:12 | GET from /
```

伺服器接到任一請求時，server log 上能正確印出時間
```
2019-5-17 18:51:12 | GET from / | total time: 8ms
```

## Web package
- Node.js v10.15.0
- Express v4.17.1

## Installation
1. Open terminal and download project
```
git clone https://github.com/taylorchen78/ac_middleware.git
```

2. Enter project folder
```
cd ac_middleware
```

3. Install npm
```
npm install express
```

4. Run project
```
nodemon app.js or npm run dev
```

## Open expense website
Browse http://localhost:3000 in local
