import { product as Product, gallery as Gallery } from '../models';
import productsMock from '../../config/productsMock';
import galleryMock from '../../config/galleryMock';

export const createDataFromMocks = async () => {
    let products = await Product.findAll();

    if(!products.length) {
        productsMock.forEach(async product => {
            let { id } = await Product.create(product);

            let galleryData = galleryMock.find(galleryData => galleryData.name === product.name);

            if(galleryData) {
                Gallery.create({
                    productId: id,
                    ...galleryData.gallery
                });
            }
        });
        // Product.bulkCreate(productsMock);
        // Gallery.bulkCreate(galleryMock);
    }
};