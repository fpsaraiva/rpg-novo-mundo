class Home {
  showHome() {
    document.getElementById("home").addEventListener("click", function () {
        document.getElementById("text-home").style.display = "flex";
        document.getElementById("race-human").style.display = "none";
        document.getElementById("race-were").style.display = "none";
        document.getElementById("race-cyborg").style.display = "none";
        document.getElementById("race-fae").style.display = "none";
        document.getElementById("class-mage").style.display = "none";
        document.getElementById("class-warrior").style.display = "none";
        document.getElementById("class-mercenary").style.display = "none";
        document.getElementById("class-bard").style.display = "none";
        document.getElementById("class-berserker").style.display = "none";
        document.getElementById("class-paladin").style.display = "none";
        document.getElementById("class-wizard").style.display = "none";
        document.getElementById("characterSheet").style.display = "none";
    })
  }
}

export default Home;