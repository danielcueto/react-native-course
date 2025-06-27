import React, {createContext, ReactNode, useState, useContext} from 'react';
import {IMovie} from '../interfaces/Movie';

type WishlistContextType = {
  wishlist: IMovie[];
  addToWishlist: (movie: IMovie) => void;
  removeFromWishlist: (movieId: number) => void;
  isInWishlist: (movieId: number) => boolean;
};

export const WishlistContext = createContext<WishlistContextType>({
  wishlist: [],
  addToWishlist: () => {},
  removeFromWishlist: () => {},
  isInWishlist: () => false,
});

const WishlistProvider = ({children}: {children: ReactNode}) => {
  const [wishlist, setWishlist] = useState<IMovie[]>([]);

  const addToWishlist = (movie: IMovie) => {
    setWishlist(prev => {
      if (prev.some(item => item.id === movie.id)) {
        return prev;
      }
      return [...prev, movie];
    });
  };

  const removeFromWishlist = (movieId: number) => {
    setWishlist(prev => prev.filter(movie => movie.id !== movieId));
  };

  const isInWishlist = (movieId: number) => {
    return wishlist.some(movie => movie.id === movieId);
  };

  return (
    <WishlistContext.Provider
      value={{
        wishlist,
        addToWishlist,
        removeFromWishlist,
        isInWishlist,
      }}>
      {children}
    </WishlistContext.Provider>
  );
};

export default WishlistProvider;

export const useWishlist = () => useContext(WishlistContext);
