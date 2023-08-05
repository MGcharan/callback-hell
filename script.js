let display=document.getElementById("countdown");
display.style.textAlign="center";

let content=document.getElementById("content")

let timer=10
setTimeout(()=>{
    display.innerHTML=timer--;
    
    display.style.fontSize="100px";
    display.style.color="green"
    setTimeout(()=>{
        display.innerHTML=timer--;
        
        display.style.fontSize="90px";
        display.style.color="orange";
        setTimeout(()=>{
            display.innerHTML=timer--
           
            display.style.fontSize="80px";
            display.style.color="green"
            setTimeout(()=>{
                display.innerHTML=timer--
               
                display.style.fontSize="70px";
                display.style.color="orange"

                setTimeout(()=>{
                    display.innerHTML=timer--
                   
                     display.style.fontSize="50px";
                    display.style.color="green"

                    setTimeout(()=>{
                        display.innerHTML=timer--
                        display.style.fontSize="40px";
                        display.style.color="orange"


                        setTimeout(()=>{
                            display.innerHTML=timer--
                            display.style.fontSize="40px";
                           
                            display.style.color="green"


                            setTimeout(()=>{
                                display.innerHTML=timer--
                                display.style.fontSize="30px";
                               
                                display.style.color="orange"


                                setTimeout(()=>{
                                    display.innerHTML=timer--
                                    display.style.fontSize="30px";
                                   
                                    display.style.color="green"
                                

                                    setTimeout(()=>{
                                        display.innerHTML=timer--
                                        display.style.fontSize="20px";
                                       
                                        display.style.color="orange"
                                   

                                    setTimeout(()=>{
                                        content.innerHTML=`<span id=fix> Happy Independence Day</span>`
                                        
                                        
                                        // ` <ul><li class="f1">Happy</li>
                                        // <li class="f2">Independence</li>
                                        // <li class="f3"> Day</li>
                                        //         </ul>`
                                            display.style.visibility="hidden"
                                            
                                        
                                       
                                       
                                        // let word=document.querySelectorAll(".ul")
                                        // display.style.fontSize="80px";
                                        // word.style.color="white"
                                        // word.style.position="relative";
                                        // word.style.bottom="50px";
                                        // word.style.listStyleType="none"

                                        



                                    
                                    },1000)

                                },1000)

                                },1000)
                            },1000)
                        },1000)
                    },1000)

                },1000)
            },1000)
        },1000)

    },1000)
},1000)

