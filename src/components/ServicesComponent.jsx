/* eslint-disable no-unused-vars */
import React from 'react';
import ServiceCard from './ServiceCard';
import Cookies from 'js-cookie';

// Mapping of app_id to service URLs
const serviceUrlMap = {
  NUMBER_PLATE_SERVICES: 'https://mvaa-portal.netlify.app/auth/shared-user',
  AUTO_DEALER_SPARE_PARTS: 'https://mvatvtlagos.com/mvaa-app/verify-session',
};

const ServicesComponent = () => {
  const handleServiceClick = (appId) => {
    // Get the session ID from cookies
    const sessionId = Cookies.get('portal_session_id');
    
    // Set the portal_app_id cookie
    Cookies.set('portal_app_id', appId, {
      secure: window.location.protocol === 'https:',
      sameSite: 'strict',
    });

    // Get the base URL for the service
    const baseUrl = serviceUrlMap[appId] || 'https://default.module1url.com';
    
    // Construct the redirect URL
    const redirectUrl = `${baseUrl}?portal_session_id=${sessionId}&portal_app_id=${appId}`;
    
    // Redirect to the service URL
    window.location.href = redirectUrl;


    if (!sessionId) {
        window.location.href = '/login';
        return;
    }
  };

  return (
    <section id="services-section">
      <div className="container rel">
        <div className="title-txts text-center mb-[62px]">
          <h1>Services</h1>
          <p>Lagos State VEHICLE services and information</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 service-card-grid gap-x-6 gap-y-8">
          <ServiceCard
            title="Number Plate Services"
            icon="plateNo.png"
            description="Find vehicle related services like verify VIN, pay VIS etc permit"
            app_id="NUMBER_PLATE_SERVICES"
            onClick={() => handleServiceClick('NUMBER_PLATE_SERVICES')}
          />
          <ServiceCard
            title="AutoDealer and Spare Part"
            icon="jacket.png"
            description="Find vehicle related services like verify VIN, pay VIS etc permit"
            app_id="AUTO_DEALER_SPARE_PARTS"
            onClick={() => handleServiceClick('AUTO_DEALER_SPARE_PARTS')}
          />
        </div>
      </div>
    </section>
  );
};

export default ServicesComponent;