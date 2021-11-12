class WatchlistSerializer < ActiveModel::Serializer
  attributes :id, :list
  has_one :user
  has_many :cryptos
end
