import { execSync } from "child_process";
import { resolve } from "path";
import mysql from 'mysql2'
import TestEnvironment from "jest-environment-jsdom";

const prisma_migrate = "make migration"

require("dotenv").config({path: resolve(__dirname, "..", ".env.test")});

class CustomEnvironment extends TestEnvironment {
   
  constructor(config, context) { 
    super(config, context); 

    this.database = `test_db_${Date.now()}`
    
    console.log({DATABASE: this.database})

    // out of docker container
    this.connectionString = `${process.env.DATABASE_URL}${this.database}`

    // inside of docker container
    //this.connectionString = `${process.env.DOCKER_DATABASE_URL}${this.database}`
  }

  setup() {
  
    process.env.DATABASE_URL = this.connectionString
    this.global.process.env.DATABASE_URL = this.connectionString

    process.env.NODE_ENV = "test"

    console.log({CONNECTION: this.connectionString})

    execSync(prisma_migrate);
  }

  async teardown() {
    const client = mysql.createConnection({  
      host: "localhost",
      user: "root",
      password: "root",
      port: 3306,
    })

    client.connect()
    client.query(`DROP DATABASE IF EXISTS ${this.database}`)
    client.end()
  
  }
}

module.exports = CustomEnvironment
