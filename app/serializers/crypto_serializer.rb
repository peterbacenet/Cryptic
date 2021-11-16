class CryptoSerializer < ActiveModel::Serializer
  attributes :id, :data, :T, :o, :c
  has_many :comments
  has_many :bulletins
end
