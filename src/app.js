import Home from "./home";
import Races from './races';
import Classes from './classes';
import Sheet from "./sheet";
import Card from "./card";

class App {
  constructor() {
    this.usersList = [{ email: "email@email.com", password: "teste" }];
    this.inputEmail = document.getElementById("input-email");
    this.inputPassword = document.getElementById("input-password");

    this.list = [];
    this.id = 1;
    this.inputName = document.getElementById("inputName");
    this.inputRace = document.getElementById("inputRace");
    this.inputClass = document.getElementById("inputClass");
    this.inputForce = document.getElementById("inputForce");
    this.inputSkill = document.getElementById("inputSkill"); 
    this.inputInteligence = document.getElementById("inputInteligence"); 
    this.inputWisdom = document.getElementById("inputWisdom"); 
    this.inputConstitution = document.getElementById("inputConstitution"); 
    this.inputCharisma = document.getElementById("inputCharisma"); 

    this.htmlList = document.getElementById("sheets-list");

    this.checkLogged();
    this.registerEvents();
    this.loadPages();
  }

  registerEvents() {
    document.getElementById("btn-login").onclick = () => this.login();
    document.getElementById("btn-logout").onclick = () => this.logout();
    document.getElementById("btn-save").onclick = () => this.addSheet();
  }

  loadPages() {
    new Home().showHome();
    new Sheet().showSheet();
    new Races();
    new Classes();
  }

  login() {
    for(const user of this.usersList) { 
      if(user.email == this.inputEmail.value && user.password == this.inputPassword.value) {
        localStorage.setItem("loged", user.email);
      }
    }
    this.checkLogged();
  }

  checkLogged() {
    const loged = localStorage.getItem("loged");

    if(loged) {
      console.log(`User logged: ${loged}.`);
      document.getElementById("login").style.display = "none";
      document.getElementById("nav-bar").style.display = "flex";
      document.getElementById("text-home").style.display = "flex";
    } else {
      document.getElementById("login").style.display = "flex";
      document.getElementById("nav-bar").style.display = "none";
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
      document.getElementById("class-wizard").style.display = "none";
      document.getElementById("characterSheet").style.display = "none";
    }
  }

  addSheet() {
    const card = this.createSheet();
    this.list.push(card);

    this.htmlList.innerHTML += card.assembleSheet();
  }

  createSheet() {
    const newCard = new Card(this.id, this.inputName.value, this.inputRace.value, this.inputClass.value, 
                             this.inputForce.value, this.inputSkill.value, this.inputInteligence.value, 
                             this.inputWisdom.value, this.inputConstitution.value, this.inputCharisma.value);

    this.id++;
    return newCard;
  }

  logout() {
    localStorage.removeItem("loged");
  
    this.checkLogged();
  }

}

new App();
