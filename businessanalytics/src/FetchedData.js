import { useEffect, useState } from "react";

export const FetchedData = () => {
    const [productSales, setProductSales] = useState([]);  // State to hold product sales data

    // Fetch the product sales data when the component mounts
    const getProductSalesData = async () => {
      try {
        const productResponse = await fetch("https://fakestoreapi.com/products");
        const products = await productResponse.json();

        // Mock sales data (you can replace this with real data fetching logic)
        const salesData = [
          { productId: 1, quantitySold: 30 },
          { productId: 2, quantitySold: 120 },
          { productId: 3, quantitySold: 50 },
        ];

        // Combine product info with sales data
        const combinedData = products.map(product => {
          const sales = salesData.find(sale => sale.productId === product.id);
          return { ...product, quantitySold: sales ? sales.quantitySold : 0 };
        });

        // Log combined data for debugging
        console.log(combinedData);

        // Update the state with the fetched product sales data
        setProductSales(combinedData);

      } catch (error) {
        console.error("Error fetching product data:", error);
      }
    };}
