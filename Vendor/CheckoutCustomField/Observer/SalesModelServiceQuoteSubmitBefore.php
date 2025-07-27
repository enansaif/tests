<?php
namespace Vendor\CheckoutCustomField\Observer;

use Magento\Framework\Event\ObserverInterface;
use Magento\Framework\Event\Observer;

class SalesModelServiceQuoteSubmitBefore implements ObserverInterface
{
    public function execute(Observer $observer)
    {
        $quote = $observer->getQuote();
        $order = $observer->getOrder();

        $customComment = $quote->getData('custom_comment');
        if ($customComment) {
            $order->setData('custom_comment', $customComment);
        }
    }
}
