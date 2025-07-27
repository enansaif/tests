define([
    'mage/utils/wrapper',
    'Magento_Checkout/js/model/quote',
    'Magento_Checkout/js/model/shipping-save-processor/payload-extender'
], function (wrapper, quote, payloadExtender) {
    'use strict';

    return function (setShippingInformationAction) {
        return wrapper.wrap(setShippingInformationAction, function (originalAction) {
            const shippingAddress = quote.shippingAddress();

            if (shippingAddress['custom_field']) {
                shippingAddress['extension_attributes'] = shippingAddress['extension_attributes'] || {};
                shippingAddress['extension_attributes']['custom_field'] = shippingAddress['custom_field'];
            }

            return originalAction();
        });
    };
});
