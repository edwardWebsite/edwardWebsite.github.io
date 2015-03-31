 $(function(){
      $("#stage").load("./images/svgIntro.svg", function(response){
        $(this).addClass("svgLoaded");

        if (!response){

        }
    });
});