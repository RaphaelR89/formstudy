Estudo de formulários aonde começo utilizando o useState, submit , React Form hook e por ultimo faço um exemplo de CEP consumindo a api para receber um endereço,autocompletar,validar e também restringir localização!

use os commits para se guiar no projeto!

form State eu demonstro como criar um formulário com base no useState! Infelizmente criar um formulário no useState nao é uma boa pratica pois a página acaba sendo atualizada a cada vez que uma tecla e acionada:

    Exemplo: Seu nome tem 7 letras, a página será atualizada 7x

Form modo Submit eu utilizo a forma padrão de deixar o FORM controlar a forma de envio! Usar o submit é melhor que o useState pois você não atualiza a pagina toda vez que digita porém você precisar escrever mais linhas de código ao criar a estrutura do json e a linha do código para capturar o valor.

useForm eu utilizo o REACT FORM HOOk para gerenciar meus formulários de forma simples e rápida, ele tem todas as vantagens do modo submit porém quando você pressiona o "enviar" ele automaticamente gera um json na sua função de handleSubmit o que economiza linhas de código (você n precisa montar a estrutura que vai receber os valores!). Eu não coloquei validação para tratar errors.

No CEP Projeto eu transformo o formulário para uma estrutura de cadastro de endereço muito utilizado nos ecommerce e alí eu consumo uma api para localizar o CEP, autocompletar com as informações retornadas da api assim que o campo de CEP deixar de ser o foco E também criei uma validação para caso o CEP não seja de belo horizonte, um alert seja acionado e os campos resetados para o estado vazio!
