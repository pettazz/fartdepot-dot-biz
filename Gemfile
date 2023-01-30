source "https://rubygems.org"

gem "jekyll", "~> 4.3.1"
gem "fastimage", "~> 2.2.0"

group :jekyll_plugins do
  gem "jekyll-feed", "~> 0.12"
  gem 'jekyll-tagging-related_posts'
  gem 'jekyll-paginate-v2'
end

# Lock `http_parser.rb` gem to `v0.6.x` on JRuby builds since newer versions of the gem
# do not have a Java counterpart.
gem "http_parser.rb", "~> 0.6.0", :platforms => [:jruby]
