let itemsArr = []
        
            fetch('https://fakestoreapi.com/products/')       
            .then(res=>res.json())
             .then(json=>{
              let mytabledata="";
              itemsArr= json
              console.log("json data: ===>",itemsArr)
              itemsArr.forEach(myFunction);
               function myFunction(item) {
               mytabledata += `<tr id="item${item.id}" >

                                  <td>                           ${item.id} </td> 
                                  <td id="priceTable${item.id}"> ${item.price}</td>
                                  <td id="catTable${item.id}"> ${item.category}</td>
                                  <td id="rateTable${item.id}"> ${item.rating.rate}</td>
                                  <td id="countTable${item.id}"> ${item.rating.count}</td>
                                  <td id="imgTable${item.id}"> <img src="${item.image}" style="width:70px; hieght:70px;"></td>

                                  <td <input type="button" id="btn" onclick="Delete_element(${item.id})"> DELETE</td>

                                  <td
                                        < input type="button" onclick="Update_element(event)" data-id="${item.id}" data-price="${item.price}" data-cat="${item.category}" 
                                          data-rate-for="${item.rating.rate}" data-rate-count="${item.rating.count}" data-rate-img="${item.image}">Update</button>
                                         
                                  </td>

                                  <td
                                       <td <input type="button" onclick="ViewsEliment(event)" data-price="${item.price}" data-cat="${item.category}" 
                                       data-rate-for="${item.rating.rate}" data-rate-count="${item.rating.count}" data-rate-img="${item.image}">  views</td
                                   </td>
                                </tr>`
                                // <button onclick="Update_element(event,${item.id},${item.price})" data-cat="${item.category}">Update</button>       

                                document.getElementById("myTable").innerHTML = mytabledata; 
             

                                }
                               
                                })




              
              //delete element                  
              function Delete_element(id){
                let idEl = document.getElementById(`item${id}`)
                idEl.remove()     
                console.log(id)             
                              
              }
/////////////////////////////update
              function Update_element(e){
                 //console.log(e)
                // console.log($('#exampleModal'))
                 $('#exampleModal').modal('show');

                 let priceEl = document.getElementById('price')
                    // console.log(priceEl)
                     priceEl.value = e.target.dataset.price
                     console.log(e.target.dataset.price)
                    // console.log(priceEl)
                 

                 let categoryEl = document.getElementById('category');
                     categoryEl.value = e.target.dataset.cat
                
                

                 let ratingEL=document.getElementById("rating") ;
                     ratingEL.value=e.target.dataset.rateFor 

                  let countEL=document.getElementById("countd");
                      countEL.value=e.target.dataset.rateCount   
                      
                
                  let imageEL=document.getElementById("img") ;
                      imageEL.value=e.target.dataset.rateImg
                         

                //save data to update
                  let saveEl = document.getElementById('saveUpdate') 
                    saveEl.dataset.id=e.target.dataset.id
                      
              }

           function ViewsEliment(e) {
            $('#exampleModal_views').modal('show');
              document.getElementById("view_price").value = e.target.dataset.price
              document.querySelector('#view_category').value = e.target.dataset.cat
              document.querySelector("#view_rating").value=e.target.dataset.rateFor
              document.querySelector("#view_countd").value=e.target.dataset.rateCount
              document.querySelector("#view_img").value=e.target.dataset.rateImg
             
             
           }   
           function saveUpdateData(e){

            let pEL =document.getElementById('price')
            
            let strId = 'priceTable' + e.target.dataset.id
             console.log(strId)
            let tablePriceEl = document.getElementById(strId)
            //console.log(tablePriceEl.value)
            //console.log(pEL.value)
            tablePriceEl.innerHTML = pEL.value

            let ctEL=document.getElementById("category")
            let Cid='catTable'+ e.target.dataset.id
            console.log(e.target.dataset.id)
            let table_cat=document.getElementById(Cid)
            table_cat.innerHTML=ctEL.value

            let retEL=document.getElementById("rating");
            let retID='rateTable' + e.target.dataset.id
            let table_rat=document.getElementById(retID)
            table_rat.innerHTML=retEL.value


            let cEL=document.getElementById("countd");
            let countN='countTable'+ e.target.dataset.id
            let ratecount=document.getElementById(countN)
            ratecount.innerHTML=cEL.value

            let imgEL=document.getElementById("view_img");
            let getimg='imgTable' + e.target.dataset.id
            let tabel_img=document.getElementById(getimg)
            tabel_img.innerHTML=imgEL.value
          
          
           }
             
