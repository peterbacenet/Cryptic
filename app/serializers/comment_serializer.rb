class CommentSerializer < ActiveModel::Serializer
  attributes :id, :content, :crypto, :user
  has_one :user
  has_one :crypto
end
