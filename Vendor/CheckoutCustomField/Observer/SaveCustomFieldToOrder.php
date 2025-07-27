<?php
namespace Vendor\CheckoutCustomField\Observer;

use Magento\Framework\Event\ObserverInterface;
use Magento\Framework\Event\Observer;

class SaveCustomFieldToOrder implements ObserverInterface
{
    public function execute(Observer $observer)
    {
        $quote = $observer->getEvent()->getQuote();
        $order = $observer->getEvent()->getOrder();

        $shippingAddress = $quote->getShippingAddress();
        $customField = $shippingAddress->getData('custom_field');

        if ($customField) {
            $order->setData('custom_field', $customField);
        }
    }
}
