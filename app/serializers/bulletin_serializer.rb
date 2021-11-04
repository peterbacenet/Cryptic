class BulletinSerializer < ActiveModel::Serializer
  attributes :id, :content
  has_one :user
  has_one :crypto
end
