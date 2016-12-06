class Api::TasksController < ApplicationController
  def index
    @tasks = Task.all
  end
end
