let terminal;
let content;
let terminalAPP;

function on_load() {
  terminal = document.getElementById("Terminal");
  content = document.getElementById("Content");
  terminalAPP = document.getElementById("app");
  AvButtons = document.getElementById("Buttons");
  terminalAPP.style.display = "none";
  terminal.getElementsByTagName("form")[0].onsubmit = function () {
    command_handler(terminal.getElementsByTagName("input")[0].value);
    terminal.getElementsByTagName("input")[0].value = "";
    return false;
  };
}




projects = {
  "<br><span class = 'project'>> Portfolio Terminal</span><br><span class = 'projectdes'>A terminal that shows your work</span>":
    "https://github.com/subh05sus/Terminal-Portfolio",
  "<span class = 'project'>> DevSnake</span><br><span class = 'projectdes'>A 2D Classic Snake Game but for developers</span>":
    "https://github.com/subh05sus/DevSnake",
  "<span class = 'project'>> YourMedic</span><br><span class = 'projectdes'>A virtual 3D doctor that suggest you cures with natural human-like facial expressions</span>":
    "https://github.com/MenOfCultureSS0/YourMedic",
  "<span class = 'project'>> GeetaGPT</span><br><span class = 'projectdes'>GPT powered AI that mimics like Lord Krishna</span>":
    "https://geeta-gpt.onrender.com/",
  "<span class = 'project'>> MeowGPT</span><br><span class = 'projectdes'>Fun GPT project that acts like a cat. Meow Meow</span>":
    "https://meow-gpt.onrender.com/",
  "<span class = 'project'>> Project Suzume</span><br><span class = 'projectdes'>A 3D open world game based on Suzume No Tojimari</span>":
    "https://github.com/subh05sus/Project-Suzume",
  "<span class = 'project'>> BlockRush</span><br><span class = 'projectdes'>A simple 3D infinite block game</span>":
    "https://github.com/subh05sus/BlockRush",
  "<span class = 'project'>> Anya Run</span><br><span class = 'projectdes'>A 3D runner game based on anime character Anya Forger from SpyXFamily Anime</span>":
    "https://github.com/subh05sus/Anya-3D-Runner-Game",
  "<span class = 'project'>> Python Voice Assistant</span><br><span class = 'projectdes'>An open-source project featured in SWOC'23</span>":
    "https://github.com/subh05sus/Python-Voice-Assistant",
};

links = {
  "<br>> Github": "https://github.com/subh05sus",
  "> LinkedIn": "https://www.linkedin.com/in/subhadipsahaofficial",
  "> Twitter": "https://twitter.com/SubhadipSuDi",
  "> Instagram": "https://www.instagram.com/subh05sus_",
  "> YouTube": "https://www.youtube.com/@subhSUS",
};

