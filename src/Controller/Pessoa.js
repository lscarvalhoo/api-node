import { openDb } from "../configDB.js";

export async function createTable(){
    openDb().then(db => {
        db.exec('CREATE TABLE Pessoa(id INTEGER PRIMARY KEY, name TEXT, bio TEXT, phone INTEGER, email TEXT, password TEXT)')
    })
}

export async function selectAllUser(request, response){
    openDb().then(db => {
       db.all('SELECT * FROM Pessoa')
       .then(pessoas => response.json(pessoas));
    });
}

export async function selectUser(request, response){
    let id = request.body.id;

    openDb().then(db => {
        db.get('SELECT * FROM Pessoa WHERE id = ?', id)
        .then(pessoa => response.json(pessoa));
    });
}

export async function createUser(request, response){
    let pessoa = request.body;
    openDb()
        .then(db => {
        db.run('INSERT INTO Pessoa (name, bio, phone, email, password) VALUES (?, ?, ?, ?, ?)', 
                            pessoa.name, pessoa.bio, pessoa.phone, pessoa.email, pessoa.password);
    });

    response.json({
        "statusCode" : 200
    })
}

export async function updateUser(request, response){
    let pessoa = request.body;
    openDb()
        .then(db => {
        db.run('UPDATE Pessoa SET name = ?, bio = ?, phone = ?, email = ? , password = ? WHERE id = ?', 
                            pessoa.name, pessoa.bio, pessoa.phone, pessoa.email, pessoa.password, pessoa.id);
    });

    response.json({
        "statusCode" : 200
    })
} 

export async function deleteUser(request, response){
    let id = request.body.id; 
    openDb().then(db => {
        db.get('DELETE FROM Pessoa WHERE id = ?', id)
        .then(pessoa => response.json(pessoa));
    });
}