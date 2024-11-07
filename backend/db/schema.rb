# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema[7.1].define(version: 2024_11_07_190206) do
  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "images", force: :cascade do |t|
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "latitude"
    t.string "longitude"
    t.integer "altitude_m"
    t.integer "heading_deg"
    t.string "file_name"
    t.integer "camera_tilt_deg"
    t.integer "focal_length_mm"
    t.integer "iso"
    t.string "shutter_speed"
    t.string "aperture"
    t.integer "color_temp_k"
    t.string "image_format"
    t.decimal "file_size_mb", precision: 10, scale: 2, default: "0.0"
    t.decimal "drone_speed_mps", precision: 10, scale: 2, default: "0.0"
    t.integer "battery_level_pct"
    t.decimal "gps_accuracy_m", precision: 10, scale: 2, default: "0.0"
    t.string "gimbal_mode"
    t.string "subject_detection"
    t.string "image_tags", array: true
  end

end
