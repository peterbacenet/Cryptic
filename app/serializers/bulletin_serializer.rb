class BulletinSerializer < ActiveModel::Serializer
  attributes :id, :content, :crypto, :user, :title
  has_one :user
  has_one :crypto
end
