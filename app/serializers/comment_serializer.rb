class CommentSerializer < ActiveModel::Serializer
  attributes :id, :content, :crypto
  has_one :user
  has_one :crypto
end
