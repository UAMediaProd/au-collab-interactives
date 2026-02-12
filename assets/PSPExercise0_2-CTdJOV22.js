import{_ as e}from"./CodeTutorial-CyR3wzRq.js";import{c as o,o as t,e as i,d as a}from"./index-D1h9s9Qj.js";const n={code:`#
# File:          somefile.py
# Author:        Christian Ross
# Student ID:    roscj004
# Date:          2022-01-01
# Description:   This file is for demonstration purposes
#                This is my own work as defined by the University's
#                Academic Misconduct Policy.
#

import string
import math

def func_1():
    print(string.punctuation)

def func_2():
    print (math.pi)

my_name = 'christian'
my_number = 17

func_1()
func_2()`,steps:[{explanation:"<p>Novice programmers sometimes get confused with program layout. To illustrate how to place different program elements correctly, here is a simple example program.<p>"},{explanation:"<p>Always start with the file header. If you forget this, no one will know what the file is or who wrote it (and you may lose marks!)</p>",secondaryHighlightLines:[0,1,2,3,4,5,6,7,8]},{explanation:"<p>After the file header put your import statements, if you need any. This helps anyone reading your code to quickly identify dependencies between your file and other packages.</p>",secondaryHighlightLines:[10,11]},{explanation:"<p>Next should be your function definitions. These go before the rest of the code because they <strong>need to be defined before they can be accessed.</strong><p/><p>Furthermore, anyone reading your code does not want to go hunting around trying to find your functions. We expect to find them at the top, or just below any import statements if there are any.</p>",secondaryHighlightLines:[13,14,16,17]},{explanation:"<p>Next, put your variable declarations for the main body of code.</p><p>If you find that you need to use a new variable when writing your main body of code, make sure to revisit this area to initialise it here first.</p><p>When all your variables are initialised in the same place, your code becomes less prone to mistakes!</p>",secondaryHighlightLines:[19,20]},{explanation:"<p>Finally, after all of the above, you can place your main body of code. This is where you will put your main loop, your function calls, and whatever else you want to do.</p>",secondaryHighlightLines:[22,23]},{explanation:"<p>That concludes our examination of this simple and effective code layout.</p><p>If you stick to such a layout as this, it is difficult to get yourself into trouble.</p><p>Remember, the key to good code layout is to make it easy for others to read and understand.</p>"}]},s={class:"container mx-auto p-4 max-w-[1024px]"},d={__name:"PSPExercise0_2",setup(r){return(l,p)=>(t(),o("div",s,[i(e,{tutorial:a(n),language:"python","show-boxes":!1},null,8,["tutorial"])]))}};export{d as default};
