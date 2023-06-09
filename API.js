fetch('https://fakestoreapi.com/products/')
            .then(res=>res.json())
             .then(json=>{
            //     console.log(json)
                

              let mytabledata="";
            
               json.forEach(myFunction);

               
               
               function myFunction(item) {
               mytabledata += `<tr> <td> ${item.id} </td> 
                                  <td> ${item.price}</td>
                                  <td> ${item.category}</td>
                                  <td> ${item.description}</td>
                            </tr>`
                document.getElementById("myTable").innerHTML = mytabledata; 
                            
               
               } 
            })
            





                
                                
        

             
