//scripts.js
var score;
var playing = false;
var fruits = ['apple','banana','cherries','grapes','mango','orange','peach','pear','watermelon'];
var trialsLeft;
var action; //variable for setInterval
var step;
$(function(){
	$("#startreset").click(function(){
		if(playing == true){
			// I want to rest
			location.reload();
			
		}
		else{
			//I want to play!
			playing = true;
			score = 0;
			$("#scorevalue").text(score);
			trialsLeft = 3;
			$("#trialsLeft").show();
			addHearts();
			$("#gameOver").hide();
			$("#startreset").text("Reset Game");
			//strt sending fruits
			startAction();
		}
	});
	function addHearts(){
		$("#trialsLeft").empty();
		for(i = 0;i < trialsLeft; i++){
			$("#trialsLeft").append("<img src='images/heart.png' class='life'>");
		}
	}
  $("#fruit1").mouseover(function(){
	  score=score+1;
	  $("#scorevalue").text(score);
//	  document.getElementById("slicesound").play()
	  $("#slicesound")[0].play();
	  stopAction();
	  $("#fruit1").hide("explode",500);
//	  again start sending other fruits
	  setTimeout(startAction, 600);
	  
  });
	function startAction(){
		$("#fruit1").show();
		chooseFruit();
		$("#fruit1").css({
			'left' : Math.round(Math.random() * 500),
			'top' : -60,
		});
		step =  1 + Math.round(Math.random() * 5);
		action = setInterval(function(){
			$("#fruit1").css("top",$("#fruit1").position().top + step);
			if($("#fruit1").position().top > $("#fruitsContainer").height()){
//				check if we have trialsLeft or not
				if(trialsLeft > 1){
//					generate a fruit again and reduce the life
//					Bug may occur
					chooseFruit();
					$("#fruit1").css({
				'left' : Math.round(Math.random() * 500),
				'top' : -60,
			});
					step =  1 + Math.round(Math.random() * 5);
				 	trialsLeft--;
					addHearts();
					
			}
				else{
					//game over
					playing = false;
					$("#startreset").text("Start Game");
					$("#gameOver").show();
					$("#gameOver").html("<p>Game Over!!</p><p>Your Score "+score +"</p>");
					$("#trialsLeft").hide();
					$("#scorevalue").text("");
					stopAction();
					
				}
			}
		},10);
	}
	function chooseFruit(){
		$("#fruit1").attr("src",'images/' + fruits[Math.round(Math.random() * (fruits.length - 1))]+ '.png');
	}
	function stopAction(){
		clearInterval(action);
	}
});