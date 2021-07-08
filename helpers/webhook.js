const bot = require("../app.js");
const dialogflow = require("./helpers/dialogflow.js");

function uniqueID(){
  function chr4(){
    return Math.random().toString(16).slice(-6);
  }
  return chr4();
}
  
  let date = new Date();
  let data = date.toLocaleString('pt-BR', {timeZone: "America/Sao_Paulo", hour: 'numeric', hour12: false });
 
  function welcome(agent) {
    if(data >=5 && data <=12)
    agent.add('Oi 👩🏽‍🎤 Bom dia!' +'\n'+'\n'+
             'Seja muito bem vindo(a) ao nosso chatbot para Whatsapp' +'\n'+'\n'+
             'Digite *Iniciar* para se inscrever no *Sorteio*');
    
    else if(data >=13 && data <=18)
      agent.add('Oi 👩🏽‍🎤 Boa tarde!' +'\n'+'\n'+
             'Seja muito bem vindo(a) ao nosso chatbot para Whatsapp' +'\n'+'\n'+
             'Digite *Iniciar* para se inscrever no *Sorteio*');
    else 
      agent.add('Oi 👩🏽‍🎤 Boa noite!' +'\n'+'\n'+
             'Seja muito bem vindo(a) ao nosso chatbot para Whatsapp' +'\n'+'\n'+
             'Digite *Iniciar* para se inscrever no *Sorteio*');
  }


//CADASTRO
   function cadastro(agent) {
    const {nome, idade, email, telefone} = agent.parameters;    
    const data = [{
    Nome: nome,
        Idade: idade,
    Email: email,
    Telefone: telefone,
        Data: new Date(),
        Numero: uniqueID()
    }];
    axios.post("https://sheet.best/api/sheets/f5392bc1-db5c-4e34-9875-bc48b17af95f", data);
    agent.add("Muito bem, o seu cadastro foi realizado com sucesso.");
    agent.add("Para visualizar o seu número da sorte digite *OK*");
   }
  
      //PESQUISA
   function consulta(agent) {    
   var email = request.body.queryResult.parameters.consulta;
  return axios.get("https://sheet.best/api/sheets/f5392bc1-db5c-4e34-9875-bc48b17af95f").then(res => {
    res.data.map(coluna => {
      if (coluna.Email === email)
      response.json({
        fulfillmentText:
        "Muito bem..! " +
        "\n" +
        "Sr(a) " + coluna.Nome +
        "\n" +
        " O seu número da sorte é " + coluna.Numero +"\n" +"\n" + "Guarde esse número e *Boa Sorte!* 👩🏽‍🎤 👍🏼"
      });
    });
    });
   }

module.exports = {
  cadastro,
  welcome,
  consulta
}
