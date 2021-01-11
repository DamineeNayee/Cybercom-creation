var john_team=[89,120,103];
var mike_team=[114,94,123];
var avgjohn,avgmike;
var sum1=0,sum2=0,i;
function get_sum(team)
{

	var i,sum1=0,avg;
		for(i = 0; i <3; i++) { 
   				   sum1 = team[i]+sum1;
    	 }
    	 avg=sum1/3;
    	 return avg;
   }



   function get_team(team)
{

	var i,sum1=0;
		for(i=0;i<3;i++)
	{
			team[i]=prompt("enter team player"+ i + "team score");

	}
	return team;
   }
function display(team) {
	// body...

    for (i=0;i<team.length;i++)
	{
	document.write("score "+ i + ":" + team[i] + "<br >");
	} 	
	document.write("<br>");
}
 // document.write("john_average"+ avgjohn + "<br>");
 // document.write("mike_average"+ avgmike + "<br>");
function winner( avg1,avg2)
		{


		if(avg1>avg2)
		{
				document.write("winner is john team <br>");
		}
		else if(avg1 < avg2)
		{
			document.write("winner is mike team <br>");

		}
		else
		{

			document.write("match is draw no one is winner is <br>");

		}

}
document.write("john team" +"<br>");
display(john_team);
document.write("mike team" +"<br>");
display(john_team);

avgjohn=get_sum(john_team);
avgmike=get_sum(mike_team);
 document.write("john_average"+ avgjohn + "<br>");
 document.write("mike_average"+ avgmike + "<br>");
 winner(avgjohn,avgmike);
	document.write("<br>new scenario<br><br>");
	john_team=get_team(john_team);
	mike_team=get_team(mike_team);

	document.write("john team" +"<br>");
display(john_team);
document.write("mike team" +"<br>");
display(john_team);

avgjohn=get_sum(john_team);
avgmike=get_sum(mike_team);
 
 winner(avgjohn,avgmike);


	