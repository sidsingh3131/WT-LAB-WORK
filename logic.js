function func()
{ 
       let iteration= parseInt(prompt("Enter the iteration :"));
       let a=0,b=1;
       let c=a+b;
       let n=3;

       document.write(a + ",");
       document.write(b);

      while(n<=iteration)
      {   
          document.write("," + c);

          a=b;
          b=c;
          c=a+b;
          n++;
      }
}
