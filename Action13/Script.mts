Browser("Dashboard").Page("Dashboard").Link("Mi tarifa").Click @@ script infofile_;_ZIP::ssf1.xml_;_
wait(2)
Browser("Dashboard").Page("MiTarifa").Link("Detalle de mi tarifa").Click @@ script infofile_;_ZIP::ssf2.xml_;_
wait(3)
Browser("Dashboard").Page("DetallesMiTarifa").Link("Condiciones comerciales").Click @@ script infofile_;_ZIP::ssf3.xml_;_
Browser("Dashboard").Page("DetallesMiTarifa").Link("Mi tarifa").Click @@ script infofile_;_ZIP::ssf4.xml_;_
wait(2)
Browser("Dashboard").Page("MiTarifa").Link("Cambiar tarifa").Click @@ script infofile_;_ZIP::ssf5.xml_;_
wait(3)
Browser("Dashboard").Page("CambiarTarifa").WebCheckBox("CL_Web_Personas_Layouts_wtCamb").Set "ON" @@ script infofile_;_ZIP::ssf6.xml_;_
Browser("Dashboard").Page("CambiarTarifa").Link("Plan Número Favorito").Click @@ script infofile_;_ZIP::ssf7.xml_;_
Browser("Dashboard").Page("CambiarTarifa").Link("Condiciones comerciales").Click @@ script infofile_;_ZIP::ssf8.xml_;_
Browser("Dashboard").Page("CambiarTarifa").Link("Plan Número Favorito").Click @@ script infofile_;_ZIP::ssf9.xml_;_
Browser("Dashboard").Page("CambiarTarifa").WebCheckBox("CL_Web_Personas_Layouts_wtCamb_2").Set "ON" @@ script infofile_;_ZIP::ssf10.xml_;_
Browser("Dashboard").Page("CambiarTarifa").Link("Plan Carlitos").Click @@ script infofile_;_ZIP::ssf11.xml_;_
