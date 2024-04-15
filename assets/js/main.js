(() => {
  // Theme switch
  const body = document.body;
  const lamp = document.getElementById("mode");

  const toggleTheme = (state) => {
    if (state === "dark") {
      localStorage.setItem("theme", "light");
      body.removeAttribute("data-theme");
    } else if (state === "light") {
      localStorage.setItem("theme", "dark");
      body.setAttribute("data-theme", "dark");
    } else {
      initTheme(state);
    }
  };

  lamp.addEventListener("click", () =>
    toggleTheme(localStorage.getItem("theme"))
  );

  // Blur the content when the menu is open
  const cbox = document.getElementById("menu-trigger");

  cbox.addEventListener("change", function () {
    const area = document.querySelector(".wrapper");
    this.checked
      ? area.classList.add("blurry")
      : area.classList.remove("blurry");
  });

  const filterRepo = function (repos) { // 1
      var result = repos.filter(function (el) {
          return el.name === "jekyll-test";
      })
      return result;

  }

    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            let repos = JSON.parse(this.responseText);
            console.log(filterRepo(repos)[0])
            document.getElementById('licenseInfo').innerText = "under " + filterRepo(repos)[0].license.name;
            document.getElementById('buildInfo').innerText = "build & deployed at " + new Date(filterRepo(repos)[0].pushed_at).toLocaleString();
        }
    };
    xhttp.open("GET", "https://api.github.com/users/brokengdnb/repos", true);
    xhttp.send();



})();
