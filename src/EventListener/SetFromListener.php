<?php

namespace App\EventListener;

use Symfony\Component\EventDispatcher\EventSubscriberInterface;
use Symfony\Component\Mailer\Event\MessageEvent;
use Symfony\Component\Mailer\EventListener\EnvelopeListener;
use Symfony\Component\Mime\Email;
use Symfony\Component\Mime\NamedAddress;

class SetFromListener implements EventSubscriberInterface
{
    public static function getSubscribedEvents()
    {
        /*
         * What events we want to listining
         */
        return [
            MessageEvent::class => 'onMessage',
        ];
    }

    /**
     * @see EnvelopeListener
     * We overwrite the onMassage in EventSubstriberInterface
     * @param MessageEvent $event //our RawMessage that extending TemplatedEmail and Email
     */
    public function onMessage(MessageEvent $event)
    {
        $email = $event->getMessage();
        if (!$email instanceof Email) {
            return;
        }

        // ->from('alienmailcarrier@example.com') // from which email we send the mail  //todo in future versions use Address!
        $email->from(new NamedAddress('mescruu@gmail.com', 'The Space Bar'));// from which email we send the mail
    }
}
