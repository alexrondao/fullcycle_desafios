const express = require('express')
const app = express()
const port = 3000
const config = {
    host: 'db',
    user: 'root',
    password: 'root',
    database:'nodedb'
};
const mysql = require('mysql')

function getAll(){
    const sql = 'SELECT * FROM people';
    const connection = mysql.createConnection(config);

    return new Promise(function(resolve, reject){
        connection.query(sql, function(err, result){
            if (err) reject(err);

            var people = [];
            result.forEach(function(item){
                people.push(item["name"]);
            });
            resolve(people);
        });
    });
}

function add(){
    const sql = `INSERT INTO people(name) values('Alex &#128540;'),('Rondao &#128513;'),('Almeida &#128521;')`;
    const connection = mysql.createConnection(config);
    
    return new Promise(function(resolve, reject){
        connection.query(sql, function(err, result){
            if (err) reject(err);
            resolve();
        });
    });
}

app.get('/', (req,res) => {

    add()
        .then(function(results){
            var list = '';

            getAll()
                .then(function(results){
                    results.forEach(function(item){
                        list += '- ' + item + '</br>';
                    });

                    res.send('<h1>Full Cycle</h1></br></br><span>Lista de nomes cadastrados no banco de dados.</span></br>' + list)
                })
                .catch(function(err){
                    console.log("error: " + err);
                })
                .then(() => {
                    
                });
        })
        .catch(function(err){
            console.log("error: " + err);
        });
})

app.listen(port, ()=> {
    console.log('Rodando na porta ' + port)
})