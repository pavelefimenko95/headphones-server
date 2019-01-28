import { product as Product, gallery as Gallery } from '../models';
import productsMock from '../../config/productsMock';
import galleryMock from '../../config/galleryMock';

export const createDataFromMocks = () => {
    Product.bulkCreate(productsMock);
    Gallery.bulkCreate(galleryMock);
};