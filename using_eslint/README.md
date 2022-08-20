Step by step. Using eslint

1. Write code. index.js
2. npm init -y
3. Eslint VS code extension installed
4. npm i -D eslint
5. npm init @eslint/config  (and select the preferences do you want)
    *to check syntax, find problems, and enforce code style
    *commonJS
    *None of thes (or React or vue. Remember, choices your preferences)
    *typescript? No Yes
    *Node (or Browser, depend of what do you nedd)
    *Popular style guide?, or manual
6. In package.json write inside script section:
    * "scripts": {
    "lint": "eslint .",    
    "lint:fix": "eslint --fix ."        
    },
7. node run lint   //search all the errors
8. node run lint:fix  //automatically correct errors when executing the script