function command_handler(command) {
  content.innerHTML += "<br><span class = 'meh'>$ </span>" + command + "<br>";
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
      window.location.href = "over.html"; // Redirect to an exit page
      break;
    case "exit":
      const shouldClose = confirm(
        "Are you sure you want to exit the terminal?"
      );
      if (shouldClose) {
        window.close();
      }
      break;
    case "ls":
      content.innerHTML += `
          <br>
          <table class="file-list">
            <tr>
              <th>Filename</th>
              <th>Type</th>
              <th>Size</th>
            </tr>
            <tr>
              <td>AboutMe.txt</td>
              <td>Text File</td>
              <td>3 KB</td>
            </tr>
            <tr>
              <td>TechStack.txt</td>
              <td>Text File</td>
              <td>2 KB</td>
            </tr>
            <tr>
              <td>WorkExperience.txt</td>
              <td>Text File</td>
              <td>10 KB</td>
            </tr>
            <tr>
              <td>Skills.txt</td>
              <td>Text File</td>
              <td>5 KB</td>
            </tr>
            <tr>
              <td>Languages.txt</td>
              <td>Text File</td>
              <td>3 KB</td>
            </tr>
            <tr>
              <td>resume.pdf</td>
              <td>PDF File</td>
              <td>75 KB</td>
            </tr>
            <tr>
              <td>photo.png</td>
              <td>Image</td>
              <td>93 KB</td>
            </tr>
          </table>
          <br>`;
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

    case "datetime":
      const currentDate = new Date().toLocaleDateString();
      const currentTime = new Date().toLocaleTimeString();
      content.innerHTML += `<br>Current Date: ${currentDate}<br>Current Time: ${currentTime}<br>`;
      break;

    case "weather":
      content.innerHTML +=
        "<br>Error: Missing city name. Usage: weather CITY<br>";
      break;

    case "cat photo.png":
      content.innerHTML += asciiArt;
      break;

    case "contact":
      content.innerHTML += "<br>Contact Information:<br>";
      content.innerHTML +=
        "<br>Email: <a href='mailto:sahasubhadip54@gmail.com'>sahasubhadip54@gmail.com</a><br>";
      content.innerHTML +=
        "LinkedIn: <a href='https://www.linkedin.com/in/subhadipsaha'>https://www.linkedin.com/in/subhadipsaha</a><br>";
      break;

    case "cat resume.pdf":
      window.open('https://d1fdloi71mui9q.cloudfront.net/D42aFXgIRBuuTf4v3BcQ_Subhadip-s%20Resume.pdf');
      // content.innerHTML +=
      // "<br>Download my resume: <a href='https://d1fdloi71mui9q.cloudfront.net/D42aFXgIRBuuTf4v3BcQ_Subhadip-s%20Resume.pdf' download>Resume.pdf</a><br>";
      break;

    // // Inside the switch statement of command_handler function
    // case "testimonials":
    //   content.innerHTML += "<br>Client Testimonials:<br>";
    //   content.innerHTML += "<blockquote>\"Subhadip is a talented developer who delivered exceptional results on our project.\" - John Doe, CEO</blockquote>";
    //   content.innerHTML += "<blockquote>\"Working with Subhadip was a great experience. He's a problem solver and a team player.\" - Jane Smith, Designer</blockquote>";
    //   // Add more testimonials
    //   break;


    case "github":
      const githubUsername = "subh05sus"; // Replace with your GitHub username
      fetch(`https://api.github.com/users/${githubUsername}`)
        .then((response) => response.json())
        .then((user) => {
          fetch(`https://api.github.com/users/${githubUsername}/repos`)
            .then((response) => response.json())
            .then((repos) => {
              const totalRepos = repos.length;
              const totalStars = repos.reduce(
                (sum, repo) => sum + repo.stargazers_count,
                0
              );
              const totalForks = repos.reduce(
                (sum, repo) => sum + repo.forks_count,
                0
              );
              const totalIssues = repos.reduce(
                (sum, repo) => sum + repo.open_issues_count,
                0
              );
              content.innerHTML += `<br>GitHub Stats for <span class = username> ${githubUsername}</span>:<br>`;
              content.innerHTML += `Total Repositories: ${totalRepos}<br>`;
              content.innerHTML += `Total Stars Received: ${totalStars}<br>`;
              content.innerHTML += `Total Forks: ${totalForks}<br>`;
              content.innerHTML += `Total Open Issues: ${totalIssues}<br><br>`;

              const contributionsURL = `https://api.github.com/users/${githubUsername}/events/public`;
              fetch(contributionsURL)
                .then((response) => response.json())
                .then((data) => {
                  const contributions = data.filter(
                    (event) => event.type === "PushEvent"
                  );
                  content.innerHTML +=
                    "<br>My Recent GitHub Contributions:<br>";
                  for (let i = 0; i < Math.min(2, contributions.length); i++) {
                    const event = contributions[i];
                    const repoName = event.repo.name;
                    const commitCount = event.payload.commits.length;
                    const commitPlural = commitCount > 1 ? "commits" : "commit";
                    const commitMessage = event.payload.commits[0].message;
                    const commitDate = new Date(
                      event.created_at
                    ).toDateString();
                    const branchName = event.payload.ref.replace(
                      "refs/heads/",
                      ""
                    );
                    content.innerHTML += `<br><p>Repository: <a href="https://github.com/${repoName}">${repoName}</a>`;
                    content.innerHTML += `Commits: ${commitCount} ${commitPlural}<br>`;
                    content.innerHTML += `Latest Commit: ${commitMessage}<br>`;
                    content.innerHTML += `Date: ${commitDate}</p>`;
                  }
                })
                .catch((error) => {
                  content.innerHTML +=
                    "<br>Error fetching GitHub contributions. Please try again later.</br>";
                });
            })
            .catch((error) => {
              content.innerHTML +=
                "<br>Error fetching GitHub repository information. Please try again later.</br>";
            });
        })
        .catch((error) => {
          content.innerHTML +=
            "<br>Error fetching GitHub user information. Please try again later.</br>";
        });
      break;

    case "cat techstack.txt":
      const techStackContent = `
    Frontend: HTML, CSS, JavaScript<br>
    Backend: Node.js, Flask<br>
    Database: Firebase<br>
    Version Control: Git<br>
    Authentication: Auth0, Firebase<br>
    Game Engine: Unity<br>
    3D Modeling: Blender<br>
    API Testing: Postman<br>
    UI/UX Design: Figma<br>
    Graphic Design: Adobe Photoshop, Canva<br>
    Video Editing: Adobe Premiere Pro, After Effects, Filmora<br>
    `;

      content.innerHTML += `<br>${techStackContent}<br>`;
      break;

    case "linkedin":
      window.open("https://www.linkedin.com/in/subhadipsahaofficial");
      break;

    case "twitter":
      window.open("https://twitter.com/SubhadipSuDi");
      break;

    case "instagram":
      window.open("https://www.instagram.com/subh05sus_");
      break;

    case "youtube":
      window.open("https://www.youtube.com/@subhSUS");
      break;

    case "cat languages.txt": // List your programming languages
      content.innerHTML +=
        "<br>Programming languages:<br>" +
        "- C++<br>" +
        "- C<br>" +
        "- C#<br>" +
        "- Python<br>" +
        "- HTML/CSS<br>" +
        "- JavaScript<br>";
      break;

    case "cat skills.txt": // List your technical skills
      content.innerHTML +=
        "<br>Technical skills:<br>" +
        "- Game Development<br>" +
        "- Frontend Development<br>" +
        "- Backend Development<br>" +
        "- UI/UX Design<br>" +
        "- Git and Version Control<br>";
      break;

      case "cat workexperience.txt":
        content.innerHTML +=
          "<br><span class='work-heading'><b>Game Dev Lead - GDSC JIS College of Engineering</b></span><br>" +
          "08/2023 - Present<br>" +
          "- Leading the game development activities and initiatives within the college.<br>" +
          "- Managing and guiding the members of the Google Developer Student Club (GDSC).<br>" +
          "<br><span class='work-heading'><b>Co-Founder - DevDotCom</b></span><br>" +
          "11/2022 - Present<br>" +
          "- A global coding community with 500+ members.<br>" +
          "- Organized events, competitions, and workshops for learning and networking.<br>" +
          "- Built and grew a public coding community with 300+ members.<br>" +
          "- Organized successful coding events and competition, engaging over 50 participants.<br>" +
          "- Led events on Git and GitHub, providing valuable learning.<br>" +
          "- Designed promotional materials and posters using graphic design skills.<br>" +
          "<br><span class='work-heading'><b>Student Ambassador - Intel</b></span><br>" +
          "05/2023 - Present<br>" +
          "- Represented Intel on campus as a brand advocate.<br>" +
          "- Promoted Intel's technologies and initiatives to fellow students.<br>" +
          "- Engaged students on Intel's OneAPI technology and innovation.<br>" +
          "<br><span class='work-heading'><b>Graphic Designer / Management Team Member - PHICSIT</b></span><br>" +
          "05/2023 - Present<br>" +
          "- Made designs for promotional posters for PHICSIT.<br>" +
          "- Created visually appealing graphics for speaker sessions.<br>" +
          "- Utilized Canva, Figma, and Microsoft Designer for high-quality designs.<br>";
        break;
      
        case "easter egg":
          content.innerHTML +=
            "<br><b>Easter Egg:</b><br>" +
            "You found it! Congratulations! 🎉<br>" +
            "Now go ahead and explore more commands in this terminal.<br>";
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
      } else if (command.toLowerCase().startsWith("weather ")) {
        const city = command.substring(8);
        const apiKey = "9c844659384b665e24decd4c6cce52f7"; // Replace with your actual API key

        // Fetch weather data and display it
        fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
        )
          .then((response) => response.json())
          .then((data) => {
            const weatherDescription = data.weather[0].description;
            const temperature = data.main.temp;
            const humidity = data.main.humidity;
            const city = data.name;

            const weatherInfo = `
              Weather in ${city}: ${weatherDescription}<br>
              Temperature: ${temperature}°C<br>
              Humidity: ${humidity}%
            `;

            content.innerHTML += `<br>${weatherInfo}<br>`;
          })

          .catch((error) => {
            content.innerHTML +=
              "<br>Failed to fetch weather data. Please try again later.<br>";
            console.error(error);
          });
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
    "help - Get Command List<br>" +
    "projects - List out my projects<br>" +
    "Links - Links to contact me or see things I have done<br>" +
    "ls - List out files<br>" +
    "cat FILENAME - Display text or contents of a file.<br>" +
    "echo - Display a message on the terminal<br>" +
    "cowsay - Generate ASCII art with a speech bubble from a cow<br>" +
    "calc expression - Perform simple calculations<br>" +
    "weather CITY - Get current weather for a city<br>" +
    "datetime - Display the current date and time<br>" +
    "github - Open my GitHub profile<br>" +
    "contact - Get my contact information<br>" +
    "clear - Clear the screen<br>" +
    "sudo rm -rf - Don't try kiddo<br>";
}

