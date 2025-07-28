define([
    'uiLayout',
    'Magento_Checkout/js/model/quote',
    'Magento_Ui/js/form/form'
], function (layout, quote) {
    'use strict';

    return function (Shipping) {
        return Shipping.extend({
            initialize: function () {
                this._super();

                console.log('✅ Custom field mixin loaded');

                layout([
                    {
                        parent: 'checkout.steps.shipping-step.shippingAddress.shipping-address-fieldset',
                        name: 'custom_field',
                        component: 'Magento_Ui/js/form/element/abstract',
                        config: {
                            customScope: 'shippingAddress.extension_attributes',
                            template: 'ui/form/field',
                            elementTmpl: 'ui/form/element/input',
                            id: 'custom-field'
                        },
                        dataScope: 'shippingAddress.extension_attributes.custom_field',
                        label: 'Custom Field',
                        provider: 'checkoutProvider',
                        visible: true,
                        validation: {
                            'required-entry': false
                        },
                        sortOrder: 250,
                        id: 'custom-field'
                    }
                ]);

                return this;
            }
        });
    };
});
