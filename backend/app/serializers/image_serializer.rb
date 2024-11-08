class ImageSerializer < ActiveModel::Serializer
  attributes :id, :created_at, :latitude, :longitude, :altitude_m, :heading_deg, :file_name, :camera_tilt_deg, :focal_length_mm, :iso, :shutter_speed, :aperture, :color_temp_k, :image_format, :file_size_mb, :drone_speed_mps, :battery_level_pct, :gps_accuracy_m, :gimbal_mode, :subject_detection, :image_tags, :image_url
end
