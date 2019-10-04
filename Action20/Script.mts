Browser("Dashboard").Page("Dashboard").Link("Beneficios Entel").Click @@ script infofile_;_ZIP::ssf22.xml_;_
wait(2)
Browser("Dashboard").Page("Beneficios").Image("bolsas").Click @@ script infofile_;_ZIP::ssf23.xml_;_
wait(2)
If DataTable("MOVIL", dtGlobalSheet) = 952319910 Then
	Browser("Dashboard").Page("ComprarBolsa").Link("Bolsas Datos").Click @@ script infofile_;_ZIP::ssf24.xml_;_
	Browser("Dashboard").Page("DetalleBolsa").WebCheckBox("CL_Web_Personas_Layouts_wtDeta").Set "ON" @@ script infofile_;_ZIP::ssf25.xml_;_
	Browser("Dashboard").Page("DetalleBolsa").WebCheckBox("CL_Web_Personas_Layouts_wtDeta_3").Set "ON" @@ script infofile_;_ZIP::ssf26.xml_;_
	Browser("Dashboard").Page("DetalleBolsa").WebCheckBox("CL_Web_Personas_Layouts_wtDeta_4").Set "ON" @@ script infofile_;_ZIP::ssf27.xml_;_
	Browser("Dashboard").Page("DetalleBolsa").Link("Canje de Bolsa").Click @@ script infofile_;_ZIP::ssf28.xml_;_
	Browser("Dashboard").Page("ComprarBolsa").Link("Bolsas Mixtas").Click @@ script infofile_;_ZIP::ssf29.xml_;_
	Browser("Dashboard").Page("DetalleBolsa").Link("Canje de Bolsa").Click @@ script infofile_;_ZIP::ssf30.xml_;_
	Browser("Dashboard").Page("ComprarBolsa").Link("Bolsas Voz").Click @@ script infofile_;_ZIP::ssf31.xml_;_
	Browser("Dashboard").Page("DetalleBolsa").WebCheckBox("CL_Web_Personas_Layouts_wtDeta").Set "ON" @@ script infofile_;_ZIP::ssf32.xml_;_
	Browser("Dashboard").Page("DetalleBolsa").Link("Condiciones comerciales").Click @@ script infofile_;_ZIP::ssf33.xml_;_
	Browser("Dashboard").Page("DetalleBolsa").Link("Canje de Bolsa").Click @@ script infofile_;_ZIP::ssf34.xml_;_
	Browser("Dashboard").Page("ComprarBolsa").Link("Bolsas Voz LDI").Click @@ script infofile_;_ZIP::ssf35.xml_;_
	Browser("Dashboard").Page("DetalleBolsa").WebCheckBox("CL_Web_Personas_Layouts_wtDeta").Set "ON" @@ script infofile_;_ZIP::ssf36.xml_;_
	Browser("Dashboard").Page("DetalleBolsa").WebCheckBox("CL_Web_Personas_Layouts_wtDeta_2").Set "ON" @@ script infofile_;_ZIP::ssf37.xml_;_
	Browser("Dashboard").Page("DetalleBolsa").WebCheckBox("CL_Web_Personas_Layouts_wtDeta_3").Set "ON" @@ script infofile_;_ZIP::ssf38.xml_;_
	Browser("Dashboard").Page("DetalleBolsa").Link("Canje de Bolsa").Click @@ script infofile_;_ZIP::ssf39.xml_;_
	Browser("Dashboard").Page("ComprarBolsa").Link("Bolsas Datos").Click @@ script infofile_;_ZIP::ssf40.xml_;_
	Browser("Dashboard").Page("DetalleBolsa").WebCheckBox("CL_Web_Personas_Layouts_wtDeta_2").Set "ON" @@ script infofile_;_ZIP::ssf41.xml_;_
	Browser("Dashboard").Page("DetalleBolsa").Link("Condiciones comerciales").Click @@ script infofile_;_ZIP::ssf42.xml_;_
	'Browser("Dashboard").Page("DetalleBolsa").WebButton("Canjear Bolsa").Click @@ script infofile_;_ZIP::ssf43.xml_;_
End If
