import React, { useEffect, useState } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import { BeatLoader } from 'react-spinners';
import { noHeader, mainApiJson } from '../../services/mainAPI/config';
import ProductAPI from '../../types/productAPI';
import { Div, Description } from '../ProductPage/styles';
import { Loading } from '../../styles/loading';

const SearchResultsPage = () => {
  const location = useLocation();
  const [searchResults, setSearchResults] = useState<ProductAPI[]>([]);
  const { productId } = useParams<{ productId: string }>();
  const [isLoading, setIsLoading] = useState(true);
  const [product, setProduct] = useState<ProductAPI | null>(null);
  const [quantity, setQuantity] = useState(1);
  const [showFullDescription, setShowFullDescription] = useState(false);

  useEffect(() => {
    const searchTerm = new URLSearchParams(location.search).get('query');

    if (searchTerm) {
      setIsLoading(true);
      performSearch(searchTerm);
    }
  }, [location]);

  const performSearch = async (searchTerm: string) => {
    try {
      const response = await noHeader.get<ProductAPI[]>(`/product/search/${searchTerm}`);
      setSearchResults(response.data);
      setIsLoading(false);
    } catch (error) {
      console.error('Search failed', error);
      setIsLoading(false);
    }
  };

  const handleQuantityChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setQuantity(Number(event.target.value));
  };

  const renderQuantityOptions = () => {
    const options = [];

    for (let i = 1; i <= (product?.inventory || 1); i++) {
      options.push(<option key={i} value={i}>{i}</option>);
    }

    return options;
  };

  const getImageUrl = (filename: string) => {
    return `/images/${filename}`;
  };

  const handleAddToCart = () => {
    // const userEmail = "...";
  
    if (productId) {
      const parsedProductId = parseInt(productId);
      const body = {
        // userEmail,
        productId: parsedProductId,
        quantity
      };
  
      mainApiJson.post('/cart/add', body)
        .then(response => {
          alert('adicionado')
        })
        .catch(error => {
          alert('catch')
          console.error('Erro ao adicionar o produto ao carrinho:', error);
        });
    }
  };

  const toggleFullDescription = () => {
    setShowFullDescription(!showFullDescription);
  };

  const handleProductClick = (clickedProduct: ProductAPI) => {
    setProduct(clickedProduct);
  };

  return (
    <div>
      {isLoading ? (
        <Loading>
          <BeatLoader color="#000" loading={isLoading} size={15} />
        </Loading>
        ) : (
          searchResults.map((product) => (
            <div key={product.id} onClick={() => handleProductClick(product)}>
              <Div>
                <div className='img'>
                  {/* <img src={getImageUrl(product.image)} alt={product.name} /> */}
                  <img src={getImageUrl(product.image)} />
                </div>

                <div className='string'>
                  <h1>{product.name}</h1>

                  <Description showFullDescription={showFullDescription}>
                    {product.description}
                  </Description>

                  {product.description.length > 100 && (
                    <button className="hide" onClick={toggleFullDescription}>
                      {showFullDescription ? 'Mostrar menos' : 'Mostrar mais'}
                    </button>
                  )}

                  <p>
                    <strong>Preço:</strong> R$ {product.price}
                  </p>
                  {/* <p>Categoria: {product.categories}</p> */}
                  {/* <p>Quantidade em estoque: {product.inventory}</p> */}
                  <label>
                    <strong>Quantidade: </strong>
                    <select value={quantity} onChange={handleQuantityChange}>
                      {renderQuantityOptions()}
                    </select>
                  </label>

                  <div>
                    <button className="add" title="Desabilitado" onClick={handleAddToCart}>Adicionar ao carrinho</button>
                  </div>
                </div>
              </Div>
            </div>
          ))
      )}
    </div>
  );
};

export default SearchResultsPage;