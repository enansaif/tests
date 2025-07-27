define([
    'uiLayout',
    'Magento_Checkout/js/model/quote',
    'Magento_Ui/js/form/form',
    'ko'
], function (layout, quote, Component, ko) {
    'use strict';

    return function (Shipping) {
        return Shipping.extend({
            initialize: function () {
                this._super();

                // Create a KO observable for the field
                var customFieldValue = ko.observable('');

                // Watch and store in quote object
                customFieldValue.subscribe(function (value) {
                    var shippingAddress = quote.shippingAddress();
                    if (shippingAddress) {
                        shippingAddress.customAttributes = shippingAddress.customAttributes || {};
                        shippingAddress.customAttributes['custom_field'] = { value: value };
                        shippingAddress['custom_field'] = value;
                        console.log('✅ Bound to quote.shippingAddress().custom_field:', value);
                    }
                });

                layout([
                    {
                        parent: 'checkout.steps.shipping-step.shippingAddress.shipping-address-fieldset',
                        name: 'custom_field',
                        component: 'Magento_Ui/js/form/element/abstract',
                        config: {
                            customScope: 'shippingAddress',
                            template: 'ui/form/field',
                            elementTmpl: 'ui/form/element/input',
                            id: 'custom-field'
                        },
                        dataScope: 'shippingAddress.custom_field',
                        label: 'Custom Field',
                        provider: 'checkoutProvider',
                        visible: true,
                        validation: {
                            'required-entry': false,
                            'max_text_length': 255
                        },
                        sortOrder: 250,
                        value: customFieldValue
                    }
                ]);

                return this;
            }
        });
    };
});
