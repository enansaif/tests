<?php
namespace Vendor\CheckoutCustomField\Plugin\Checkout;

use Magento\Checkout\Api\Data\ShippingInformationInterface;
use Magento\Quote\Model\QuoteRepository;

class ShippingInformationManagementPlugin
{
    protected $quoteRepository;

    public function __construct(QuoteRepository $quoteRepository)
    {
        $this->quoteRepository = $quoteRepository;
    }

    public function beforeSaveAddressInformation(
        \Magento\Checkout\Model\ShippingInformationManagement $subject,
        $cartId,
        ShippingInformationInterface $addressInformation
    ) {
        $shippingAddress = $addressInformation->getShippingAddress();
        $extensionAttributes = $shippingAddress->getExtensionAttributes();

        if ($extensionAttributes && $extensionAttributes->getCustomField()) {
            $quote = $this->quoteRepository->getActive($cartId);
            $quote->setData('custom_comment', $extensionAttributes->getCustomField());
        }
    }
}
