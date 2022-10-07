var request=new XMLHttpRequest();
request.open("GET","https://restcountries.com/v2/all");
request.send();
request.onload=function(){
    var result=JSON.parse(request.response);
         console.log(result);
        
         //a.Get all the countries from the Asia continent/region using filter function
         res=result.filter((ele)=>ele.region==="Asia").map((ele)=>ele.name);
         console.log(res);

         //b.Get all the countries with the population of less than 2 lakhs using filter function
         res1=result.filter((ele)=>ele.population<200000).map((ele)=>ele.name);
         console.log(res1);

         //c.Print the following details name,capital,flag using forEach function
         result.forEach(ele=>{console.log(ele.name);
             console.log(ele.capital);
             console.log(ele.flag);
        
         })

    //d.print the total populationof countries using reduce function
      var total=result.reduce((pop,ele)=>pop+ele.population,0);
      console.log(total);

     //e.print the country which uses US Dollars as currency
     var cur=[];
     for(i=0;i<result.length;i++){
         if(result[i].currencies[0].code==="USD")
         {
             console.log("name:",result[i].name,"==>",result[i].currencies[0].code)
         }
     }
 }








