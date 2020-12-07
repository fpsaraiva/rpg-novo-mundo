class Card {
  constructor(
    id,
    name,
    race,
    classes,
    force,
    skill,
    intelligence,
    wisdom,
    constitution,
    charisma
  ) {
    this.id = id;
    this.name = name;
    this.race = race;
    this.classes = classes;
    this.force = force;
    this.skill = skill;
    this.intelligence = intelligence;
    this.wisdom = wisdom;
    this.constitution = constitution;
    this.charisma = charisma;
  }

  assembleSheet() {
    const html = `<div class="col col-sm-7 text-center justify-content-center" data-id="${this.id}" style="display:contents">
                      <div class="card" style="margin-bottom: 5em">
                        <div class="card-body">
                          <h5 class="card-title">${this.name}</h5>
                          <p class="card-text">${this.race}/ ${this.classes}</p>
                          
                          <div>        
                            <div
                              class="text-center justify-content-center table-responsive"
                            >
                              <table
                                class="table table-borderless table-sm md-3"
                                style="text-indent: 1em"
                              >
                                <thead>
                                  <tr>
                                    <th scope="col">Força</th>
                                    <th scope="col">Destreza</th>
                                    <th scope="col">Inteligência</th>
                                    <th scope="col">Sabedoria</th>
                                    <th scope="col">Constituição</th>
                                    <th scope="col">Carisma</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr>
                                    <th scope="row"><input type="text" class="atributs" value="${this.force}"/></th>
                                    <td><input type="text" class="atributs" value="${this.skill}" /></td>
                                    <td><input type="text" class="atributs" value="${this.intelligence}" /></td>
                                    <td><input type="text" class="atributs" value="${this.wisdom}" /></td>
                                    <td><input type="text" class="atributs" value="${this.constitution}"/></td>
                                    <td><input type="text" class="atributs" value="${this.charisma}" /></td>
                                  </tr>
                                </tbody>
                              </table>
                              <div class="row justify-content-center text-left">
                                <div class="col col-sm-7 responsive-sm">
                                  <div class="form-check form-check">
                                    <input
                                      class="form-check-input"
                                      type="checkbox"
                                      id="inlineCheckbox1"
                                      value="option1"
                                    />
                                    <label class="form-check-label" for="inlineCheckbox1"
                                      >Acrobacias(Des)</label
                                    >
                                    <input class="atributs" type="text" value="${this.skill}"/>
                                  </div>
                                  <div class="form-check form-check">
                                    <input
                                      class="form-check-input"
                                      type="checkbox"
                                      id="inlineCheckbox2"
                                      value="option2"
                                    />
                                    <label class="form-check-label" for="inlineCheckbox2"
                                      >Adestrar animais(Car)</label
                                    >
                                    <input class="atributs" type="text" value="${this.charisma}" />
                                  </div>
                                  <div class="form-check form-check">
                                    <input
                                      class="form-check-input"
                                      type="checkbox"
                                      id="inlineCheckbox3"
                                      value="option3"
                                    />
                                    <label class="form-check-label" for="inlineCheckbox3"
                                      >Atletismo(For)</label
                                    >
                                    <input class="atributs" type="text" value="${this.force}" />
                                  </div>
                                  <div class="form-check form-check">
                                    <input
                                      class="form-check-input"
                                      type="checkbox"
                                      id="inlineCheckbox4"
                                      value="option4"
                                    />
                                    <label class="form-check-label" for="inlineCheckbox4"
                                      >Atuação(Car)</label
                                    >
                                    <input class="atributs" type="text" value="${this.charisma}"/>
                                  </div>
                                  <div class="form-check form-check">
                                    <input
                                      class="form-check-input"
                                      type="checkbox"
                                      id="inlineCheckbox5"
                                      value="option5"
                                    />
                                    <label class="form-check-label" for="inlineCheckbox5"
                                      >Cura(Sab)</label
                                    >
                                    <input class="atributs" type="text" value="${this.wisdom}"/>
                                  </div>
                                  <div class="form-check form-check">
                                    <input
                                      class="form-check-input"
                                      type="checkbox"
                                      id="inlineCheckbox6"
                                      value="option6"
                                    />
                                    <label class="form-check-label" for="inlineCheckbox6"
                                      >Diplomacia(Car)</label
                                    >
                                    <input class="atributs" type="text" value="${this.charisma}"/>
                                  </div>
                                  <div class="form-check form-check">
                                    <input
                                      class="form-check-input"
                                      type="checkbox"
                                      id="inlineCheckbox7"
                                      value="option7"
                                    />
                                    <label class="form-check-label" for="inlineCheckbox7"
                                      >Enganação(Car)</label
                                    >
                                    <input class="atributs" type="text" value="${this.charisma}"/>
                                  </div>
                                  <div class="form-check form-check">
                                    <input
                                      class="form-check-input"
                                      type="checkbox"
                                      id="inlineCheckbox8"
                                      value="option8"
                                    />
                                    <label class="form-check-label" for="inlineCheckbox8"
                                      >Furtividade(Des)</label
                                    >
                                    <input class="atributs" type="text" value="${this.skill}"/>
                                  </div>
                                  <div class="form-check form-check">
                                    <input
                                      class="form-check-input"
                                      type="checkbox"
                                      id="inlineCheckbox9"
                                      value="option9"
                                    />
                                    <label class="form-check-label" for="inlineCheckbox9"
                                      >História(Int)</label
                                    >
                                    <input class="atributs" type="text" value="${this.intelligence}"/>
                                  </div>
                                  <div class="form-check form-check">
                                    <input
                                      class="form-check-input"
                                      type="checkbox"
                                      id="inlineCheckbox10"
                                      value="option10"
                                    />
                                    <label class="form-check-label" for="inlineCheckbox10"
                                      >Identificar magia(Int)</label
                                    >
                                    <input class="atributs" type="text" value="${this.intelligence}"/>
                                  </div>
                                </div>
                                <div class="col text-left">
                                  <div class="form-check form-check">
                                    <input
                                      class="form-check-input"
                                      type="checkbox"
                                      id="inlineCheckbox11"
                                      value="option11"
                                    />
                                    <label class="form-check-label" for="inlineCheckbox11"
                                      >Iniciativa(Des)</label
                                    >
                                    <input class="atributs" type="text" value="${this.skill}"/>
                                  </div>
                                  <div class="form-check form-check">
                                    <input
                                      class="form-check-input"
                                      type="checkbox"
                                      id="inlineCheckbox12"
                                      value="option12"
                                    />
                                    <label class="form-check-label" for="inlineCheckbox12"
                                      >Intimidação(Car)</label
                                    >
                                    <input class="atributs" type="text" value="${this.charisma}"/>
                                  </div>
                                  <div class="form-check form-check">
                                    <input
                                      class="form-check-input"
                                      type="checkbox"
                                      id="inlineCheckbox13"
                                      value="option13"
                                    />
                                    <label class="form-check-label" for="inlineCheckbox13"
                                      >Intuição(Sab)</label
                                    >
                                    <input class="atributs" type="text" value="${this.wisdom}"/>
                                  </div>
                                  <div class="form-check form-check">
                                    <input
                                      class="form-check-input"
                                      type="checkbox"
                                      id="inlineCheckbox14"
                                      value="option14"
                                    />
                                    <label class="form-check-label" for="inlineCheckbox14"
                                      >Ladinagem(Des)</label
                                    >
                                    <input class="atributs" type="text" value="${this.skill}"/>
                                  </div>
                                  <div class="form-check form-check">
                                    <input
                                      class="form-check-input"
                                      type="checkbox"
                                      id="inlineCheckbox15"
                                      value="option15"
                                    />
                                    <label class="form-check-label" for="inlineCheckbox15"
                                      >Natureza(Int)</label
                                    >
                                    <input class="atributs" type="text" value="${this.intelligence}"/>
                                  </div>
                                  <div class="form-check form-check">
                                    <input
                                      class="form-check-input"
                                      type="checkbox"
                                      id="inlineCheckbox16"
                                      value="option16"
                                    />
                                    <label class="form-check-label" for="inlineCheckbox16"
                                      >Percepção(Sab)</label
                                    >
                                    <input class="atributs" type="text" value="${this.wisdom}"/>
                                  </div>
                                  <div class="form-check form-check">
                                    <input
                                      class="form-check-input"
                                      type="checkbox"
                                      id="inlineCheckbox17"
                                      value="option17"
                                    />
                                    <label class="form-check-label" for="inlineCheckbox17"
                                      >Persuasão(Car)</label
                                    >
                                    <input class="atributs" type="text" value="${this.charisma}"/>
                                  </div>
                                  <div class="form-check form-check">
                                    <input
                                      class="form-check-input"
                                      type="checkbox"
                                      id="inlineCheckbox18"
                                      value="option18"
                                    />
                                    <label class="form-check-label" for="inlineCheckbox18"
                                      >Religião(Int)</label
                                    >
                                    <input class="atributs" type="text" value="${this.intelligence}"/>
                                  </div>
                                  <div class="form-check form-check">
                                    <input
                                      class="form-check-input"
                                      type="checkbox"
                                      id="inlineCheckbox19"
                                      value="option19"
                                    />
                                    <label class="form-check-label" for="inlineCheckbox19"
                                      >Sobrevivência(Sab)</label
                                    >
                                    <input class="atributs" type="text" value="${this.wisdom}"/>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>`;

    return html;
  }
}

export default Card;
