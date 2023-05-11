import { resolve } from "path";

const prisma_migrate = "make migration"

require("dotenv").config({path: resolve(__dirname, "..", ".env.test")});

class CustomEnvironment extends NodeEnvironment {
   
  constructor(config) { 
    super(config) 
  
        
  }

  


}
