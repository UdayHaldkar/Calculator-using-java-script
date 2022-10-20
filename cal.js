function res(){

    var op1 = document.getElementById('a').value;
    var op2 = document.getElementById('b').value;
    
    var op = document.getElementById('ope').value;
    
    // alert(op1);

    if(op == '+'){
        var ans =parseInt(op1) + parseInt(op2);
    }
    if(op == '-'){
        var ans =parseInt(op1) - parseInt(op2);
    }
    if(op == '*'){
        var ans =parseInt(op1) * parseInt(op2);
    }
    if(op == '/'){
        var ans =parseInt(op1) / parseInt(op2);
    }

     document.getElementById('res').value= ans;
}