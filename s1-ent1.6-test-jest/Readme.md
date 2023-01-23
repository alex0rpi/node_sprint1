### Readme

El fitxers continguts al directori __tests__ importen les funcions contingudes en els fitxers dins del directori app.

He introduït modificacions en aquestes funcions a fi que incloguin validacions
i que retornin Error en certs supòsits per tal què superin els tests.

Abans de començar
--> cd al directori "s1-ent1.6-test-jest"
--> npm i

```
"devDependencies": {
"jest": "^29.3.1"
},
"dependencies": {
"@types/jest": "^29.2.6"
}

```

Al package.json introduir el següent script:

```
  "scripts": {
    // "test": "jest --watchAll --verbose --coverage"
    O BÉ sense els flags
    // "test": "jest"
  },
```
