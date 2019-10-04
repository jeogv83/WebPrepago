Browser("Dashboard").Page("Dashboard").Link("Recarga en linea").Click @@ script infofile_;_ZIP::ssf21.xml_;_
wait(3)
Browser("Dashboard").Page("Recargar").Frame("Frame").Link("$1.000").Click @@ script infofile_;_ZIP::ssf22.xml_;_
wait(1)
Browser("Dashboard").Page("Recargar").Frame("Frame").Link("$2.000").Click @@ script infofile_;_ZIP::ssf23.xml_;_
wait(1)
Browser("Dashboard").Page("Recargar").Frame("Frame").Link("$3.000").Click @@ script infofile_;_ZIP::ssf24.xml_;_
wait(1)
Browser("Dashboard").Page("Recargar").Frame("Frame").Link("$5.000").Click @@ script infofile_;_ZIP::ssf25.xml_;_
wait(1)
Browser("Dashboard").Page("Recargar").Frame("Frame").Link("$10.000").Click @@ script infofile_;_ZIP::ssf26.xml_;_
wait(1)
Browser("Dashboard").Page("Recargar").Frame("Frame").Link("Otro monto").Click @@ script infofile_;_ZIP::ssf27.xml_;_
wait(1)
Browser("Dashboard").Page("Recargar").Frame("Frame").WebElement("b").Click @@ script infofile_;_ZIP::ssf28.xml_;_
Browser("Dashboard").Page("Recargar").Frame("Frame").WebEdit("chargeAmount").Set "$5" @@ script infofile_;_ZIP::ssf29.xml_;_
wait(2)
Browser("Dashboard").Page("Recargar").Frame("Frame").WebElement("Debes ingresar un monto").Click @@ script infofile_;_ZIP::ssf30.xml_;_
Browser("Dashboard").Page("Recargar").Frame("Frame").WebElement("Debes ingresar un monto").Click @@ script infofile_;_ZIP::ssf31.xml_;_
Browser("Dashboard").Page("Recargar").Image("avatar_bg").Click @@ script infofile_;_ZIP::ssf32.xml_;_
Browser("Dashboard").Page("Recargar").WebEdit("CL_Web_Personas_Layouts_wtReca").Set "946185596" @@ script infofile_;_ZIP::ssf33.xml_;_
Browser("Dashboard").Page("Recargar").Frame("Frame").Link("$1.000").Click @@ script infofile_;_ZIP::ssf34.xml_;_
Browser("Dashboard").Page("Recargar").Frame("Frame").Image("Banco Estado").Click @@ script infofile_;_ZIP::ssf35.xml_;_
wait(2)
Browser("Dashboard").Page("Recargar").Frame("Frame").WebButton("Recargar").Click @@ script infofile_;_ZIP::ssf36.xml_;_
wait(2)
