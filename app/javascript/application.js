// Configure your import map in config/importmap.rb. Read more: https://github.com/rails/importmap-rails
import "@hotwired/turbo-rails"
import "controllers"
import "jquery"
import "materialize"


$(function() {
    $('.dropdown-trigger').dropdown(); // Initialize dropdown functionality
  });
  