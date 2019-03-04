//script.js
//$(function(){
//    //Draggbles
//    $(".box").draggable();
//    $("#box1").draggable({scroll: true,revert: true});
//    $("#box2").draggable({axis: "x"});
//    $("#box3").draggable({axis: "y"});
//    $("#box4").draggable({containment : .container});
//}

/*****************jQuery ui draggable.html***********/
    $(function(){
        //draggables
        $(".box").draggable();
        $("#box1").draggable({scroll: true, revert: "invalid"});
        $("#box2").draggable({axis: "x"});
        $("#box3").draggable({axis: "y"});
        $("#box4").draggable({containment: ".container", revert:"invalid"});
        //dropables
        $("droppable").droppable({
            accept: "#box1",
            drop: function(){
                $(this).text("when a box got an attitude drop it like this!!");
            }
        });
/*****************jQuery ui sortable.html***********/
        $("#sortable").sortable({
            connectWith: "#sortableToo",
            placeholder : "placeholder-box"
        });
        $("#sortableToo").sortable({
            connectWith: "#sortable",
            placeholder : "placeholder-box"
        });
 /*****************jQuery ui todo.html***********/      
        $("#todoList ul").sortable({
            connectWith: "ul",
            items: "li:not('.listTitle, .addItem')",
            placeholder: "emptySpace",
        });
        $('input').keydown(function(e){
            if(e.keyCode == 13){
                //you pressed enter
                var item = $(this).val();
                $(this).parent().parent().append("<li>"+item+"</li>");
                $(this).val("");
            }
        });
        $("#trash").droppable({
            drop : function(event, ui){
                ui.draggable.remove();
            }
        });
        /*****************jQuery ui accordion.html***********/ 
        $("#accordion").accordion({
            collapsible:true,
            heightStyle: "content"
        });

/*****************jQuery ui datepicker.html***********/ 
$(".date").datepicker({
 showOtherMonths: true,
 selectOtherMonths:true,
    showButtonPanel:true,
    changeMonth:true,
    changeYear:true,
    numberOfMonths: 2,
    minDate:"-1M+2D",
    maxDate:"+1W",
});
});
