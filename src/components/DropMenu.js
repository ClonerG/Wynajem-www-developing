import React from 'react';
import '../style/dropmenu.css';

const DropMenu = () => {
  return (
    <div class="templates_buttons-container">
      <div class="templates_buttons">
        <div class="templates_intro-button-text">
          {/* BUTTON-1 */}
          <nav>
            <ul>
              <li>
                <div class="down_text">
                  Wszystkie szablony
                  <i class="down1" />
                </div>
                <ul class="ul-main">
                  <li class="spiwy" style={{display: 'flex'}}>
                    <div class="down_text_block">
                      <div class="first_block_w">
                        <div class="bl-one">
                          <h2>Biznes</h2>
                          <div class="ul-down">
                            <div class="li-down">
                              Konsultacje
                              <br />
                              i szkolenia
                            </div>
                            <div class="li-down">
                              Konserwacja 
                              <br /> 
                              techniczna  i serwisowa
                            </div>
                            <div class="li-down">
                              Reklama i 
                              <br />
                              marketing
                            </div>
                            <div class="li-down">
                              Technologia i 
                              <br /> 
                              aplikacje
                            </div>
                            <div class="li-down">Nieruchomość</div>
                            <div class="li-down">
                              Finanse i 
                              <br /> 
                              orzecznictwo
                            </div>
                            <div class="li-down">
                              Samochody i 
                              <br /> 
                              pojazdy
                            </div>
                          </div>
                        </div>
                        <div class="bl-sec">
                          <h2>
                            Zdrowie i 
                            <br /> 
                            samopoczucie
                          </h2>
                          <div class="ul-down">
                            <div class="li-down">Zdrowie</div>
                            <div class="li-down">Sport i fitness</div>
                          </div>
                          <h2>Landings</h2>
                          <div class="ul-down">
                            <div class="li-down">Wkrótce otwarcie</div>
                            <div class="li-down">Strona promocyjna</div>
                            <div class="li-down">Profesjonalne CV</div>
                          </div>
                        </div>
                      </div>
                      <div class="first_block_w">
                        <div class="bl-thi">
                          <h2>Moda i styl</h2>
                          <div class="ul-down">
                            <div class="li-down"><a class="link_dropMenu" href="/templates/fashion">Moda</a></div>
                            <div class="li-down"><a class="link_dropMenu" href="/templates/accessories">Akcesoria</a></div>
                          </div>
                          <h2>Podróż i turystyka</h2>
                          <div class="ul-down">
                            <div class="li-down">Hotele i minihotele</div>
                            <div class="li-down">Apartamenty i hostele</div>
                            <div class="li-down">Usługi turystyczne</div>
                          </div>
                        </div>
                        <div class="bl-fou">
                          <h2>
                            Restauracje 
                            <br /> 
                            i jedzenie
                          </h2>
                          <div class="ul-down">                             
                            <div class="li-down">Catering i kucharze</div>
                            <div class="li-down">Restauracja</div>
                            <div class="li-down">Kawiarnie i piekarnie</div>
                            <div class="li-down">Bar i klub</div>
                            <div class="li-down">Jedzenie i napoje</div>
                          </div>
                          <h2>Piękno i włosy</h2>
                          <div class="ul-down">
                            <div class="li-down">Makijaż i kosmetyki</div>
                            <div class="li-down">Włosy</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
              </li>
            </ul>
          </nav>
        </div>
        {/* BUTTON-2 (in CSS use 'mod-2' to add new styles ) */}
        <nav>
          <ul>
            <li>
              <div class="down_text mod-2222">
                Sklepy internetowy
                <i class="down1" />
              </div>
              <ul class="ul-main">
                <li class="spiwy" style={{display: 'flex'}}>
                  <div class="down_text_block">
                    <div class="first_block_w">
                      <div class="bl-one-another">
                        <h2>Sklepy internetowy</h2>
                        <div class="ul-down">
                          <div class="li-down">Moda i odzież</div>
                          <div class="li-down">Biżuteria i akcesoria</div>
                          <div class="li-down">Produkty i materiały</div>
                          <div class="li-down">Dom i wystrój</div>
                          <div class="li-down">Nieruchomość</div>
                          <div class="li-down">Sport i aktywny</div>
                          <div class="li-down">Elektronika</div>
                          <div class="li-down">Książki</div>
                          <div class="li-down">Samochody</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </li>
          </ul>
        </nav>
        {/* BUTTON-3 (in CSS use 'mod-3' to add new styles ) */}
        <nav>
          <ul>
            <li>
              <div class="down_text mod-2222">
                Wspólnota
                <i class="down1" />
              </div>
              <ul class="ul-main">
                <li class="spiwy" style={{display: 'flex'}}>
                  <div class="down_text_block">
                    <div class="first_block_w third_column_block">
                      <div class="bl-one third_bl-one">
                        <h2>Edukacja</h2>
                        <div class="ul-down">
                          <div class="li-down">Szkoła i uczelnie</div>
                          <div class="li-down">Edukacja online</div>
                          <div class="li-down">Zajęcia i kursy</div>
                        </div>
                        <h2>Środki</h2>
                        <div class="ul-down">
                          <div class="li-down">Ślub</div>
                          <div class="li-down">Święta i uroczystości</div>
                          <div class="li-down">Konferencje i seminaria</div>
                          <div class="li-down">Organizacja imprez</div>
                          <div class="li-down">Miejsca przeprowadzenia</div>
                        </div>
                      </div>
                      <div class="first_block_w">
                        <div class="bl-one-another">
                          <h2>Wspólnota</h2>
                          <div class="ul-down">
                            <div class="li-down">Religia</div>
                            <div class="li-down">Organizacje</div>
                            <div class="li-down">Forum internetowe</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default DropMenu;
