import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

const client = sanityClient({
    projectId: 'lz60xkv6',
    dataset:'production',
    apiVersion: '2022-09-01',
    useCdn: true,
    token: ''
})