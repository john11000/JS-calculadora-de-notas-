let start=document.querySelector(".start")
totalizar=document.querySelector(".totalizar")
let pantalla = document.querySelector(".pantalla")
let ingresar = document.querySelector(".ingresar")
let cNotificacion=document.querySelector(".cNotificacion")
let resultadoFinal=0
let creditosT=0
limite=100
evento=true
eventoNoti=true




start.addEventListener("click",()=>{
   
    cantidadNotas = document.querySelector(".cantidadNotas").value
    ingresar.innerHTML=""
    pantalla.innerHTML=""
    
    

    //crear espacios de notas  y creditos
 
  
    if(cantidadNotas>=1){
        if(cantidadNotas>limite){
            alert(`el limite es de ${limite} notas`)
            cantidadNotas = document.querySelector(".cantidadNotas").value=100
        }else{
            let fragment = new DocumentFragment()
            let prueba=document.createElement("div")
        
        
        for(let i=1;i<=cantidadNotas;i++){
            
            
        
            
            
            prueba.innerHTML+=`<div>
     
            <input type="text"  placeholder="nota${i}" class="n${i}">
            <input type="text" placeholder="creditos" class="c${i}">
       </div>
            `
    
            fragment.appendChild(prueba)

        }
        ingresar.appendChild(fragment)
        totalizar.removeAttribute("hidden")

        }
      

            
        
      
        
        

    }
  
   
})


totalizar.addEventListener("click",()=>{
     cNotificacion.innerHTML=""
    
    operar=()=>{
      
        resultadoFinal=0
        creditosT=0
        sumaT=0
        eventoNoti=true
      
        
    

    //comprobar que todo esten llenos sino reemplazar por ceros


    
    for(let i=1;i<=cantidadNotas;i++){
        //console.log(cantidadNotas)
        
        let nota=document.querySelector(`.n${i}`)
        let credito=document.querySelector(`.c${i}`)
        nota.addEventListener("keypress",()=>{
            evento=false
            
            
            
            })

        credito.addEventListener("keypress",()=>{
         evento=false
        })


        nota.addEventListener("keyup",()=>{ setTimeout(function(){
            evento=true
            if(eventoNoti==true){
                
                eventoNoti=false
                cNotificacion.innerHTML=`<div class="notificacion nr">el calculo automatico se ha desactivado <input type="button" value="x" class="x"></div>`
                let equis=document.querySelector(".x")
                equis.addEventListener("click",()=>{cNotificacion.setAttribute("hidden","t")})
                eventoNoti=true
            }
            setTimeout(function(){cNotificacion.innerHTML=`<div class="notificacion nv">el calculo automatico se ha activado <input type="button" value="x" class="x"></div>`;eventoNoti=true;let equis=document.querySelector(".x")
            equis.addEventListener("click",()=>{cNotificacion.setAttribute("hidden","t")})},3000)
        
        },1000);
    
                
        
    })

        credito.addEventListener("keyup",()=>{ setTimeout(function(){
            evento=true
            if(eventoNoti==true){
                
                eventoNoti=false
                cNotificacion.innerHTML=`<div class="notificacion nr">el calculo automatico se ha desactivado<input type="button" value="x" class="x"></div>`
                let equis=document.querySelector(".x")
                equis.addEventListener("click",()=>{cNotificacion.setAttribute("hidden","t")})

            }
            setTimeout(function(){cNotificacion.innerHTML=`<div class="notificacion nv">el calculo automatico se ha activado<input type="button" value="x" class="x"></div>`;eventoNoti=true;let equis=document.querySelector(".x")
            equis.addEventListener("click",()=>{cNotificacion.setAttribute("hidden","t")})},3000)
        
        },1000);
        cNotificacion.innerHTML=`<div class="notificacion nv">el calculo automatico se ha activado<input type="button" value="x" class="x"></div>`
        let equis=document.querySelector(".x")
                equis.addEventListener("click",()=>{cNotificacion.setAttribute("hidden","t")})
                
        
    })
      
     
        
        nota.addEventListener("keydown",()=>{   
            
            if(evento==true){
                if(String.fromCharCode(event.keyCode)=="" && evento==true){  
                
            
                    if(cantidadNotas<1000){
                        evento=false
                        setTimeout(function(){ operar()}, 3000);
                        setTimeout(function(){evento=true},1000);
                       
                    return
    
                    }else{
                        evento=false
                        setTimeout(function(){ operar()}, 3000);
                        setTimeout(function(){evento=true},1000);
                       evento=true
                    return
    
                    }
                    
                }else{
                    evento=false
                    setTimeout(function(){ operar()}, 0);
                    //setTimeout(function(){evento=true},1000);
                    evento=true
                    return
                }

            }
                        
            
        
        
        })
        credito.addEventListener("keydown",()=>{
            if(evento==true){
                if(String.fromCharCode(event.keyCode)==""){
                    evento=false
                    if(cantidadNotas<1000){
                        evento=false
                        setTimeout(function(){ operar()}, 3000);
                        setTimeout(function(){evento=true},1000);
                      
                        
                    return
    
                    }else{
                        evento=false
                        setTimeout(function(){ operar()}, 3000);
                        setTimeout(function(){evento=true},1000);
                      
                    return
    
                    }
    
                }else{
                    evento=false
                    setTimeout(function(){ operar()}, 0);
                    //setTimeout(function(){evento=true},1000);
                    evento=true
                    return
                }

            }
            
            
            
        })
       
        if(evento==true){
            if(nota.value==""){
                nota.value="0"
    
            }
            if(credito.value==""){
               credito.value="0"
            }

        }
       
        

        


    
    }



    



    //operar las notas con los creditos
    
       
    

        
    
    if(cantidadNotas>=1){
        for(let i=1;i<=cantidadNotas;i++){

            let nota=document.querySelector(`.n${i}`).value
            let credito=document.querySelector(`.c${i}`).value
         
            
            if(creditos=0){

            }else{
                sumaT+=parseFloat(nota)*parseInt(credito)
                creditosT+=parseInt(credito)

            }
           
            
            
            
            
            
           
            
            
         
        
        
        }
      
        

        resultadoFinal=sumaT/creditosT
     
        
        if(isNaN(resultadoFinal)){
    
            resultadoFinal=0
        }
        console.log(cantidadNotas)
        //mostrar tabla de resultados
        
        if(resultadoFinal>=3.0){
            estado=`<td class="aprobado">aprobado</td>
            <img src="../../img/happy.png" alt="cara feliz" class="imagenes">`
        }else{
            estado=`<td class="desaprobado">desaprobado</td>
            <img src="../../img/sad.png" alt="cara triste" class="imagenes">`    
        }
        pantalla.innerHTML=""

        let fragment = new DocumentFragment()
        let texto=document.createElement("div")

        
         texto.innerHTML=`
        
        <table class="default" align="center">
          
        <tr>
      
          <th>suma total</th>
      
          <td>${sumaT}</td>
      
     
      
        </tr>
      
        <tr>
      
          <th>creditos</th>
      
          <td>${creditosT}</td>
      
      
        </tr>
      
        <tr>
      
          <th>promedio</th>
      
          <td>${resultadoFinal}</td>
    
      
        </tr>
        <tr>
      
            <th>estado</th>
        
            ${estado}
      
        
          </tr>
      
      </table>`
     
        fragment.appendChild(texto)
        pantalla.appendChild(fragment)
  

    }
    

    


    }
   
    operar()


})


