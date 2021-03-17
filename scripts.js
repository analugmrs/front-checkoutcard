/* apenas números */
function SomenteNumero(e){
    var tecla=(window.event)?event.keyCode:e.which;   
    if((tecla>47 && tecla<58)) return true;
    else{
    	if (tecla==8 || tecla==0) return true;
	else  return false;
    }
}

/* finalizar */
function ok() {

    var number1 = forms.number1.value;
    var number2 = forms.number2.value;
    var number3 = forms.number3.value;
    var number4 = forms.number4.value;
    var nome = forms.nome.value;
    var mes = forms.mes.value;
    var ano = forms.ano.value;
    var cvc = forms.cvc.value;

    if (number1 != "" & number2 != "" & number3 != "" & number4 != "" & nome != "" & mes != "" & ano != "" & mes >=1 & mes <= 12 & ano >= 2000 & ano <= 3000 & cvc != ""){
        Swal.fire(
            'Parabéns!',
            'Agora é só aguardar chegar.',
            'success'
        );
    return false;
    }
    else {
        Swal.fire(
            'Oops!',
            'Há algo de errado com o preenchimento. Confira para poder finalizar a compra!',
            'error'
        );
    return false;
        }
}


