function calcNum (gam)
{
    document.getElementById('result').value += gam;
}
function operation (){
    var operate = document.getElementById('result').value;
    if(operate == 0){
        document.getElementById('result').value = "sin operation";
    }else{
        document.getElementById('result').value = eval(operate);
    }
}
function reset()
{
    document.getElementById('result').value = "";
}