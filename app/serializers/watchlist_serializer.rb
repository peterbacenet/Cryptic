class WatchlistSerializer < ActiveModel::Serializer
  attributes :id, :data, :T, :c, :o, :v, :h, :l 
  has_one :user
end
