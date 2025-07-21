define([
    'Magento_Ui/js/form/element/abstract',
    'uiLayout',
    'Magento_Checkout/js/model/quote'
], function (Abstract, layout, quote) {
    'use strict';

    return function (Component) {
        return Component.extend({
            initialize: function () {
                console.log('Custom field mixin loaded');
                this._super();

                this.customField = ko.observable('');

                layout([
                    {
                        parent: 'checkout.steps.shipping-step.shippingAddress.shipping-address-fieldset',
                        component: 'Magento_Ui/js/form/element/abstract',
                        name: 'custom_field',
                        dataScope: 'shippingAddress.custom_field',
                        label: 'Custom Field',
                        provider: 'checkoutProvider',
                        sortOrder: 250,
                        visible: true,
                        validation: {
                            'required-entry': false
                        },
                        value: ''
                    }
                ]);

                return this;
            }
        });
    };
});
