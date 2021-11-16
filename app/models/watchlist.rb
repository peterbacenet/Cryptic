class Watchlist < ApplicationRecord
  belongs_to :user
  # has_many :cryptos
  # validates :user_id, uniqueness: true
end
