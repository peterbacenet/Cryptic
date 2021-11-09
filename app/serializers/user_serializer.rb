class UserSerializer < ActiveModel::Serializer
  attributes :id, :watchlist, :admin, :name, :password
  has_many :bulletins
  has_many :comments
end
