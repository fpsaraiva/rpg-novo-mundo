class Races {
  constructor() {
    this.showHumanText();
    this.showWereText();
    this.showCyborgText();
    this.showFaeText();
  }

  showHumanText() {
    document.getElementById("humans").addEventListener("click", function () {
      document.getElementById("text-home").style.display = "none";
      document.getElementById("race-human").style.display = "flex";
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

  showWereText(){
    document.getElementById("were").addEventListener("click", function () {
      document.getElementById("text-home").style.display = "none";
      document.getElementById("race-human").style.display = "none";
      document.getElementById("race-were").style.display = "flex";
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

  showCyborgText() {
    document.getElementById("cyborgs").addEventListener("click", function () {
      document.getElementById("text-home").style.display = "none";
      document.getElementById("race-human").style.display = "none";
      document.getElementById("race-were").style.display = "none";
      document.getElementById("race-cyborg").style.display = "flex";
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

  showFaeText() {
    document.getElementById("fae").addEventListener("click", function () {
      document.getElementById("text-home").style.display = "none";
      document.getElementById("race-human").style.display = "none";
      document.getElementById("race-were").style.display = "none";
      document.getElementById("race-cyborg").style.display = "none";
      document.getElementById("race-fae").style.display = "flex";
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

export default Races;