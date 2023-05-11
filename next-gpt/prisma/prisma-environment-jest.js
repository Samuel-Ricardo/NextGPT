import { execSync } from "child_process";
import { resolve } from "path";

const prisma_migrate = "make migration"

require("dotenv").config({path: resolve(__dirname, "..", ".env.test")});

class CustomEnvironment extends NodeEnvironment {
   
  constructor(config) { 
    super(config) 

    this.database = `test_db_${Date.now()}_${Math.random()}`
    
    console.log({database: this.database})

    // out of docekr container
    //this.connectionString = `${process.env.DATABASE_URL}${this.database}`

    // inside of docker container
    this.connectionString = `${process.env.DOCKER_DATABASE_URL}${this.database}`
  }

  setup() {
  
    process.env.DATABASE_URL = this.connectionString
    this.global.process.env.DATABASE_URL = this.connectionString

    process.env.NODE_ENV = "test"

    console.log({DB_CONNECTION: this.connectionString})

    execSync(prisma_migrate);
  }
}
