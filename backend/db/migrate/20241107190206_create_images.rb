class CreateImages < ActiveRecord::Migration[7.1]
  def change
    create_table :images do |t|
      t.timestamps
      t.string :latitude
      t.string :longitude
      t.integer :altitude_m
      t.integer :heading_deg
      t.string :file_name
      t.integer :camera_tilt_deg
      t.integer :focal_length_mm
      t.ingeter :iso
      t.string :shutter_speed
      t.string :aperture
      t.integer :color_temp_k
      t.string :image_format
      t.decimal :file_size_mb, :precision => 10, :scale => 2, :default => 0.0
      t.decimal :drone_speed_mps, :precision => 10, :scale => 2, :default => 0.0
      t.integer :battery_level_pct
      t.decimal :gps_accuracy_m, :precision => 10, :scale => 2, :default => 0.0
      t.string :gimbal_mode
      t.string :subject_detection
      t.string :image_tags, array: true
    end
  end
end
