class Crypto < ApplicationRecord
    has_many :comments
    has_many :bulletins
end
