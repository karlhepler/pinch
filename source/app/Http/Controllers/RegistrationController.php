<?php

namespace App\Http\Controllers;

use App\Factories\UserFactory;
use App\Http\Requests\RegistrationRequest;

class RegistrationController extends Controller
{
    /**
     * Register & return the user
     *
     * @param  RegistrationRequest $request
     * @param  UserFactory $userFactory
     * @return Response
     */
    public function register(RegistrationRequest $request, UserFactory $userFactory)
    {
        // TODO(kjh): I think it would be wise to use Laravel's registration & login controllers
        return response()->json(
            $userFactory->register(
                $request->input('firstName'),
                $request->input('lastname'),
                $request->input('email'),
                $request->input('password')
            );
        );
    }
}
