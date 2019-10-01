class Api::SessionsController < ApplicationController
    def create
        @user = User.find_by_credentials(params[:user][:email], params[:user][:password])
        if @user
            login(@user)
            render "api/users/show"
        else
            render json: ["Invalid email/password combination"], status: 401
        end
    end

    def destroy
        @user = find_by(id: params[:id])
        if @user 
            logout
            render "api/users/show"
        else 
            render json: ["Nobody signed in"], status: 404
        end
    end
end
