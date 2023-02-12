<?php

namespace App\Controller;

use App\Entity\User;
use App\Form\Model\UserRegistrationFormModel;
use App\Form\UserRegistrationFormType;
use App\Security\LoginFormAuthenticator;
use Symfony\Bridge\Twig\Mime\TemplatedEmail;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Mailer\MailerInterface;
use Symfony\Component\Mime\Address;
use Symfony\Component\Mime\Email;
use Symfony\Component\Mime\NamedAddress;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Security\Core\Encoder\UserPasswordEncoderInterface;
use Symfony\Component\Security\Guard\GuardAuthenticatorHandler;
use Symfony\Component\Security\Http\Authentication\AuthenticationUtils;

class SecurityController extends AbstractController
{
    /**
     * @Route("/login", name="app_login")
     */
    public function login(AuthenticationUtils $authenticationUtils)
    {
        // get the login error if there is one
        $error = $authenticationUtils->getLastAuthenticationError();

        // last username entered by the user
        $lastUsername = $authenticationUtils->getLastUsername();

        return $this->render('security/login.html.twig', [
            'last_username' => $lastUsername,
            'error'         => $error,
        ]);
    }

    /**
     * @Route("/logout", name="app_logout")
     */
    public function logout()
    {
        throw new \Exception('Will be intercepted before getting here');
    }

    /**
     * This is a very traditional controller: it creates a Symfony form, processes it, saves a new User object to the database and ultimately redirects when it finishes.
     * @Route("/register", name="app_register")
     */
    public function register(
        MailerInterface $mailer, //interface to configure and send our email
        Request $request,
        UserPasswordEncoderInterface $passwordEncoder,
        GuardAuthenticatorHandler $guardHandler,
        LoginFormAuthenticator $formAuthenticator
    )
    {
        $form = $this->createForm(UserRegistrationFormType::class);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            /** @var UserRegistrationFormModel $userModel */
            $userModel = $form->getData();

            $user = new User();
            $user->setFirstName($userModel->firstName);
            $user->setEmail($userModel->email);
            $user->setPassword($passwordEncoder->encodePassword(
                $user,
                $userModel->plainPassword
            ));
            // be absolutely sure they agree
            if (true === $userModel->agreeTerms) {
                $user->agreeToTerms();
            }
            $user->setSubscribeToNewsletter($userModel->subscribeToNewsletter);

            $em = $this->getDoctrine()->getManager();
            $em->persist($user);
            $em->flush();

            /**
             * Prepare email to send
             */
            $email = (new TemplatedEmail()) //or just Email() if we dont use template
                 //or we can use Address (4.4 and higer), and more addreses in array if we want to
                // ->from('alienmailcarrier@example.com') // from which email we send the mail  //todo in future versions use Address!
                ->from(new NamedAddress('alienmailcarrier@example.com', 'The Space Bar'))// from which email we send the mail
                //->to($user->getEmail()) //user email - or we can use Address (4.4 and higer), and more addreses in array if we want to
                ->to(new NamedAddress($user->getEmail(), $user->getFirstName())) //user email //todo in future versions use Address!
                ->subject('Welcome to the Space Bar!') // subject of our email
                ->htmlTemplate('email/welcome.html.twig')
                ->context([
                    'user' => $user,
                ]);
                /*
                ->html("Nice to meet you {$user->getFirstName()}! ❤️") //usefull if we use Email()
                ->text("Nice to meet you {$user->getFirstName()}! ❤️");
                */

            $mailer->send($email);

            return $guardHandler->authenticateUserAndHandleSuccess(
                $user,
                $request,
                $formAuthenticator,
                'main'
            );
        }

        return $this->render('security/register.html.twig', [
            'registrationForm' => $form->createView(),
        ]);
    }
}
