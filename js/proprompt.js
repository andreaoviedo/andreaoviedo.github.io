 // JSON con las opciones del select
 var promptdiv = document.getElementById('promptdiv');

 var rol_select = document.getElementById('rol-select');
 var rol_input = document.getElementById('rol-input');

 var format_select = document.getElementById('format-select');
 var format_input = document.getElementById('format-input');

 var length_select = document.getElementById('length-select');
 var length_input = document.getElementById('length-input');

 var language_select = document.getElementById('language-select');
 var language_input = document.getElementById('language-input');

 var temperature_select = document.getElementById('temperature-select');
 var temperature_input = document.getElementById('temperature-input');

 var prompt = document.getElementById('prompt');
 var instruction = document.getElementById('instruction');


 let rol_opciones = [
   { value: "director general", text: "director general" },
   { value: "crítico de cine", text: "crítico de cine" },
   { value: "ingeniero en sistemas", text: "ingeniero en sistemas" },
   { value: "especialista en mercadotecnia", text: "especialista en mercadotecnia" },
   { value: "periodista", text: "periodista" },
   { value: "gerente de recursos humanos", text: "gerente de recursos humanos" },
   { value: "publicista", text: "publicista" },
   { value: "científico de datos", text: "científico de datos" },
   { value: "guía de turistas", text: "guía de turistas" },
   { value: "profesor", text: "profesor" },
   { value: "niño", text: "niño" },
   { value: "copywriter", text: "copywriter" },
   { value: "reclutador", text: "reclutador" },
   { value: "programador", text: "programador" },
   { value: "especialista en SEO", text: "especialista en SEO" },
   { value: "alumno", text: "alumno" }
 ];
 
 let format_opciones = [
  { value: "párrafo", text: "párrafo" },{ value: "lista", text: "lista" },
   
   { value: "tabla", text: "tabla" },
   { value: "markdown", text: "markdown" },
   { value: "json", text: "json" },
   { value: "html", text: "html" },
   { value: "csv", text: "csv" }
 ];
 let style_opciones = [
  { value: "formal", text: "formal" },
  { value: "informal", text: "informal" },
  { value: "persuasiva", text: "persuasivo" },
  { value: "descriptiva", text: "descriptivo" },
  { value: "graciosa", text: "gracioso" },
  { value: "narrativa", text: "narrativo" },
  { value: "inspiracional", text: "inspiracional" },
  { value: "confrontacional", text: "confrontacional" }
];
 let language_opciones = [
    { value: "español", text: "español" },
    { value: "inglés", text: "inglés" },
    { value: "francés", text: "francés" }
  ];
  let length_opciones = [
    { value: "140 caracteres", text: "140 caracteres" },
    { value: "500 palabras", text: "500 palabras" },
    { value: "1 párrafo", text: "1 párrafo" }
  ];

  let temperature_opciones = [
    { value: "0.1", text: "0.1" },
    { value: "0.2", text: "0.2" },
    { value: "0.3", text: "0.3" },
    { value: "0.4", text: "0.4" },
    { value: "0.5", text: "0.5" },
    { value: "0.6", text: "0.6" },
    { value: "0.7", text: "0.7" },
    { value: "0.8", text: "0.8" },
    { value: "0.9", text: "0.9" },
    { value: "1.0", text: "1.0" }
  ];

 // Llamar a la función con los parámetros deseados
 asignarEventoChange('rol-select', 'rol-input');
 asignarEventoChange('format-select', 'format-input');
 asignarEventoChange('language-select', 'language-input');
 asignarEventoChange('length-select', 'length-input');
 asignarEventoChange('temperature-select', 'temperature-input');


  // Función para actualizar el valor del input cuando cambia la opción seleccionada
  function asignarEventoChange(selectId, inputId) {
    var select = document.getElementById(selectId);
    var input = document.getElementById(inputId);
  
    select.addEventListener('change', function() {
      var selectedOption = this.options[this.selectedIndex].value;
      input.value = selectedOption;
    });
  }
  

  
 // Función para cargar las opciones del select desde el JSON
 function cargarOpciones(opciones, select) {
    ordenarOpciones(opciones);
    // Agregar nueva opción al inicio del JSON
opciones.unshift({ value: "", text: "o selecciona una opción de la lista" });
   for (var i = 0; i < opciones.length; i++) {
     var option = document.createElement('option');
     option.value = opciones[i].value;
     option.text = opciones[i].text;
     select.appendChild(option);
   }
 }

 function ordenarOpciones(opciones) {
    opciones.sort(function(a, b) {
      var textA = a.text.toUpperCase();
      var textB = b.text.toUpperCase();
      return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
    });
  }
  

 // Llama a la función para cargar las opciones al cargar la página
 window.onload = cargarOpciones(rol_opciones,rol_select);
 window.onload = cargarOpciones(format_opciones,format_select);
 window.onload = cargarOpciones(language_opciones,language_select);
 window.onload = cargarOpciones(length_opciones,length_select);
 window.onload = cargarOpciones(temperature_opciones,temperature_select);

 function construirPrompt() {
    promptdiv.style.display = "block";
    var instruction_prompt = instruction.value;
    var rol_prompt = rol_input.value  !== '' ? 'Actúa como ' + rol_input.value +'. ': '';
    var format_prompt = format_input.value !== '' ? ' en formato de ' + format_input.value : '';
    var length_prompt = length_input.value !== '' ? '. Redáctalo en ' + length_input.value : '';
    var language_prompt = language_input.value !== '' ? '. Escribe en ' + language_input.value : '';
    var temperature_prompt = temperature_input.value !== '' ? '. Utiliza una temperatura de ' + temperature_input.value : '';
    var text = rol_prompt + instruction_prompt + format_prompt + language_prompt + length_prompt + temperature_prompt;
    prompt.value = text;
  }
