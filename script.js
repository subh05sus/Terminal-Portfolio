let terminal;
let content;

function on_load() {
  terminal = document.getElementById("Terminal");
  content = document.getElementById("Content");
  terminal.getElementsByTagName("form")[0].onsubmit = function () {
    command_handler(terminal.getElementsByTagName("input")[0].value);
    terminal.getElementsByTagName("input")[0].value = "";
    return false;
  };
}

projects = {
  "<br><span class = 'project'>> Portfolio Terminal</span><br><span class = 'projectdes'>A terminal that shows your work</span>": "https://github.com/subh05sus/Terminal-Portfolio",
  "<span class = 'project'>> DevSnake</span><br><span class = 'projectdes'>A 2D Classic Snake Game but for developers</span>": "https://github.com/subh05sus/DevSnake",
  "<span class = 'project'>> YourMedic</span><br><span class = 'projectdes'>A virtual 3D doctor that suggest you cures with natural human-like facial expressions</span>": "https://github.com/MenOfCultureSS0/YourMedic",
  "<span class = 'project'>> GeetaGPT</span><br><span class = 'projectdes'>GPT powered AI that mimics like Lord Krishna</span>": "https://geeta-gpt.onrender.com/",
  "<span class = 'project'>> MeowGPT</span><br><span class = 'projectdes'>Fun GPT project that acts like a cat. Meow Meow</span>": "https://geeta-gpt.onrender.com/",
  "<span class = 'project'>> Project Suzume</span><br><span class = 'projectdes'>A 3D open world game based on Suzume No Tojimari</span>": "https://github.com/subh05sus/Project-Suzume",
  "<span class = 'project'>> BlockRush</span><br><span class = 'projectdes'>A simple 3D infinite block game</span>": "https://github.com/subh05sus/BlockRush",
  "<span class = 'project'>> Anya Run</span><br><span class = 'projectdes'>A 3D runner game based on anime character Anya Forger from SpyXFamily Anime</span>": "https://github.com/subh05sus/Anya-3D-Runner-Game",
  "<span class = 'project'>> Python Voice Assistant</span><br><span class = 'projectdes'>An open-source project featured in SWOC'23</span>": "https://github.com/subh05sus/Python-Voice-Assistant",

};

links = {
  "<br>> Github": "https://github.com/subh05sus",
  "> LinkedIn": "https://www.linkedin.com/in/subhadipsahaofficial",
  "> Twitter": "https://twitter.com/SubhadipSuDi",
  "> Instagram": "https://www.instagram.com/subh05sus_",
  "> YouTube": "https://www.youtube.com/@subhSUS",
};

function command_handler(command) {
  content.innerHTML += "<br>$ " + command + "<br>";
  switch (command.toLowerCase()) {
    case "help":
      help(content);
      break;
    case "clear":
      clear(content);
      break;
    case "links":
      for (let e in links) {
        content.innerHTML += `<a href="${links[e]}">${e}</a><br>`;
      }
      break;
    case "projects":
      for (let e in projects) {
        content.innerHTML += `<a href="${projects[e]}">${e}</a><br>`;
      }
      break;
    default:
      content.innerHTML += "Error: Unknown command. try help<br>";
  }
  terminal.scroll(0, terminal.scrollHeight);
}

function clear(console) {
  console.innerHTML = "";
}

function help(console) {
  console.innerHTML +=
    "<br>List of commands<br><br>Help - Get Command List<br>Projects - list out my projects<br>Links - Links to contact me or see things I have done<br>Clear - clear the screen<br>";
}

function Hide() {
  if (!terminal.classList.contains("hidden")) {
    terminal.className += " hidden";
  } else {
    terminal.classList.remove("hidden");
  }
}