function Hide() {
  if (!terminal.classList.contains("hidden")) {
    if (terminal.classList.contains("maxed")) {   
      terminal.classList.remove("maxed");
    }
    terminal.classList.add("hidden");
      terminalAPP.style.display = "initial"; // Show the app button
  } else {
      terminal.classList.remove("hidden");
      
      // terminalAPP.style.display = "none"; // Hide the app button
    }
  }



function Maxim() {
  if (!terminal.classList.contains("maxed")) {
    if (terminal.classList.contains("hidden")) {   
      terminal.classList.remove("hidden");
      // terminalAPP.style.display = "none"; // Hide the app button
    }
    terminal.classList.add("maxed");
    
    
  } else {
      terminal.classList.remove("maxed");
      
    }
  }



  function AppOpen() {
    if (terminal.classList.contains("hidden")) {   
      terminal.classList.remove("hidden");
      // terminalAPP.style.display = "none"; // Hide the app button
    }


    if (terminal.style.display == "none"){      
      terminal.style.display = "block";
      // terminalAPP.style.display = "none"; // Hide the app button
    }
  }
  
  function closeT(){
    terminal.style.display = "none";
    terminalAPP.style.display = "initial"; // Show the app button
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



const asciiArt = `
<span class="ascii" style="color: white; background: #111111;
display:inline-block;
white-space:pre;
letter-spacing:0;
line-height:1.4;
font-family:'Consolas','BitstreamVeraSansMono','CourierNew',Courier,monospace;
font-size:12px;
"><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span>
<span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span>
<span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#5A664D3F;">*</span><span style="color:#62564F;">*</span><span style="color:#5F524B;">*</span><span style="color:#8E8076;">(</span><span style="color:#8C7F77;">(</span><span style="color:#D413026;">.</span><span style="color:#1C2D2017;">.</span><span style="color:#6A563E32;">,</span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span>
<span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#5134261D;">.</span><span style="color:#51453F;">,</span><span style="color:#5C5049;">*</span><span style="color:#595655;">*</span><span style="color:#695A53;">*</span><span style="color:#3D322B;">,</span><span style="color:#342822;">.</span><span style="color:#191512;"> </span><span style="color:#130A08;"> </span><span style="color:#140B08;"> </span><span style="color:#342822;">.</span><span style="color:#2C211B;">.</span><span style="color:#191512;"> </span><span style="color:#B271E16;">.</span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span>
<span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#130C0907;"> </span><span style="color:#211813;"> </span><span style="color:#181411;"> </span><span style="color:#2B201A;">.</span><span style="color:#4A3226;">,</span><span style="color:#9E6F52;">/</span><span style="color:#CC9673;">#</span><span style="color:#E0AB86;">#</span><span style="color:#EABE9D;">%</span><span style="color:#E9BA98;">%</span><span style="color:#D0926A;">#</span><span style="color:#CB895E;">(</span><span style="color:#B77A4F;">(</span><span style="color:#9E6541;">/</span><span style="color:#4A382E;">,</span><span style="color:#493C35;">,</span><span style="color:#6B5C55;">*</span><span style="color:#6762493B;">*</span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span>
<span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#2C2019;">.</span><span style="color:#D9986A;">#</span><span style="color:#D9986A;">#</span><span style="color:#D39062;">(</span><span style="color:#DC9D71;">#</span><span style="color:#DA9A6C;">#</span><span style="color:#D9986A;">#</span><span style="color:#D9996A;">#</span><span style="color:#D9996A;">#</span><span style="color:#D9996A;">#</span><span style="color:#BF8053;">(</span><span style="color:#B87B50;">(</span><span style="color:#B0774E;">/</span><span style="color:#A06A47;">/</span><span style="color:#1F100A;"> </span><span style="color:#1A1512;"> </span><span style="color:#56543F32;">,</span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span>
<span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#3635261B;">.</span><span style="color:#B58160;">(</span><span style="color:#9B6F55;">/</span><span style="color:#41352E;">,</span><span style="color:#3A2F29;">.</span><span style="color:#6C422C;">,</span><span style="color:#B17851;">/</span><span style="color:#A46D49;">/</span><span style="color:#744C35;">*</span><span style="color:#82624D;">*</span><span style="color:#8F6F5A;">/</span><span style="color:#85644F;">/</span><span style="color:#715341;">*</span><span style="color:#775946;">*</span><span style="color:#7D7C7A;">/</span><span style="color:#1B0F0A;"> </span><span style="color:#DBAE8F;">%</span><span style="color:#4F6A5143;">*</span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span>
<span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#AE6E48;">/</span><span style="color:#482513;">.</span><span style="color:#BA8867;">(</span><span style="color:#966B50;">/</span><span style="color:#9A735C;">/</span><span style="color:#774E37;">*</span><span style="color:#56311D;">,</span><span style="color:#E8C8AD;">%</span><span style="color:#4D2F20;">,</span><span style="color:#81573F;">*</span><span style="color:#9A6746;">/</span><span style="color:#AE7650;">/</span><span style="color:#C78C66;">(</span><span style="color:#7D5D49;">*</span><span style="color:#824F31;">*</span><span style="color:#BA7F55;">(</span><span style="color:#A26130;">/</span><span style="color:#73614638;">,</span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span>
<span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#7151312;"> </span><span style="color:#F4C19A;">%</span><span style="color:#C58A65;">(</span><span style="color:#E5AB81;">#</span><span style="color:#E6AC81;">#</span><span style="color:#C68259;">(</span><span style="color:#E8AF85;">%</span><span style="color:#E1A479;">#</span><span style="color:#D2946B;">#</span><span style="color:#BD7B5A;">(</span><span style="color:#A56F4A;">/</span><span style="color:#925C3C;">*</span><span style="color:#BF8053;">(</span><span style="color:#B37A53;">(</span><span style="color:#906146;">/</span><span style="color:#D39062;">(</span><span style="color:#3CA77962;">(</span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span>
<span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#B78462;">(</span><span style="color:#AB7551;">/</span><span style="color:#6E4832;">*</span><span style="color:#9F7A62;">/</span><span style="color:#B1896F;">(</span><span style="color:#C7A085;">#</span><span style="color:#C6A188;">#</span><span style="color:#7B4A2E;">*</span><span style="color:#A26E4C;">/</span><span style="color:#A56F4A;">/</span><span style="color:#AD754E;">/</span><span style="color:#73614638;">,</span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span>
<span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#4371594C;">*</span><span style="color:#A37357;">/</span><span style="color:#AF7B5A;">(</span><span style="color:#E2AA82;">#</span><span style="color:#E5AF89;">%</span><span style="color:#C7906D;">(</span><span style="color:#B37A53;">(</span><span style="color:#B27851;">/</span><span style="color:#9F6D4D;">/</span><span style="color:#986747;">/</span><span style="color:#976B50;">/</span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span>
<span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#999997;">(</span><span style="color:#503729;">,</span><span style="color:#CE8C5F;">(</span><span style="color:#BE8055;">(</span><span style="color:#AE714A;">/</span><span style="color:#A66944;">/</span><span style="color:#9D6542;">/</span><span style="color:#9A6543;">/</span><span style="color:#9A6544;">/</span><span style="color:#9F6A47;">/</span><span style="color:#A16E4E;">/</span><span style="color:#7C5E4A;">*</span><span style="color:#BCBDB9;">%</span><span style="color:#CE6E6E5;">@</span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span>
<span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#F9F9F8;">@</span><span style="color:#FAFAF8;">@</span><span style="color:#FBFBF8;">@</span><span style="color:#5CE9E5E3;">@</span><span style="color:#000000;"> </span><span style="color:#F4F3F0;">@</span><span style="color:#1AF9F8F7;">@</span><span style="color:#5FBFBFA;">@</span><span style="color:#F9F9F8;">@</span><span style="color:#DCDCD9;">&amp;</span><span style="color:#EEEEEB;">@</span><span style="color:#F3F2EE;">@</span><span style="color:#8E8680;">(</span><span style="color:#A3765A;">/</span><span style="color:#C4865E;">(</span><span style="color:#BD825B;">(</span><span style="color:#B37A53;">(</span><span style="color:#B1784F;">/</span><span style="color:#B37A53;">(</span><span style="color:#B57A54;">(</span><span style="color:#A76A44;">/</span><span style="color:#9F6743;">/</span><span style="color:#A56F4A;">/</span><span style="color:#2E180E;">.</span><span style="color:#A9A9A6;">#</span><span style="color:#D8D8D8;">&amp;</span><span style="color:#E5E4E4;">&amp;</span><span style="color:#C2C3C4;">%</span><span style="color:#ADAFB1;">#</span><span style="color:#DFE0E0;">&amp;</span><span style="color:#777878;">/</span><span style="color:#E9E9E7;">@</span><span style="color:#D9D9D6;">&amp;</span><span style="color:#F8F8F8;">@</span><span style="color:#4CF4F3F2;">@</span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span>
<span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#70D9D1CD;">&amp;</span><span style="color:#ECECEA;">@</span><span style="color:#F8F8F7;">@</span><span style="color:#F4F4F3;">@</span><span style="color:#D8D8D6;">&amp;</span><span style="color:#8A8A89;">(</span><span style="color:#F8F8F6;">@</span><span style="color:#F8F7F3;">@</span><span style="color:#E6E5E4;">&amp;</span><span style="color:#F7F7F6;">@</span><span style="color:#FCFCFC;">@</span><span style="color:#F7F6F2;">@</span><span style="color:#CDCDC9;">%</span><span style="color:#E7E7E6;">@</span><span style="color:#574136;">,</span><span style="color:#7E4B2E;">*</span><span style="color:#905B3B;">*</span><span style="color:#905B3B;">*</span><span style="color:#A86F4A;">/</span><span style="color:#A36D49;">/</span><span style="color:#804D2F;">*</span><span style="color:#724026;">,</span><span style="color:#54321F;">,</span><span style="color:#959593;">(</span><span style="color:#9E9D98;">#</span><span style="color:#E2E2E1;">&amp;</span><span style="color:#E6E6E4;">&amp;</span><span style="color:#ACAEB1;">#</span><span style="color:#E9E8E8;">@</span><span style="color:#A6A7A8;">#</span><span style="color:#C9C9CA;">%</span><span style="color:#BFC0BF;">%</span><span style="color:#FAFAF7;">@</span><span style="color:#EDEDEB;">@</span><span style="color:#EEEEEC;">@</span><span style="color:#EDEDEB;">@</span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span>
<span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#81B1B1B;">.</span><span style="color:#F8F8F7;">@</span><span style="color:#F9F9F9;">@</span><span style="color:#F9F9F8;">@</span><span style="color:#EBEBEA;">@</span><span style="color:#E4E5E4;">&amp;</span><span style="color:#D9DADB;">&amp;</span><span style="color:#FBFBFB;">@</span><span style="color:#F4F4F3;">@</span><span style="color:#B0B2B4;">#</span><span style="color:#959696;">(</span><span style="color:#ABACAA;">#</span><span style="color:#D6D6D6;">&amp;</span><span style="color:#CDCDCC;">&amp;</span><span style="color:#9C9C99;">#</span><span style="color:#D4D3D1;">&amp;</span><span style="color:#E9E4DC;">&amp;</span><span style="color:#7F533B;">*</span><span style="color:#905B3B;">*</span><span style="color:#865133;">*</span><span style="color:#8E5939;">*</span><span style="color:#8D5838;">*</span><span style="color:#764F39;">*</span><span style="color:#99948F;">(</span><span style="color:#DFDEDA;">&amp;</span><span style="color:#B3B4B6;">%</span><span style="color:#A5A7AA;">#</span><span style="color:#D1D1D2;">&amp;</span><span style="color:#A8A8AA;">#</span><span style="color:#AEAFAE;">#</span><span style="color:#B4B4B2;">%</span><span style="color:#8F9091;">(</span><span style="color:#97999A;">(</span><span style="color:#ECECEB;">@</span><span style="color:#F4F4F3;">@</span><span style="color:#6D6E6E;">/</span><span style="color:#F4F4F3;">@</span><span style="color:#FAFAF6;">@</span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span>
<span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#C3C3C1;">%</span><span style="color:#EBEBE9;">@</span><span style="color:#F5F5F4;">@</span><span style="color:#F8F8F7;">@</span><span style="color:#CCCCCB;">%</span><span style="color:#C9CAC7;">%</span><span style="color:#F3F3F1;">@</span><span style="color:#7F8080;">(</span><span style="color:#A8A9AA;">#</span><span style="color:#BEBFBE;">%</span><span style="color:#D1D2D3;">&amp;</span><span style="color:#EAE9E8;">@</span><span style="color:#E2E2E1;">&amp;</span><span style="color:#D8D8D9;">&amp;</span><span style="color:#949493;">(</span><span style="color:#B5B5B3;">%</span><span style="color:#C9C9C5;">%</span><span style="color:#9D9E9D;">#</span><span style="color:#D0CDC7;">&amp;</span><span style="color:#7A523C;">*</span><span style="color:#8C5A3E;">*</span><span style="color:#A59589;">(</span><span style="color:#BCBBB7;">%</span><span style="color:#8A8A88;">(</span><span style="color:#706F6F;">/</span><span style="color:#969797;">(</span><span style="color:#BCBDBF;">%</span><span style="color:#808183;">(</span><span style="color:#323130;">.</span><span style="color:#6F6F71;">/</span><span style="color:#4D4E4F;">*</span><span style="color:#9D9FA2;">#</span><span style="color:#676867;">/</span><span style="color:#F6F6F5;">@</span><span style="color:#E7E7E6;">@</span><span style="color:#C8C9CA;">%</span><span style="color:#505051;">*</span><span style="color:#F9F9F7;">@</span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span>
<span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#FAFAFA;">@</span><span style="color:#AFAFAE;">#</span><span style="color:#BEBFC1;">%</span><span style="color:#F9F9F9;">@</span><span style="color:#FBFBF8;">@</span><span style="color:#D2D3D3;">&amp;</span><span style="color:#777779;">/</span><span style="color:#A0A1A2;">#</span><span style="color:#9B9C9D;">#</span><span style="color:#989897;">(</span><span style="color:#BBBBB9;">%</span><span style="color:#90908F;">(</span><span style="color:#A0A1A4;">#</span><span style="color:#F6F6F5;">@</span><span style="color:#AEAFB2;">#</span><span style="color:#ABADB0;">#</span><span style="color:#2C2C2D;">.</span><span style="color:#C9C8C5;">%</span><span style="color:#929292;">(</span><span style="color:#AFAEAA;">#</span><span style="color:#424243;">,</span><span style="color:#878786;">(</span><span style="color:#8B8B8A;">(</span><span style="color:#AAAAAA;">#</span><span style="color:#C7C8CA;">%</span><span style="color:#636364;">*</span><span style="color:#A4A5A7;">#</span><span style="color:#C7C8CA;">%</span><span style="color:#D0D1CF;">&amp;</span><span style="color:#8C8D8D;">(</span><span style="color:#909192;">(</span><span style="color:#888989;">(</span><span style="color:#39393B;">,</span><span style="color:#4F4F50;">*</span><span style="color:#F6F6F5;">@</span><span style="color:#8F9093;">(</span><span style="color:#676869;">/</span><span style="color:#ECEBEA;">@</span><span style="color:#F9F9F9;">@</span><span style="color:#D3D3D0;">&amp;</span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span>
<span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#FDFDFD;">@</span><span style="color:#FAFAFA;">@</span><span style="color:#D6D7D7;">&amp;</span><span style="color:#F7F7F6;">@</span><span style="color:#FDFDFD;">@</span><span style="color:#FAFAFA;">@</span><span style="color:#505051;">*</span><span style="color:#AFB0B1;">#</span><span style="color:#222222;">.</span><span style="color:#404041;">,</span><span style="color:#BFC0C2;">%</span><span style="color:#B1B0AC;">#</span><span style="color:#4F5051;">*</span><span style="color:#909191;">(</span><span style="color:#D2D2CF;">&amp;</span><span style="color:#D1D1CD;">&amp;</span><span style="color:#B7B7B2;">%</span><span style="color:#8C8D8C;">(</span><span style="color:#DBDAD5;">&amp;</span><span style="color:#C0C0BD;">%</span><span style="color:#CACAC6;">%</span><span style="color:#747475;">/</span><span style="color:#AAABA8;">#</span><span style="color:#C0C0BC;">%</span><span style="color:#B6B6B2;">%</span><span style="color:#C7C6BF;">%</span><span style="color:#757575;">/</span><span style="color:#7D7D7E;">/</span><span style="color:#C0C1C3;">%</span><span style="color:#CFD0D1;">&amp;</span><span style="color:#545455;">*</span><span style="color:#454546;">,</span><span style="color:#949596;">(</span><span style="color:#EAEAE9;">@</span><span style="color:#FDFDFD;">@</span><span style="color:#F1F1F0;">@</span><span style="color:#8B8B8A;">(</span><span style="color:#F8F8F7;">@</span><span style="color:#F9F9F8;">@</span><span style="color:#FBFBFB;">@</span><span style="color:#FBFBFB;">@</span><span style="color:#EDEDEC;">@</span><span style="color:#10231F1D;">.</span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span>
<span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#FDFDFD;">@</span><span style="color:#FBFBFB;">@</span><span style="color:#E8E8E5;">@</span><span style="color:#79797A;">/</span><span style="color:#E0E0DF;">&amp;</span><span style="color:#EFEFED;">@</span><span style="color:#E4E3E3;">&amp;</span><span style="color:#949492;">(</span><span style="color:#BDBEBC;">%</span><span style="color:#7A7B7C;">/</span><span style="color:#5D5E5E;">*</span><span style="color:#989896;">(</span><span style="color:#B2B2B0;">#</span><span style="color:#7B7B7C;">/</span><span style="color:#5F6060;">*</span><span style="color:#B5B6B7;">%</span><span style="color:#BCBCB9;">%</span><span style="color:#7F8080;">(</span><span style="color:#B2B3B6;">%</span><span style="color:#ACADB0;">#</span><span style="color:#BCBDBF;">%</span><span style="color:#9B9B9A;">#</span><span style="color:#454546;">,</span><span style="color:#989898;">(</span><span style="color:#777778;">/</span><span style="color:#9B9B99;">#</span><span style="color:#818282;">(</span><span style="color:#909294;">(</span><span style="color:#767678;">/</span><span style="color:#ACADAC;">#</span><span style="color:#838588;">(</span><span style="color:#A3A3A5;">#</span><span style="color:#A5A8AB;">#</span><span style="color:#ADAEB0;">#</span><span style="color:#DBDCDD;">&amp;</span><span style="color:#F6F6F6;">@</span><span style="color:#FBFBFB;">@</span><span style="color:#D5D5D5;">&amp;</span><span style="color:#EDEDEB;">@</span><span style="color:#F0F0F0;">@</span><span style="color:#F7F7F6;">@</span><span style="color:#FAFAF9;">@</span><span style="color:#CFCFCE;">&amp;</span><span style="color:#ADADAC;">#</span><span style="color:#2DFAFAFA;">@</span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span>
<span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#FCFCFC;">@</span><span style="color:#F9F9F9;">@</span><span style="color:#F7F7F5;">@</span><span style="color:#DEDCD8;">&amp;</span><span style="color:#FCFCF9;">@</span><span style="color:#FDFDFA;">@</span><span style="color:#F8F8F6;">@</span><span style="color:#E5E5E2;">&amp;</span><span style="color:#E9E9E8;">@</span><span style="color:#E3D5C4;">&amp;</span><span style="color:#A99A8D;">#</span><span style="color:#EBDCC9;">&amp;</span><span style="color:#F1E1CA;">&amp;</span><span style="color:#FCF6CE;">@</span><span style="color:#FBF4D1;">@</span><span style="color:#FDF7D0;">@</span><span style="color:#F9F1D9;">@</span><span style="color:#E9E8E3;">@</span><span style="color:#FAF6EE;">@</span><span style="color:#3F2518;">.</span><span style="color:#B08265;">(</span><span style="color:#FCDEB6;">&amp;</span><span style="color:#FBDCB4;">&amp;</span><span style="color:#FAD8B3;">&amp;</span><span style="color:#F5D7B4;">&amp;</span><span style="color:#F3DCBC;">&amp;</span><span style="color:#F5DAB8;">&amp;</span><span style="color:#F8E2C0;">&amp;</span><span style="color:#F4DFC2;">&amp;</span><span style="color:#F2DCBD;">&amp;</span><span style="color:#F3DCBC;">&amp;</span><span style="color:#F4E0C3;">&amp;</span><span style="color:#E3D8CA;">&amp;</span><span style="color:#F9F8F5;">@</span><span style="color:#FDFDFB;">@</span><span style="color:#FCFCFC;">@</span><span style="color:#EBEBEA;">@</span><span style="color:#8A8B8B;">(</span><span style="color:#A7A7A4;">#</span><span style="color:#FCFCFA;">@</span><span style="color:#929290;">(</span><span style="color:#DDDDDD;">&amp;</span><span style="color:#676767;">/</span><span style="color:#9A9A99;">#</span><span style="color:#2A877971;">/</span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span>
<span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#3B9F9F9E;">#</span><span style="color:#FCFCFC;">@</span><span style="color:#F9F9F8;">@</span><span style="color:#DBDBD9;">&amp;</span><span style="color:#343436;">,</span><span style="color:#BCBDBE;">%</span><span style="color:#FAFAFA;">@</span><span style="color:#FDFDFD;">@</span><span style="color:#FBFBF8;">@</span><span style="color:#FCFCFC;">@</span><span style="color:#F2F1EE;">@</span><span style="color:#F9F8F3;">@</span><span style="color:#F9F3E3;">@</span><span style="color:#FBE4BF;">&amp;</span><span style="color:#EAB996;">%</span><span style="color:#DB9C6F;">#</span><span style="color:#C0855D;">(</span><span style="color:#A17357;">/</span><span style="color:#33241E;">.</span><span style="color:#1D100A;"> </span><span style="color:#844F31;">*</span><span style="color:#AC6D48;">/</span><span style="color:#BD7E52;">(</span><span style="color:#D79668;">#</span><span style="color:#E9B188;">%</span><span style="color:#F3BC93;">%</span><span style="color:#F3BC93;">%</span><span style="color:#F4C199;">%</span><span style="color:#F8C9A1;">%</span><span style="color:#F8C9A1;">%</span><span style="color:#F9D1A9;">&amp;</span><span style="color:#F9CEA6;">&amp;</span><span style="color:#F8C9A1;">%</span><span style="color:#F9CFA7;">&amp;</span><span style="color:#F9D0A8;">&amp;</span><span style="color:#DFD4C7;">&amp;</span><span style="color:#FAFAF7;">@</span><span style="color:#FDFDFD;">@</span><span style="color:#FDFDFD;">@</span><span style="color:#FCFCFC;">@</span><span style="color:#CBCCCD;">&amp;</span><span style="color:#DEDEDD;">&amp;</span><span style="color:#CDCECF;">&amp;</span><span style="color:#FDFDFD;">@</span><span style="color:#F5F4F0;">@</span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span>
<span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#F4F4F2;">@</span><span style="color:#F8F8F8;">@</span><span style="color:#FCFCFC;">@</span><span style="color:#FCFCFC;">@</span><span style="color:#FCFCFC;">@</span><span style="color:#FAFAF9;">@</span><span style="color:#F0EFEF;">@</span><span style="color:#F9F9F8;">@</span><span style="color:#EDEDED;">@</span><span style="color:#EBEBE8;">@</span><span style="color:#FBFBF8;">@</span><span style="color:#F7F6F2;">@</span><span style="color:#9B7C68;">(</span><span style="color:#FBE3BF;">&amp;</span><span style="color:#FBE1BB;">&amp;</span><span style="color:#FCDEB6;">&amp;</span><span style="color:#FDE0B8;">&amp;</span><span style="color:#FBDEB6;">&amp;</span><span style="color:#FCDEB6;">&amp;</span><span style="color:#FBDCB5;">&amp;</span><span style="color:#FBDEB6;">&amp;</span><span style="color:#FBE1BB;">&amp;</span><span style="color:#FBE1BC;">&amp;</span><span style="color:#FBE3BE;">&amp;</span><span style="color:#A49B94;">#</span><span style="color:#DE5856;">(</span><span style="color:#EFD4B7;">&amp;</span><span style="color:#4E2613;">.</span><span style="color:#9A6848;">/</span><span style="color:#AB744E;">/</span><span style="color:#B87E55;">(</span><span style="color:#B87F56;">(</span><span style="color:#BE835B;">(</span><span style="color:#CC8E65;">(</span><span style="color:#D3956C;">#</span><span style="color:#D2946B;">#</span><span style="color:#F2EEE7;">@</span><span style="color:#E1E0DE;">&amp;</span><span style="color:#C1C1BE;">%</span><span style="color:#878786;">(</span><span style="color:#B4B5B5;">%</span><span style="color:#CECECE;">&amp;</span><span style="color:#D0D1D2;">&amp;</span><span style="color:#C5C5C6;">%</span><span style="color:#7E7F7E;">/</span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span><span style="color:#000000;"> </span>
<span style="color:#000000;"> </span>
`;

