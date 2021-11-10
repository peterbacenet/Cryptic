class CryptoSerializer < ActiveModel::Serializer
  attributes :id, :data
  has_many :comments
  has_many :bulletins
end
