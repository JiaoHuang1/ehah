# == Schema Information
#
# Table name: users
#
#  id              :bigint           not null, primary key
#  email           :string           not null
#  password_digest :string           not null
#  session_token   :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#  birthday_month  :integer
#  birthday_day    :integer
#  birthday_year   :integer
#  first_name      :string           not null
#  last_name       :string           not null
#  zipcode         :string           not null
#

class User < ApplicationRecord
    validates :first_name, :last_name, :email, :session_token, presence: true, uniqueness: true
    validates :password_digest, :zipcode, presence: true
    validates :password, length: { minimum: 6, allow_nil: true }
    after_initialize :ensure_session_token
    attr_reader :password

    def self.find_by_credentials(email, password)
        user = User.find_by(email: email)
        return nil unless user && user.is_password?(password)
        user
    end

    def is_password?(password)
        BCrypt::Password.new(self.password_digest).is_password?(password)
    end

    def password=(password)
        @password = password
        self.password_digest = BCrypt::Password.create(password)
    end

    def self.generate_session_token
        SecureRandom::urlsafe_base64(16)
    end

    def reset_session_token
        self.session_token = self.class.generate_session_token
        self.save!
        self.session_token
    end

    def ensure_session_token
        self.session_token ||= self.class.generate_session_token
    end

    has_many :comments
end
