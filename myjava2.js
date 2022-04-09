function sum()
{
    let x = parseInt(prompt("Enter The Number: "))
    alert(x);

    for(let i = 1; i<=x; i++)
    {
        document.write("<br>" + i);
    }
}
