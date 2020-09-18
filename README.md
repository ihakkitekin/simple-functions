# simple-functions
Simple functions emulator for local development


## CLI Options
  - `-p, --port`: specify emulator port to run, defaults to `32245`
  - `-s, --functionsPath`: specify a path to look for functions, defaults to `functions`
  - `-f, --functions`: specify which functions to run on emulator, if not present, runs all functions.


## Run functions
  `npm start -- -s examples` or `npm start -- -s example -f echo,hello-world`


## Function Context
This section is under development, currently there is only 1 parameter available for functions and it only has, request parameter comes from express.req oject


## Config File
You need to create a `functions.config.json` on the root level of your functions folder

#### functions: Array
  - `name`: Name of the function, this is used to call function from cli
  - `path`: Function path to be exposed from server
  - `entry`: Entry file path of the function
  - `method`: HTTP method for the function, defaults to `GET`


### Example config file 
    {
      "functions": [
        {
          "name": "echo",
          "path": "/echo",
          "entry": "echo/index.js",
          "method": "GET"
        },
        {
          "name": "hello-world",
          "path": "/hello-world",
          "entry": "hello-world/index.js",
          "method": "GET"
        }
      ]
    }


## TODOS
  - Add schema validator for config file
  - Handle local function dependencies, thanks to nodejs module structre we might not need this for nodejs functions
  - Figure out how to implement middlewares for nodejs applications
  - ***Potentially add other languages in the long run***
