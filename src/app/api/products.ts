import axiosInstance from "./axiosAPI";

export const getProducts = async () => {
  try {
    const responseData = await axiosInstance
      .get(`/products`)
      .then((response) => response.data);
    return responseData;
  } catch (error) {
    throw new Error("전 상품을 불러오는데 실패하였습니다");
  }
};
