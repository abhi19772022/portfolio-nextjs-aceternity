// src/components/Products.tsx
"use client";

import Image from "next/image";
import React, { useState } from "react";
import { CardBody, CardContainer, CardItem } from "./ui/3d-card";
import { Product } from "@/utils/data"; // Ensure this points to the updated Product interface
import { motion } from "framer-motion";
import { textVarient } from "@/utils/motion";

const Products = ({ filteredWork }: { filteredWork: Product[] }) => {
  const [showPopup, setShowPopup] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [showForm, setShowForm] = useState(false);

  const handleCardClick = (prod: Product) => {
    setSelectedProduct(prod);
    setShowPopup(true);
    setShowForm(false); // Reset form display when opening a new popup
  };

  const handleClosePopup = () => {
    setShowPopup(false);
    setSelectedProduct(null);
    setShowForm(false); // Close the form if the popup is closed
  };

  const handleBrochureDownload = () => {
    if (selectedProduct && selectedProduct.brochureUrl) { // Now valid
      const link = document.createElement("a");
      link.href = selectedProduct.brochureUrl;
      link.download = `${selectedProduct.name}_Brochure.pdf`;
      link.click();
    }
  };

  const handleRegistration = () => {
    setShowForm(true);
  };

  return (
    <div className="flex items-center justify-center gap-4 flex-wrap"> {/* Added flex-wrap for better responsiveness */}
      {filteredWork.map((prod) => (
        <motion.div
          key={prod.id}
          variants={textVarient}
          initial="hidden"
          whileInView="show"
          onClick={() => handleCardClick(prod)}
          className="cursor-pointer" // Indicates the card is clickable
        >
          <CardContainer className="inter-var">
            <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto h-auto rounded-xl p-6 border">
              <CardItem translateZ="100" className="w-full mt-4">
                <Image
                  src={prod.image}
                  height="800"
                  width="800"
                  className="h-[80%] w-full object-cover rounded-xl group-hover/card:shadow-xl"
                  alt={`${prod.name} thumbnail`}
                />
              </CardItem>
              <div className="flex justify-between items-center mt-20">
                <CardItem
                  translateZ={20}
                  as="button"
                  className="w-full h-12 px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
                >
                  Register Here
                </CardItem>
              </div>
            </CardBody>
          </CardContainer>
        </motion.div>
      ))}

      {showPopup && selectedProduct && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white dark:bg-black p-6 rounded-lg max-w-md w-full mx-4">
            {!showForm ? (
              <>
                <h2 className="text-lg font-bold mb-4">{selectedProduct.name}</h2>
                <div className="flex flex-col gap-4">
                  {selectedProduct.brochureUrl && ( // Now valid
                    <button
                      onClick={handleBrochureDownload}
                      className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition"
                    >
                      Download Brochure
                    </button>
                  )}
                  <button
                    onClick={handleRegistration}
                    className="bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600 transition"
                  >
                    Register
                  </button>
                  <button
                    onClick={handleClosePopup}
                    className="mt-4 text-red-500 hover:text-red-600 transition"
                  >
                    Close
                  </button>
                </div>
              </>
            ) : (
              <form className="flex flex-col gap-4">
                <h2 className="text-lg font-bold mb-4">Registration Form</h2>
                <input
                  type="text"
                  placeholder="Name"
                  className="py-2 px-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="py-2 px-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
                <input
                  type="text"
                  placeholder="Phone Number"
                  className="py-2 px-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
                <button
                  type="submit"
                  className="bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600 transition"
                >
                  Submit
                </button>
                <button
                  type="button" // Changed to type="button" to prevent form submission
                  onClick={() => setShowForm(false)}
                  className="mt-4 text-red-500 hover:text-red-600 transition"
                >
                  Back
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Products;
