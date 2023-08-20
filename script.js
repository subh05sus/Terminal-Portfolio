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
const quotes = [
  // ... your existing quotes
  "Life is really simple, but we insist on making it complicated. - Confucius",
  "You miss 100% of the shots you don't take. - Wayne Gretzky",
  "The only way to do great work is to love what you do. - Steve Jobs",
  "Change your thoughts and you change your world. - Norman Vincent Peale",
  "Success is walking from failure to failure with no loss of enthusiasm. - Winston S. Churchill",
  "In three words I can sum up everything I've learned about life: it goes on. - Robert Frost",
  "The best revenge is massive success. - Frank Sinatra",
  "Do not wait for leaders; do it alone, person to person. - Mother Teresa",
  "Challenges are what make life interesting and overcoming them is what makes life meaningful. - Joshua J. Marine",
  "The only thing we have to fear is fear itself. - Franklin D. Roosevelt"
  // Add more quotes here
];


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
    case "sudo rm -rf":
      window.close();
      break;
    case "sudo rm rf":
      window.close();
      break;
      case "exit":
        const newWindow = window.open("", "_self");
        newWindow.close();
        break;
      
    case "ls":
      content.innerHTML += `<br>aboutMe.txt<br>`;
      break;
    case "cat aboutme.txt":
      content.innerHTML += `<br>Hi, Well my name is written on the top, So I may think you know my name. Btw, I love maggie. I am currently working on a 3D game and you must know that I am not popular for fishing my projects, actually I'm popuplar for nothing.<br>I think I would be so busy now-a-days just to introduce bugs as features. Good Bye ;)<br>`;
      break;
    case "fortune":
      const randomIndex = Math.floor(Math.random() * quotes.length);
      content.innerHTML += `<br>${quotes[randomIndex]}<br>`;
      break;
      case "echo":
        content.innerHTML += `<br>Error: Missing message. Usage: echo message_to_echo<br>`;
        break;

    case "cowsay":
      content.innerHTML += `<br>Error: Missing message. Usage: cowsay message_to_say<br>`;
      break;

      case "calc":
        content.innerHTML += `<br>Error: Missing expression. Usage: calc expression_to_calculate<br>`;
        break;
      case "roll":
        content.innerHTML += `<br>Rolling a 6-sided dice... Result: ${rollDice(6)}<br>`;
        break;
    default:
      if (command.toLowerCase().startsWith("echo ")) {
        const message = command.substring(5);
        content.innerHTML += `<br>${message}<br>`;
      } else if (command.toLowerCase().startsWith("cowsay ")) {
        const message = command.substring(7);
        const cowTemplate = `
          <pre>
   \\   ^__^
    \\  (oo)\\_______
       (__)\\       )\\/\\
           ||----w |
           ||     ||
        </pre>
        <pre>${generateSpeechBubble(message)}</pre>
        `;
        content.innerHTML += cowTemplate;
      } else if (command.toLowerCase().startsWith("calc ")) {
        const expression = command.substring(5);
        try {
          const result = eval(expression);
          content.innerHTML += `<br>Result: ${result}<br>`;
        } catch (error) {
          content.innerHTML += `<br>Error: Invalid expression<br>`;
        }
      } else {
        content.innerHTML += "Error: Unknown command. Try help<br>";
      }
  }
  terminal.scroll(0, terminal.scrollHeight);
}

function clear(console) {
  console.innerHTML = "";
}

function help(console) {
  console.innerHTML +=
    "<br>List of commands<br><br>" +
    "Help - Get Command List<br>" +
    "Projects - List out my projects<br>" +
    "ls - List out files<br>" +
    "Links - Links to contact me or see things I have done<br>" +
    "Clear - Clear the screen<br>" +
    "cat filename.txt - Display text or contents of a file.<br>" +
    "fortune - Display a random fortune or quote<br>" +
    "echo - Display a message on the terminal<br>" +
    "cowsay - Generate ASCII art with a speech bubble from a cow<br>" +
    "calc expression - Perform simple calculations<br>" +
    "roll - Simulate rolling a dice<br>" +
    "sudo rm -rf - Don't try kiddo<br>";
}


function Hide() {
  if (!terminal.classList.contains("hidden")) {
    terminal.className += " hidden";
  } else {
    terminal.classList.remove("hidden");
  }
}

function generateSpeechBubble(message) {
  const lines = message.split('\n');
  const longestLine = Math.max(...lines.map(line => line.length));
  const bubble = [
    " " + "_".repeat(longestLine + 2),
    `< ${message} >`,
    " " + "-".repeat(longestLine + 2)
  ];
  return bubble.join('\n');
}

function rollDice(sides) {
  return Math.floor(Math.random() * sides) + 1;
}