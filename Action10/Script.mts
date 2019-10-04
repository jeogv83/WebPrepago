'Browser("Dashboard").Page("Dashboard").Link("Traspaso de saldo").Click @@ script infofile_;_ZIP::ssf1.xml_;_
'wait(2)
'Browser("Dashboard").Page("TraspasoDeSaldo").WebEdit("CL_Web_Personas_Layouts_wtTras").Set "$5" @@ script infofile_;_ZIP::ssf2.xml_;_
'Browser("Dashboard").Page("TraspasoDeSaldo").WebEdit("CL_Web_Personas_Layouts_wtTras_2").Set "946185596" @@ script infofile_;_ZIP::ssf3.xml_;_
'Browser("Dashboard").Page("TraspasoDeSaldo").WebEdit("CL_Web_Personas_Layouts_wtTras").Set "$90.000" @@ script infofile_;_ZIP::ssf4.xml_;_
'Browser("Dashboard").Page("TraspasoDeSaldo").WebEdit("CL_Web_Personas_Layouts_wtTras").Set "$500" @@ script infofile_;_ZIP::ssf5.xml_;_
'Browser("Dashboard").Page("TraspasoDeSaldo").Link("Condiciones comerciales").Click @@ script infofile_;_ZIP::ssf6.xml_;_
'Browser("Dashboard").Page("TraspasoDeSaldo").WebButton("Traspasar saldo").Click @@ script infofile_;_ZIP::ssf7.xml_;_
'wait(2)
