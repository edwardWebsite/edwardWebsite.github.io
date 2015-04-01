
 function put_svg(name){
 	$("#stage").load(name, function(response){
        $(this).addClass("svgLoaded");

        if (!response){

        }

    });
    
 

 }	
     
