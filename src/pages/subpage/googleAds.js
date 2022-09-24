import React from 'react';
import './style/googleads.css';
import { grey } from '@mui/material/colors';
import InfoIcon from '@mui/icons-material/Info';
import { Button } from '@mui/material';
import SubBlog from '../../components/SubBlog';
import SubNavbar from '../../components/SubNavbar';
import SubConsulting from '../../components/SubConsulting';

const GoogleAds = () => {
  return (
    <div class="price__container">
      <SubBlog />
      <SubNavbar />
      <div class="price qvwfm">
        <div class="price_main-body vvlia">
          <div class="price_body rexlr">
            {/* CONTAINER 1  */}
            <div class="price_container-1 rexlr" />
            {/* CONTAINER 2  */}
            <div class="price_container-2 gztxe">
              <div class="price_container-up">
                <div class="price_text-up">Start</div>
                <div class="price_border add_for-border" />
              </div>
            </div>
            {/* CONTAINER 3  */}
            <div class="price_container-2 gztxe">
              <div class="price_container-up">
                <div class="price_text-up">Optimal</div>
                <div class="price_border add_for-border" />
              </div>
            </div>
            {/* CONTAINER 4  */}
            <div class="price_container-2 add_for-price_container-2 gztxe">
              <div class="price_container-up">
                <div class="price_text-up">Large</div>
                <div class="price_border add_for-border" />
              </div>
            </div>
            {/* CONTAINER 5  */}
            <div class="price_container-2 gztxe">
              <div class="price_container-up">
                <div class="price_text-up">VIP</div>
                <div class="price_border add_for-border" />
              </div>
            </div>
          </div>
          {/* Discripton BODY */}
          <div class="list xiuoz">
            {/* { BLOCK MAIN } */}
            <div class="list-container-1">
              {/* { BLOCK 0 } */}
              <div class="crhll-1">
                <div class="wulqz-text-1">KAMPANIA GOOGLE ADS</div>
                <div class="bippi-body-1"></div>
              </div>
              {/* { BLOCK 0 } */}
              <div class="vloej-2">
                <div class="vloej-text-1 svcvi">
                  <div class="ybokg">Budżet reklamowy do 3000 PLN</div>
                  <div class="ztfzw">
                    <InfoIcon
                      sx={{ color: grey[500] }}
                      style={{ marginRight: 15 }}
                    />
                  </div>
                </div>
                <div class="vloej-body-1">
                  <div class="zpwkl hootr">
                    <div class="tick-mark"></div>
                  </div>
                  <div class="zpwkl hootr">
                    <div class="qwnet-line"></div>
                  </div>
                  <div class="zpwkl hootr">
                    <div class="tick-mark"></div>
                  </div>
                  <div class="zpwkl">
                    <div class="tick-mark"></div>
                  </div>
                </div>
              </div>
              {/* { BLOCK 1 } */}
              <div class="vloej-2">
                <div class="vloej-text-1 svcvi">
                  <div class="ecczg">Budżet reklamowy od 3000 do 5000 PLN</div>
                  <div class="ztfzw">
                    <InfoIcon
                      sx={{ color: grey[500] }}
                      style={{ marginRight: 15 }}
                    />
                  </div>
                </div>
                <div class="vloej-body-1">
                  <div class="zpwkl hootr">
                    <div class="tick-mark"></div>
                  </div>
                  <div class="zpwkl hootr">
                    <div class="qwnet-line"></div>
                  </div>
                  <div class="zpwkl hootr">
                    <div class="tick-mark"></div>
                  </div>
                  <div class="zpwkl">
                    <div class="tick-mark"></div>
                  </div>
                </div>
              </div>
              {/* { BLOCK 2 } */}
              <div class="vloej-2">
                <div class="vloej-text-1 svcvi">
                  <div class="ecczg">Budżet reklamowy od 5000 do 7000 PLN</div>
                  <div class="ztfzw">
                    <InfoIcon
                      sx={{ color: grey[500] }}
                      style={{ marginRight: 15 }}
                    />
                  </div>
                </div>
                <div class="vloej-body-1">
                  <div class="zpwkl hootr">
                    <div class="tick-mark"></div>
                  </div>
                  <div class="zpwkl hootr">
                    <div class="qwnet-line"></div>
                  </div>
                  <div class="zpwkl hootr">
                    <div class="tick-mark"></div>
                  </div>
                  <div class="zpwkl">
                    <div class="tick-mark"></div>
                  </div>
                </div>
              </div>
              {/* { BLOCK 3 } */}
              <div class="vloej-2">
                <div class="vloej-text-1 svcvi">
                  <div class="ybokg">Budżet reklamowy od 7000 PLN</div>
                  <div class="ztfzw">
                    <InfoIcon
                      sx={{ color: grey[500] }}
                      style={{ marginRight: 15 }}
                    />
                  </div>
                </div>
                <div class="vloej-body-1">
                  <div class="zpwkl hootr">
                    <div class="tick-mark"></div>
                  </div>
                  <div class="zpwkl hootr">
                    <div class="qwnet-line"></div>
                  </div>
                  <div class="zpwkl hootr">
                    <div class="tick-mark"></div>
                  </div>
                  <div class="zpwkl">
                    <div class="tick-mark"></div>
                  </div>
                </div>
              </div>
            </div>
            {/* { BLOCK BUTTONS } */}
            <div class="button-nzeoh gncef">
              <div class="button-container-1-nzeoh wlrts jdxaf">
                <div class="ztfzw">
                  <InfoIcon
                    sx={{ color: grey[500] }}
                    style={{ marginRight: 15 }}
                  />
                </div>
                <div class="lyydi">Opłata za prowadzenie kampanii: 25% budżetu reklamowego </div>
              </div>
              <div class="ugiwu">
                <div class="button-container-3-nzeoh">
                  <a href="/auth" class="blog_button iqusl">
                    <Button class="ortoc" style={{ borderRadius: 50, backgroundColor: '#1C2860'}} variant="contained">
                      Zamówić
                    </Button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <SubConsulting />
    </div>
  );
};

export default GoogleAds;
