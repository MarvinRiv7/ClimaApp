const inquirer = require("inquirer");
require("colors");
const prompt = inquirer.createPromptModule();

const preguntas = [
  {
    type: "list",
    name: "opcion",
    message: "Que desea hacer?",
    choices: [
      {
        value: 1,
        name: "1.Buscar ciudad",
      },
      {
        value: 2,
        name: "2.Historial de ciudades",
      },
      {
        value: 0,
        name: "0.Salir",
      },
    ],
  },
];

const inquirerMenu = async () => {
  console.clear();
  console.log("============================".green);
  console.log("  Seleccione una opcion  ".yellow);
  console.log("=============================\n".green);

  const { opcion } = await prompt(preguntas);

  return opcion;
};

const pausa = async () => {
  const question = [
    {
      type: "input",
      name: "enter",
      message: `Presione ${"ENTER".green} para continuar`,
    },
  ];

  console.log("\n");
  await prompt(question);
};

const leerInput = async (mensaje) => {
  const question = [
    {
      type: "input",
      name: "desc",
      message: mensaje,
      validate(value) {
        if (value.length === 0) {
          return "Por favor ingrese un valor";
        }
        return true;
      },
    },
  ];

  const { desc } = await prompt(question);
  return desc;
};

const listadoTareasBorrar = async (tareas = []) => {
  const choices = tareas.map((tarea, i) => {
    const idx = `${i + 1}.`.green;

    return {
      value: tarea.id,
      name: `${idx} ${tarea.desc}`,
    };
  });

  choices.unshift({
    value: "0",
    name: "0.".green + " Cancelar",
  });

  const preguntas = [
    {
      type: "list",
      name: "id",
      message: "Borrar",
      choices,
    },
  ];

  const { id } = await prompt(preguntas);
  return id;
  // {
  //     value: '1',
  //     name: '1.Crear tarea',

  // },
};

const confirmar = async (message) => {
  const question = [
    {
      type: "confirm",
      name: "ok",
      message,
    },
  ];
  const { ok } = await prompt(question);
  return ok;
};

const mostrarListadoCheckList = async (tareas = []) => {
  const choices = tareas.map((tarea, i) => {
    const idx = `${i + 1}.`.green;

    return {
      value: tarea.id,
      name: `${idx} ${tarea.desc}`,
      checked: tarea.completadoEn ? true : false,
    };
  });

  const pregunta = [
    {
      type: "checkbox",
      name: "ids",
      message: "Seleccione",
      choices,
    },
  ];

  const { ids } = await prompt(pregunta);
  return ids;
};

module.exports = {
  inquirerMenu,
  pausa,
  leerInput,
  listadoTareasBorrar,
  confirmar,
  mostrarListadoCheckList,
};
