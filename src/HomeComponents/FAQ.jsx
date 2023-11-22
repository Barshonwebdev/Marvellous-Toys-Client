import React from 'react';

const FAQ = () => {
    return (
      <div>
        <h2 className="header-font text-emerald-600 text-2xl md:text-4xl font-semibold text-center">
          Frequently Asked Questions
        </h2>
        <div className="my-5 md:w-1/2 md:mx-auto mx-5">
          <div className="collapse collapse-plus bg-blue-200">
            <input type="radio" name="my-accordion-3" checked="checked" />
            <div className="collapse-title text-xl font-medium">
              Does your website provide refunds?
            </div>
            <div className="collapse-content">
              <p>
                Certainly! Our website does provide refunds. For specific
                details regarding our refund policy, kindly refer to the
                dedicated section on our website or contact our customer support
                for assistance.
              </p>
            </div>
          </div>
          <div className="collapse collapse-plus bg-blue-200">
            <input type="radio" name="my-accordion-3" />
            <div className="collapse-title text-xl font-medium">
              How much delivery time needed for a product to get shipped ?
            </div>
            <div className="collapse-content">
              <p>
                Our standard delivery time is 5 days. However, actual shipping
                may vary based on location and product availability. Please
                check the product page or contact our customer support for
                accurate delivery estimates.
              </p>
            </div>
          </div>
          <div className="collapse collapse-plus bg-blue-200">
            <input type="radio" name="my-accordion-3" />
            <div className="collapse-title text-xl font-medium">
              Can I exchange my action figure with another one?
            </div>
            <div className="collapse-content">
              <p>
                Certainly! We offer an exchange policy. Please review our
                exchange guidelines on the website and contact our customer
                support to facilitate the process and ensure a smooth exchange
                experience.
              </p>
            </div>
          </div>
          <div className="collapse collapse-plus bg-blue-200">
            <input type="radio" name="my-accordion-3" />
            <div className="collapse-title text-xl font-medium">
              How much delivery charge is needed?
            </div>
            <div className="collapse-content">
              <p>
                Our delivery charges vary based on your location and the
                selected shipping option. You can view the shipping costs during
                the checkout process before finalizing your purchase. For
                specific details, refer to our shipping information on the
                website.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
};

export default FAQ;