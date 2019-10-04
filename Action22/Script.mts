'Browser("Dashboard").Page("Dashboard").Link("Traspaso de saldo").Click @@ script infofile_;_ZIP::ssf1.xml_;_
'wait(3)
'Browser("Dashboard").Page("TraspasoDeSaldo").WebEdit("CL_Web_Personas_Layouts_wtTras").Set "$500" @@ script infofile_;_ZIP::ssf2.xml_;_
'wait(1)
'Browser("Dashboard").Page("TraspasoDeSaldo").WebEdit("CL_Web_Personas_Layouts_wtTras_2").Set "952319910" @@ script infofile_;_ZIP::ssf3.xml_;_
'wait(1)
'Browser("Dashboard").Page("TraspasoDeSaldo").WebElement("CL_Web_Personas_Layouts_wtTras").Click @@ script infofile_;_ZIP::ssf4.xml_;_
'wait(1)
'Browser("Dashboard").Page("TraspasoDeSaldo").WebButton("Traspasar saldo").Click @@ script infofile_;_ZIP::ssf5.xml_;_
'wait(3)
