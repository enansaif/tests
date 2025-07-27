var config = {
    config: {
        mixins: {
            'Magento_Checkout/js/view/shipping': {
                'Vendor_CheckoutCustomField/js/view/checkout/shipping/custom-field-mixin': true
            },
            'Magento_Checkout/js/action/set-shipping-information': {
                'Vendor_CheckoutCustomField/js/action/set-shipping-information-mixin': true
            }
        }
    }
};

