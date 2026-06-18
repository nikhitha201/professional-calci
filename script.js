function appendValue(value)
{
document.getElementById("result").value += value;
}

function calculate()
{
try
{
document.getElementById("result").value =
eval(
document.getElementById("result").value
);
}
catch
{
document.getElementById("result").value =
"Error";
}
}

function clearResult()
{
document.getElementById("result").value = "";
}
