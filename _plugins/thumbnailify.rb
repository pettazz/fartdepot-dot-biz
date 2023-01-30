require 'fastimage'

module Jekyll
  module Thumbnailify

    class GetHeightTag < Liquid::Tag

      def initialize(tagName, image_arg, tokens)
        super
        @image_arg = image_arg
      end

      def render(context)
        image_path = "#{context[@image_arg.strip]}"
        image_path[0] = "" if image_path[0] == "/"

        width, height = FastImage.size(image_path)
        "#{height}"
      end

      Liquid::Template.register_tag "img_height", self
    end

    class GetWidthTag < Liquid::Tag

      def initialize(tagName, image_arg, tokens)
        super
        @image_arg = image_arg
      end

      def render(context)
        image_path = "#{context[@image_arg.strip]}"
        image_path[0] = "" if image_path[0] == "/"

        width, height = FastImage.size(image_path)
        "#{width}"
      end

      Liquid::Template.register_tag "img_width", self
    end

  end
end