Browser("Dashboard").Page("Dashboard").WebElement("WebElement").Click @@ script infofile_;_ZIP::ssf1.xml_;_
wait(2)
Browser("Dashboard").Page("Dashboard").Link("Reclamos").Click @@ script infofile_;_ZIP::ssf2.xml_;_
wait(2)
Browser("Dashboard").Page("Reclamos").WebList("CL_Web_Personas_Layouts_wtRecl").Select "Reclamo" @@ script infofile_;_ZIP::ssf3.xml_;_
wait(3)
Browser("Dashboard").Page("Reclamos").WebList("CL_Web_Personas_Layouts_wtRecl_2").Select "Bolsas y Promociones" @@ script infofile_;_ZIP::ssf4.xml_;_
wait(2)
Browser("Dashboard").Page("Reclamos").WebList("CL_Web_Personas_Layouts_wtRecl_3").Select "Bolsa de Datos no activada" @@ script infofile_;_ZIP::ssf5.xml_;_
wait(1)
Browser("Dashboard").Page("Reclamos").WebEdit("CL_Web_Personas_Layouts_wtRecl").Set "PRUEBA" @@ script infofile_;_ZIP::ssf6.xml_;_
wait(1)
Browser("Dashboard").Page("Reclamos").WebButton("Enviar").Click @@ script infofile_;_ZIP::ssf7.xml_;_
wait(2)
Browser("Dashboard").Page("Confirmacion").WebButton("Ir a inicio").Click @@ script infofile_;_ZIP::ssf8.xml_;_
wait(2)
