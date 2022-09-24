import React from 'react';
import { Button } from '@mui/material';

const SubBlog = () => {
  return (
    <div class="subscriptions_intro-container">
      <div class="subscriptions_main-text">Adima premium plans</div>
      <div class="subscriptions_discription-text">
        Adima oferuje setki szablonów, nieograniczoną liczbę stron i 
        hosting premium za darmo. Przejdź na Premium i zyskaj jeszcze więcej.
      </div>
      <a class="subscriptions_button" href="/form">
        <Button
          style={{
            borderRadius: 50,
            height: 42,
            width: 185,
            backgroundColor: '#636CA9',
          }}
          variant="contained"
        >
          Get started
        </Button>
      </a>
      {/* <div class="subscriptions_plans-container">
        <div class="subscriptions_plan-left">
          <div>Plans for sites</div>
          <div>Suitable for demonstration of professional sites</div>
        </div>
        <div class="subscriptions_plan-right">
          <div>Business and eCommerce plans</div>
          <div>Required to accept online payments</div>
        </div>
      </div> */}
    </div>
  );
};

export default SubBlog;
