class Crypto < ApplicationRecord
    has_many :comments, dependent: :destroy
    has_many :bulletins
    validates :data, uniqueness: true
end
