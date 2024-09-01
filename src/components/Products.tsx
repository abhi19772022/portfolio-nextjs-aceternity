"use client";

import Image from "next/image";
import React, { useState } from "react";
import { CardBody, CardContainer, CardItem } from "./ui/3d-card";
import { Product } from "@/utils/data";
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
    if (selectedProduct) {
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
    <div className="flex items-center justify-center gap-4">
      {filteredWork.map((prod) => (
        <motion.div
          key={prod.id}
          variants={textVarient}
          initial="hidden"
          whileInView="show"
          onClick={() => handleCardClick(prod)}
        >
          <CardContainer className="inter-var">
            <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto h-auto rounded-xl p-6 border">
              <CardItem translateZ="100" className="w-full mt-4">
                <Image
                  src={prod.image}
                  height="800"
                  width="800"
                  className="h-[80%] w-full object-cover rounded-xl group-hover/card:shadow-xl"
                  alt="thumbnail"
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
          <div className="bg-white dark:bg-black p-6 rounded-lg">
            {!showForm ? (
              <>
                <h2 className="text-lg font-bold mb-4">{selectedProduct.name}</h2>
                <div className="flex flex-col gap-4">
                  <button
                    onClick={handleBrochureDownload}
                    className="bg-blue-500 text-white py-2 px-4 rounded-lg"
                  >
                    Download Brochure
                  </button>
                  <button
                    onClick={handleRegistration}
                    className="bg-green-500 text-white py-2 px-4 rounded-lg"
                  >
                    Register
                  </button>
                  <button
                    onClick={handleClosePopup}
                    className="mt-4 text-red-500"
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
                  className="py-2 px-4 rounded-lg border border-gray-300"
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="py-2 px-4 rounded-lg border border-gray-300"
                />
                <input
                  type="text"
                  placeholder="Phone Number"
                  className="py-2 px-4 rounded-lg border border-gray-300"
                />
                <button
                  type="submit"
                  className="bg-green-500 text-white py-2 px-4 rounded-lg"
                >
                  Submit
                </button>
                <button
                  onClick={() => setShowForm(false)}
                  className="mt-4 text-red-500"
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
