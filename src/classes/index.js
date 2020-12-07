class Classes {
  constructor() {
    this.showMageText();
    this.showWarriorText();
    this.showMercenaryText();
    this.showBardText();
    this.showBerserkerText();
    this.showPaladinText();
    this.showWizardText();
  }

  showMageText() {
    document.getElementById("mage").addEventListener("click", function () {
      document.getElementById("text-home").style.display = "none";
      document.getElementById("race-human").style.display = "none";
      document.getElementById("race-were").style.display = "none";
      document.getElementById("race-cyborg").style.display = "none";
      document.getElementById("race-fae").style.display = "none";
      document.getElementById("class-mage").style.display = "flex";
      document.getElementById("class-warrior").style.display = "none";
      document.getElementById("class-mercenary").style.display = "none";
      document.getElementById("class-bard").style.display = "none";
      document.getElementById("class-berserker").style.display = "none";
      document.getElementById("class-paladin").style.display = "none";
      document.getElementById("class-wizard").style.display = "none";
      document.getElementById("characterSheet").style.display = "none";
    })
  }

  showWarriorText() {
    document.getElementById("warrior").addEventListener("click", function () {
      document.getElementById("text-home").style.display = "none";
      document.getElementById("race-human").style.display = "none";
      document.getElementById("race-were").style.display = "none";
      document.getElementById("race-cyborg").style.display = "none";
      document.getElementById("race-fae").style.display = "none";
      document.getElementById("class-mage").style.display = "none";
      document.getElementById("class-warrior").style.display = "flex";
      document.getElementById("class-mercenary").style.display = "none";
      document.getElementById("class-bard").style.display = "none";
      document.getElementById("class-berserker").style.display = "none";
      document.getElementById("class-paladin").style.display = "none";
      document.getElementById("class-wizard").style.display = "none";
      document.getElementById("characterSheet").style.display = "none";
    })
  }

  showMercenaryText() {
    document.getElementById("mercenary").addEventListener("click", function () {
      document.getElementById("text-home").style.display = "none";
      document.getElementById("race-human").style.display = "none";
      document.getElementById("race-were").style.display = "none";
      document.getElementById("race-cyborg").style.display = "none";
      document.getElementById("race-fae").style.display = "none";
      document.getElementById("class-mage").style.display = "none";
      document.getElementById("class-warrior").style.display = "none";
      document.getElementById("class-mercenary").style.display = "flex";
      document.getElementById("class-bard").style.display = "none";
      document.getElementById("class-berserker").style.display = "none";
      document.getElementById("class-paladin").style.display = "none";
      document.getElementById("class-wizard").style.display = "none";
      document.getElementById("characterSheet").style.display = "none";
    })
  }

  showBardText() {
    document.getElementById("bard").addEventListener("click", function () {
      document.getElementById("text-home").style.display = "none";
      document.getElementById("race-human").style.display = "none";
      document.getElementById("race-were").style.display = "none";
      document.getElementById("race-cyborg").style.display = "none";
      document.getElementById("race-fae").style.display = "none";
      document.getElementById("class-mage").style.display = "none";
      document.getElementById("class-warrior").style.display = "none";
      document.getElementById("class-mercenary").style.display = "none";
      document.getElementById("class-bard").style.display = "flex";
      document.getElementById("class-berserker").style.display = "none";
      document.getElementById("class-paladin").style.display = "none";
      document.getElementById("class-wizard").style.display = "none";
      document.getElementById("characterSheet").style.display = "none";
    })
  }

  showBerserkerText() {
    document.getElementById("berserker").addEventListener("click", function () {
      document.getElementById("text-home").style.display = "none";
      document.getElementById("race-human").style.display = "none";
      document.getElementById("race-were").style.display = "none";
      document.getElementById("race-cyborg").style.display = "none";
      document.getElementById("race-fae").style.display = "none";
      document.getElementById("class-mage").style.display = "none";
      document.getElementById("class-warrior").style.display = "none";
      document.getElementById("class-mercenary").style.display = "none";
      document.getElementById("class-bard").style.display = "none";
      document.getElementById("class-berserker").style.display = "flex";
      document.getElementById("class-paladin").style.display = "none";
      document.getElementById("class-wizard").style.display = "none";
      document.getElementById("characterSheet").style.display = "none";
    })
  }

  showPaladinText() {
    document.getElementById("paladin").addEventListener("click", function () {
      document.getElementById("text-home").style.display = "none";
      document.getElementById("race-human").style.display = "none";
      document.getElementById("race-were").style.display = "none";
      document.getElementById("race-cyborg").style.display = "none";
      document.getElementById("race-fae").style.display = "none";
      document.getElementById("class-mage").style.display = "none";
      document.getElementById("class-warrior").style.display = "none";
      document.getElementById("class-mercenary").style.display = "none";
      document.getElementById("class-bard").style.display = "none";
      document.getElementById("class-berserker").style.display = "none";
      document.getElementById("class-paladin").style.display = "flex";
      document.getElementById("class-wizard").style.display = "none";
      document.getElementById("characterSheet").style.display = "none";
    })
  }

  showWizardText() {
    document.getElementById("wizard").addEventListener("click", function () {
      document.getElementById("text-home").style.display = "none";
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
      document.getElementById("class-wizard").style.display = "flex";
      document.getElementById("characterSheet").style.display = "none";
    })
  }
}

export default Classes;