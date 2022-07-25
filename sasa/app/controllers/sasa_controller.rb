class SasaController < ApplicationController
  def index
    render 'farmfresh/index'
  end
  def shop
    render 'farmfresh/shop' 
end
def signup 
  render 'farmfresh/signup'
end
def blogs
  render 'farmfresh/blogs'
end
end
