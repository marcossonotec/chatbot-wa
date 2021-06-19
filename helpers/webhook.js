


let date = new Date();
let data = date.toLocaleString('pt-BR', {timeZone: "America/Sao_Paulo", hour: 'numeric', hour12: false })

function welcome (agent) {

  if(data >= 5 && data <= 12)
  agent.add('*iPhome Delivery*' +'\n'+'\n'+
            'Bom dia, seja bem-vindo ao atendimento automatizado do iPhome Delivery!'+'\n'+'\n'+
            'Digite INICIAR para fazer um pedido.')
  
  else if(data >= 13 && data <= 18)
  agent.add('*iPhome Delivery*' +'\n'+'\n'+
            'Boa tarde, seja bem-vindo ao atendimento automatizado do iPhome Delivery!'+'\n'+'\n'+
            'Digite INICIAR para fazer um pedido.')
  
  else
  agent.add('*iPhome Delivery*' +'\n'+'\n'+
            'Boa noite, seja bem-vindo ao atendimento automatizado do iPhome Delivery!'+'\n'+'\n'+
            'Digite INICIAR para fazer um pedido.')
}


function iphome (agent) {
const iPhome=agent.parameters.iPhome;
const Especiais=agent.parameters.Especiais;
const Bebidas=agent.parameters.Bebidas;
var total=agent.parameters.total;
total=0.00;
//bebidas
if(Bebidas =='Refrigerante 1L - R$5.00'){
total=total+5.00; 
}
else if(Bebidas =='Refrigerante Lata - R$3.50'){
total=total+3.50; 
}
else if(Bebidas =='Sem Bebida'){
total=total+0.00; 
}
//petiscos
if(iPhome ==='iPhome 7 - R$24.90'){
total=total+24.90; 
}
else if(iPhome ==='iPhome 7 Plus - R$28.90'){
total=total+28.90; 
}
else if(iPhome ==='iPhome 8 - R$32.90'){
total=total+32.50; 
}
else if(iPhome ==='iPhome 8 Plus - R$35.90'){
total=total+35.90; 
}
else if(iPhome ==='iPhome X - R$39.90'){
total=total+39.90; 
}
//especiais
if(Especiais =='Bolinha Carne Seca Banana - R$4.50'){
total=total+4.50; 
}
else if(Especiais =='Salgados de Bacalhau - R$4.50'){
total=total+4.50; 
}
else if(Especiais =='Sem Petisco Adicional'){
total=total+0.00; 
}
var   Total  =  total . toFixed ( 2);
var troco=agent.parameters.Troco -Total;
if (agent.parameters.Pagamento == 'Dinheiro' && agent.parameters.Troco != '0')
  troco= '- Troco: R$'+troco
else 
  troco = '- Sem Troco'; 
  
if(agent.parameters.Delivery =='Retirar')
agent.add('Antes de encaminharmos seu pedido, confirme se está tudo certinho:' + '\n' + '\n' +
      '*PEDIDO PARA RETIRADA*' + '\n' + 
      '*TEMPO ESTIMADO: 15 À 30 MINUTOS*' + '\n' + '\n' +
      '--------------------------------' + '\n' +
      '*ITENS DO PEDIDO*' + '\n' +
      '--------------------------------' + '\n' + 
      '*TIPO:* '+agent.parameters.iPhome + '\n' +
      '*CLIENTE:* ' + '\n' + 
      '*BEBIDA:* '+agent.parameters.Bebidas + '\n' +
      '*MOLHOS:* '+agent.parameters.Molhos.Molhos+'\n'+
      '*PETISCOS:* '+agent.parameters.Petiscos.Petiscos+'\n'+
      '*ESPECIAIS:* '+agent.parameters.Especiais +'\n'+ 
      '*ENTREGA:* '+agent.parameters.Delivery	 + '\n' + '\n' +
      '--------------------------------' + '\n' +
      '*FORMA DE PAGAMENTO*' + '\n' +
      '--------------------------------' + '\n' +
      agent.parameters.Pagamento+'  '+troco +'\n'+'\n'+
      '--------------------------------' + '\n' +
      '*VALOR TOTAL:* R$'+Total + '\n' +
      '--------------------------------' + '\n' + '\n' +
      'Digite *FINALIZAR*, se estiver tudo certo' + '\n' +
      'Digite *REINICIAR*, para refazer o pedido'+ '\n' +
      'Digite *CANCELAR*, para cancelar o pedido '

     )
else
agent.add('Antes de encaminharmos seu pedido, confirme se está tudo certinho:' + '\n' + '\n' +
      '*PEDIDO PARA ENTREGA*' + '\n' + 
      '*TEMPO ESTIMADO: 30 À 60 MINUTOS*' + '\n' + '\n' +
      '--------------------------------' + '\n' +
      '*ITENS DO PEDIDO*' + '\n' +
      '--------------------------------' + '\n' + 
      '*TIPO:* ' +agent.parameters.iPhome + '\n' +
      '*NOME:* ' +agent.parameters.Nome + '\n' + 
      '*BEBIDA:* ' +agent.parameters.Bebidas + '\n' +
      '*MOLHOS:* ' +agent.parameters.Molhos1+'  '+agent.parameters.Molhos2+'  '+agent.parameters.Molhos3+'  '+agent.parameters.Molhos4+ '\n'+
      '*PETISCOS:* ' +agent.parameters.pedidoPetisco1 + '  '+agent.parameters.pedidoPetisco2+'  '+agent.parameters.pedidoPetisco3+'  '+agent.parameters.Petiscos4+'  '+agent.parameters.Petiscos5+' '+agent.parameters.Petiscos6+'\n'+
      '*ESPECIAIS:* ' +agent.parameters.Especiais +'\n'+
      '*ENDEREÇO:* ' +agent.parameters.Local + '\n' + '\n' +
      '--------------------------------' + '\n' +
      '*FORMA DE PAGAMENTO*' + '\n' +
      '--------------------------------' + '\n' +
      agent.parameters.Pagamento+' '+troco +'\n'+'\n'+
      '--------------------------------' + '\n' +
      '*VALOR TOTAL:* R$'+Total + '\n' +
      '--------------------------------' + '\n' + '\n' +
      'Digite *FINALIZAR*, se estiver tudo certo' + '\n' +
      'Digite *REINICIAR*, para refazer o pedido'+ '\n' +
      'Digite *CANCELAR*, para cancelar o pedido'
     )
}

module.exports = {
  iphome,
  welcome
}