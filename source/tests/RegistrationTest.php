<?php

use Illuminate\Foundation\Testing\WithoutMiddleware;
use Illuminate\Foundation\Testing\DatabaseMigrations;
use Illuminate\Foundation\Testing\DatabaseTransactions;

class RegistrationTest extends TestCase
{
    use DatabaseTransactions;

    /**
     * @before
     */
    public function initialize()
    {
        $this->faker = App::make(Faker\Generator::class);
        $this->userFactory = App::make(App\Factories\UserFactory::class);
    }

    public function testUserRegistrationInput()
    {
        $data = [
            'first_name' => $this->faker->firstName,
            'last_name' => $this->faker->lastName,
            'email' => $this->faker->safeEmail,
            'password' => str_random(16),
        ];

        $user = $this->userFactory->register(
            $data['first_name'],
            $data['last_name'],
            $data['email'],
            $data['password']
        );

        $this->assertEquals($data['first_name'], $user->first_name);
        $this->assertEquals($data['last_name'], $user->last_name);
        $this->assertEquals($data['email'], $user->email);
        $this->assertTrue(Hash::check($data['password'], $user->password));

        $this->seeInDatabase('users', array_except($data, 'password'));
    }
}
