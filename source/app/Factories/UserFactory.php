<?php

namespace App\Factories;

use App\User;
use Illuminate\Contracts\Hashing\Hasher;
use Illuminate\Contracts\Container\Container;

/**
 * The user factory is the only way to create a new user.
 * The primary method is "register"
 */
class UserFactory
{
    /**
     * Laravel's ioc container contract
     *
     * @var \Illuminate\Contracts\Container\Container
     */
    protected $container;

    /**
     * Laravel's hasher contract
     *
     * @var \Illuminate\Contracts\Hashing\Hasher
     */
    protected $hasher;

    /**
     * Create a new instance of UserFactory
     *
     * @param Container $container
     * @param Hasher $hasher
     */
    public function __construct(Container $container, Hasher $hasher)
    {
        $this->container = $container;
        $this->hasher = $hasher;
    }

    /**
     * Register the user, given his/her information
     *
     * @param string $firstName
     * @param string $lastName
     * @param string $email
     * @param string $password
     */
    public function register($firstName, $lastName, $email, $password)
    {
        $user = $this->container->make(User::class);

        $user->first_name = $firstName;
        $user->last_name = $lastName;
        $user->email = $email;
        $user->password = $this->hasher->make($password);

        $user->save();

        return $user;
    }
}
