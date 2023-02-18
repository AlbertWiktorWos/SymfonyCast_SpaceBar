<?php

namespace App\Tests\Controller;

use Symfony\Bundle\FrameworkBundle\Test\WebTestCase;

class SecurityControllerTest extends WebTestCase
{
    public function testSomething()
    {
        //something like a browser
        $client = static::createClient();
        $crawler = $client->request('GET', '/register'); //we want to put request to /register

        //our register method in SecurityController return
        /*
            return $this->render('security/register.html.twig', [
            'registrationForm' => $form->createView(),
            ]);
         */

        //it checks if we wasnt redirected or nothing goes wrong
        $this->assertResponseIsSuccessful();

        //on our /register site we find an Register button
        $button = $crawler->selectButton('Register');
        $form = $button->form(); //get form from button
        //set values to form
        $form['user_registration_form[firstName]']->setValue('Ryan');
        $form['user_registration_form[email]']->setValue(sprintf('foo%s@example.com', rand()));
        $form['user_registration_form[plainPassword]']->setValue('space_rocks');
        $form['user_registration_form[agreeTerms]']->tick();
        //then submit form and watch if everything goes fine
        $client->submit($form);

        /* TODO if we use Symfony 4.4:
            $this->assertEmailCount(1);
            $email = $this->getMailerMessage(0);
            $this->assertEmailHeaderSame($email, 'To', 'fabien@symfony.com');
        */

        // check if we are redirected
        $this->assertResponseRedirects();

    }
}
