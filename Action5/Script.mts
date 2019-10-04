Browser("Login").Page("Login").WebEdit("CL_Web_Personas_Layouts_wt8$bl").Click
Browser("Login").Page("Login").WebEdit("CL_Web_Personas_Layouts_wt8$bl").Set DataTable("MOVIL", dtGlobalSheet)
wait(1)
Browser("Login").Page("Login").WebEdit("CL_Web_Personas_Layouts_wt8$bl_2").Click
Browser("Login").Page("Login").WebEdit("CL_Web_Personas_Layouts_wt8$bl_2").Set DataTable("RUT", dtGlobalSheet) @@ script infofile_;_ZIP::ssf2.xml_;_
wait(1)
Browser("Login").Page("Login").WebEdit("CL_Web_Personas_Layouts_wt8$bl_3").Click
Browser("Login").Page("Login").WebEdit("CL_Web_Personas_Layouts_wt8$bl_3").SetSecure DataTable("PASS", dtGlobalSheet) @@ script infofile_;_ZIP::ssf3.xml_;_
wait(4)
Browser("Login").Page("Login").Link("Ingresar aquí").Click @@ script infofile_;_ZIP::ssf4.xml_;_
wait(3)
