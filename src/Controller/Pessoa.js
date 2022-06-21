import { openDb } from "../configDB.js";

export async function createTable(){
    openDb().then(db => {
        db.exec('CREATE TABLE Pessoa(id INTEGER PRIMARY KEY, name TEXT, bio TEXT, phone INTEGER, email TEXT, password TEXT)')
    })
}

export async function createUser(pessoa){
    openDb()
        .then(db => {
        db.run('INSERT INTO Pessoa (name, bio, phone, email, password) VALUES (?, ?, ?, ?, ?)', 
                            pessoa.name, pessoa.bio, pessoa.phone, pessoa.email, pessoa.password);
    });
}

export async function updateUser(pessoa){
    openDb()
        .then(db => {
        db.run('UPDATE Pessoa SET name = ?, bio = ?, phone = ?, email = ? , password = ? WHERE id = ?', 
                            pessoa.name, pessoa.bio, pessoa.phone, pessoa.email, pessoa.password, pessoa.id);
    });
}

export async function selectAllUser(request, response){
    openDb().then(db => {
       db.all('SELECT * FROM Pessoa')
       .then(pessoas => response.json(pessoas));
    });
}

export async function selectUser(req, res){
    let id = req.body.id;
    
     openDb().then(db => {
        db.get('SELECT * FROM Pessoa WHERE id = ?', id)
        .then(res => res);
    });
}

export async function deleteUser(id){
    return openDb().then(db => {
       return db.get('DELETE FROM Pessoa WHERE id = ?', id)
        .then(res => res);
    });
}