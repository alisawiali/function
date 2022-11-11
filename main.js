

function pro(price,taxes,ads){
    let main = price+ taxes +ads;
    let result=main;
   
   
 
    return result;
}

function calcAge (age){
    let  calc = age *365;
    let result1 = calc;
    return result1;

}
 let e =pro(100, 2.2,10)
 let u =calcAge(30)

 console.log(e)
 console.log(u)


 console.log('-------------')


 let m =['hallo', 'Omer']

 function hallo( ...m ){
    let result = 0;

    for (let x =0; x < m.length; x++)
    {
  
       result += m[x]
    }
    
   console.log(result)
    
 }
 hallo ( 1,2,3,4,5);
 console.log('------------zweite beispiel----------------')

 let mal =[' Omer' , 'Amer', ' mustfa']

function Mari( ...mal){
    let result =0;
    for(let d =0; d < mal.length; d++){
        result += mal[d];
    }
    console.log(result)
}

Mari( 1,3,5,1)
