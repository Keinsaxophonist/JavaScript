<?php

echo "<html>";
echo "<head>";
//echo '<link rel="stylesheet" media="all" href="https://planetarium.berlin/sites/default/files/css/css_9m8-tA3IQf8ThlLQYTTZUyEweCvyR908Tg0XCbKYOfY.css?pyfiyj" />';
//echo '<link rel="stylesheet" media="all" href="https://planetarium.berlin/sites/default/files/css/css_0PNhQsEMTm9TRRA1hx5x60wP4r0skV1KnLcrGohUbjE.css?pyfiyj" />';
echo '<link rel="stylesheet" media="all" href="datei1.css" />';
echo '<link rel="stylesheet" media="all" href="datei2.css" />';

echo '<script>

	counter = 1;
	var fArray = [];
	fArray[counter] = [];
	fArray[counter][0] = "Wie heißt unser Stern?";
	fArray[counter][1] = "a) Sonne";
	fArray[counter][2] = "b) Mond";
	fArray[counter][3] = "c) Stern";
	fArray[counter][4] = 1;
	fArray[counter][5] = "Unser Stern wird ganz einfach \"Sonne\" genannt und ist ein Stern. Damit sind alle Sterne ebenso Sonnen.";
	fArray[counter][6] = "";
	
	
	counter++;
	fArray[counter] = [];
	fArray[counter][0] = "Wie lange dauert es von einem Vollmond zum nächsten?";
	fArray[counter][1] = "a) 27,32 Tage";
	fArray[counter][2] = "b) 28,64 Tage";
	fArray[counter][3] = "c) 29,53 Tage";
	fArray[counter][4] = 3;
	fArray[counter][5] = "Von einem Vollmond zum nächsten vergehen im Durchschnitt 29,53 Tage (Phasenzyklus)";
	fArray[counter][6] = "";

	counter++;
	fArray[counter] = [];
	fArray[counter][0] = "Wieviele Planeten gibt es in unserem Sonnensystem?";
	fArray[counter][1] = "a) 4";
	fArray[counter][2] = "b) 8";
	fArray[counter][3] = "c) 9";
	fArray[counter][4] = 2;
	fArray[counter][5] = "Pluto ist seit 2006 kein Planet mehr. Daher gibt es aktuell 8 Planeten in unserem Sonnensystem. Sie heißen Merkur, Venus, Erde, Mars, Jupiter, Saturn, Uranus und Neptun.";	
	fArray[counter][6] = "";

	counter++;
	fArray[counter] = [];
	fArray[counter][0] = "Welches ist der größte Planet in unserem Sonnensystem?";
	fArray[counter][1] = "a) Mars";
	fArray[counter][2] = "b) Erde";
	fArray[counter][3] = "c) Jupiter";
	fArray[counter][4] = 3;
	fArray[counter][5] = "Jupiter ist mit einem Durchmesser von 143.000 Kilometer der größte Planet im Sonnensystem.";	
	fArray[counter][6] = "";
	
	counter++;
	fArray[counter] = [];
	fArray[counter][0] = "Was sind Sterne?";
	fArray[counter][1] = "a) heiße Gaskugeln";
	fArray[counter][2] = "b) große Steine";
	fArray[counter][3] = "c) Planeten";
	fArray[counter][4] = 1;
	fArray[counter][5] = "Sterne sind, wie unsere Sonne, heiße und große Gaskugeln.";	
	fArray[counter][6] = "";

	counter++;
	fArray[counter] = [];
	fArray[counter][0] = "Wieviele Sternbilder (offizielle) gibt es am Nachthimmel?";
	fArray[counter][1] = "a) 2";
	fArray[counter][2] = "b) 88";
	fArray[counter][3] = "c) 105";
	fArray[counter][4] = 2;
	fArray[counter][5] = "Die Internationale Astronomische Union (IAU) hat 88 offizielle Sternbilder festgelegt.";	
	fArray[counter][6] = "";

	counter++;
	fArray[counter] = [];
	fArray[counter][0] = "Welches ist der hellste Stern am Himmel?";
	fArray[counter][1] = "a) Sirius";
	fArray[counter][2] = "b) Arktur";
	fArray[counter][3] = "c) Sonne";
	fArray[counter][4] = 3;
	fArray[counter][5] = "Unsere Sonne ist natürlich der hellste Stern am Himmel. Am Nachthimmel wäre es hingegen Sirius.";	
	fArray[counter][6] = "";
	
	counter++;
	fArray[counter] = [];
	fArray[counter][0] = "Welches ist der hellste Stern am Nachthimmel?";
	fArray[counter][1] = "a) Sonne";
	fArray[counter][2] = "b) Sirius";
	fArray[counter][3] = "c) Arktur";
	fArray[counter][4] = 2;
	fArray[counter][5] = "Am Nachthimmel ist Sirius aus dem Sternbild \"Großer Hund\" der hellste Stern am Nachthimmel.";		
	fArray[counter][6] = "";
	
	counter++;
	fArray[counter] = [];
	fArray[counter][0] = "Wie heißt der Planet auf dem wir leben?";
	fArray[counter][1] = "a) Mars";
	fArray[counter][2] = "b) Erde";
	fArray[counter][3] = "c) Mond";
	fArray[counter][4] = 2;
	fArray[counter][5] = "Natürlich leben wir auf unserer Erde!";	
	fArray[counter][6] = "";
	
	counter++;
	fArray[counter] = [];
	fArray[counter][0] = "Um welchen Himmelskörper kreist unsere Erde?";
	fArray[counter][1] = "a) Um keinen";
	fArray[counter][2] = "b) Mond";
	fArray[counter][3] = "c) Sonne";
	fArray[counter][4] = 3;
	fArray[counter][5] = "Um unsere Sonne kreist die Erde. Für einen Umlauf braucht Sie tatsächlich 365,25 Tage, also etwas länger als 1 Jahr.";	
	fArray[counter][6] = "";
	
	//11
	counter++;
	fArray[counter] = [];
	fArray[counter][0] = "Wie hieß der erste deutsche Raumfahrer?";
	fArray[counter][1] = "a) Juri Gagarin";
	fArray[counter][2] = "b) Alexander Gerst";
	fArray[counter][3] = "c) Sigmund Jähn";
	fArray[counter][4] = 3;
	fArray[counter][5] = "Sigmund Jähn flog am 26.08.1978 zur Raumstation Mir und war damit der erste deutsche Kosmonaut.";		
	fArray[counter][6] = "Frage unserer Schülerpraktikantin Anna Lara (Januar 2020)";
	
	//12
    counter++;
	fArray[counter] = [];
	fArray[counter][0] = "Wieviele Monde besitzt der Gasplanet Jupiter?";
	fArray[counter][1] = "a) 13";
	fArray[counter][2] = "b) 79";
	fArray[counter][3] = "c) 121";
	fArray[counter][4] = 2;
	fArray[counter][5] = "Für den Gasplaneten Jupiter sind bis heute (Stand 2019) 79 Monde bekannt.";		
	fArray[counter][6] = "Frage unserer Schülerpraktikantin Anna Lara (Januar 2020)";	
	
	//13
    counter++;
	fArray[counter] = [];
	fArray[counter][0] = "Welcher Planet im Sonnensystem kann theoretisch auf dem Wasser schwimmen?";
	fArray[counter][1] = "a) Merkur";
	fArray[counter][2] = "b) Saturn";
	fArray[counter][3] = "c) Neptun";
	fArray[counter][4] = 2;
	fArray[counter][5] = "Saturn ist der einzige Planet im Sonnensystem der eine geringere Dichte als Wasser besitzt. (Saturn = 687 kg/m³; Wasser = 997 kg/m³)";		
	fArray[counter][6] = "Frage unserer Schülerpraktikantin Anna Lara (Januar 2020)";		
	
	//14
    counter++;
	fArray[counter] = [];
	fArray[counter][0] = "Zu wieviel Prozent besteht die Oberfläche der Erde aus Wasser?";
	fArray[counter][1] = "a) 69%";
	fArray[counter][2] = "b) 63%";
	fArray[counter][3] = "c) 71%";
	fArray[counter][4] = 3;
	fArray[counter][5] = "Die Erde besitzt so viel Wasser, weil sie sich genau im richtigen Abstand zur Sonne befindet. Diesen Abstand nennt man habitable Zone.";		
	fArray[counter][6] = "Frage unseres Schülerpraktikanten Levin (Januar 2020)";			
	
	//15
    counter++;
	fArray[counter] = [];
	fArray[counter][0] = "Welches ist der zweitnächste Planet zu unserer Sonne in unserem Sonnensystem?";
	fArray[counter][1] = "a) Venus";
	fArray[counter][2] = "b) Erde";
	fArray[counter][3] = "c) Jupiter";
	fArray[counter][4] = 1;
	fArray[counter][5] = "Die Venus ist mit einem mittleren Abstand von 108,2 Millionen Kilometer von der Sonne der zweitnächste Planet in unserem Sonnensystem. Nur der Merkur liegt mit 57,9 Millionen Kilometer näher dran.";		
	fArray[counter][6] = "Frage unseres Schülerpraktikanten Levin (Januar 2020)";				
	
	//16
    counter++;
	fArray[counter] = [];
	fArray[counter][0] = "Wie viele bekannte natürliche Satelliten (Monde) gibt es, die um unsere 8 Planeten kreisen?";
	fArray[counter][1] = "a) 100";
	fArray[counter][2] = "b) 205";
	fArray[counter][3] = "c) 210";
	fArray[counter][4] = 2;
	fArray[counter][5] = "Bis heute (2020) haben Astronomen*Innen 205 Monde um unsere Planeten entdeckt. Merkur & Venus = 0; Erde = 1; Mars = 2; Jupiter = 79; Saturn = 82; Uranus = 27; Neptun = 14";		
	fArray[counter][6] = "Frage unserer Schülerpraktikantin Zahra (Februar 2020)";			

	//17
    counter++;
	fArray[counter] = [];
	fArray[counter][0] = "Was sind Sternschnuppen?";
	fArray[counter][1] = "a) Satelliten";
	fArray[counter][2] = "b) Das Licht weit entfernter Sterne";
	fArray[counter][3] = "c) Staub- und Eisbröckchen die in der Atmosphäre verglühen";
	fArray[counter][4] = 3;
	fArray[counter][5] = "Wenn kleine Eis- und Gesteinsbröckchen (Meteore) in der Atmosphäre verglühen, wird das Leuchten als Sternschnuppe bezeichnet. Diese Meteore sind nicht größer als ein kleiner Kieselstein.";		
	fArray[counter][6] = "Frage unserer Schülerpraktikantin Zahra (Februar 2020)";			
	
	//18
    counter++;
	fArray[counter] = [];
	fArray[counter][0] = "Wann wurde die ESA (European Space Agency - Europäische Raumfahrtagentur) gegründet?";
	fArray[counter][1] = "a) 1975";
	fArray[counter][2] = "b) 1965";
	fArray[counter][3] = "c) 1955";
	fArray[counter][4] = 1;
	fArray[counter][5] = "Die ESA, mit Hauptsitz in Paris, wurde 1975 gegründet. Sie dient der besseren Koordinierung der europäischen Raumfahrtaktivitäten. Sie hat 22 Mitgliedstaaten und beschäftigte (Stand: 2017) etwa 2.200 Mitarbeiter.";		
	fArray[counter][6] = "Frage unserer Schülerpraktikantin Zahra (Februar 2020)";	

	//19
    counter++;
	fArray[counter] = [];
	fArray[counter][0] = "Was befindet sich im Zentrum unserer Galaxie (Milchstraße)?";
	fArray[counter][1] = "a) Supermassereiches schwarzes Loch";
	fArray[counter][2] = "b) Planetarischer Nebel";
	fArray[counter][3] = "c) Neustronenstern";
	fArray[counter][4] = 1;
	fArray[counter][5] = "Im Zentrum unserer Galaxie (Milchstraße) befindet sich ein supermassereiches schwarze Loch namens Saggitarius A*. Es hat ein Durchmesser von ~22,5 Mio. km und eine Masse von ~4 Mio. Sonnenmassen";		
	fArray[counter][6] = "Frage unserer Schülerpraktikanten Emre (Februar 2022)";	

	
	function rand (min, max) {
		return Math.floor(Math.random() * (max - min + 1)) + min;
	}
		
	function frageSuchen()
	{	
	
		frage = rand(1,counter);
		//frage = 15;
		document.getElementById("F").innerHTML = fArray[frage][0];
		document.getElementById("A1").innerHTML = fArray[frage][1];
		document.getElementById("A2").innerHTML = fArray[frage][2];
		document.getElementById("A3").innerHTML = fArray[frage][3];
		document.getElementById("S1").innerHTML = fArray[frage][6]
	
		// Testbetrieb
		//setTimeout(result,5000,fArray[frage][4],fArray[frage][5]);
		// Display-Betrieb
		setTimeout(result,30000,fArray[frage][4],fArray[frage][5]);
		
	}
	
	function result(a, b)
	{
		if (a == 1)
		{
			document.getElementById("A1").style.color ="white";
			document.getElementById("A1").style.background="green";
		} else if (a == 2) {
			document.getElementById("A2").style.color="white";
			document.getElementById("A2").style.background="green";
		} else {
			document.getElementById("A3").style.color="white";
			document.getElementById("A3").style.background="green";
		}
		document.getElementById("Erk").innerHTML = "<b>Erklärung:</b> "+b;
	}
	
	</script>';




echo "</head>";

echo "<body onload='frageSuchen()'>";

echo '<div class="navbar-header container">';
echo'<h1 style="margin-top: 1.5em ; margin-bottom: 1em ; font-size: 3.5em">Das Astro-Quiz der Archenhold-Sternwarte</h1>';

echo '<div id="F" style="font-size: 3em; margin-top: 0.5em"></div>';
echo '<div id="S1" style="font-size: 2em; margin-top: 0.1em"></div>';
echo '<div id="A1" style="font-size: 2.5em; margin-top: 0.5em"></div>';
echo '<div id="A2" style="font-size: 2.5em; margin-top: 0.5em"></div>';
echo '<div id="A3" style="font-size: 2.5em; margin-top: 0.5em"></div>';

echo '<div id="Erk" style="font-size: 2em; margin-top: 0.5em"></div>';

echo '</div>';

echo "</body>";
echo "</hmtl>";


?>