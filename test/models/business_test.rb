# == Schema Information
#
# Table name: businesses
#
#  id                 :bigint           not null, primary key
#  name               :string           not null
#  address            :string           not null
#  latitude           :float            not null
#  longitude          :float            not null
#  price_rating       :string           not null
#  description        :text             not null
#  weekday_open_hour  :string
#  weekday_close_hour :string
#  weekend_open_hour  :string
#  weekend_close_hour :string
#  website            :string
#  created_at         :datetime         not null
#  updated_at         :datetime         not null
#  phone              :string
#

require 'test_helper'

class BusinessTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
