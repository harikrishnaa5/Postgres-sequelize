# 📝 To-Do App  

A simple **To-Do List application** built using **Node.js**, **Express.js**, **PostgreSQL**, and **Sequelize ORM**.

## 🚀 Features  
✅ Create, Read, Update, and Delete (CRUD) Todos  
✅ Uses PostgreSQL as the database  
✅ Sequelize ORM for database interaction  
✅ RESTful API with Express.js  
✅ Follows MVC architecture  

## 📦 Tech Stack  
- **Backend:** Node.js, Express.js  
- **Database:** PostgreSQL  
- **ORM:** Sequelize  
- **Tools:** Git, Postman  

## 🛠 Installation  

1️⃣ **Clone the repository**  
```sh
git clone <your-repo-url>
cd todo-app
```

2️⃣ **Install dependencies**  
```sh
npm install
```

3️⃣ **Set up the database**  
- Make sure PostgreSQL is installed and running.  
- Create a `.env` file and configure your database credentials:  
  ```
  DB_NAME=your_database_name
  DB_USER=your_database_user
  DB_PASS=your_database_password
  DB_HOST=localhost
  DB_DIALECT=postgres
  ```

4️⃣ **Run migrations**  
```sh
npx sequelize-cli db:migrate
```

5️⃣ **Start the server**  
```sh
npm start
```

## 📖 API Endpoints  
| Method | Endpoint        | Description             |
|--------|----------------|-------------------------|
| GET    | `/todos`       | Get all todos           |
| POST   | `/todos`       | Create a new todo       |
| PUT    | `/todos/:id`   | Update a todo           |
| DELETE | `/todos/:id`   | Delete a todo           |

## 📜 License  
This project is open-source and free to use.
