export const Cadastro  = {
    ///Dados
    input_name: "input[name='name']",
    input_cpf: "input[name='cpf']",
    input_email: "input[name='email']",
    input_whatsapp: "input[name='whatsapp']",

    ///Endereço
    input_postalcode:"input[name='postalcode']",
    input_button:"#page-deliver > form > fieldset:nth-child(3) > div:nth-child(2) > div:nth-child(2) > input[type=button]",
    input_number:"input[name='address-number']",
    input_details:"input[name='address-details']",

    ///Método de entrega
    input_entrega:"#page-deliver > form > fieldset:nth-child(4) > ul > li:nth-child(1)",

    ///Seleção da CNH 
    input_imagem:"input[type='file']",
    input_buttonfinalizar:'#page-deliver > form > button',

    ///Botão de confirmação de entrega
    input_toast: "body > div.swal2-container.swal2-center.swal2-backdrop-show > div > div.swal2-actions > button.swal2-confirm.swal2-styled",

    ///Mensagem cpf inválido
    input_cpf_invalido: "Oops! CPF inválido",

    /* ------------VERIFICAR PDF------------
    input_numero_caractere: "Oops! Whatsapp com caracteres especiais", 
    */
 
    ///Numero de telefone
    input_numero_valido: '41999999999',
    input_numero_caractere: '(41)99999-9999',
    input_numero_maior: '5541999999999',

}