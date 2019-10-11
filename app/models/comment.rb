# == Schema Information
#
# Table name: comments
#
#  id          :bigint           not null, primary key
#  rating      :integer          not null
#  body        :text             not null
#  user_id     :integer          not null
#  business_id :integer          not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Comment < ApplicationRecord
    validates :rating, :body, presence: true

    belongs_to :user

    belongs_to :business

end
