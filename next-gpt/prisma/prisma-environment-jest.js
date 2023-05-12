import { execSync } from "child_process";
import { resolve } from "path";
import mysql from 'mysql2'
import TestEnvironment from "jest-environment-jsdom";

const prisma_migrate = "make migration"
//Singleton
const BASE = { 
  _URL: null,
  getURL: () => {
    if (BASE._URL) return BASE._URL
    
    // Outside Container
    BASE._URL = process.env.DATABASE_URL
    
    // inside Container
    //BASE._URL = process.env.DOCKER_DATABASE_URL

    return BASE._URL
  }
}

require("dotenv").config({path: resolve(__dirname, "..", ".env.test")});

class CustomEnvironment extends TestEnvironment {

  counter = 0
  connectionString = []
  database = []

  constructor(config, context) { 
    super(config, context); 

    this.counter = this.counter++

    this.database.push(`test_db_${Math.round(Math.random()+Date.now())}`)
    
    console.log({DATABASE: this.database})

    this.connectionString[this.counter] = `${BASE.getURL()}${this.database[this.counter]}`
  }

  setup() {
    process.env.DATABASE_URL = this.connectionString[this.counter]
    this.global.process.env.DATABASE_URL = this.connectionString[this.counter]

    process.env.NODE_ENV = "test"

    console.log({CONNECTION: this.connectionString})

    execSync(prisma_migrate);
  }

  async teardown() {
  this.database.forEach(async (database) => {
      const client = mysql.createConnection({  
        host: "localhost",
        user: "root",
        password: "root",
        port: 3306,
      })

      client.connect()
      client.query(`DROP DATABASE ${database}`)
      client.end()
    }) 
  }
}

module.exports = CustomEnvironment
