class Api::UsersController < ApplicationController
    def create
        # debugger
        @user = User.new(user_params)
        # debugger
        if @user.save
            login!(@user)
            render 'api/users/show'
        else
            # debugger
            render json: @user.errors.full_messages, status: 422
        end       
    end

    private

    def user_params
        params.require(:user).permit(:first_name, :last_name, :zipcode, :email, :password)
    end
end
