const nav = document.querySelector("nav");
window.addEventListener("scroll", function () {
  nav.classList.toggle("sticky", window.scrollY > 50);
});

let menu = document.querySelector("#menu-icon"),
  navitems = document.querySelector(".navItems"),
  navicons = document.querySelector(".icons");
menu.onclick = () => {
  menu.classList.toggle("bx-x");
  navitems.classList.toggle("open");
  navicons.classList.toggle("open");
};

window.onscroll = () => {
  menu.classList.remove("bx-x");
  navitems.classList.remove("open");
  navicons.classList.remove("open");
};

var typingEffect = new Typed(".multiText", {
  strings: ["analista corporal", "mãe"],
  loop: true,
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 1500,
});

Chart.register(ChartDataLabels);


const porcentagens = [ 15, 25, 18, 15, 27 ];

new Chart(document.getElementById("graficoPizza"), {
  type: "pie",
  data: {
    labels: ["Esquizóide", "Oral", "Psicopata", "Masoquista", "Rígido"],
    datasets: [
      {
        data: porcentagens,
        backgroundColor: [
          "rgba(0, 0, 255)",
          "rgba(255, 165, 0)",
          "rgba(255, 88, 38)",
          "rgba(60, 179, 113)",
          "rgba(238, 130, 238)",
        ],
        borderWidth: 1,
      },
    ],
  },
  options: {
    plugins: {
      legend: {
        display: false,
      },
      datalabels: {
        anchor: 'center',
        align: 'center',
        color: 'white',
        font: {
          weight: 'bold',
        },
        formatter: function(value) {
          return value + '%'; // Adiciona o símbolo de porcentagem aos valores
        }
      }
    },
  },
});

new Chart(document.getElementById("graficoColunas"), {
    type: "bar",
    data: {
      labels: ["Esquizóide", "Oral", "Psicopata", "Masoquista", "Rígido"],
      datasets: [
        {
          data: porcentagens,
          backgroundColor: [
            "rgba(0, 0, 255)",
            "rgba(255, 165, 0)",
            "rgba(255, 88, 38)",
            "rgba(60, 179, 113)",
            "rgba(238, 130, 238)",
          ],
          borderWidth: 1,
        },
      ],
    },
    options: {
      indexAxis: "y",
      plugins: {
        legend: {
          display: false,
        },
        datalabels: {
          anchor: 'end',
          align: 'end',
          color: 'black',
          font: {
            weight: 'bold',
          },
          formatter: function(value) {
            return value + '%'; // Adiciona o símbolo de porcentagem aos valores
          }
        }
      },
      scales: {
        x: {
          grid: {
            display: false,
          },
        },
        y: {
          grid: {
            display: false,
          },
        },
      },
    },
  });
  
  var modal = document.getElementById("videoModal");
  var btn = document.getElementById("showVideoBtn");
  var span = document.getElementsByClassName("close")[0];
  var video = document.getElementById("modalVideo");
  
  btn.onclick = function() {
      modal.style.display = "flex";
      video.play();
  }
  
  span.onclick = function() {
      modal.style.display = "none";
      video.pause();
      video.currentTime = 0;
  }
  
  window.onclick = function(event) {
      if (event.target == modal) {
          modal.style.display = "none";
          video.pause();
          video.currentTime = 0;
      }
  }