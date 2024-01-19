import React, { useState } from "react";
import NavTitle from "./NavTitle";
import { motion } from "framer-motion";
import { items } from "../../../../constants/shopFilterCategories";
import { useShopContext } from "../useShopContext";
import { Box, Stack } from "@mui/material";

const Category = () => {
  const [showCategory, setShowCategory] = useState(true);
  const { updateTargetSearchObj } = useShopContext();

  const handleCategoryChange = (value: string, category: string) => {
    updateTargetSearchObj(value, category);
  };

  return (
    <Stack>
      <Box
        onClick={() => setShowCategory(!showCategory)}
        className="cursor-pointer transition-all"
      >
        <NavTitle title="Shop by Category" icons={true} />
      </Box>
      <div>
        {showCategory && (
          <motion.div
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <ul className="flex flex-col gap-4 text-sm lg:text-base text-[#767676]">
              <li
                onClick={() => handleCategoryChange("", "all")}
                className="border-b-[1px] capitalize cursor-pointer focus-within:border-black border-b-[#F0F0F0] pb-2 flex items-center justify-between"
              >
                All
              </li>
              {items?.map(({ _id, title }) => (
                <li
                  key={_id}
                  onClick={() => handleCategoryChange(title, "collection")}
                  className="border-b-[1px] capitalize cursor-pointer focus-within:border-black border-b-[#F0F0F0] pb-2 flex items-center justify-between"
                >
                  {title}
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </div>
    </Stack>
  );
};

export default Category;