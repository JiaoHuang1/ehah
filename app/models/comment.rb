class Comment < ApplicationRecord
    validates :rating, :body, presence: true

    belongs_to :user

    belongs_to :business

end
