import { createSelector } from "reselect";
import { AppRootState } from "../../types/screen";

const selectShopPage = (state: AppRootState) => state.shopPage;

export const retrieveAllProducts = createSelector(
  selectShopPage,
  (shopPage) => shopPage.allProducts
);

export const retrieveChosenProduct = createSelector(
  selectShopPage,
  (shopPage) => shopPage.chosenProduct
);

export const retrieveSaleProducts = createSelector(
  selectShopPage,
  (shopPage) => shopPage.saleProducts
);
