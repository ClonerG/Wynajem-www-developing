import { Button } from '@mui/material';
import React from 'react';
import SubBlog from '../../components/SubBlog';
import SubNavbar from '../../components/SubNavbar';
import './style/deviceF.css';

const DeviceF = () => {
  return (
    <div class="rfuei">
      <SubBlog />
      <SubNavbar />
      <div class="deviceF-container">
        <div class="deviceF-text-1">Gadżety firmowe</div>
        <div class="deviceF-text-container-2">
          <div class="deviceF-text-2">Wybierz akcesoria reklamowe dla swojej firmy. To jeden z najlepszych sposobów, aby pomóc osobie zidentyfikować markę na poziomie podświadomości,  stworząyć zaufanie i przywiązanie do marki. </div>
        </div>
        <div class="deviceF-icon-container-up">
          <div class="deviceF-icon-container-two">
            <div class="device-icon-hub dsgscaa-1"></div>
            <div class="device-text-hub">Opakowanie i etykieta</div>
          </div>
          <div class="deviceF-icon-container-two">
            <div class="device-icon-hub dsgscaa-2"></div>
            <div class="device-text-hub">Naklejki</div>
          </div>
          <div class="deviceF-icon-container-two">
            <div class="device-icon-hub dsgscaa-3"></div>
            <div class="device-text-hub">Dokumentacja firmowa</div>
          </div>
          <div class="deviceF-icon-container-two">
            <div class="device-icon-hub dsgscaa-4"></div>
            <div class="device-text-hub">Materiały biurowe</div>
          </div>
        </div>
        <div class="deviceF-icon-container-up yvlpr">
          <div class="deviceF-icon-container-two">
            <div class="device-icon-hub dsgscaa-5"></div>
            <div class="device-text-hub">Koszulki, czapki firmowe</div>
          </div>
          <div class="deviceF-icon-container-two">
            <div class="device-icon-hub dsgscaa-6"></div>
            <div class="device-text-hub">Kubki</div>
          </div>
          <div class="deviceF-icon-container-two">
            <div class="device-icon-hub dsgscaa-7"></div>
            <div class="device-text-hub">Torby firmowe</div>
          </div>
          <div class="deviceF-icon-container-two">
            <div class="device-icon-hub dsgscaa-8"></div>
            <div class="device-text-hub">Plakaty/banery</div>
          </div>
        </div>
        <div class="deviceF-button-container">
          <div class="button-container-3-nzeoh">
            <a href="/auth" class="blog_button wwayv">
              <Button style={{ borderRadius: 50, width: 120, backgroundColor: '#1C2860' }} variant="contained">
                Sklep
              </Button>
            </a>
          </div>
        </div>
      </div>
      <div class="qdvnk ffkat">
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
          <a href="/auth" class="blog_button qgsok agteu">
            <Button class="dgsesg" style={{ borderRadius: 50, backgroundColor: '#1C2860'}} variant="contained">
              Sprawdz
            </Button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default DeviceF;
