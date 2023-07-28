import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ProductAPI from '../../types/productAPI';
import { Body, Products, Desc } from './styles';
import { noHeader, getImageUrl } from '../../services/mainAPI/config';
import Book from '../../assets/images/Book-1.png'

const Home: React.FC = () => {
  const [products, setProducts] = useState<ProductAPI[]>([]);
  const [bannerIndex, setBannerIndex] = useState(0);
  const bannerInterval = 6000;
  // const bannerInterval = 6000 * 100;

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await noHeader.get('/product');
      const data = response.data;
      setProducts(data);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  useEffect(() => {
    const bannerTimer = setInterval(() => {
      setBannerIndex((prevIndex) => (prevIndex + 1) % products.length);
    }, bannerInterval);

    return () => {
      clearInterval(bannerTimer);
    };
  }, [products]);

  const getBannerProducts = () => {
    const endIndex = bannerIndex + 3;
    const slicedProducts = products.slice(bannerIndex, endIndex);
    const remainingProducts = slicedProducts.length < 3 ? products.slice(0, 3 - slicedProducts.length) : [];
    return [...slicedProducts, ...remainingProducts];
  };

  return (
    <Body>
      <Products>
        <h2>Nossas últimas aquisições</h2>
        <Desc>
          <p>
            <span>Bem-vindo à nossa livraria! Aqui você encontrará </span>uma seleção incrível de livros para todos os gostos e idades. 
          </p>
          <Link to={'/lista-de-produtos'}>
            <button>Ir às compras</button>
          </Link>
        </Desc>
        <div className="products-container">
          {getBannerProducts().map((product: ProductAPI, index: number) => (
            <div className={`product ${index === 1 ? 'middle-card' : ''}`} key={product.id}>
              <Link to={`/product/${product.id}`}>
                {/* <img
                  src={product.images && product.images.length > 0 ? getImageUrl(product.images[0].filename) : Book}
                  alt={`Imagem do produto ${product.name}`}
                /> */}
                <img src={Book}></img>
                <h1>{product.name}</h1>
                <p>$ {product.price}</p>
              </Link>
            </div>
          ))}
        </div>
      </Products>
    </Body>
  );
};

export default Home;
