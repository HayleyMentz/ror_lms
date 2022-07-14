class User < ApplicationRecord
has_many :enrollments, dependend: :destroy
has_many :courses, through: :enrollments

validates :first, :last, :image, presence: true
end
