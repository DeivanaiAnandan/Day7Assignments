var request1 = new XMLHttpRequest();
request1.open("GET", "https://restcountries.com/v3.1/all");
request1.send();
request1.onload=function(){
    var result = JSON.parse(request1.response);
    console.log(result);

    //1.Get all the countries from Asia continent /region using Filter function
    var res1 = result.filter((element)=>element.region == "Asia");
    console.log(res1);

    // 2. Get all the countries with population of less than 2 lacs using Filter function
    var res2 = result.filter((ele) => ele.population < 200000);
    console.log(res2);

    //3. Print the following details name, capital, flag using forEach function.
    result.forEach((element)=>{
        console.log(element.name);
        console.log(element.capital);
        console.log(element.flag);
    })

    //4. Print the total population of countries using reduce function 
    var res4=result.reduce((acc,element)=>acc+element.population, 0);
     console.log(res4);
     
    //5. Print the country which use US Dollars as currency.
     var res5 = result.filter((element)=>element.currencies == "United States dollar");
    console.log(res5);
   
}
