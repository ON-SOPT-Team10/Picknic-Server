# Picknic-Server

## ON SOPT 클라이언트 - 서버 합동세미나 10조
	

## **📑 API 명세서**

- **[API 명세서 ](https://github.com/ON-SOPT-Team10/Picknic-Server/wiki)**  


<br>
  
## ✔ **models/index.js**

```jsx
db.Profile = require('./profile')(sequelize, Sequelize);
db.Story = require('./story')(sequelize, Sequelize);
db.Feed = require('./feed')(sequelize, Sequelize);
db.Tag = require('./tag')(sequelize, Sequelize);

db.Tag.hasMany(db.Feed); // 한 태그는 여러 개의 피드를 가짐
```

<br>

## **📙 DB ERD**


<br>

## **🌎 Team Role**

### 🙋‍♀️ 이수진
- profile, story 스키마 작성
- profile & main api 구현

### 🙋‍♂️ 강준우
- feed, tag 스키마 작성
- bookmark & main api 구현

<br>

## **📘 Package**

사용 패키지(모듈)은 다음과 같습니다.

```
"dependencies": {
    "aws-sdk": "^2.810.0",
    "cookie-parser": "~1.4.4",
    "debug": "~2.6.9",
    "express": "~4.16.1",
    "http-errors": "~1.6.3",
    "jade": "~1.11.0",
    "modules": "^0.4.0",
    "morgan": "~1.9.1",
    "multer": "^1.4.2",
    "multer-s3": "^2.9.0",
    "mysql2": "^2.2.5",
    "nodemon": "^2.0.6",
    "sequelize": "^6.3.5",
    "sequelize-cli": "^6.2.0"
  }
```
