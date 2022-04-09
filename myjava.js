function sum()
{
    let x = parseInt(prompt("Enter The Number: "))
    alert(x);

    if(x%2 == 0)
    {
        document.getElementById("ID").textContent = "The Number "+x+" is Even";
        document.getElementById("ID").style.color = "green";
    }
    else
    {
        document.getElementById("ID").textContent = "The Number "+x+" is odd";
        document.getElementById("ID").style.color = "red";
    }
}
