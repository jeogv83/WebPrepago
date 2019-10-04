Browser("Dashboard").Page("Dashboard").Link("Beneficios Entel").Click @@ script infofile_;_ZIP::ssf1.xml_;_
wait(3)
Browser("Dashboard").Page("Beneficios").Image("recarga").Click @@ script infofile_;_ZIP::ssf2.xml_;_
wait(3)
If DataTable("MOVIL", dtGlobalSheet) = 952319910 Then
	Browser("Dashboard").Page("RecargaConPuntos").Link("$500").Click @@ script infofile_;_ZIP::ssf3.xml_;_
	wait(1)
	Browser("Dashboard").Page("RecargaConPuntos").Link("$990").Click @@ script infofile_;_ZIP::ssf4.xml_;_
	wait(1)
	Browser("Dashboard").Page("RecargaConPuntos").Link("$1.500").Click @@ script infofile_;_ZIP::ssf5.xml_;_
	wait(1)
	Browser("Dashboard").Page("RecargaConPuntos").Link("$3.500").Click @@ script infofile_;_ZIP::ssf6.xml_;_
	wait(1)
	Browser("Dashboard").Page("RecargaConPuntos").Link("$5.000").Click @@ script infofile_;_ZIP::ssf7.xml_;_
	wait(1)
'	Browser("Dashboard").Page("RecargaConPuntos").Link("$500").Click @@ script infofile_;_ZIP::ssf8.xml_;_
	'wait(2)
	'Browser("Dashboard").Page("RecargaConPuntos").WebButton("Canjear Recarga").Click @@ script infofile_;_ZIP::ssf9.xml_;_
	'wait(3)	
End If

