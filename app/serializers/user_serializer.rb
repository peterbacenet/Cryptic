class UserSerializer < ActiveModel::Serializer
  attributes :id, :admin, :name, :password
  has_many :bulletins
  has_many :comments
  has_many :watchlists
end
