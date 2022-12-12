import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = sanityClient({
    projectId: '3dwee3zr',
    dataset: 'production',
    apiVersion: '2022-11-26',
    useCdn: true,
    token: process.env.sanity_token
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);