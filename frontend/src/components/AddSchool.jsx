import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AddSchool = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const [imagePreview, setImagePreview] = useState(null);

  const onSubmit = async (data) => {
    try {
      const formData = new FormData();

      formData.append("name", data.name);
      formData.append("address", data.address);
      formData.append("city", data.city);
      formData.append("state", data.state);
      formData.append("contact", data.contact);
      formData.append("email_id", data.email_id);

      formData.append("image", data.image[0]);

      const response = await fetch(
        "https://school-hub-pwt7.onrender.com/schools",
        {
          method: "POST",
          body: formData,
        }
      );

      if (!response.ok) throw new Error("Failed to add school");

      toast.success("School added successfully!");
      reset(); // Reset form fields after success
      setImagePreview(null); // Clear image preview
    } catch (error) {
      console.error(error);
      toast.error("Error adding school");
    }
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImagePreview(URL.createObjectURL(file));
    } else {
      setImagePreview(null);
    }
  };

  return (
    <>
      {/* ToastContainer must be rendered once anywhere in your app */}
      <ToastContainer className="mt-12" />

      <div className="h-[92vh] flex items-center justify-center bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100 p-4">
        <div className="bg-white/80 backdrop-blur-md p-4 rounded-2xl shadow-2xl w-full max-w-md">
          <h1 className="text-2xl font-extrabold text-center mb-2 text-gray-800">
            Add New School
          </h1>

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col gap-3"
          >
            {/* School Name */}
            <div>
              <label className="block text-gray-700 font-medium mb-0.5 text-sm">
                School Name
              </label>
              <input
                {...register("name", { required: "School Name is required" })}
                placeholder="Enter school name"
                className="w-full border border-gray-300 p-2 rounded-lg focus:ring-1 focus:ring-blue-400 outline-none text-sm"
              />
              {errors.name && (
                <p className="text-red-600 text-xs">{errors.name.message}</p>
              )}
            </div>

            {/* Address */}
            <div>
              <label className="block text-gray-700 font-medium mb-0.5 text-sm">
                Address
              </label>
              <input
                {...register("address", { required: "Address is required" })}
                placeholder="Enter address"
                className="w-full border border-gray-300 p-2 rounded-lg focus:ring-1 focus:ring-blue-400 outline-none text-sm"
              />
              {errors.address && (
                <p className="text-red-600 text-xs">{errors.address.message}</p>
              )}
            </div>

            {/* City + State Grid */}
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-gray-700 font-medium mb-0.5 text-sm">
                  City
                </label>
                <input
                  {...register("city", { required: "City is required" })}
                  placeholder="City"
                  className="w-full border border-gray-300 p-2 rounded-lg focus:ring-1 focus:ring-blue-400 outline-none text-sm"
                />
                {errors.city && (
                  <p className="text-red-600 text-xs">{errors.city.message}</p>
                )}
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-0.5 text-sm">
                  State
                </label>
                <input
                  {...register("state", { required: "State is required" })}
                  placeholder="State"
                  className="w-full border border-gray-300 p-2 rounded-lg focus:ring-1 focus:ring-blue-400 outline-none text-sm"
                />
                {errors.state && (
                  <p className="text-red-600 text-xs">{errors.state.message}</p>
                )}
              </div>
            </div>

            {/* Contact */}
            <div>
              <label className="block text-gray-700 font-medium mb-0.5 text-sm">
                Contact Number
              </label>
              <input
                {...register("contact", {
                  required: "Contact number is required",
                  pattern: {
                    value: /^[0-9]{10}$/,
                    message: "Contact must be numeric",
                  },
                })}
                placeholder="Enter contact number"
                className="w-full border border-gray-300 p-2 rounded-lg focus:ring-1 focus:ring-blue-400 outline-none text-sm"
              />
              {errors.contact && (
                <p className="text-red-600 text-xs">{errors.contact.message}</p>
              )}
            </div>

            {/* Email */}
            <div>
              <label className="block text-gray-700 font-medium mb-0.5 text-sm">
                Email
              </label>
              <input
                {...register("email_id", {
                  required: "Email is required",
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/i,
                    message: "Invalid email address",
                  },
                })}
                placeholder="Enter email"
                className="w-full border border-gray-300 p-2 rounded-lg focus:ring-1 focus:ring-blue-400 outline-none text-sm"
              />
              {errors.email_id && (
                <p className="text-red-600 text-xs">
                  {errors.email_id.message}
                </p>
              )}
            </div>

            {/* File Upload */}
            <div>
              <label className="block text-gray-700 font-medium mb-0.5 text-sm">
                Upload Image
              </label>
              <input
                type="file"
                {...register("image", { required: "Image is required" })}
                accept="image/*"
                className="w-full border p-2 rounded-lg text-sm"
                onChange={handleImageChange}
              />
              {errors.image && (
                <p className="text-red-600 text-xs">{errors.image.message}</p>
              )}

              {imagePreview && (
                <img
                  src={imagePreview}
                  alt="Preview"
                  className="w-32 h-32 object-cover rounded-lg mt-2 shadow-md"
                />
              )}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="mt-3 w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-2 rounded-lg font-semibold shadow-md hover:scale-[1.02] transform transition text-sm"
            >
              Add School
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default AddSchool;
