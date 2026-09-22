let language = prompt("Please enter one of the following entries in the prompt to learn the translation of Hello World in that respective langage: " + "\n en - for English, fr - french, de - for deutsche , es - for spanish");

switch(language){

case 'fr': document.write('Hello World translated in French is: Bonjour le monde')
break

case 'es': document.write('Hello World translated in Spanish is: Hola Mundo')
break

case 'de': document.write('Hello World translated in duetsche is: Hallo Welt')
break

case 'en': document.write('Hello World translated in English is: Hello World')
break

default: document.write('Hello World')
}