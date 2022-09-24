import React from 'react';
import { motion } from 'framer-motion';
import '../style/main.css';
import '../adaptive-styles/AdMain.css';
import { Button } from '@mui/material';

const Main = () => {

  const sameBlockAnim = {
    hidden:{
      x: -150,
      opacity:0,
    },
    visible:{
      x:0,
      opacity:1,
    },
    hiddensec:{
      x:150,
      opacity:0,
    },
    visiblesec:{
      x:0,
      opacity:1,
    }

  };
  
  return ( 
    <div class="main">
      <div class="main_container">
        {/* <---HELP---> */}
        <div class="main_information-container">
          <div class="main_text-container">
            ZWIĘKSZ SWOJĄ SZANSĘ NA SUKCES
          </div>
          <div class="main_text-help-container">
            dzięki reklamom online i offline
          </div>
        </div>
        {/* <---BLOG---> */}
        <div class="blog_contaniner">
          <div class="blog_text-main-contanier mod-container">
            Tworzymy
            <span class='blue-marketing'> marketing</span>
            , który przyniesie Ci zyski
          </div>
          <br />
          <div class="blog_text-contanier">
            Jesteśmy pasjonatami
            <span class='blue-marketing'> marketingu</span>
            , agencją kreatywną, która
            <br />
            tworzy ciekawe projekty online dla małych i średnich firm.
          </div>
          <br />
          <div class='blog_buttons'>
            <a href="/subscriptions" class="blog_button b-f-btn">
              <Button style={{ borderRadius: 50,  }} variant="contained" class='m-f-first-butt'>
                Sprawdź cenniki
              </Button>
            </a>
            <a href="/formularz-zapis" class="blog_button b-s-btn">
              <Button style={{ borderRadius: 50,  }} variant="contained" class='m-s-first-butt'>
                Darmowa konsultacja
              </Button>
            </a>
          </div>
          <div class="blog_container">
            <div class='planet-img-block'>
              <img alt=' ' src={require('../img/main/Group.png')} class='planet-img' />
            </div>
            <div class='poznajmy-block'>
              <div class='knopki-1'>
                <img alt='' href='' src={require('../img/main/Group33.png')} class='knopki' />
                <img alt='' href='' src={require('../img/main/Group32.png')} class='knopki' />
              </div>
              <div class='poznajmy-text'>
                <p class='poznajmy'>POZNAJMY SIĘ LEPIEJ!</p>
                <p class='nie'>
                  Nie jesteśmy
                  <span class='zw-blue'> zwykłą agencją marketingową.</span>
                </p>
                <p class='nie'>
                  Dla nas liczysz się
                  <span class='ty-blue'> TY </span>
                  i większe przychody
                  <br />
                  dla
                  <span class='ty-blue'> Twojego </span>
                  biznesu.
                </p>
                <img alt='' src={require('../img/main/Group34.png')} class='arrow-blue' />
              </div>
            </div>
          </div>
          <div class='text-blocks'>
            <motion.div 
              class='naszym-block same-blocks'
              initial='hidden'
              whileInView='visible'
              transition={{
                
                duration:0.7,
              }}
              variants={sameBlockAnim}
            >
              <div class='naszym-text same-text'>
                Naszym atutem jest 
                <span class='ty-blue'> indywidualne podejście </span>
                do każdego klienta, które zobaczysz na własne oczy, 
                <span class='ty-blue'> współpracując </span> 
                z nami.
              </div>
              <div class='naszym-card'>
                <img alt='' src={require('../img/main/Group44.png')} class='m-check-mark' />
              </div>
            </motion.div>
            <motion.div
              class='trzymamy-block same-blocks'
              initial='hiddensec'
              whileInView='visiblesec'
              transition={{
                
                duration:0.7,
              }}
              variants={sameBlockAnim}
            >
              <div class='trzymamy-card'>
                <img alt='' src={require('../img/main/Group42.png')} class='m-heart' />
              </div>
              <div class='trzymamy-text same-text'>
                Trzymamy 
                <span class='ty-blue'> rękę na pulsie </span>
                o wszystkich wydarzeniach 
                <span class='ty-blue'> wświecie marketingu internetowego! </span>
                Z Nami możesz być pewny, że 
                <span class='ty-blue'> Twój biznes </span> 
                w naszych rękach będzie się 
                <span class='ty-blue'> rozwijać kompleksowo i skutecznie.</span>
              </div>
            </motion.div>
            <motion.div 
              class='działamy-block same-blocks'
              initial='hidden'
              whileInView='visible'
              transition={{
                
                duration:0.7,
              }}
              variants={sameBlockAnim}
            >
              <div class='dzialamy-text same-text'>
                <span class='ty-blue'>Działamy kompleksowo, </span>
                tzn. zaczynamy od analizy rynku, tworzenia strony internetowej, mediów społecznościowych, kontynuujemy, realizując strategię marketingową oraz osiągamy wcześniej określone cele.
              </div>
              <div class='dzialamy-card'>
                <img alt='' src={require('../img/main/Group41.png')} class='m-check-mark' />
              </div>
            </motion.div>
            <motion.div
              class='pracujemy-block same-blocks'
              initial='hiddensec'
              whileInView='visiblesec'
              transition={{
                
                duration:0.7,
              }}
              variants={sameBlockAnim}
            >
              <div class='pracujemy-card'>
                <img alt='' src={require('../img/main/Group43.png')} class='m-heart' />
              </div>
              <div class='pracujemy-text same-text'>
                <span class='ty-blue'>Pracujemy i tworzymy </span>
                projekty dla
                <span class='ty-blue'> Ciebie! </span> 
                <span class='ty-blue'>Sprawdź </span>
                jakie oferty przygotowaliśmy!
              </div>
            </motion.div>
          </div>
        </div>
        <div class='m-cards-kompetencje'>
          <div class='nasze-kompetencje'>
            <p class='komp-text  large-k-text'>NASZE KOMPETENCJE</p>
            <p class='komp-text small-k-text'>Co możemy Ci zaoferować?</p>
          </div>
          <div class='m-cards-kompetencje-block'>
            <div class='m-card-f'>
              <div class='m-card-one'>
                <img alt='' src={require('../img/main/Group2.png')} class='m-card-img' />
                <p class='m-soc-media'>Social Media Marketing</p>
                <hr class='m-hr-b' />
                <p class='m-soc-media-sm'>
                  Strategia marketingowa 
                  <br /> 
                  Prowadzenie profilu
                  <br />
                  Instagram stories dla marki
                  <br />
                  Obsługa kampanii reklamowych
                  <br />
                  Facebook ADS
                </p>
                <a href="/subscriptions">
                  <Button style={{ borderRadius: 50, }} variant="contained" class='m-card-button'>
                    Zobacz
                  </Button>
                </a>
              </div>
              <div class='m-card-sec'>
                <img alt='' src={require('../img/main/Group5.png')} class='m-card-img' />
                <p class='m-soc-media'>Kampania Google ADS</p>
                <hr class='m-hr-b' />
                <p class='m-soc-media-sm'>
                  Opracowanie strategii reklamy
                  <br /> 
                  kontekstowej
                  <br />
                  Prowadzenie i optymalizacja
                  <br />
                  kampanii AdWords
                  <br />
                  Działania remarketingowe
                </p>
                <a href="/kampania-google-ads">
                  <Button style={{ borderRadius: 50, }} variant="contained" class='m-card-button'>
                    Zobacz
                  </Button>
                </a>
              </div>
              <div class='m-card-thr'>
                <img alt='' src={require('../img/main/Group10.png')} class='m-card-img' />
                <p class='m-soc-media'>Projektowanie grafiki</p>
                <hr class='m-hr-b' />
                <p class='m-soc-media-sm'>
                  Projektowanie grafiki, usługi
                  <br /> 
                  graficzne
                  <br />
                  Projekt logo
                  <br />
                  Identyfikacja wizualna
                  <br />
                  Projektowanie opakowań
                </p>
                <a href="/develop">
                  <Button style={{ borderRadius: 50, }} variant="contained" class='m-card-button'>
                    Zobacz
                  </Button>
                </a>
              </div>
            </div>
            <div class='m-card-s'>
              <div class='m-card-fou'>
                <img alt='' src={require('../img/main/Group6.png')} class='m-card-img m-four-img' />
                <p class='m-soc-media'>
                  Tworzenie/wynajem 
                  <br /> 
                  stron internetowych 
                </p>
                <hr class='m-hr-b' />
                <p class='m-soc-media-sm'>
                  Nowa firmowa strona WWW 
                  <br /> 
                  Wynajm strony WWW
                  <br />
                  Stworzenie E-SKLEPU
                  <br />
                  Pomoc techniczna
                  <br />
                  Prace programistyczne
                </p>
                <a href="/creating-page">
                  <Button style={{ borderRadius: 50, }} variant="contained" class='m-card-button'>
                    Zobacz
                  </Button>
                </a>
              </div>
              <div class='m-card-fiv'>
                <img alt='' src={require('../img/main/Group8.png')} class='m-card-img' />
                <p class='m-soc-media'>
                  Blogi firmowe/
                  <br /> 
                  ozycjonowanie w Google
                </p>
                <hr class='m-hr-b' />
                <p class='m-soc-media-sm'>
                  Przygotowanie bloga
                  <br /> 
                  Przygotowanie odpowiednich
                  <br />
                  grafik do artykułów
                  <br />
                  (Opcjonalnie) optymalizacja tekstu 
                  <br />
                  pod kątem SEO
                </p>
                <a href="/seo-blog">
                  <Button style={{ borderRadius: 50, }} variant="contained" class='m-card-button'>
                    Zobacz
                  </Button>
                </a>
              </div>
              <div class='m-card-six'>
                <img alt='' src={require('../img/main/Group11.png')} class='m-card-img' />
                <p class='m-soc-media'>
                  Gadżety firmowe 
                  <br /> 
                  dla Twojego biznesu
                </p>
                <hr class='m-hr-b' />
                <p class='m-soc-media-sm'>
                  Tworzymy indywidualną grafikę na
                  <br /> 
                  gadżety firmowe i reklamowe.
                  <br />
                  Sprawdź nasze akcesoria
                  <br />
                  reklamowe!
                </p>
                <a href="/deviceF">
                  <Button style={{ borderRadius: 50, }} variant="contained" class='m-card-button'>
                    Zobacz
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* <---templates---> */}
        <div class="templates_container">
          <div class="templates_text-container">
            <div class="templates_text-up">Chcesz założyć stronę internetową?</div>
            <p class='m-p-wynajmij'>WYNAJMIJ JĄ U NAS!</p>
            <div class="templates_text-down">
              Spośród zaprezentowanych szablonów stron, wybierz ten który Ci najbardziej odpowiada.
            </div>
            <a href="/templates">
              <Button style={{ borderRadius: 50, }} variant="contained" class='m-zobacz-button'>
                Zobacz więcej szablonów
              </Button>
            </a>
          </div>
          <div class="templates_colage-container">
            <div class="hyxrxtajqt">
              <a href="/templates/fashion/sneakers" class="lquyiffomu">
                <div class="vcemg var-1" />
                <p class="cart-text">Sprawdź więcej!</p>
              </a>
              <a href="/templates/accessories/bags" class="lquyiffomu">
                <div class="vcemg var-2" />
                <p class="cart-text">Sprawdź więcej!</p>
              </a>
              <a href="/templates/accessories/shoes" class="lquyiffomu">
                <div class="vcemg var-3" />
                <p class="cart-text">Sprawdź więcej!</p>
              </a>
              <a href="/templates/fashion/nous" class="lquyiffomu">
                <div class="vcemg var-4" />
                <p class="cart-text">Sprawdź więcej!</p>
              </a>
              <a href="/templates/fashion/close" class="lquyiffomu">
                <div class="vcemg var-5" />
                <p class="cart-text">Sprawdź więcej!</p>
              </a>
              <a href="/templates/fashion/life" class="lquyiffomu">
                <div class="vcemg var-6" />
                <p class="cart-text">Sprawdź więcej!</p>
              </a>
            </div>
          </div>
        </div>
        <div class='m-wyglądac-block'>
          <p class='m-wygladac-head'>Jak będzie wyglądać nasza współpraca</p>
          <div class='m-content-block'>
            <div class='pierwszy-block lala'>
              <div class='first-vertical-line' />
              <img alt='' src={require('../img/main/Ellipse51.png')} class='ellipse-img' />
              <img alt='' src={require('../img/main/Czlowiek.png')} class='human-img' />
              <img alt='' src={require('../img/main/Ellipse52.png')} class='small-ellipse' />
              <p class='m-number'>1</p>
              <p class='pierwszy-text'>Pierwszy kontakt</p>
              <div class='m-text-frame'>
                <hr class='hr-frame' />
                <hr class='hr-vertical-frame' />
                <hr class='hr-frame second-frame' />
                <hr class='hr-vertical-frame-second' />
                <p class='frame-text-block'> Gdy tylko dostaniemy Twoje zapytanie, zaprosimy Cię na darmową konsultację</p>
              </div>
            </div>
            <div class='wybór-block lala'>
              <div class='second-lslsls ' />
              <img alt='' src={require('../img/main/Ellipse51.png')} class='ellipse-img' />
              <img alt='' src={require('../img/main/Grouppp.png')} class='human-img' />
              <img alt='' src={require('../img/main/Ellipse52.png')} class='small-ellipse' />
              <p class='m-number'>2</p>
              <p class='pierwszy-text'>Wybór pakietu</p>
              <div class='m-text-frame'>
                <hr class='hr-frame' />
                <hr class='hr-vertical-frame' />
                <hr class='hr-frame second-frame' />
                <hr class='hr-vertical-frame-second' />
                <p class='frame-text-block'>Po zapoznaniu się z celami i potrzebami Twojego biznesu dobieramy odpowiedni plan marketingowy</p>
              </div>
            </div>
            <div class='podpisanie-block lala'>
              <div class='first-vertical-line' />
              <img alt='' src={require('../img/main/Ellipse51.png')} class='ellipse-img' />
              <img alt='' src={require('../img/main/Group35.png')} class='human-img strzalki-img' />
              <img alt='' src={require('../img/main/Ellipse52.png')} class='small-ellipse' />
              <p class='m-number'>3</p>
              <p class='pierwszy-text'>Podpisanie umowy</p>
              <div class='m-text-frame'>
                <hr class='hr-frame' />
                <hr class='hr-vertical-frame' />
                <hr class='hr-frame second-frame' />
                <hr class='hr-vertical-frame-second' />
                <p class='frame-text-block'>
                  Podpisujemy umowę z uwzględnieniem
                  <br />
                  wszystkich wybranych 
                  <br />
                  przez Ciebie usług
                </p>
              </div>
            </div>
            <div class='określenie-block lala'>
              <div class='second-lslsls ' />
              <img alt='' src={require('../img/main/Ellipse51.png')} class='ellipse-img' />
              <img alt='' src={require('../img/main/Kalendarz.png')} class='human-img strzalki-img' />
              <img alt='' src={require('../img/main/Ellipse52.png')} class='small-ellipse' />
              <p class='m-number'>4</p>
              <p class='pierwszy-text four-text'>
                Określenie planu
                miesięcznego
              </p>
              <div class='m-text-frame'>
                <hr class='hr-frame' />
                <hr class='hr-vertical-frame' />
                <hr class='hr-frame second-frame' />
                <hr class='hr-vertical-frame-second' />
                <p class='frame-text-block'>Przygotujemy plan działań marketingowych dla Twojego biznesu na bieżący miesiąc</p>
              </div>
            </div>
            <div class='realizacja-block lala'>
              <div class='first-vertical-line' />
              <img alt='' src={require('../img/main/Ellipse51.png')} class='ellipse-img' />
              <img alt='' src={require('../img/main/Vector.png')} class='human-img' />
              <img alt='' src={require('../img/main/Ellipse52.png')} class='small-ellipse' />
              <p class='m-number'>5</p>
              <p class='pierwszy-text'>Realizacja usług</p>
              <div class='m-text-frame'>
                <hr class='hr-frame' />
                <hr class='hr-vertical-frame' />
                <hr class='hr-frame second-frame' />
                <hr class='hr-vertical-frame-second' />
                <p class='frame-text-block'>
                  Zabieramy się na pracę
                  <br />
                  nad Twoim projektem
                  <br />
                  zgodnie z ustalonym harmonogramem
                </p>
              </div>
            </div>
            <div class='zakończenie-block lala'>
              <div class='second-lslsls ' />
              <img alt='' src={require('../img/main/Ellipse51.png')} class='ellipse-img' />
              <img alt='' src={require('../img/main/Vector3.png')} class='human-img strzalki-img' />
              <img alt='' src={require('../img/main/Ellipse52.png')} class='small-ellipse' />
              <p class='m-number'>6</p>
              <p class='pierwszy-text'>Zakończenie tygodnia</p>
              <div class='m-text-frame'>
                <hr class='hr-frame' />
                <hr class='hr-vertical-frame' />
                <hr class='hr-frame second-frame' />
                <hr class='hr-vertical-frame-second' />
                <p class='frame-text-block'>
                  Na koniec tygodnia —
                  <br />
                  wysyłamy do Ciebie raport
                  <br />
                  przeprowadzonych 
                  <br />
                  przez nas działań
                </p>
              </div>
            </div>
            <div class='kolejny-block lala'>
              <div class='first-vertical-line' />
              <img alt='' src={require('../img/main/Ellipse51.png')} class='ellipse-img' />
              <img alt='' src={require('../img/main/strzalki.png')} class='human-img strzalki-img' />
              <img alt='' src={require('../img/main/Ellipse52.png')} class='small-ellipse seven-sm-ell' />
              <p class='m-number seven-num'>7</p>
              <p class='pierwszy-text kolejny-text'>Kolejny cykl</p>
              <div class='m-text-frame shit-frame'>
                <hr class='hr-frame' />
                <hr class='hr-vertical-frame' />
                <hr class='hr-frame second-frame' />
                <hr class='hr-vertical-frame-second' />
                <p class='frame-text-block '>
                  Monitorujemy i analizujemy dotychczasowe działania. Rozpoczynamy kolejny 
                  tydzień naszej pracy
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class='ZAINTERESOWANY-block'>
          <img alt='' src={require('../img/main/Group4.png')} class='m-big-img' />
          <div class='last-text-block'>
            <p class='ZAINTERESOWANY-text'>JESTEŚ ZAINTERESOWANY WSPÓŁPRACĄ?</p>
            <p class='ODPOWIADAMY-text'>ODPOWIADAMY W CIĄGU 24H, MOŻESZ BYĆ PEWNY!</p>
            <p class='Wypełnij-text'>
              Wypełnij formularz i napisz nam, czego
              <br />
              oczekujesz. Wskaż, czego dotyczy Twój biznes.
              <br />
              Abyśmy mogli dobrze przygotować się do 
              <br />
              rozmowy i przedstawić jak najlepszą ofertę.
            </p>
            <a href="/formularz-zapis">
              <Button style={{ borderRadius: 50, }} variant="contained" class='m-card-button m-last-button'>
                Wyślij zapytanie
              </Button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
