class UserSerializer < ActiveModel::Serializer
  attributes :id, :watchlist, :admin, :name, :password
end
