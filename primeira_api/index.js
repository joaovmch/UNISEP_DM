const express = require("express");

const app = new express();

app.use(express.json());

var contador_id = 1;

var data = [{
    id: 1,
    nome: "João",
    cpf: "00000000000",
    status: true
}];

app.get("/listar", (request, response)=>{
    return response.send(data);
});

app.post("/cadastrar", (request, response)=>{

     const {nome, cpf, status} = request.body;

    data.push({id: contador_id, nome, cpf, status});

    if (!cpf){
        return response.send("O campo cpf é obrigatorio");
    }
    contador_id++;

    return response.send("Pessoa cadastrada com sucesso!!");

    

    // const nome = request.body.nome;
    // const cpf = request.body.cpf;
    // const status = request.body.status;

    // console.log('DADOS DA PESSOA:');
    // console.log(nome);
    // console.log(cpf);
   //  console.log(status);
});




app.listen(8080, ()=>{
    console.log("o servidor está rodando na porta 8080!");
});
