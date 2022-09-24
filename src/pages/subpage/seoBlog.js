import { Button } from '@mui/material';
import React from 'react';
import SubBlog from '../../components/SubBlog';
import SubNavbar from '../../components/SubNavbar';
import './style/seoblog.css';

const SeoBlog = () => {
  return (
    <div class="zofpo">
      <SubBlog />
      <SubNavbar />
      <div class="csaiw">
        <div class="bkjti">
          <div class="nbifr">
            <div class="ttohh ulfzr">Konsultacja z klientem</div>
            <div class="ttohh xgvzm">Przygotowanie 3 artykułów miesięcznie</div>
            <div class="ttohh pbjai">Przygotowanie odpowiednich grafik do artykułów</div>
          </div>
        </div>
        <div class="oieab">
          <div class="dgoqb-kolo-container">
            <div class="osvvh">1</div>
          </div>
          <div class="vrkde-line-container">
            <div class="usqlf"></div>
          </div>
          <div class="dgoqb-kolo-container">
            <div class="osvvh">2</div>
          </div>
          <div class="vrkde-line-container">
            <div class="usqlf"></div>
          </div>
          <div class="dgoqb-kolo-container">
            <div class="osvvh">3</div>
          </div>
          <div class="vrkde-line-container">
            <div class="usqlf"></div>
          </div>
          <div class="dgoqb-kolo-container">
            <div class="osvvh">4</div>
          </div>
          <div class="vrkde-line-container">
            <div class="usqlf"></div>
          </div>
          <div class="dgoqb-kolo-container">
            <div class="osvvh">5</div>
          </div>
          <div class="vrkde-line-container">
            <div class="usqlf"></div>
          </div>
          <div class="dgoqb-kolo-container">
            <div class="osvvh">6</div>
          </div>
          <div class="vrkde-line-container">
            <div class="usqlf"></div>
          </div>
          <div class="ebwfk klqph">
            <a href="/auth" class="blog_button gsrgc">
              <Button style={{ borderRadius: 50, width: 180, height: 50, backgroundColor: '#1C2860' }} variant="contained">
                Zamówić
              </Button>
            </a>
          </div>
        </div>
        <div class="mgrnn">
          <div class="nbifr">
            <div class="ttohh rraum">Ustalenie tamatyki blogu</div>
            <div class="ttohh bksxm">Optymalizacja tekstu pod kątem SEO</div>
            <div class="ttohh uzxkw">Przygotowanie niezbędnych podpięć i przekierowań DO i Z bloga</div>
          </div>
        </div>
      </div>
      <div class="qdvnk iwiri">
        <div class="pnbvp">
          <div class="rctwt">
            <div class="mygez">
              <div>Nie znalezłeś idealny</div> 
              <div>dla Siebie pakiet?</div>
            </div>
            <div class="ydelq">
              <div>Zapisz się na darmowa konsultację, gdzie</div>
              <div>stworzymy dla Ciebie indywidualny pakiet,</div>
              <div>zawierający wszystkie potrzebne usługi</div>
            </div>
          </div>
          <div class="nobiw">
            <div class="xyfej"></div>
          </div>
        </div>
        <div class="qptji">
          <a href="/auth" class="blog_button qgsok ">
            <Button class="dgsesg" style={{ borderRadius: 50, backgroundColor: '#1C2860'}} variant="contained">
              Sprawdz
            </Button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default SeoBlog;
